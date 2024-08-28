// blueprints.js
export const blueprints = [
  {
    name: "Products",
    slug: "products",
    fields: [
      { key: "productId", type: "string", label: "Product ID" },
      { key: "productName", type: "string", label: "Product Name" },
      { key: "price", type: "number", label: "Price" },
      { key: "stock", type: "number", label: "Stock" },
    ],
  },
  {
    name: "Channels",
    slug: "channels",
    fields: [
      { key: "channelId", type: "string", label: "Channel ID" },
      { key: "channelName", type: "string", label: "Channel Name" },
      { key: "status", type: "string", label: "Status" },
    ],
  },
  {
    name: "Clients",
    slug: "clients",
    fields: [
      { key: "clientId", type: "string", label: "Client ID" },
      { key: "clientName", type: "string", label: "Client Name" },
      { key: "email", type: "string", label: "Email" },
      { key: "phone", type: "string", label: "Phone" },
    ],
  },
  {
    name: "ClientBranches",
    slug: "branches",
    fields: [
      { key: "branchId", type: "string", label: "Branch ID" },
      { key: "branchName", type: "string", label: "Branch Name" },
      { key: "location", type: "string", label: "Location" },
    ],
  },
  {
    name: "ExchangeRates",
    slug: "exchangeRates",
    fields: [
      { key: "currency", type: "string", label: "Currency" },
      { key: "rate", type: "number", label: "Rate" },
    ],
  },
];
