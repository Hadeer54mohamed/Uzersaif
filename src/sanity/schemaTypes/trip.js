export default {
    name: "trip",
    title: "Trip",
    type: "document",
    fields: [
      { name: "title", title: "Trip Title", type: "string" },
      { name: "location", title: "Location", type: "string" },
      { name: "price", title: "Price", type: "number" },
      { name: "rating", title: "Rating", type: "number", validation: (Rule) => Rule.min(0).max(5) },
      { name: "duration", title: "Duration", type: "string" },
      { name: "description", title: "Description", type: "text" },
      { name: "image", title: "Main Image", type: "image", options: { hotspot: true } },
      {
        name: "itinerary",
        title: "Itinerary",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "day", title: "Day", type: "string" },
              {
                name: "activities",
                title: "Activities",
                type: "array",
                of: [
                  {
                    type: "object",
                    fields: [
                      { name: "icon", title: "Icon", type: "string" },
                      { name: "text", title: "Activity Text", type: "string" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { name: "included", title: "Included", type: "array", of: [{ type: "string" }] },
      { name: "notes", title: "Notes", type: "array", of: [{ type: "string" }] },
      { name: "paymentMethods", title: "Payment Methods", type: "array", of: [{ type: "string" }] },
  
      // الجديد:
      {
        name: "gathering",
        title: "Gathering & Move Details",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "icon", title: "Icon", type: "string" },
              { name: "text", title: "Text", type: "string" },
            ],
          },
        ],
      },
      {
        name: "prices",
        title: "Individual Prices",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "label", title: "Label", type: "string" },
              { name: "amount", title: "Amount", type: "string" },
            ],
          },
        ],
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      }
      
    ],
  };
  