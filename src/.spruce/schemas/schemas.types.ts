/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import '@sprucelabs/spruce-event-utils'
import '@sprucelabs/mercury-types'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidInstallEmitTarget {
			
				
				'organizationId': string
				
				'skillId': string
		}

		interface DidInstallEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didInstallEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DidInstallEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidInstallEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTarget
		}

		interface DidInstallEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didInstallEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTargetSchema,}
			            },
			    }
		}

		type DidInstallEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidInstallResponsePayload {
			
		}

		interface DidInstallResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'didInstallResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type DidInstallResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidInstallResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidJoinOrganizationEmitTarget {
			
				
				'organizationId': string
				
				'locationId'?: string| undefined | null
		}

		interface DidJoinOrganizationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didJoinOrganizationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type DidJoinOrganizationEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidJoinOrganizationEmitPayload {
			
				
				'personId': string
				
				'roleId': string
				
				'isFirstRole': boolean
		}

		interface DidJoinOrganizationEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didJoinOrganizationEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'isFirstRole': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DidJoinOrganizationEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidJoinOrganizationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitPayload
		}

		interface DidJoinOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didJoinOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitPayloadSchema,}
			            },
			    }
		}

		type DidJoinOrganizationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface MessageTemplateAddons {
			
				
				'nextINeedYouTo'?: string[]| undefined | null
				
				'youShouldKnowThat'?: string[]| undefined | null
				
				'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[]| undefined | null
		}

		interface MessageTemplateAddonsSchema extends SpruceSchema.Schema {
			id: 'messageTemplateAddons',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'nextINeedYouTo': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'youShouldKnowThat': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'links': {
			                type: 'schema',
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LinkSchema,}
			            },
			    }
		}

		type MessageTemplateAddonsEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.MessageTemplateAddonsSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidJoinOrganizationResponsePayload {
			
				
				'messaging'?: SpruceSchemas.Mercury.v2020_12_25.MessageTemplateAddons| undefined | null
		}

		interface DidJoinOrganizationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'didJoinOrganizationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'messaging': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.MessageTemplateAddonsSchema,}
			            },
			    }
		}

		type DidJoinOrganizationResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidMessageEmitPayload {
			
				
				'message': SpruceSchemas.Spruce.v2020_07_22.Message
				
				'conversationState'?: string| undefined | null
				
				'topic'?: string| undefined | null
		}

		interface DidMessageEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didMessageEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'message': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageSchema,}
			            },
			            /** . */
			            'conversationState': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'topic': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		type DidMessageEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidMessageEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Spruce.v2020_07_22.MessageTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitPayload
		}

		interface DidMessageEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didMessageEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitPayloadSchema,}
			            },
			    }
		}

		type DidMessageEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConversationTopic {
			
				
				'key': string
				
				'confidence': number
				
				'label': string
		}

		interface ConversationTopicSchema extends SpruceSchema.Schema {
			id: 'conversationTopic',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'key': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'confidence': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'label': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ConversationTopicEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConversationTopicSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidMessageResponsePayload {
			
				
				'transitionConversationTo'?: ("greeting" | "discovery" | "topic" | "closing")| undefined | null
				
				'repairs'?: string[]| undefined | null
				
				'topicChangers'?: string[]| undefined | null
				
				'utterance'?: string| undefined | null
				
				'suggestedTopics'?: SpruceSchemas.Mercury.v2020_12_25.ConversationTopic[]| undefined | null
		}

		interface DidMessageResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'didMessageResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'transitionConversationTo': {
			                type: 'select',
			                options: {choices: [{"label":"Greeting","value":"greeting"},{"label":"Discovery","value":"discovery"},{"label":"Topic","value":"topic"},{"label":"Closing","value":"closing"}],}
			            },
			            /** . */
			            'repairs': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'topicChangers': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'utterance': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'suggestedTopics': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ConversationTopicSchema,}
			            },
			    }
		}

		type DidMessageResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidMessageResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidSignupEmitPayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface DidSignupEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didSignupEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		type DidSignupEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidSignupEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidSignupEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidSignupEmitPayload
		}

		interface DidSignupEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didSignupEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidSignupEmitPayloadSchema,}
			            },
			    }
		}

		type DidSignupEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidSignupEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConfirmPinRespondPayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
				
				'token': string
		}

		interface ConfirmPinRespondPayloadSchema extends SpruceSchema.Schema {
			id: 'confirmPinRespondPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			            /** . */
			            'token': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ConfirmPinRespondPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConfirmPinRespondPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdateFeedEmitPayload {
			
				
				'item': SpruceSchemas.Spruce.v2020_07_22.FeedItem
		}

		interface DidUpdateFeedEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didUpdateFeedEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'item': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.FeedItemSchema,}
			            },
			    }
		}

		type DidUpdateFeedEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdateFeedEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitPayload
		}

		interface DidUpdateFeedEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didUpdateFeedEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitPayloadSchema,}
			            },
			    }
		}

		type DidUpdateFeedEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdatePersonEmitPayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface DidUpdatePersonEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didUpdatePersonEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		type DidUpdatePersonEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidUpdatePersonEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdatePersonEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidUpdatePersonEmitPayload
		}

		interface DidUpdatePersonEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didUpdatePersonEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidUpdatePersonEmitPayloadSchema,}
			            },
			    }
		}

		type DidUpdatePersonEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidUpdatePersonEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AddRoleEmitTarget {
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
		}

		interface AddRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'addRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type AddRoleEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AddRoleEmitPayload {
			
				
				'personId': string
				
				'roleId': string
		}

		interface AddRoleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'addRoleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type AddRoleEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AddRoleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitPayload
		}

		interface AddRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'addRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitPayloadSchema,}
			            },
			    }
		}

		type AddRoleEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AddRoleResponsePayload {
			
		}

		interface AddRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'addRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type AddRoleResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AddRoleResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AuthenticateEmitPayload {
			
				
				'token'?: string| undefined | null
				
				'skillId'?: string| undefined | null
				
				'apiKey'?: string| undefined | null
		}

		interface AuthenticateEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'authenticateEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'token': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'apiKey': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		type AuthenticateEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AuthenticateEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitPayload| undefined | null
		}

		interface AuthenticateEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'authenticateEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitPayloadSchema,}
			            },
			    }
		}

		type AuthenticateEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AuthSchema {
			
				
				'person'?: SpruceSchemas.Spruce.v2020_07_22.Person| undefined | null
				
				'skill'?: SpruceSchemas.Spruce.v2020_07_22.Skill| undefined | null
		}

		interface AuthSchemaSchema extends SpruceSchema.Schema {
			id: 'authSchema',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			            /** . */
			            'skill': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.SkillSchema,}
			            },
			    }
		}

		type AuthSchemaEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AuthSchemaSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AuthenticateResponsePayload {
			
				
				'type': ("authenticated" | "anonymous")
				
				'auth': SpruceSchemas.Mercury.v2020_12_25.AuthSchema
		}

		interface AuthenticateResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'authenticateResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'type': {
			                type: 'select',
			                isRequired: true,
			                options: {choices: [{"value":"authenticated","label":"Authenticated"},{"value":"anonymous","label":"Anonymous"}],}
			            },
			            /** . */
			            'auth': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.AuthSchemaSchema,}
			            },
			    }
		}

		type AuthenticateResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AuthenticateResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CanListenEmitPayload {
			
				
				'authorizerStatuses'?: ("clockedIn" | "clockedOut" | "onPrem" | "offPrem")| undefined | null
				
				'fullyQualifiedEventName': string
		}

		interface CanListenEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'canListenEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'authorizerStatuses': {
			                type: 'select',
			                options: {choices: [{"label":"Clocked in","value":"clockedIn"},{"label":"Clocked out","value":"clockedOut"},{"label":"On premises","value":"onPrem"},{"label":"Off premises","value":"offPrem"}],}
			            },
			            /** . */
			            'fullyQualifiedEventName': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type CanListenEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CanListenEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CanListenEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CanListenEmitPayload
		}

		interface CanListenEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'canListenEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CanListenEmitPayloadSchema,}
			            },
			    }
		}

		type CanListenEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CanListenEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CanListenResponsePayload {
			
				
				'can'?: boolean| undefined | null
		}

		interface CanListenResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'canListenResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'can': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type CanListenResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CanListenResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConfirmPinEmitPayload {
			
				
				'challenge': string
				
				'pin': string
		}

		interface ConfirmPinEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'confirmPinEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'challenge': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'pin': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ConfirmPinEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConfirmPinEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitPayload
		}

		interface ConfirmPinEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'confirmPinEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitPayloadSchema,}
			            },
			    }
		}

		type ConfirmPinEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateLocationEmitTarget {
			
				
				'organizationId': string
		}

		interface CreateLocationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'createLocationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type CreateLocationEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateLocationEmitPayload {
			
				/** Name. */
				'name': string
				/** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
				'num'?: string| undefined | null
				/** Public. Is this location viewable by guests? */
				'isPublic'?: boolean| undefined | null
				/** Main Phone. */
				'phone'?: string| undefined | null
				/** Timezone. */
				'timezone'?: ("UTC" | "Pacific/Midway" | "Pacific/Honolulu" | "America/Anchorage" | "America/Los_Angeles" | "America/Tijuana" | "America/Phoenix" | "America/Chihuahua" | "America/Denver" | "America/Managua" | "America/Chicago" | "America/Mexico_City" | "Canada/Saskatchewan" | "America/Bogota" | "America/New_York" | "America/Indiana/Indianapolis" | "Canada/Atlantic" | "America/Caracas" | "America/Manaus" | "America/Santiago" | "Canada/Newfoundland" | "America/Sao_Paulo" | "America/Argentina/Buenos_Aires" | "America/Godthab" | "America/Montevideo" | "America/Noronha" | "Atlantic/Cape_Verde" | "Atlantic/Azores" | "Africa/Casablanca" | "Etc/Greenwich" | "Europe/Amsterdam" | "Europe/Belgrade" | "Europe/Brussels" | "Europe/Sarajevo" | "Africa/Lagos" | "Asia/Amman" | "Europe/Athens" | "Asia/Beirut" | "Africa/Cairo" | "Africa/Harare" | "Europe/Helsinki" | "Asia/Jerusalem" | "Europe/Minsk" | "Africa/Windhoek" | "Asia/Kuwait" | "Europe/Moscow" | "Africa/Nairobi" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Muscat" | "Asia/Baku" | "Asia/Yerevan" | "Asia/Kabul" | "Asia/Yekaterinburg" | "Asia/Karachi" | "Asia/Calcutta" | "Asia/Calcutta" | "Asia/Katmandu" | "Asia/Almaty" | "Asia/Dhaka" | "Asia/Rangoon" | "Asia/Bangkok" | "Asia/Krasnoyarsk" | "Asia/Hong_Kong" | "Asia/Kuala_Lumpur" | "Asia/Irkutsk" | "Australia/Perth" | "Asia/Taipei" | "Asia/Tokyo" | "Asia/Seoul" | "Asia/Yakutsk" | "Australia/Adelaide" | "Australia/Darwin" | "Australia/Brisbane" | "Australia/Canberra" | "Australia/Hobart" | "Pacific/Guam" | "Asia/Vladivostok" | "Asia/Magadan" | "Pacific/Auckland" | "Pacific/Fiji" | "Pacific/Tongatapu")| undefined | null
				/** Address. */
				'address': SpruceSchema.AddressFieldValue
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'slug'?: string| undefined | null
		}

		interface CreateLocationEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createLocationEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			            'num': {
			                label: 'Store number',
			                type: 'text',
			                hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
			                options: undefined
			            },
			            /** Public. Is this location viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Is this location viewable by guests?',
			                defaultValue: false,
			                options: undefined
			            },
			            /** Main Phone. */
			            'phone': {
			                label: 'Main Phone',
			                type: 'phone',
			                options: undefined
			            },
			            /** Timezone. */
			            'timezone': {
			                label: 'Timezone',
			                type: 'select',
			                options: {choices: [{"label":"International Date Line West","value":"UTC"},{"label":"Midway Island, Samoa","value":"Pacific/Midway"},{"label":"Hawaii","value":"Pacific/Honolulu"},{"label":"Alaska","value":"America/Anchorage"},{"label":"Pacific Time (US & Canada)","value":"America/Los_Angeles"},{"label":"Tijuana, Baja California","value":"America/Tijuana"},{"label":"Arizona / Phoenix","value":"America/Phoenix"},{"label":"Chihuahua, La Paz, Mazatlan","value":"America/Chihuahua"},{"label":"Mountain Time / Denver (US & Canada)","value":"America/Denver"},{"label":"Central America","value":"America/Managua"},{"label":"Central Time / Chicago (US & Canada)","value":"America/Chicago"},{"label":"Guadalajara, Mexico City, Monterrey","value":"America/Mexico_City"},{"label":"Saskatchewan","value":"Canada/Saskatchewan"},{"label":"Bogota, Lima, Quito, Rio Branco","value":"America/Bogota"},{"label":"Eastern Time / New York (US & Canada)","value":"America/New_York"},{"label":"Indiana / Indianapolis (East)","value":"America/Indiana/Indianapolis"},{"label":"Atlantic Time (Canada)","value":"Canada/Atlantic"},{"label":"Caracas, La Paz","value":"America/Caracas"},{"label":"Manaus","value":"America/Manaus"},{"label":"Santiago","value":"America/Santiago"},{"label":"Newfoundland","value":"Canada/Newfoundland"},{"label":"Brasilia","value":"America/Sao_Paulo"},{"label":"Buenos Aires, Georgetown","value":"America/Argentina/Buenos_Aires"},{"label":"Greenland","value":"America/Godthab"},{"label":"Montevideo","value":"America/Montevideo"},{"label":"Mid-Atlantic","value":"America/Noronha"},{"label":"Cape Verde Is.","value":"Atlantic/Cape_Verde"},{"label":"Azores","value":"Atlantic/Azores"},{"label":"Casablanca, Monrovia, Reykjavik","value":"Africa/Casablanca"},{"label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London","value":"Etc/Greenwich"},{"label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","value":"Europe/Amsterdam"},{"label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague","value":"Europe/Belgrade"},{"label":"Brussels, Copenhagen, Madrid, Paris","value":"Europe/Brussels"},{"label":"Sarajevo, Skopje, Warsaw, Zagreb","value":"Europe/Sarajevo"},{"label":"West Central Africa","value":"Africa/Lagos"},{"label":"Amman","value":"Asia/Amman"},{"label":"Athens, Bucharest, Istanbul","value":"Europe/Athens"},{"label":"Beirut","value":"Asia/Beirut"},{"label":"Cairo","value":"Africa/Cairo"},{"label":"Harare, Pretoria","value":"Africa/Harare"},{"label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius","value":"Europe/Helsinki"},{"label":"Jerusalem","value":"Asia/Jerusalem"},{"label":"Minsk","value":"Europe/Minsk"},{"label":"Windhoek","value":"Africa/Windhoek"},{"label":"Kuwait, Riyadh, Baghdad","value":"Asia/Kuwait"},{"label":"Moscow, St. Petersburg, Volgograd","value":"Europe/Moscow"},{"label":"Nairobi","value":"Africa/Nairobi"},{"label":"Tbilisi","value":"Asia/Tbilisi"},{"label":"Tehran","value":"Asia/Tehran"},{"label":"Abu Dhabi, Muscat","value":"Asia/Muscat"},{"label":"Baku","value":"Asia/Baku"},{"label":"Yerevan","value":"Asia/Yerevan"},{"label":"Kabul","value":"Asia/Kabul"},{"label":"Yekaterinburg","value":"Asia/Yekaterinburg"},{"label":"Islamabad, Karachi, Tashkent","value":"Asia/Karachi"},{"label":"Chennai, Kolkata, Mumbai, New Delhi","value":"Asia/Calcutta"},{"label":"Sri Jayawardenapura","value":"Asia/Calcutta"},{"label":"Kathmandu","value":"Asia/Katmandu"},{"label":"Almaty, Novosibirsk","value":"Asia/Almaty"},{"label":"Astana, Dhaka","value":"Asia/Dhaka"},{"label":"Yangon (Rangoon)","value":"Asia/Rangoon"},{"label":"Bangkok, Hanoi, Jakarta","value":"Asia/Bangkok"},{"label":"Krasnoyarsk","value":"Asia/Krasnoyarsk"},{"label":"Beijing, Chongqing, Hong Kong, Urumqi","value":"Asia/Hong_Kong"},{"label":"Kuala Lumpur, Singapore","value":"Asia/Kuala_Lumpur"},{"label":"Irkutsk, Ulaan Bataar","value":"Asia/Irkutsk"},{"label":"Perth","value":"Australia/Perth"},{"label":"Taipei","value":"Asia/Taipei"},{"label":"Osaka, Sapporo, Tokyo","value":"Asia/Tokyo"},{"label":"Seoul","value":"Asia/Seoul"},{"label":"Yakutsk","value":"Asia/Yakutsk"},{"label":"Adelaide","value":"Australia/Adelaide"},{"label":"Darwin","value":"Australia/Darwin"},{"label":"Brisbane","value":"Australia/Brisbane"},{"label":"Canberra, Melbourne, Sydney","value":"Australia/Canberra"},{"label":"Hobart","value":"Australia/Hobart"},{"label":"Guam, Port Moresby","value":"Pacific/Guam"},{"label":"Vladivostok","value":"Asia/Vladivostok"},{"label":"Magadan, Solomon Is., New Caledonia","value":"Asia/Magadan"},{"label":"Auckland, Wellington","value":"Pacific/Auckland"},{"label":"Fiji, Kamchatka, Marshall Is.","value":"Pacific/Fiji"},{"label":"Nuku'alofa","value":"Pacific/Tongatapu"}],}
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'slug': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		type CreateLocationEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateLocationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitPayload
		}

		interface CreateLocationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createLocationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitPayloadSchema,}
			            },
			    }
		}

		type CreateLocationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateLocationResponsePayload {
			
				
				'location': SpruceSchemas.Spruce.v2020_07_22.Location
		}

		interface CreateLocationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createLocationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'location': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		type CreateLocationResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateLocationResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateOrgEmitPayload {
			
				/** Name. */
				'name': string
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue| undefined | null
				
				'slug'?: string| undefined | null
				/** Public. Is this organization viewable by guests? */
				'isPublic'?: boolean| undefined | null
		}

		interface CreateOrgEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createOrgEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                options: undefined
			            },
			            /** . */
			            'slug': {
			                type: 'text',
			                options: undefined
			            },
			            /** Public. Is this organization viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Is this organization viewable by guests?',
			                defaultValue: false,
			                options: undefined
			            },
			    }
		}

		type CreateOrgEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateOrgEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateOrganizationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CreateOrgEmitPayload
		}

		interface CreateOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateOrgEmitPayloadSchema,}
			            },
			    }
		}

		type CreateOrganizationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateOrganizationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateOrgResponsePayload {
			
				
				'organization': SpruceSchemas.Spruce.v2020_07_22.Organization
		}

		interface CreateOrgResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createOrgResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organization': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema,}
			            },
			    }
		}

		type CreateOrgResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateOrgResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreatePersonEmitPayload {
			
				/** First name. */
				'firstName'?: string| undefined | null
				/** Last name. */
				'lastName'?: string| undefined | null
				/** Avatar src. */
				'avatar'?: SpruceSchema.ImageFieldValue| undefined | null
				
				'dateCreated'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'dateScrambled'?: SpruceSchema.DateTimeFieldValue| undefined | null
				/** Phone. A number that can be texted */
				'phone': string
		}

		interface CreatePersonEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createPersonEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** First name. */
			            'firstName': {
			                label: 'First name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Last name. */
			            'lastName': {
			                label: 'Last name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Avatar src. */
			            'avatar': {
			                label: 'Avatar src',
			                type: 'image',
			                options: {requiredSizes: ["*"],}
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'dateScrambled': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** Phone. A number that can be texted */
			            'phone': {
			                label: 'Phone',
			                type: 'phone',
			                isPrivate: true,
			                isRequired: true,
			                hint: 'A number that can be texted',
			                options: undefined
			            },
			    }
		}

		type CreatePersonEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreatePersonEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreatePersonEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CreatePersonEmitPayload
		}

		interface CreatePersonEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createPersonEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreatePersonEmitPayloadSchema,}
			            },
			    }
		}

		type CreatePersonEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreatePersonEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreatePersonResponsePayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface CreatePersonResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createPersonResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		type CreatePersonResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreatePersonResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateRoleEmitTarget {
			
				
				'organizationId': string
		}

		interface CreateRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'createRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type CreateRoleEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateRoleEmitPayload {
			
				/** Name. */
				'name': string
				/** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
				'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "anonymous" | "loggedIn" | "guest")| undefined | null
				/** Description. */
				'description'?: string| undefined | null
				
				'dateDeleted'?: number| undefined | null
				/** Public. Should I let people that are not part of this organization this role? */
				'isPublic'?: boolean| undefined | null
				
				'isMeta'?: boolean| undefined | null
		}

		interface CreateRoleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
			            'base': {
			                label: 'Base',
			                type: 'select',
			                hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
			                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Anonymous","value":"anonymous"},{"label":"Logged in","value":"loggedIn"},{"label":"Guest","value":"guest"}],}
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			            /** Public. Should I let people that are not part of this organization this role? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Should I let people that are not part of this organization this role?',
			                options: undefined
			            },
			            /** . */
			            'isMeta': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type CreateRoleEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateRoleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitPayload
		}

		interface CreateRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitPayloadSchema,}
			            },
			    }
		}

		type CreateRoleEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateRoleResponsePayload {
			
				
				'role': SpruceSchemas.Spruce.v2020_07_22.Role
		}

		interface CreateRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'role': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		type CreateRoleResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateRoleResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteLocationEmitTarget {
			
				
				'locationId': string
		}

		interface DeleteLocationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'deleteLocationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DeleteLocationEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteLocationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTarget
		}

		interface DeleteLocationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteLocationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTargetSchema,}
			            },
			    }
		}

		type DeleteLocationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteLocationResponsePayload {
			
				
				'location': SpruceSchemas.Spruce.v2020_07_22.Location
		}

		interface DeleteLocationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteLocationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'location': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		type DeleteLocationResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteLocationResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteOrganizationEmitTarget {
			
				
				'organizationId': string
		}

		interface DeleteOrganizationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'deleteOrganizationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DeleteOrganizationEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteOrganizationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationEmitTarget
		}

		interface DeleteOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationEmitTargetSchema,}
			            },
			    }
		}

		type DeleteOrganizationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteOrgResponsePayload {
			
				
				'organization': SpruceSchemas.Spruce.v2020_07_22.Organization
		}

		interface DeleteOrgResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteOrgResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organization': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema,}
			            },
			    }
		}

		type DeleteOrgResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteOrgResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteRoleEmitTarget {
			
				
				'roleId': string
				
				'organizationId': string
		}

		interface DeleteRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'deleteRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DeleteRoleEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteRoleEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteRoleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DeleteRoleEmitTarget
		}

		interface DeleteRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DeleteRoleEmitTargetSchema,}
			            },
			    }
		}

		type DeleteRoleEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteRoleEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteRoleResponsePayload {
			
				
				'role': SpruceSchemas.Spruce.v2020_07_22.Role
		}

		interface DeleteRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'role': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		type DeleteRoleResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteRoleResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractEmitTarget {
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
		}

		interface DoesHonorPermissionContractEmitTargetSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type DoesHonorPermissionContractEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractEmitPayload {
			
				
				'id': string
				
				'skillId'?: string| undefined | null
				
				'fqen'?: string| undefined | null
		}

		interface DoesHonorPermissionContractEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'fqen': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		type DoesHonorPermissionContractEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitPayload
		}

		interface DoesHonorPermissionContractEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitPayloadSchema,}
			            },
			    }
		}

		type DoesHonorPermissionContractEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractRespondPayload {
			
				
				'doesHonor': boolean
		}

		interface DoesHonorPermissionContractRespondPayloadSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractRespondPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'doesHonor': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DoesHonorPermissionContractRespondPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractRespondPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetConversationTopicsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
		}

		interface GetConversationTopicsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getConversationTopicsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		type GetConversationTopicsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetConversationTopicsTopic {
			
				
				'key': string
		}

		interface GetConversationTopicsTopicSchema extends SpruceSchema.Schema {
			id: 'getConversationTopicsTopic',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'key': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetConversationTopicsTopicEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsTopicSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetConversationTopicsResponsePayload {
			
				
				'topics': SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsTopic[]
		}

		interface GetConversationTopicsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getConversationTopicsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'topics': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsTopicSchema,}
			            },
			    }
		}

		type GetConversationTopicsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetEventContractsTarget {
			
				
				'namespaces'?: string[]| undefined | null
		}

		interface GetEventContractsTargetSchema extends SpruceSchema.Schema {
			id: 'getEventContractsTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'namespaces': {
			                type: 'id',
			                isArray: true,
			                options: undefined
			            },
			    }
		}

		type GetEventContractsTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetEventContractsTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetEventContractsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetEventContractsTarget| undefined | null
		}

		interface GetEventContractsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getEventContractsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetEventContractsTargetSchema,}
			            },
			    }
		}

		type GetEventContractsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetEventContractsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetEventContractsResponsePayload {
			
				
				'contracts': SpruceSchemas.Mercury.v2020_12_25.EventContract[]
		}

		interface GetEventContractsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getEventContractsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'contracts': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.EventContractSchema,}
			            },
			    }
		}

		type GetEventContractsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetEventContractsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetFeedEmitTarget {
			
				
				'locationId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
		}

		interface GetFeedEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getFeedEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type GetFeedEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetFeedEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitPayload
		}

		interface GetFeedEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getFeedEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitPayloadSchema,}
			            },
			    }
		}

		type GetFeedEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetFeedPagingRequest {
			
				
				'next'?: string| undefined | null
				
				'previous'?: string| undefined | null
		}

		interface GetFeedPagingRequestSchema extends SpruceSchema.Schema {
			id: 'getFeedPagingRequest',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'next': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'previous': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type GetFeedPagingRequestEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetFeedPagingRequestSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface FeedPredicate {
			
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget| undefined | null
				
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
		}

		interface FeedPredicateSchema extends SpruceSchema.Schema {
			id: 'feedPredicate',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTargetSchema,}
			            },
			            /** . */
			            'source': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		type FeedPredicateEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.FeedPredicateSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetFeedEmitPayload {
			
				
				'paging'?: SpruceSchemas.Mercury.v2020_12_25.GetFeedPagingRequest| undefined | null
				
				'predicates': SpruceSchemas.Mercury.v2020_12_25.FeedPredicate[]
		}

		interface GetFeedEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'getFeedEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'paging': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetFeedPagingRequestSchema,}
			            },
			            /** . */
			            'predicates': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.FeedPredicateSchema,}
			            },
			    }
		}

		type GetFeedEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetFeedResponsePayload {
			
				
				'feed': SpruceSchemas.Spruce.v2020_07_22.Feed
				
				'paging': SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingResponse
		}

		interface GetFeedResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getFeedResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'feed': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.FeedSchema,}
			            },
			            /** . */
			            'paging': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingResponseSchema,}
			            },
			    }
		}

		type GetFeedResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetFeedResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetLocationTarget {
			
				
				'locationId': string
		}

		interface GetLocationTargetSchema extends SpruceSchema.Schema {
			id: 'getLocationTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetLocationTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetLocationTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetLocationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetLocationTarget
		}

		interface GetLocationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getLocationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetLocationTargetSchema,}
			            },
			    }
		}

		type GetLocationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetLocationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetLocationResponsePayload {
			
				
				'location': SpruceSchemas.Spruce.v2020_07_22.Location
		}

		interface GetLocationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getLocationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'location': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		type GetLocationResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetLocationResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetOrganizationEmitTarget {
			
				
				'organizationId': string
		}

		interface GetOrganizationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getOrganizationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetOrganizationEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetOrganizationEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetOrganizationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetOrganizationEmitTarget
		}

		interface GetOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetOrganizationEmitTargetSchema,}
			            },
			    }
		}

		type GetOrganizationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetOrganizationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetOrgResponsePayload {
			
				
				'organization': SpruceSchemas.Spruce.v2020_07_22.Organization
		}

		interface GetOrgResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getOrgResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organization': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema,}
			            },
			    }
		}

		type GetOrgResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetOrgResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPermissionContractEmitTarget {
			
				
				'organizationId': string
				
				'permissionContractId': string
				
				'roleId'?: string| undefined | null
		}

		interface GetPermissionContractEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getPermissionContractEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'permissionContractId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type GetPermissionContractEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPermissionContractEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractEmitTarget
		}

		interface GetPermissionContractEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getPermissionContractEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractEmitTargetSchema,}
			            },
			    }
		}

		type GetPermissionContractEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPermissionContractResponsePayload {
			
				
				'permissionContract': SpruceSchemas.Mercury.v2020_12_25.PermissionContract
				
				'skillId'?: string| undefined | null
		}

		interface GetPermissionContractResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getPermissionContractResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'permissionContract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type GetPermissionContractResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPersonEmitTarget {
			
				
				'personId'?: string| undefined | null
				
				'phone'?: string| undefined | null
		}

		interface GetPersonEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getPersonEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'phone': {
			                type: 'phone',
			                options: undefined
			            },
			    }
		}

		type GetPersonEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPersonEmitPayload {
			
				
				'shouldIncludePrivateFields'?: boolean| undefined | null
		}

		interface GetPersonEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'getPersonEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldIncludePrivateFields': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type GetPersonEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPersonEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitPayload| undefined | null
		}

		interface GetPersonEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getPersonEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitPayloadSchema,}
			            },
			    }
		}

		type GetPersonEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPersonResponsePayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface GetPersonResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getPersonResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		type GetPersonResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPersonResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetResolvedPermissionsContractEmitTarget {
			
				
				'locationId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
		}

		interface GetResolvedPermissionsContractEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getResolvedPermissionsContractEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type GetResolvedPermissionsContractEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetResolvedPermissionsContractEmitPayload {
			
				
				'contractId': string
		}

		interface GetResolvedPermissionsContractEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'getResolvedPermissionsContractEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'contractId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetResolvedPermissionsContractEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetResolvedPermissionsContractEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitPayload
		}

		interface GetResolvedPermissionsContractEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getResolvedPermissionsContractEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitPayloadSchema,}
			            },
			    }
		}

		type GetResolvedPermissionsContractEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ResolvedContractPermission {
			
				
				'id': string
				
				'can': boolean
		}

		interface ResolvedContractPermissionSchema extends SpruceSchema.Schema {
			id: 'resolvedContractPermission',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'can': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ResolvedContractPermissionEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ResolvedContractPermissionSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ResolvedContract {
			
				
				'contractId': string
				
				'permissions': SpruceSchemas.Mercury.v2020_12_25.ResolvedContractPermission[]
		}

		interface ResolvedContractSchema extends SpruceSchema.Schema {
			id: 'resolvedContract',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'contractId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'permissions': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ResolvedContractPermissionSchema,}
			            },
			    }
		}

		type ResolvedContractEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ResolvedContractSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetResolvedPermissionsContractRespondPayload {
			
				
				'resolvedContract': SpruceSchemas.Mercury.v2020_12_25.ResolvedContract
		}

		interface GetResolvedPermissionsContractRespondPayloadSchema extends SpruceSchema.Schema {
			id: 'getResolvedPermissionsContractRespondPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'resolvedContract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ResolvedContractSchema,}
			            },
			    }
		}

		type GetResolvedPermissionsContractRespondPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractRespondPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetRoleEmitTarget {
			
				
				'roleId': string
		}

		interface GetRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetRoleEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetRoleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTarget
		}

		interface GetRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTargetSchema,}
			            },
			    }
		}

		type GetRoleEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetRoleResponsePayload {
			
				
				'role': SpruceSchemas.Spruce.v2020_07_22.Role
		}

		interface GetRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'role': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		type GetRoleResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetRoleResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetSkillEmitTarget {
			
				
				'skillId': string
		}

		interface GetSkillEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getSkillEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetSkillEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetSkillEmitPayload {
			
				
				'shouldIncludeApiKey'?: boolean| undefined | null
		}

		interface GetSkillEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldIncludeApiKey': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type GetSkillEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetSkillEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitPayload| undefined | null
		}

		interface GetSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitPayloadSchema,}
			            },
			    }
		}

		type GetSkillEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetSkillResponsePayload {
			
				
				'skill': SpruceSchemas.Spruce.v2020_07_22.Skill
		}

		interface GetSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skill': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.SkillSchema,}
			            },
			    }
		}

		type GetSkillResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetSkillResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface HealthEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
		}

		interface HealthEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'healthEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		type HealthEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.HealthEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface HealthCheckItem {
			
				
				'status'?: ("passed")| undefined | null
		}

		interface HealthCheckItemSchema extends SpruceSchema.Schema {
			id: 'healthCheckItem',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'status': {
			                type: 'select',
			                options: {choices: [{"value":"passed","label":"Passed"}],}
			            },
			    }
		}

		type HealthCheckItemEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.HealthCheckItemSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface HealthResponsePayload {
			
				
				'skill'?: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItem| undefined | null
				
				'mercury'?: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItem| undefined | null
		}

		interface HealthResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'healthResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skill': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItemSchema,}
			            },
			            /** . */
			            'mercury': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItemSchema,}
			            },
			    }
		}

		type HealthResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.HealthResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InstallSkillEmitTarget {
			
				
				'organizationId': string
		}

		interface InstallSkillEmitTargetSchema extends SpruceSchema.Schema {
			id: 'installSkillEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type InstallSkillEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InstallSkillEmitPayload {
			
				
				'skillId': string
				
				'shouldNotifySkillOfInstall'?: boolean| undefined | null
		}

		interface InstallSkillEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'installSkillEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'shouldNotifySkillOfInstall': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type InstallSkillEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InstallSkillEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitPayload
		}

		interface InstallSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'installSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitPayloadSchema,}
			            },
			    }
		}

		type InstallSkillEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InstallSkillResponsePayload {
			
		}

		interface InstallSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'installSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type InstallSkillResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InstallSkillResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface IsSkillInstalledEmitTarget {
			
				
				'organizationId': string
		}

		interface IsSkillInstalledEmitTargetSchema extends SpruceSchema.Schema {
			id: 'isSkillInstalledEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type IsSkillInstalledEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface IsSkillInstalledEmitPayload {
			
				
				'skillId'?: string| undefined | null
				
				'namespace'?: string| undefined | null
		}

		interface IsSkillInstalledEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'isSkillInstalledEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'namespace': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type IsSkillInstalledEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface IsSkillInstalledEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitPayload| undefined | null
		}

		interface IsSkillInstalledEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'isSkillInstalledEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitPayloadSchema,}
			            },
			    }
		}

		type IsSkillInstalledEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface IsSkillInstalledResponsePayload {
			
				
				'isInstalled': boolean
		}

		interface IsSkillInstalledResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'isSkillInstalledResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'isInstalled': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type IsSkillInstalledResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListInstalledSkillsEmitTarget {
			
				
				'organizationId': string
		}

		interface ListInstalledSkillsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listInstalledSkillsEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ListInstalledSkillsEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListInstalledSkillsEmitPayload {
			
				
				'shouldShowGlobalSkills'?: boolean| undefined | null
		}

		interface ListInstalledSkillsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listInstalledSkillsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldShowGlobalSkills': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type ListInstalledSkillsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListInstalledSkillsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitPayload| undefined | null
		}

		interface ListInstalledSkillsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listInstalledSkillsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitPayloadSchema,}
			            },
			    }
		}

		type ListInstalledSkillsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListInstalledSkillsSkillsResponsePayload {
			
				/** Id. */
				'id': string
				/** Name. */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
				/** Namespace. */
				'slug': string
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
		}

		interface ListInstalledSkillsSkillsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listInstalledSkillsSkillsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** Namespace. */
			            'slug': {
			                label: 'Namespace',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                options: undefined
			            },
			    }
		}

		type ListInstalledSkillsSkillsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsSkillsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListInstalledSkillsResponsePayload {
			
				
				'skills': SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsSkillsResponsePayload[]
		}

		interface ListInstalledSkillsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listInstalledSkillsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skills': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsSkillsResponsePayloadSchema,}
			            },
			    }
		}

		type ListInstalledSkillsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListLocationsEmitTarget {
			
				
				'organizationId': string
		}

		interface ListLocationsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listLocationsEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ListLocationsEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListLocationsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayload| undefined | null
		}

		interface ListLocationsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listLocationsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayloadSchema,}
			            },
			    }
		}

		type ListLocationsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListLocationsResponsePayload {
			
				
				'locations': SpruceSchemas.Spruce.v2020_07_22.Location[]
		}

		interface ListLocationsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listLocationsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locations': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		type ListLocationsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListLocationsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListOrganizationsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitPayload| undefined | null
		}

		interface ListOrganizationsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listOrganizationsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitPayloadSchema,}
			            },
			    }
		}

		type ListOrganizationsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListOrganizationsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListLocationsEmitPayload {
			
				
				'shouldOnlyShowWhereIAmEmployed'?: boolean| undefined | null
				
				'paging'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingRequest| undefined | null
		}

		interface ListLocationsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listLocationsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldOnlyShowWhereIAmEmployed': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'paging': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingRequestSchema,}
			            },
			    }
		}

		type ListLocationsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListOrgsEmitPayload {
			
				
				'shouldOnlyShowMine'?: boolean| undefined | null
				
				'shouldOnlyShowWhereIAmEmployed'?: boolean| undefined | null
				
				'shouldIncludePrivateOrganizations'?: boolean| undefined | null
				
				'paging'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingRequest| undefined | null
		}

		interface ListOrgsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listOrgsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldOnlyShowMine': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'shouldOnlyShowWhereIAmEmployed': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'shouldIncludePrivateOrganizations': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'paging': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingRequestSchema,}
			            },
			    }
		}

		type ListOrgsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListOrgsResponsePayload {
			
				
				'organizations': SpruceSchemas.Spruce.v2020_07_22.Organization[]
		}

		interface ListOrgsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listOrgsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizations': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema,}
			            },
			    }
		}

		type ListOrgsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListOrgsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPeopleEmitTarget {
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
		}

		interface ListPeopleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listPeopleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type ListPeopleEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPeopleEmitPayload {
			
				
				'personIds'?: string[]| undefined | null
				
				'roleBases'?: string[]| undefined | null
				
				'roleIds'?: string[]| undefined | null
				
				'shouldIncludePrivateFields'?: boolean| undefined | null
		}

		interface ListPeopleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listPeopleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personIds': {
			                type: 'id',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'roleBases': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'roleIds': {
			                type: 'id',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldIncludePrivateFields': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type ListPeopleEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPeopleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitPayload| undefined | null
		}

		interface ListPeopleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listPeopleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitPayloadSchema,}
			            },
			    }
		}

		type ListPeopleEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPerson {
			
				/** Id. */
				'id': string
				/** First name. */
				'firstName'?: string| undefined | null
				/** Last name. */
				'lastName'?: string| undefined | null
				/** Casual name. The name you can use when talking to this person. */
				'casualName': string
				/** Phone. A number that can be texted */
				'phone'?: string| undefined | null
				/** Avatar src. */
				'avatar'?: SpruceSchema.ImageFieldValue| undefined | null
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'dateScrambled'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'roleIds'?: string[]| undefined | null
		}

		interface ListPersonSchema extends SpruceSchema.Schema {
			id: 'list-person',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** First name. */
			            'firstName': {
			                label: 'First name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Last name. */
			            'lastName': {
			                label: 'Last name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Casual name. The name you can use when talking to this person. */
			            'casualName': {
			                label: 'Casual name',
			                type: 'text',
			                isRequired: true,
			                hint: 'The name you can use when talking to this person.',
			                options: undefined
			            },
			            /** Phone. A number that can be texted */
			            'phone': {
			                label: 'Phone',
			                type: 'phone',
			                isPrivate: true,
			                hint: 'A number that can be texted',
			                options: undefined
			            },
			            /** Avatar src. */
			            'avatar': {
			                label: 'Avatar src',
			                type: 'image',
			                options: {requiredSizes: ["*"],}
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateScrambled': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'roleIds': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			    }
		}

		type ListPersonEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPersonSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPeopleResponsePayload {
			
				
				'people': SpruceSchemas.Mercury.v2020_12_25.ListPerson[]
		}

		interface ListPeopleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listPeopleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'people': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListPersonSchema,}
			            },
			    }
		}

		type ListPeopleResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPeopleResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPermissionContractsEmitTarget {
			
				
				'organizationId': string
		}

		interface ListPermissionContractsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listPermissionContractsEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ListPermissionContractsEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPermissionContractsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsEmitTarget
		}

		interface ListPermissionContractsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listPermissionContractsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsEmitTargetSchema,}
			            },
			    }
		}

		type ListPermissionContractsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPermissionContractsPermissionContracts {
			
				
				'id': string
				
				'skillId'?: string| undefined | null
				
				'contract': SpruceSchemas.Mercury.v2020_12_25.PermissionContract
		}

		interface ListPermissionContractsPermissionContractsSchema extends SpruceSchema.Schema {
			id: 'listPermissionContractsPermissionContracts',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'contract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			    }
		}

		type ListPermissionContractsPermissionContractsEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsPermissionContractsSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPermissionContractsResponsePayload {
			
				
				'permissionContracts': SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsPermissionContracts[]
				
				'count': number
		}

		interface ListPermissionContractsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listPermissionContractsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'permissionContracts': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsPermissionContractsSchema,}
			            },
			            /** . */
			            'count': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ListPermissionContractsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRolesEmitTarget {
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
				
				'personId'?: string| undefined | null
		}

		interface ListRolesEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listRolesEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type ListRolesEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRolesEmitPayload {
			
				
				'shouldIncludePrivateRoles'?: boolean| undefined | null
				
				'shouldIncludeMetaRoles'?: boolean| undefined | null
				
				'shouldIncludeAllLocations'?: boolean| undefined | null
		}

		interface ListRolesEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listRolesEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldIncludePrivateRoles': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'shouldIncludeMetaRoles': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'shouldIncludeAllLocations': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type ListRolesEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRolesEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitPayload| undefined | null
		}

		interface ListRolesEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listRolesEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitPayloadSchema,}
			            },
			    }
		}

		type ListRolesEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSchemaTarget {
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
		}

		interface ListSchemaTargetSchema extends SpruceSchema.Schema {
			id: 'listSchemaTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type ListSchemaTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSchemaTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRole {
			
				/** Id. */
				'id': string
				/** Name. */
				'name': string
				/** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
				'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "anonymous" | "loggedIn" | "guest")| undefined | null
				/** Description. */
				'description'?: string| undefined | null
				
				'dateCreated': number
				
				'dateDeleted'?: number| undefined | null
				
				'organizationId'?: string| undefined | null
				/** Public. Should I let people that are not part of this organization this role? */
				'isPublic'?: boolean| undefined | null
				
				'isMeta'?: boolean| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListSchemaTarget| undefined | null
		}

		interface ListRoleSchema extends SpruceSchema.Schema {
			id: 'listRole',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
			            'base': {
			                label: 'Base',
			                type: 'select',
			                hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
			                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Anonymous","value":"anonymous"},{"label":"Logged in","value":"loggedIn"},{"label":"Guest","value":"guest"}],}
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** Public. Should I let people that are not part of this organization this role? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Should I let people that are not part of this organization this role?',
			                options: undefined
			            },
			            /** . */
			            'isMeta': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListSchemaTargetSchema,}
			            },
			    }
		}

		type ListRoleEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRoleSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRolesResponsePayload {
			
				
				'roles': SpruceSchemas.Mercury.v2020_12_25.ListRole[]
		}

		interface ListRolesResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listRolesResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'roles': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListRoleSchema,}
			            },
			    }
		}

		type ListRolesResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRolesResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSkillsEmitPayload {
			
				
				'shouldOnlyShowMine'?: boolean| undefined | null
				
				'namespaces'?: string[]| undefined | null
				
				'shouldShowGlobalSkills'?: boolean| undefined | null
		}

		interface ListSkillsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listSkillsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldOnlyShowMine': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'namespaces': {
			                type: 'id',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldShowGlobalSkills': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type ListSkillsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSkillsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitPayload| undefined | null
		}

		interface ListSkillsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listSkillsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitPayloadSchema,}
			            },
			    }
		}

		type ListSkillsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSkillsSkillsResponsePayload {
			
				/** Id. */
				'id': string
				/** Name. */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
				/** Namespace. */
				'slug': string
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
		}

		interface ListSkillsSkillsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listSkillsSkillsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** Namespace. */
			            'slug': {
			                label: 'Namespace',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                options: undefined
			            },
			    }
		}

		type ListSkillsSkillsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSkillsSkillsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSkillsResponsePayload {
			
				
				'skills': SpruceSchemas.Mercury.v2020_12_25.ListSkillsSkillsResponsePayload[]
		}

		interface ListSkillsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listSkillsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skills': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListSkillsSkillsResponsePayloadSchema,}
			            },
			    }
		}

		type ListSkillsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSkillsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface LogoutEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
		}

		interface LogoutEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'logoutEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		type LogoutEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.LogoutEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface LogoutResponsePayload {
			
		}

		interface LogoutResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'logoutResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type LogoutResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.LogoutResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterConversationTopicEmitPayloadTopic {
			
				/** Key. A way to identify this topic, must be unique for your skill. */
				'key': string
		}

		interface RegisterConversationTopicEmitPayloadTopicSchema extends SpruceSchema.Schema {
			id: 'registerConversationTopicEmitPayloadTopic',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Key. A way to identify this topic, must be unique for your skill. */
			            'key': {
			                label: 'Key',
			                type: 'text',
			                isRequired: true,
			                hint: 'A way to identify this topic, must be unique for your skill.',
			                options: undefined
			            },
			    }
		}

		type RegisterConversationTopicEmitPayloadTopicEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicEmitPayloadTopicSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterConversationTopicsEmitPayload {
			
				
				'topics': SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicEmitPayloadTopic[]
		}

		interface RegisterConversationTopicsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerConversationTopicsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'topics': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicEmitPayloadTopicSchema,}
			            },
			    }
		}

		type RegisterConversationTopicsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterConversationTopicsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitPayload
		}

		interface RegisterConversationTopicsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerConversationTopicsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitPayloadSchema,}
			            },
			    }
		}

		type RegisterConversationTopicsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterConversationTopicsResponsePayload {
			
		}

		interface RegisterConversationTopicsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerConversationTopicsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type RegisterConversationTopicsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterEventsEmitPayload {
			
				
				'contract': SpruceSchemas.Mercury.v2020_12_25.EventContract
		}

		interface RegisterEventsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerEventsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			importsWhenRemote: ['import \'@sprucelabs/mercury-types\'',],
			    fields: {
			            /** . */
			            'contract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.EventContractSchema,}
			            },
			    }
		}

		type RegisterEventsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterEventsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitPayload
		}

		interface RegisterEventsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerEventsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitPayloadSchema,}
			            },
			    }
		}

		type RegisterEventsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterEventsResponsePayload {
			
				/** Fully qualified event names. */
				'fqens': string[]
		}

		interface RegisterEventsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerEventsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Fully qualified event names. */
			            'fqens': {
			                label: 'Fully qualified event names',
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                options: undefined
			            },
			    }
		}

		type RegisterEventsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterEventsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterListenersEmitPayload {
			
				
				'fullyQualifiedEventNames': string[]
		}

		interface RegisterListenersEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerListenersEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'fullyQualifiedEventNames': {
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                options: undefined
			            },
			    }
		}

		type RegisterListenersEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterListenersEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitPayload
		}

		interface RegisterListenersEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerListenersEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitPayloadSchema,}
			            },
			    }
		}

		type RegisterListenersEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterProxyTokenEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
		}

		interface RegisterProxyTokenEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerProxyTokenEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		type RegisterProxyTokenEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterProxyTokenEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterProxyTokenResponsePayload {
			
				/** Generate token. */
				'token': string
		}

		interface RegisterProxyTokenResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerProxyTokenResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Generate token. */
			            'token': {
			                label: 'Generate token',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type RegisterProxyTokenResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterProxyTokenResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterSkillEmitPayload {
			
				/** Name. */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
				/** Namespace. */
				'slug'?: string| undefined | null
		}

		interface RegisterSkillEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** Namespace. */
			            'slug': {
			                label: 'Namespace',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		type RegisterSkillEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterSkillEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitPayload
		}

		interface RegisterSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitPayloadSchema,}
			            },
			    }
		}

		type RegisterSkillEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterSkillResponsePayload {
			
				
				'skill': SpruceSchemas.Spruce.v2020_07_22.Skill
		}

		interface RegisterSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skill': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.SkillSchema,}
			            },
			    }
		}

		type RegisterSkillResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterSkillResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RemoveRoleEmitTarget {
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
		}

		interface RemoveRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'removeRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type RemoveRoleEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RemoveRoleEmitPayload {
			
				
				'personId': string
				
				'roleId': string
		}

		interface RemoveRoleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'removeRoleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type RemoveRoleEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RemoveRoleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitPayload
		}

		interface RemoveRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'removeRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitPayloadSchema,}
			            },
			    }
		}

		type RemoveRoleEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RemoveRoleResponsePayload {
			
		}

		interface RemoveRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'removeRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type RemoveRoleResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RemoveRoleResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RequestPinEmitPayload {
			
				
				'phone': string
		}

		interface RequestPinEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'requestPinEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'phone': {
			                type: 'phone',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type RequestPinEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RequestPinEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitPayload
		}

		interface RequestPinEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'requestPinEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitPayloadSchema,}
			            },
			    }
		}

		type RequestPinEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RequestPinResponsePayload {
			
				
				'challenge': string
		}

		interface RequestPinResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'requestPinResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'challenge': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type RequestPinResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RequestPinResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ScrambleAccountEmitTarget {
			
				
				'personId'?: string| undefined | null
		}

		interface ScrambleAccountEmitTargetSchema extends SpruceSchema.Schema {
			id: 'scrambleAccountEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type ScrambleAccountEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ScrambleAccountEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountEmitTarget| undefined | null
		}

		interface ScrambleAccountEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'scrambleAccountEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountEmitTargetSchema,}
			            },
			    }
		}

		type ScrambleAccountEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ScrambleAccountResponsePayload {
			
		}

		interface ScrambleAccountResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'scrambleAccountResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type ScrambleAccountResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageTarget {
			
				
				'locationId'?: string| undefined | null
				
				'personId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
				
				'skillId'?: string| undefined | null
				
				'roleId'?: string| undefined | null
				
				'phone'?: string| undefined | null
		}

		interface SendMessageTargetSchema extends SpruceSchema.Schema {
			id: 'sendMessageTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'phone': {
			                type: 'phone',
			                options: undefined
			            },
			    }
		}

		type SendMessageTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageMessagePayload {
			
				
				'classification': ("auth" | "transactional" | "promotional" | "incoming")
				
				'body': string
				
				'context'?: (Record<string, any>)| undefined | null
				
				'topicId'?: string| undefined | null
				
				'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[]| undefined | null
				
				'choices'?: SpruceSchemas.Spruce.v2020_07_22.Choice[]| undefined | null
		}

		interface SendMessageMessagePayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageMessagePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'classification': {
			                type: 'select',
			                isRequired: true,
			                options: {choices: [{"value":"auth","label":"Auth"},{"value":"transactional","label":"transactional"},{"value":"promotional","label":"Promotional"},{"value":"incoming","label":"incoming"}],}
			            },
			            /** . */
			            'body': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'context': {
			                type: 'raw',
			                isPrivate: true,
			                options: {valueType: `Record<string, any>`,}
			            },
			            /** . */
			            'topicId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'links': {
			                type: 'schema',
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LinkSchema,}
			            },
			            /** . */
			            'choices': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.ChoiceSchema,}
			            },
			    }
		}

		type SendMessageMessagePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageMessagePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageEmitPayload {
			
				
				'message': SpruceSchemas.Mercury.v2020_12_25.SendMessageMessagePayload
		}

		interface SendMessageEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'message': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SendMessageMessagePayloadSchema,}
			            },
			    }
		}

		type SendMessageEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.SendMessageTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitPayload
		}

		interface SendMessageEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SendMessageTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitPayloadSchema,}
			            },
			    }
		}

		type SendMessageEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageResponsePayload {
			
				
				'message': SpruceSchemas.Spruce.v2020_07_22.Message
		}

		interface SendMessageResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'message': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageSchema,}
			            },
			    }
		}

		type SendMessageResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SubmitErrorMessageFeedbackEmitPayload {
			
				/** Error code. */
				'errorCode'?: string| undefined | null
				/** Error message. */
				'errorMessage': string
				/** Stack traces. */
				'stackTrace': string
				/** Href. */
				'fromHref': string
				
				'thoughts': string
		}

		interface SubmitErrorMessageFeedbackEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'submitErrorMessageFeedbackEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Error code. */
			            'errorCode': {
			                label: 'Error code',
			                type: 'text',
			                options: undefined
			            },
			            /** Error message. */
			            'errorMessage': {
			                label: 'Error message',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Stack traces. */
			            'stackTrace': {
			                label: 'Stack traces',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Href. */
			            'fromHref': {
			                label: 'Href',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'thoughts': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type SubmitErrorMessageFeedbackEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SubmitErrorMessageFeedbackEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SubmitErrorMessageFeedbackEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SubmitErrorMessageFeedbackEmitPayload
		}

		interface SubmitErrorMessageFeedbackEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'submitErrorMessageFeedbackEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SubmitErrorMessageFeedbackEmitPayloadSchema,}
			            },
			    }
		}

		type SubmitErrorMessageFeedbackEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SubmitErrorMessageFeedbackEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SyncEventContractsEmitPayload {
			
				
				'contract': SpruceSchemas.Mercury.v2020_12_25.EventContract
		}

		interface SyncEventContractsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'syncEventContractsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			importsWhenRemote: ['import \'@sprucelabs/mercury-types\'',],
			    fields: {
			            /** . */
			            'contract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.EventContractSchema,}
			            },
			    }
		}

		type SyncEventContractsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SyncEventContractsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsEmitPayload
		}

		interface SyncEventContractsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'syncEventContractsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsEmitPayloadSchema,}
			            },
			    }
		}

		type SyncEventContractsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SyncEventContractsResponsePayload {
			
				/** Event names. */
				'fqens': string[]
		}

		interface SyncEventContractsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'syncEventContractsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Event names. */
			            'fqens': {
			                label: 'Event names',
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                options: undefined
			            },
			    }
		}

		type SyncEventContractsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SyncPermissionContractsEmitPayload {
			
				/** Contracts. */
				'contracts': SpruceSchemas.Mercury.v2020_12_25.PermissionContract[]
		}

		interface SyncPermissionContractsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'syncPermissionContractsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Contracts. */
			            'contracts': {
			                label: 'Contracts',
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			    }
		}

		type SyncPermissionContractsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SyncPermissionContractsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsEmitPayload
		}

		interface SyncPermissionContractsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'syncPermissionContractsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsEmitPayloadSchema,}
			            },
			    }
		}

		type SyncPermissionContractsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SyncPermissionContractsResponsePayload {
			
				
				'contractRecords': SpruceSchemas.Mercury.v2020_12_25.FullPermissionContract[]
		}

		interface SyncPermissionContractsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'syncPermissionContractsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'contractRecords': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.FullPermissionContractSchema,}
			            },
			    }
		}

		type SyncPermissionContractsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface FullPermissionContract {
			
				
				'id': string
				
				'skillId'?: string| undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget| undefined | null
				
				'contract': SpruceSchemas.Mercury.v2020_12_25.PermissionContract
		}

		interface FullPermissionContractSchema extends SpruceSchema.Schema {
			id: 'fullPermissionContract',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTargetSchema,}
			            },
			            /** . */
			            'contract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			    }
		}

		type FullPermissionContractEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.FullPermissionContractSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnInstallSkillEmitTarget {
			
				
				'skillId': string
				
				'organizationId': string
		}

		interface UnInstallSkillEmitTargetSchema extends SpruceSchema.Schema {
			id: 'unInstallSkillEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UnInstallSkillEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnInstallSkillEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UninstallSkillEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UnInstallSkillEmitTarget
		}

		interface UninstallSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'uninstallSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnInstallSkillEmitTargetSchema,}
			            },
			    }
		}

		type UninstallSkillEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UninstallSkillEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnInstallSkillResponsePayload {
			
		}

		interface UnInstallSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unInstallSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type UnInstallSkillResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnInstallSkillResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterConversationTopicsEmitPayload {
			
				
				'topics'?: string[]| undefined | null
				
				'shouldUnregisterAll'?: boolean| undefined | null
		}

		interface UnregisterConversationTopicsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterConversationTopicsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'topics': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldUnregisterAll': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type UnregisterConversationTopicsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterConversationTopicsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitPayload| undefined | null
		}

		interface UnregisterConversationTopicsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterConversationTopicsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitPayloadSchema,}
			            },
			    }
		}

		type UnregisterConversationTopicsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterConversationTopicsResponsePayload {
			
		}

		interface UnregisterConversationTopicsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterConversationTopicsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type UnregisterConversationTopicsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterEventsEmitPayload {
			
				
				'eventNames'?: string[]| undefined | null
				
				'shouldUnregisterAll'?: boolean| undefined | null
		}

		interface UnregisterEventsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterEventsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'eventNames': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldUnregisterAll': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type UnregisterEventsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterEventsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitPayload| undefined | null
		}

		interface UnregisterEventsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterEventsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitPayloadSchema,}
			            },
			    }
		}

		type UnregisterEventsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterEventsResponsePayload {
			
		}

		interface UnregisterEventsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterEventsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type UnregisterEventsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterListenersEmitPayload {
			
				
				'fullyQualifiedEventNames'?: string[]| undefined | null
				
				'shouldUnregisterAll'?: boolean| undefined | null
		}

		interface UnregisterListenersEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterListenersEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'fullyQualifiedEventNames': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldUnregisterAll': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type UnregisterListenersEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterListenersEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitPayload| undefined | null
		}

		interface UnregisterListenersEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterListenersEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitPayloadSchema,}
			            },
			    }
		}

		type UnregisterListenersEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterListenersResponsePayload {
			
				
				'unregisterCount': number
		}

		interface UnregisterListenersResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterListenersResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'unregisterCount': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UnregisterListenersResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterSkillEmitTarget {
			
				
				'skillId': string
		}

		interface UnregisterSkillEmitTargetSchema extends SpruceSchema.Schema {
			id: 'unregisterSkillEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UnregisterSkillEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterSkillEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTarget
		}

		interface UnregisterSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTargetSchema,}
			            },
			    }
		}

		type UnregisterSkillEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterSkillResponsePayload {
			
		}

		interface UnregisterSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type UnregisterSkillResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateLocationEmitTarget {
			
				
				'locationId': string
		}

		interface UpdateLocationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateLocationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UpdateLocationEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateLocationEmitPayload {
			
				/** Name. */
				'name'?: string| undefined | null
				/** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
				'num'?: string| undefined | null
				/** Slug. */
				'slug'?: string| undefined | null
				/** Public. Is this location viewable by guests? */
				'isPublic'?: boolean| undefined | null
				/** Main Phone. */
				'phone'?: string| undefined | null
				/** Timezone. */
				'timezone'?: ("UTC" | "Pacific/Midway" | "Pacific/Honolulu" | "America/Anchorage" | "America/Los_Angeles" | "America/Tijuana" | "America/Phoenix" | "America/Chihuahua" | "America/Denver" | "America/Managua" | "America/Chicago" | "America/Mexico_City" | "Canada/Saskatchewan" | "America/Bogota" | "America/New_York" | "America/Indiana/Indianapolis" | "Canada/Atlantic" | "America/Caracas" | "America/Manaus" | "America/Santiago" | "Canada/Newfoundland" | "America/Sao_Paulo" | "America/Argentina/Buenos_Aires" | "America/Godthab" | "America/Montevideo" | "America/Noronha" | "Atlantic/Cape_Verde" | "Atlantic/Azores" | "Africa/Casablanca" | "Etc/Greenwich" | "Europe/Amsterdam" | "Europe/Belgrade" | "Europe/Brussels" | "Europe/Sarajevo" | "Africa/Lagos" | "Asia/Amman" | "Europe/Athens" | "Asia/Beirut" | "Africa/Cairo" | "Africa/Harare" | "Europe/Helsinki" | "Asia/Jerusalem" | "Europe/Minsk" | "Africa/Windhoek" | "Asia/Kuwait" | "Europe/Moscow" | "Africa/Nairobi" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Muscat" | "Asia/Baku" | "Asia/Yerevan" | "Asia/Kabul" | "Asia/Yekaterinburg" | "Asia/Karachi" | "Asia/Calcutta" | "Asia/Calcutta" | "Asia/Katmandu" | "Asia/Almaty" | "Asia/Dhaka" | "Asia/Rangoon" | "Asia/Bangkok" | "Asia/Krasnoyarsk" | "Asia/Hong_Kong" | "Asia/Kuala_Lumpur" | "Asia/Irkutsk" | "Australia/Perth" | "Asia/Taipei" | "Asia/Tokyo" | "Asia/Seoul" | "Asia/Yakutsk" | "Australia/Adelaide" | "Australia/Darwin" | "Australia/Brisbane" | "Australia/Canberra" | "Australia/Hobart" | "Pacific/Guam" | "Asia/Vladivostok" | "Asia/Magadan" | "Pacific/Auckland" | "Pacific/Fiji" | "Pacific/Tongatapu")| undefined | null
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue| undefined | null
				
				'dateCreated'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'organizationId'?: string| undefined | null
		}

		interface UpdateLocationEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateLocationEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			            'num': {
			                label: 'Store number',
			                type: 'text',
			                hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
			                options: undefined
			            },
			            /** Slug. */
			            'slug': {
			                label: 'Slug',
			                type: 'text',
			                options: undefined
			            },
			            /** Public. Is this location viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Is this location viewable by guests?',
			                defaultValue: false,
			                options: undefined
			            },
			            /** Main Phone. */
			            'phone': {
			                label: 'Main Phone',
			                type: 'phone',
			                options: undefined
			            },
			            /** Timezone. */
			            'timezone': {
			                label: 'Timezone',
			                type: 'select',
			                options: {choices: [{"label":"International Date Line West","value":"UTC"},{"label":"Midway Island, Samoa","value":"Pacific/Midway"},{"label":"Hawaii","value":"Pacific/Honolulu"},{"label":"Alaska","value":"America/Anchorage"},{"label":"Pacific Time (US & Canada)","value":"America/Los_Angeles"},{"label":"Tijuana, Baja California","value":"America/Tijuana"},{"label":"Arizona / Phoenix","value":"America/Phoenix"},{"label":"Chihuahua, La Paz, Mazatlan","value":"America/Chihuahua"},{"label":"Mountain Time / Denver (US & Canada)","value":"America/Denver"},{"label":"Central America","value":"America/Managua"},{"label":"Central Time / Chicago (US & Canada)","value":"America/Chicago"},{"label":"Guadalajara, Mexico City, Monterrey","value":"America/Mexico_City"},{"label":"Saskatchewan","value":"Canada/Saskatchewan"},{"label":"Bogota, Lima, Quito, Rio Branco","value":"America/Bogota"},{"label":"Eastern Time / New York (US & Canada)","value":"America/New_York"},{"label":"Indiana / Indianapolis (East)","value":"America/Indiana/Indianapolis"},{"label":"Atlantic Time (Canada)","value":"Canada/Atlantic"},{"label":"Caracas, La Paz","value":"America/Caracas"},{"label":"Manaus","value":"America/Manaus"},{"label":"Santiago","value":"America/Santiago"},{"label":"Newfoundland","value":"Canada/Newfoundland"},{"label":"Brasilia","value":"America/Sao_Paulo"},{"label":"Buenos Aires, Georgetown","value":"America/Argentina/Buenos_Aires"},{"label":"Greenland","value":"America/Godthab"},{"label":"Montevideo","value":"America/Montevideo"},{"label":"Mid-Atlantic","value":"America/Noronha"},{"label":"Cape Verde Is.","value":"Atlantic/Cape_Verde"},{"label":"Azores","value":"Atlantic/Azores"},{"label":"Casablanca, Monrovia, Reykjavik","value":"Africa/Casablanca"},{"label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London","value":"Etc/Greenwich"},{"label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","value":"Europe/Amsterdam"},{"label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague","value":"Europe/Belgrade"},{"label":"Brussels, Copenhagen, Madrid, Paris","value":"Europe/Brussels"},{"label":"Sarajevo, Skopje, Warsaw, Zagreb","value":"Europe/Sarajevo"},{"label":"West Central Africa","value":"Africa/Lagos"},{"label":"Amman","value":"Asia/Amman"},{"label":"Athens, Bucharest, Istanbul","value":"Europe/Athens"},{"label":"Beirut","value":"Asia/Beirut"},{"label":"Cairo","value":"Africa/Cairo"},{"label":"Harare, Pretoria","value":"Africa/Harare"},{"label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius","value":"Europe/Helsinki"},{"label":"Jerusalem","value":"Asia/Jerusalem"},{"label":"Minsk","value":"Europe/Minsk"},{"label":"Windhoek","value":"Africa/Windhoek"},{"label":"Kuwait, Riyadh, Baghdad","value":"Asia/Kuwait"},{"label":"Moscow, St. Petersburg, Volgograd","value":"Europe/Moscow"},{"label":"Nairobi","value":"Africa/Nairobi"},{"label":"Tbilisi","value":"Asia/Tbilisi"},{"label":"Tehran","value":"Asia/Tehran"},{"label":"Abu Dhabi, Muscat","value":"Asia/Muscat"},{"label":"Baku","value":"Asia/Baku"},{"label":"Yerevan","value":"Asia/Yerevan"},{"label":"Kabul","value":"Asia/Kabul"},{"label":"Yekaterinburg","value":"Asia/Yekaterinburg"},{"label":"Islamabad, Karachi, Tashkent","value":"Asia/Karachi"},{"label":"Chennai, Kolkata, Mumbai, New Delhi","value":"Asia/Calcutta"},{"label":"Sri Jayawardenapura","value":"Asia/Calcutta"},{"label":"Kathmandu","value":"Asia/Katmandu"},{"label":"Almaty, Novosibirsk","value":"Asia/Almaty"},{"label":"Astana, Dhaka","value":"Asia/Dhaka"},{"label":"Yangon (Rangoon)","value":"Asia/Rangoon"},{"label":"Bangkok, Hanoi, Jakarta","value":"Asia/Bangkok"},{"label":"Krasnoyarsk","value":"Asia/Krasnoyarsk"},{"label":"Beijing, Chongqing, Hong Kong, Urumqi","value":"Asia/Hong_Kong"},{"label":"Kuala Lumpur, Singapore","value":"Asia/Kuala_Lumpur"},{"label":"Irkutsk, Ulaan Bataar","value":"Asia/Irkutsk"},{"label":"Perth","value":"Australia/Perth"},{"label":"Taipei","value":"Asia/Taipei"},{"label":"Osaka, Sapporo, Tokyo","value":"Asia/Tokyo"},{"label":"Seoul","value":"Asia/Seoul"},{"label":"Yakutsk","value":"Asia/Yakutsk"},{"label":"Adelaide","value":"Australia/Adelaide"},{"label":"Darwin","value":"Australia/Darwin"},{"label":"Brisbane","value":"Australia/Brisbane"},{"label":"Canberra, Melbourne, Sydney","value":"Australia/Canberra"},{"label":"Hobart","value":"Australia/Hobart"},{"label":"Guam, Port Moresby","value":"Pacific/Guam"},{"label":"Vladivostok","value":"Asia/Vladivostok"},{"label":"Magadan, Solomon Is., New Caledonia","value":"Asia/Magadan"},{"label":"Auckland, Wellington","value":"Pacific/Auckland"},{"label":"Fiji, Kamchatka, Marshall Is.","value":"Pacific/Fiji"},{"label":"Nuku'alofa","value":"Pacific/Tongatapu"}],}
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type UpdateLocationEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateLocationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitPayload| undefined | null
		}

		interface UpdateLocationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateLocationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitPayloadSchema,}
			            },
			    }
		}

		type UpdateLocationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateLocationResponsePayload {
			
				
				'location': SpruceSchemas.Spruce.v2020_07_22.Location
		}

		interface UpdateLocationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateLocationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'location': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		type UpdateLocationResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateLocationResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrgEmitTarget {
			
				
				'organizationId': string
		}

		interface UpdateOrgEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateOrgEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UpdateOrgEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrgEmitPayload {
			
				/** Name. */
				'name'?: string| undefined | null
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue| undefined | null
				/** Public. Is this organization viewable by guests? */
				'isPublic'?: boolean| undefined | null
				
				'dateCreated'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
		}

		interface UpdateOrgEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateOrgEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                options: undefined
			            },
			            /** Public. Is this organization viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Is this organization viewable by guests?',
			                defaultValue: false,
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                options: undefined
			            },
			    }
		}

		type UpdateOrgEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrganizationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitPayload| undefined | null
		}

		interface UpdateOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitPayloadSchema,}
			            },
			    }
		}

		type UpdateOrganizationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrganizationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrg {
			
				/** Name. */
				'name'?: string| undefined | null
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue| undefined | null
				/** Slug. */
				'slug'?: string| undefined | null
				/** Public. Is this organization viewable by guests? */
				'isPublic'?: boolean| undefined | null
				
				'dateCreated'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
		}

		interface UpdateOrgSchema extends SpruceSchema.Schema {
			id: 'updateOrg',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                options: undefined
			            },
			            /** Slug. */
			            'slug': {
			                label: 'Slug',
			                type: 'text',
			                options: undefined
			            },
			            /** Public. Is this organization viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Is this organization viewable by guests?',
			                defaultValue: false,
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                options: undefined
			            },
			    }
		}

		type UpdateOrgEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrgSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrgResponsePayload {
			
				
				'organization': SpruceSchemas.Mercury.v2020_12_25.UpdateOrg
		}

		interface UpdateOrgResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateOrgResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organization': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgSchema,}
			            },
			    }
		}

		type UpdateOrgResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrgResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdatePersonEmitTarget {
			
				
				'personId'?: string| undefined | null
		}

		interface UpdatePersonEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updatePersonEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type UpdatePersonEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdatePersonEmitPayload {
			
				/** First name. */
				'firstName'?: string| undefined | null
				/** Last name. */
				'lastName'?: string| undefined | null
				/** Avatar src. */
				'avatar'?: SpruceSchema.ImageFieldValue| undefined | null
				/** Phone. A number that can be texted */
				'phone'?: string| undefined | null
		}

		interface UpdatePersonEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updatePersonEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** First name. */
			            'firstName': {
			                label: 'First name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Last name. */
			            'lastName': {
			                label: 'Last name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Avatar src. */
			            'avatar': {
			                label: 'Avatar src',
			                type: 'image',
			                options: {requiredSizes: ["*"],}
			            },
			            /** Phone. A number that can be texted */
			            'phone': {
			                label: 'Phone',
			                type: 'phone',
			                isPrivate: true,
			                hint: 'A number that can be texted',
			                options: undefined
			            },
			    }
		}

		type UpdatePersonEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdatePersonResponsePayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface UpdatePersonResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updatePersonResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		type UpdatePersonResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdatePersonResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateRoleEmitTarget {
			
				
				'roleId': string
		}

		interface UpdateRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UpdateRoleEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateRoleEmitPayload {
			
				/** Name. */
				'name'?: string| undefined | null
				/** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
				'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "anonymous" | "loggedIn" | "guest")| undefined | null
				/** Description. */
				'description'?: string| undefined | null
				
				'dateDeleted'?: number| undefined | null
				/** Public. Should I let people that are not part of this organization this role? */
				'isPublic'?: boolean| undefined | null
		}

		interface UpdateRoleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateRoleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
			            'base': {
			                label: 'Base',
			                type: 'select',
			                hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
			                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Anonymous","value":"anonymous"},{"label":"Logged in","value":"loggedIn"},{"label":"Guest","value":"guest"}],}
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			            /** Public. Should I let people that are not part of this organization this role? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Should I let people that are not part of this organization this role?',
			                options: undefined
			            },
			    }
		}

		type UpdateRoleEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateRoleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitPayload| undefined | null
		}

		interface UpdateRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitPayloadSchema,}
			            },
			    }
		}

		type UpdateRoleEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateRoleResponsePayload {
			
				
				'role': SpruceSchemas.Spruce.v2020_07_22.Role
		}

		interface UpdateRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'role': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		type UpdateRoleResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateRoleResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpsertPermissionContractEmitTarget {
			
				
				'organizationId': string
				
				'permissionContractId': string
				
				'roleId': string
				
				'skillId'?: string| undefined | null
		}

		interface UpsertPermissionContractEmitTargetSchema extends SpruceSchema.Schema {
			id: 'upsertPermissionContractEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'permissionContractId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type UpsertPermissionContractEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpsertPermissionContractsEmitPayload {
			
				/** Name. Human readable name for this contract */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
				/** Require all permissions. */
				'requireAllPermissions'?: boolean| undefined | null
				
				'permissions': SpruceSchemas.Mercury.v2020_12_25.Permission[]
		}

		interface UpsertPermissionContractsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'upsertPermissionContractsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. Human readable name for this contract */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                hint: 'Human readable name for this contract',
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** Require all permissions. */
			            'requireAllPermissions': {
			                label: 'Require all permissions',
			                type: 'boolean',
			                defaultValue: false,
			                options: undefined
			            },
			            /** . */
			            'permissions': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionSchema,}
			            },
			    }
		}

		type UpsertPermissionContractsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpsertPermissionContractEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractsEmitPayload
		}

		interface UpsertPermissionContractEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'upsertPermissionContractEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractsEmitPayloadSchema,}
			            },
			    }
		}

		type UpsertPermissionContractEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpsertPermissionContractResponsePayload {
			
				
				'permissionContract': SpruceSchemas.Mercury.v2020_12_25.PermissionContract
		}

		interface UpsertPermissionContractResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'upsertPermissionContractResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'permissionContract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			    }
		}

		type UpsertPermissionContractResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface VoteForFeatureEmitPayload {
			
				
				'featureKey': string
				
				'skillNamespace': string
		}

		interface VoteForFeatureEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'voteForFeatureEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'featureKey': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'skillNamespace': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type VoteForFeatureEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.VoteForFeatureEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface VoteForFeatureEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.VoteForFeatureEmitPayload
		}

		interface VoteForFeatureEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'voteForFeatureEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.VoteForFeatureEmitPayloadSchema,}
			            },
			    }
		}

		type VoteForFeatureEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.VoteForFeatureEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface VoteForFeatureResponsePayload {
			
				
				'totalVotes': number
		}

		interface VoteForFeatureResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'voteForFeatureResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'totalVotes': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type VoteForFeatureResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.VoteForFeatureResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdatePersonEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitPayload| undefined | null
		}

		interface UpdatePersonEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updatePersonEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitPayloadSchema,}
			            },
			    }
		}

		type UpdatePersonEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface WhoamiEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
		}

		interface WhoamiEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'whoamiEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		type WhoamiEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.WhoamiEmitTargetAndPayloadSchema>

	}

}
