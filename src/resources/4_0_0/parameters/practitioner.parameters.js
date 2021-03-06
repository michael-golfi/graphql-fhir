const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the practitioner query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/individual-address
	address: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.address',
		description:
			'Multiple Resources:     * [Patient](patient.html): A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text  * [Person](person.html): A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text  * [Practitioner](practitioner.html): A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text  * [RelatedPerson](relatedperson.html): A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-address-city
	address_city: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.address.city',
		description:
			'Multiple Resources:     * [Patient](patient.html): A city specified in an address  * [Person](person.html): A city specified in an address  * [Practitioner](practitioner.html): A city specified in an address  * [RelatedPerson](relatedperson.html): A city specified in an address  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-address-country
	address_country: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.address.country',
		description:
			'Multiple Resources:     * [Patient](patient.html): A country specified in an address  * [Person](person.html): A country specified in an address  * [Practitioner](practitioner.html): A country specified in an address  * [RelatedPerson](relatedperson.html): A country specified in an address  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-address-postalcode
	address_postalcode: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.address.postalCode',
		description:
			'Multiple Resources:     * [Patient](patient.html): A postalCode specified in an address  * [Person](person.html): A postal code specified in an address  * [Practitioner](practitioner.html): A postalCode specified in an address  * [RelatedPerson](relatedperson.html): A postal code specified in an address  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-address-state
	address_state: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.address.state',
		description:
			'Multiple Resources:     * [Patient](patient.html): A state specified in an address  * [Person](person.html): A state specified in an address  * [Practitioner](practitioner.html): A state specified in an address  * [RelatedPerson](relatedperson.html): A state specified in an address  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-address-use
	address_use: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.address.use',
		description:
			'Multiple Resources:     * [Patient](patient.html): A use code specified in an address  * [Person](person.html): A use code specified in an address  * [Practitioner](practitioner.html): A use code specified in an address  * [RelatedPerson](relatedperson.html): A use code specified in an address  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-email
	email: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "Practitioner.telecom[system/@value='email']",
		description:
			'Multiple Resources:     * [Patient](patient.html): A value in an email contact  * [Person](person.html): A value in an email contact  * [Practitioner](practitioner.html): A value in an email contact  * [PractitionerRole](practitionerrole.html): A value in an email contact  * [RelatedPerson](relatedperson.html): A value in an email contact  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-family
	family: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.name.family',
		description:
			'Multiple Resources:     * [Patient](patient.html): A portion of the family name of the patient  * [Practitioner](practitioner.html): A portion of the family name  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-gender
	gender: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.gender',
		description:
			'Multiple Resources:     * [Patient](patient.html): Gender of the patient  * [Person](person.html): The gender of the person  * [Practitioner](practitioner.html): Gender of the practitioner  * [RelatedPerson](relatedperson.html): Gender of the related person  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-given
	given: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.name.given',
		description:
			'Multiple Resources:     * [Patient](patient.html): A portion of the given name of the patient  * [Practitioner](practitioner.html): A portion of the given name  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-phone
	phone: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "Practitioner.telecom[system/@value='phone']",
		description:
			'Multiple Resources:     * [Patient](patient.html): A value in a phone contact  * [Person](person.html): A value in a phone contact  * [Practitioner](practitioner.html): A value in a phone contact  * [PractitionerRole](practitionerrole.html): A value in a phone contact  * [RelatedPerson](relatedperson.html): A value in a phone contact  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-phonetic
	phonetic: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.name',
		description:
			'Multiple Resources:     * [Patient](patient.html): A portion of either family or given name using some kind of phonetic matching algorithm  * [Person](person.html): A portion of name using some kind of phonetic matching algorithm  * [Practitioner](practitioner.html): A portion of either family or given name using some kind of phonetic matching algorithm  * [RelatedPerson](relatedperson.html): A portion of name using some kind of phonetic matching algorithm  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-telecom
	telecom: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.telecom',
		description:
			'Multiple Resources:     * [Patient](patient.html): The value in any kind of telecom details of the patient  * [Person](person.html): The value in any kind of contact  * [Practitioner](practitioner.html): The value in any kind of contact  * [PractitionerRole](practitionerrole.html): The value in any kind of contact  * [RelatedPerson](relatedperson.html): The value in any kind of contact  ',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-active
	active: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.active',
		description: 'Whether the practitioner record is active',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-communication
	communication: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.communication',
		description:
			'One of the languages that the practitioner can communicate with',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.identifier',
		description: "A practitioner's Identifier",
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.name',
		description:
			'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text',
	},
};
