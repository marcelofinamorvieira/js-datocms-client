/* eslint-disable */
module.exports = {
  roles: {
    create: true,
    update: true,
    all: true,
    find: true,
    destroy: true,
  },
  users: {
    update: true,
    all: true,
    find: true,
    destroy: true,
  },
  ssoUsers: {
    all: true,
    find: true,
    copyUsers: true,
    destroy: true,
  },
  auditLogEvent: {
    query: true,
  },
  menuItems: {
    create: true,
    update: true,
    all: true,
    find: true,
    destroy: true,
  },
  itemTypes: {
    create: true,
    update: true,
    all: true,
    find: true,
    duplicate: true,
    destroy: true,
  },
  fields: {
    create: true,
    update: true,
    all: true,
    referencing: true,
    related: true,
    find: true,
    destroy: true,
    duplicate: true,
  },
  fieldsets: {
    create: true,
    update: true,
    all: true,
    find: true,
    destroy: true,
  },
  session: {
    create: true,
  },
  accessTokens: {
    create: true,
    update: true,
    all: true,
    find: true,
    regenerateToken: true,
    destroy: true,
  },
  plugins: {
    create: true,
    update: true,
    all: true,
    find: true,
    destroy: true,
    fields: true,
  },
  jobResult: {
    find: true,
  },
  subscriptionLimits: {
    all: true,
    find: true,
  },
  subscriptionFeatures: {
    all: true,
  },
  buildEvents: {
    all: true,
    find: true,
  },
  items: {
    all: true,
    validateExisting: true,
    validateNew: true,
    create: true,
    duplicate: true,
    update: true,
    references: true,
    find: true,
    destroy: true,
    batchDestroy: true,
    batchPublish: true,
    batchUnpublish: true,
    publish: true,
    unpublish: true,
    bulkPublish: true,
    bulkUnpublish: true,
    bulkDestroy: true,
    bulkMoveToStage: true,
  },
  itemVersions: {
    restore: true,
    all: true,
    find: true,
  },
  uploads: {
    create: true,
    all: true,
    find: true,
    destroy: true,
    update: true,
    batchAddTags: true,
    batchDestroy: true,
    references: true,
    bulkTag: true,
    bulkDestroy: true,
  },
  uploadRequest: {
    create: true,
  },
  scheduledPublication: {
    create: true,
    destroy: true,
  },
  scheduledUnpublishing: {
    create: true,
    destroy: true,
  },
  searchResults: {
    all: true,
  },
  environments: {
    fork: true,
    promote: true,
    all: true,
    find: true,
    destroy: true,
  },
  maintenanceMode: {
    find: true,
    activate: true,
    deactivate: true,
  },
  webhooks: {
    create: true,
    update: true,
    all: true,
    find: true,
    destroy: true,
  },
  webhookCalls: {
    all: true,
    resendWebhook: true,
  },
  buildTriggers: {
    all: true,
    find: true,
    create: true,
    update: true,
    trigger: true,
    reindex: true,
    destroy: true,
  },
  itemTypeFilters: {
    create: true,
    update: true,
    all: true,
    find: true,
    destroy: true,
  },
  uploadFilters: {
    create: true,
    update: true,
    all: true,
    find: true,
    destroy: true,
  },
  siteInvitations: {
    create: true,
    update: true,
    all: true,
    find: true,
    destroy: true,
  },
  editingSessions: {
    all: true,
    update: true,
    destroy: true,
  },
  ssoGroups: {
    all: true,
    copyRoles: true,
    update: true,
    destroy: true,
  },
  ssoSettings: {
    find: true,
    generateToken: true,
    update: true,
  },
  whiteLabelSettings: {
    find: true,
    update: true,
  },
  publicInfo: {
    find: true,
  },
  dailyUsages: {
    all: true,
  },
  usageCounter: {
    find: true,
  },
  uploadTags: {
    all: true,
    create: true,
  },
  uploadSmartTags: {
    all: true,
  },
  site: {
    find: true,
    update: true,
  },
  workflows: {
    create: true,
    update: true,
    all: true,
    find: true,
    destroy: true,
  },
};
