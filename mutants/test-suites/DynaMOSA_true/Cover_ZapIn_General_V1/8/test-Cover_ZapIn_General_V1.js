const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintyBhSbXR = BigInt("176")
		const Cover_ZapIn_General_V1jcLavZB = await Cover_ZapIn_General_V1.new(uintyBhSbXR, {from: accounts[4]});
		const uintTw5coEH = BigInt("474")
		const addressalLtZL = accounts[4]
		const uint16w5SAVEG = await Cover_ZapIn_General_V1jcLavZB.set_new_goodwill.call(uintTw5coEH, {from: accounts[0]});
		await Cover_ZapIn_General_V1jcLavZB.toggleContractActive.call({from: accounts[2]});
		const 
Mz35iW8 = await Cover_ZapIn_General_V1jcLavZB._getCoverDetails.call(addressalLtZL, {from: accounts[3]});
		await Cover_ZapIn_General_V1jcLavZB.onlyOwner.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintaao4G3m = BigInt("1092")
		const Cover_ZapIn_General_V1CFhYZ3k = await Cover_ZapIn_General_V1.new(uintaao4G3m, {from: accounts[5]});
		const addressFDxk8F5 = accounts[4]
		const 
V9vGfci = await Cover_ZapIn_General_V1CFhYZ3k._getCoverDetails.call(addressFDxk8F5, {from: accounts[1]});
		await Cover_ZapIn_General_V1CFhYZ3k.stopInEmergency.call({from: accounts[0]});
		await Cover_ZapIn_General_V1CFhYZ3k.nonReentrant.call({from: accounts[1]});
		await Cover_ZapIn_General_V1CFhYZ3k.renounceOwnership.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintMkbpKDo = BigInt("1404")
		const Cover_ZapIn_General_V1MSp1Ce6 = await Cover_ZapIn_General_V1.new(uintMkbpKDo, {from: accounts[2]});
		const address7UbS3G = accounts[4]
		const uintr712KG = BigInt("1657")
		const addresss3M4Vw = await Cover_ZapIn_General_V1MSp1Ce6.inCaseTokengetsStuck.call(address7UbS3G, {from: accounts[2]});
		const uint16HD88A5H = await Cover_ZapIn_General_V1MSp1Ce6.set_new_goodwill.call(uintr712KG, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintGNbVpW = BigInt("1624")
		const Cover_ZapIn_General_V180f7Mn = await Cover_ZapIn_General_V1.new(uintGNbVpW, {from: "0x0000000000000000000000000000000000000001"});
		const addressAHtz92 = accounts[0]
		const addressx4y9bhS = accounts[1]
		await Cover_ZapIn_General_V180f7Mn.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
		const 
nrSZnh2 = await Cover_ZapIn_General_V180f7Mn._getCoverDetails.call(addressAHtz92, {from: accounts[2]});
		await Cover_ZapIn_General_V180f7Mn.renounceOwnership.call({from: accounts[2]});
		const addressyheW1c1 = await Cover_ZapIn_General_V180f7Mn.inCaseTokengetsStuck.call(addressx4y9bhS, {from: accounts[5]});
		await Cover_ZapIn_General_V180f7Mn.toggleContractActive.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintGRMMs2u = BigInt("1404")
		const Cover_ZapIn_General_V1MSp1Ce6 = await Cover_ZapIn_General_V1.new(uintGRMMs2u, {from: accounts[2]});
		const uintSqXhYoe = BigInt("807")
		const uint16HD88A5H = await Cover_ZapIn_General_V1MSp1Ce6.set_new_goodwill.call(uintSqXhYoe, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinty9MXOQt = BigInt("1404")
		const Cover_ZapIn_General_V1MSp1Ce6 = await Cover_ZapIn_General_V1.new(uinty9MXOQt, {from: accounts[2]});
		const addressRSiDy8I = accounts[4]
		const addressNqVX80W = accounts[2]
		const uintRdUTWIv = BigInt("1059")
		await Cover_ZapIn_General_V1MSp1Ce6.toggleContractActive.call({from: accounts[2]});
		const 
YVU6oka = await Cover_ZapIn_General_V1MSp1Ce6._getCoverDetails.call(addressRSiDy8I, {from: accounts[2]});
		const 
fNKXejY = await Cover_ZapIn_General_V1MSp1Ce6._getCoverDetails.call(addressNqVX80W, {from: accounts[4]});
		const uint16HD88A5H = await Cover_ZapIn_General_V1MSp1Ce6.set_new_goodwill.call(uintRdUTWIv, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinteOMYfaq = BigInt("1092")
		const Cover_ZapIn_General_V1CFhYZ3k = await Cover_ZapIn_General_V1.new(uinteOMYfaq, {from: accounts[5]});
		const addressYAb4b3h = accounts[4]
		const address2AvyO1 = await Cover_ZapIn_General_V1CFhYZ3k.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const 
V9vGfci = await Cover_ZapIn_General_V1CFhYZ3k._getCoverDetails.call(addressYAb4b3h, {from: accounts[1]});
		await Cover_ZapIn_General_V1CFhYZ3k.stopInEmergency.call({from: accounts[0]});
		await Cover_ZapIn_General_V1CFhYZ3k.nonReentrant.call({from: accounts[1]});
		await Cover_ZapIn_General_V1CFhYZ3k.renounceOwnership.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintCXFkNTC = BigInt("1404")
		const Cover_ZapIn_General_V1MSp1Ce6 = await Cover_ZapIn_General_V1.new(uintCXFkNTC, {from: accounts[2]});
		const byteyA0qVXG = "0x0a01001d01170b18000903141011"
		const addressb0nZaf = accounts[1]
		const addressTb3p25o = accounts[1]
		const uintcxnQK78 = BigInt("1725")
		const addressFgW5Bc3 = accounts[3]
		const addressACrRGlh = accounts[2]
		const addressTgXsWpp = accounts[0]
		const addressSkjNMUw = accounts[3]
		const uintahlkxQm = BigInt("807")
		const 
h3Cgf0 = await Cover_ZapIn_General_V1MSp1Ce6.ZapIn.call(addressSkjNMUw, addressTgXsWpp, addressACrRGlh, addressFgW5Bc3, uintcxnQK78, addressTb3p25o, addressb0nZaf, byteyA0qVXG, {from: accounts[0]});
		const uint16HD88A5H = await Cover_ZapIn_General_V1MSp1Ce6.set_new_goodwill.call(uintahlkxQm, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintPNxYKM = BigInt("1220")
		const Cover_ZapIn_General_V1xHNGILM = await Cover_ZapIn_General_V1.new(uintPNxYKM, {from: accounts[4]});
		const uintCA3hjT4 = BigInt("1481")
		await Cover_ZapIn_General_V1xHNGILM.withdraw.call({from: accounts[4]});
		await Cover_ZapIn_General_V1xHNGILM.stopInEmergency.call({from: accounts[1]});
		const uint16Swssc5 = await Cover_ZapIn_General_V1xHNGILM.set_new_goodwill.call(uintCA3hjT4, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintS1UgFqG = BigInt("1404")
		const Cover_ZapIn_General_V1MSp1Ce6 = await Cover_ZapIn_General_V1.new(uintS1UgFqG, {from: accounts[2]});
		const addressvLfDQS1 = accounts[3]
		const bytejetnqad = "0x0a01001d01170b18000903141011"
		const addressUVco576 = accounts[1]
		const addressfC5NsBb = accounts[1]
		const uintlihBQFy = BigInt("1725")
		const addressueBuC9A = accounts[3]
		const addressDLcAh52 = accounts[2]
		const addressx8bFXVJ = accounts[0]
		const addressDYhEB94 = accounts[3]
		const uintdJuWRmT = BigInt("6")
		const addresshSoQORQ = await Cover_ZapIn_General_V1MSp1Ce6.transferOwnership.call(addressvLfDQS1, {from: accounts[2]});
		const 
h3Cgf0 = await Cover_ZapIn_General_V1MSp1Ce6.ZapIn.call(addressDYhEB94, addressx8bFXVJ, addressDLcAh52, addressueBuC9A, uintlihBQFy, addressfC5NsBb, addressUVco576, bytejetnqad, {from: accounts[0]});
		const uint16HD88A5H = await Cover_ZapIn_General_V1MSp1Ce6.set_new_goodwill.call(uintdJuWRmT, {from: accounts[2]});
		const booln964Su = await Cover_ZapIn_General_V1MSp1Ce6.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});
})