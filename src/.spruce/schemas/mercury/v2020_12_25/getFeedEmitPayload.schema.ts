import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventPagingRequestSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventPagingRequest.schema'
import feedPredicateSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/feedPredicate.schema'

const getFeedEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitPayloadSchema  = {
	id: 'getFeedEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'paging': {
	                type: 'schema',
	                options: {schema: eventPagingRequestSchema_v2021_09_13,}
	            },
	            /** . */
	            'predicates': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: feedPredicateSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getFeedEmitPayloadSchema)

export default getFeedEmitPayloadSchema
