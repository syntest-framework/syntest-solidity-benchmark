const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintYmSKv2z = BigInt("146")
		const Cover_ZapIn_General_V1UsZGlAU = await Cover_ZapIn_General_V1.new(uintYmSKv2z, {from: accounts[2]});
		const bytebRmbe5Y = "0x200c090403120f080d1a001c0f071c1919090705141a0c141c160c0f1b2015"
		const addressKz4v1FK = accounts[1]
		const addressh4Q0NN6 = accounts[2]
		const uintGExQGNo = BigInt("337")
		const addressIcxf1u = accounts[0]
		const addressCWT97n9 = accounts[2]
		const addressKOaje3a = accounts[5]
		const addressQlwP5fE = accounts[2]
		const boolNFTv7OB = await Cover_ZapIn_General_V1UsZGlAU.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1UsZGlAU.toggleContractActive.call({from: accounts[2]});
		await Cover_ZapIn_General_V1UsZGlAU.onlyOwner.call({from: accounts[3]});
		const 
aTc3oY0 = await Cover_ZapIn_General_V1UsZGlAU.ZapIn.call(addressQlwP5fE, addressKOaje3a, addressCWT97n9, addressIcxf1u, uintGExQGNo, addressh4Q0NN6, addressKz4v1FK, bytebRmbe5Y, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintedUIAmn = BigInt("814")
		const Cover_ZapIn_General_V1K7H4gE = await Cover_ZapIn_General_V1.new(uintedUIAmn, {from: accounts[4]});
		const addressILs8r5 = accounts[0]
		const addressSKXljwb = accounts[2]
		const addressG0y7iUr = accounts[2]
		const uintV8wDFlg = BigInt("152")
		const addressq8lxNk7 = accounts[0]
		await Cover_ZapIn_General_V1K7H4gE.toggleContractActive.call({from: accounts[0]});
		const addressSNpNeRL = await Cover_ZapIn_General_V1K7H4gE.toPayable.call(addressILs8r5, {from: "0x0000000000000000000000000000000000000001"});
		const 
Dvc6BgE = await Cover_ZapIn_General_V1K7H4gE._enterPosition.call(addressq8lxNk7, uintV8wDFlg, addressG0y7iUr, addressSKXljwb, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintW14GyyX = BigInt("1736")
		const Cover_ZapIn_General_V17dnvRK = await Cover_ZapIn_General_V1.new(uintW14GyyX, {from: accounts[1]});
		const address8oRWzA = accounts[3]
		const addressKThnYlb = accounts[0]
		const addressWMLTyBv = accounts[5]
		const addressL0WWne = accounts[0]
		const addressxL4CvCv = await Cover_ZapIn_General_V17dnvRK.inCaseTokengetsStuck.call(address8oRWzA, {from: accounts[1]});
		const addressqb20dRn = await Cover_ZapIn_General_V17dnvRK.transferOwnership.call(addressKThnYlb, {from: accounts[2]});
		await Cover_ZapIn_General_V17dnvRK.renounceOwnership.call({from: accounts[1]});
		const 
Gwj1VC8 = await Cover_ZapIn_General_V17dnvRK._getCoverDetails.call(addressWMLTyBv, {from: accounts[4]});
		const addressgMPOpQn = await Cover_ZapIn_General_V17dnvRK.inCaseTokengetsStuck.call(addressL0WWne, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwc1c3mC = BigInt("60")
		const Cover_ZapIn_General_V1QCG63hW = await Cover_ZapIn_General_V1.new(uintwc1c3mC, {from: accounts[0]});
		const uinthqR0Z2I = BigInt("961")
		const bytehnjvjCD = "0x1f030b0c1005161203020a080a0a180d1b1214121b0f0d091f131e031d"
		const addressPpiuqYV = accounts[1]
		const addressWdapOSg = accounts[1]
		const uintdJ7C0xZ = BigInt("1013")
		const addressi8poy1r = "0x0000000000000000000000000000000000000001"
		const addressnXyLsJc = accounts[4]
		const addressOBKUd6R = accounts[2]
		const addressRRfzc6l = "0x0000000000000000000000000000000000000001"
		const uint16w5t2hdv = await Cover_ZapIn_General_V1QCG63hW.set_new_goodwill.call(uinthqR0Z2I, {from: accounts[0]});
		const 
bgi7eZe = await Cover_ZapIn_General_V1QCG63hW.ZapIn.call(addressRRfzc6l, addressOBKUd6R, addressnXyLsJc, addressi8poy1r, uintdJ7C0xZ, addressWdapOSg, addressPpiuqYV, bytehnjvjCD, {from: accounts[3]});
		await Cover_ZapIn_General_V1QCG63hW.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintbvPgBBB = BigInt("60")
		const Cover_ZapIn_General_V1QCG63hW = await Cover_ZapIn_General_V1.new(uintbvPgBBB, {from: accounts[0]});
		const uintBodukeV = BigInt("962")
		const uint16w5t2hdv = await Cover_ZapIn_General_V1QCG63hW.set_new_goodwill.call(uintBodukeV, {from: accounts[0]});
		await Cover_ZapIn_General_V1QCG63hW.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinteaOTzKX = BigInt("60")
		const Cover_ZapIn_General_V1QCG63hW = await Cover_ZapIn_General_V1.new(uinteaOTzKX, {from: accounts[0]});
		const bytesSSkXFv = "0x1f030b0c1005161203020a080a0a180d1b1214121b0f0d091f131e031d"
		const addressnMwuaAj = accounts[1]
		const addressCyjfbuR = accounts[1]
		const uintlr1OMdT = BigInt("1013")
		const addressQijbJEH = "0x0000000000000000000000000000000000000001"
		const addressrMfGq4 = accounts[4]
		const addresshDhGgzq = accounts[3]
		const addressAVhjV59 = "0x0000000000000000000000000000000000000001"
		const addresssGEXmNg = await Cover_ZapIn_General_V1QCG63hW.owner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1QCG63hW.renounceOwnership.call({from: accounts[1]});
		const 
bgi7eZe = await Cover_ZapIn_General_V1QCG63hW.ZapIn.call(addressAVhjV59, addresshDhGgzq, addressrMfGq4, addressQijbJEH, uintlr1OMdT, addressCyjfbuR, addressnMwuaAj, bytesSSkXFv, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintulBHStP = BigInt("60")
		const Cover_ZapIn_General_V1QCG63hW = await Cover_ZapIn_General_V1.new(uintulBHStP, {from: accounts[0]});
		const byteSRXZqld = "0x1f030b0c1005161203020a080a0a180d1b1214121b0f0d091f131e031d"
		const addresshNlxyVJ = accounts[1]
		const addressWmOKd4 = accounts[1]
		const uintSW0xhoZ = BigInt("1013")
		const addresskMWjf0Y = "0x0000000000000000000000000000000000000001"
		const addressPCtQeRr = accounts[4]
		const addressUyyPky1 = accounts[3]
		const addressyWJVKqM = "0x0000000000000000000000000000000000000000"
		const 
bgi7eZe = await Cover_ZapIn_General_V1QCG63hW.ZapIn.call(addressyWJVKqM, addressUyyPky1, addressPCtQeRr, addresskMWjf0Y, uintSW0xhoZ, addressWmOKd4, addresshNlxyVJ, byteSRXZqld, {from: accounts[3]});
		await Cover_ZapIn_General_V1QCG63hW.onlyOwner.call({from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintrAum9Gm = BigInt("203")
		const Cover_ZapIn_General_V1dpyB6Yv = await Cover_ZapIn_General_V1.new(uintrAum9Gm, {from: accounts[0]});
		await Cover_ZapIn_General_V1dpyB6Yv.withdraw.call({from: accounts[0]});
		await Cover_ZapIn_General_V1dpyB6Yv.toggleContractActive.call({from: accounts[4]});
		const addressdOMtres = await Cover_ZapIn_General_V1dpyB6Yv.owner.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintSJkn9V4 = BigInt("136")
		const Cover_ZapIn_General_V1FCzuo4h = await Cover_ZapIn_General_V1.new(uintSJkn9V4, {from: accounts[4]});
		const addressaOIqSCY = accounts[5]
		const uintInCWnT5 = BigInt("529")
		const addressTRgdQt = await Cover_ZapIn_General_V1FCzuo4h.transferOwnership.call(addressaOIqSCY, {from: accounts[4]});
		await Cover_ZapIn_General_V1FCzuo4h.withdraw.call({from: accounts[5]});
		const uint16sR0k77T = await Cover_ZapIn_General_V1FCzuo4h.set_new_goodwill.call(uintInCWnT5, {from: accounts[5]});
	});
})