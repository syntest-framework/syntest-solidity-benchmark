const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintxkypQul = BigInt("734")
		const BancorV2_ZapIn_General_V1_1Q5vdVyR = await BancorV2_ZapIn_General_V1_1.new(uintxkypQul, {from: "0x0000000000000000000000000000000000000001"});
		const addressLjbKjAz = accounts[2]
		const uintfRkCwtm = BigInt("711")
		const addresssDER1y9 = await BancorV2_ZapIn_General_V1_1Q5vdVyR.toPayable.call(addressLjbKjAz, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1Q5vdVyR.toggleContractActive.call({from: accounts[3]});
		const boolO4ElmOO = await BancorV2_ZapIn_General_V1_1Q5vdVyR.isOwner.call({from: accounts[3]});
		const uint16s80og1i = await BancorV2_ZapIn_General_V1_1Q5vdVyR.set_new_goodwill.call(uintfRkCwtm, {from: accounts[0]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintajjEZaC = BigInt("635")
		const BancorV2_ZapIn_General_V1_1YVSnisH = await BancorV2_ZapIn_General_V1_1.new(uintajjEZaC, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1YVSnisH.onlyOwner.call({from: accounts[2]});
//		const boolMWesFnC = await BancorV2_ZapIn_General_V1_1YVSnisH.isOwner.call({from: accounts[0]});
//		const addresss0v9aJj = await BancorV2_ZapIn_General_V1_1YVSnisH.owner.call({from: accounts[2]});
//		const addressUoMWOIG = await BancorV2_ZapIn_General_V1_1YVSnisH.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1YVSnisH.nonReentrant.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1YVSnisH.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1YVSnisH.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintrzd37j = BigInt("2034")
		const BancorV2_ZapIn_General_V1_1H9dQ3uf = await BancorV2_ZapIn_General_V1_1.new(uintrzd37j, {from: accounts[3]});
		const uintl81Zzk6 = BigInt("1856")
//		await BancorV2_ZapIn_General_V1_1H9dQ3uf.toggleContractActive.call({from: accounts[1]});
//		const uint16hZZRRD = await BancorV2_ZapIn_General_V1_1H9dQ3uf.set_new_goodwill.call(uintl81Zzk6, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1H9dQ3uf.nonReentrant.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1H9dQ3uf.withdraw.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1H9dQ3uf.toggleContractActive.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintpl4uxX7 = BigInt("1316")
		const BancorV2_ZapIn_General_V1_1lxG3vsc = await BancorV2_ZapIn_General_V1_1.new(uintpl4uxX7, {from: accounts[1]});
		const addressWANz3u4 = accounts[1]
		const addressfb9fnqV = await BancorV2_ZapIn_General_V1_1lxG3vsc.owner.call({from: accounts[4]});
//		const addressOqDh3z = await BancorV2_ZapIn_General_V1_1lxG3vsc.toPayable.call(addressWANz3u4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressfb9fnqV, 0x3dc1D17975BCA34804117779bDf69Ea38Fa613bA)
		await expect(BancorV2_ZapIn_General_V1_1lxG3vsc.toPayable.call(addressWANz3u4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintGqV7RBO = BigInt("1316")
		const BancorV2_ZapIn_General_V1_1lxG3vsc = await BancorV2_ZapIn_General_V1_1.new(uintGqV7RBO, {from: accounts[1]});
		const byteEdbWnFD = "0x071e0a051018161313170a131812020f16040e011a08090f1400060818"
		const addresse4jgfgm = "0x0000000000000000000000000000000000000001"
		const addresseAo0u2P = accounts[0]
		const uintarpowZD = BigInt("140")
		const uintNkjw3w = BigInt("1004")
		const addressVS1OmJp = accounts[1]
		const addressUePF9bd = accounts[1]
		const addressZiPNhxO = accounts[2]
		const address4sXLuT = accounts[1]
//		const uint256fO7dNtv = await BancorV2_ZapIn_General_V1_1lxG3vsc.ZapInSingleSided.call(addressZiPNhxO, addressUePF9bd, addressVS1OmJp, uintNkjw3w, uintarpowZD, addresseAo0u2P, addresse4jgfgm, byteEdbWnFD, {from: accounts[0]});
//		const addressOqDh3z = await BancorV2_ZapIn_General_V1_1lxG3vsc.toPayable.call(address4sXLuT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1lxG3vsc.ZapInSingleSided.call(addressZiPNhxO, addressUePF9bd, addressVS1OmJp, uintNkjw3w, uintarpowZD, addresseAo0u2P, addresse4jgfgm, byteEdbWnFD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintGNyc1n = BigInt("1316")
		const BancorV2_ZapIn_General_V1_1lxG3vsc = await BancorV2_ZapIn_General_V1_1.new(uintGNyc1n, {from: accounts[1]});
		const addressZ5Iz7OU = accounts[1]
//		await BancorV2_ZapIn_General_V1_1lxG3vsc.withdraw.call({from: accounts[1]});
//		const addressOqDh3z = await BancorV2_ZapIn_General_V1_1lxG3vsc.toPayable.call(addressZ5Iz7OU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1lxG3vsc.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintA7EHVgo = BigInt("1316")
		const BancorV2_ZapIn_General_V1_1lxG3vsc = await BancorV2_ZapIn_General_V1_1.new(uintA7EHVgo, {from: accounts[1]});
		const uintWTwOXwL = BigInt("192")
		const byteai6RA5s = "0x071e0a051018161313170a131812020f16040e011a08090f1400060818"
		const addressg2v66kX = "0x0000000000000000000000000000000000000001"
		const addressUduttSJ = accounts[0]
		const uintX6HDgE8 = BigInt("140")
		const uintJ6VnHFX = BigInt("1015")
		const addressOKnV2tG = accounts[1]
		const addressYfXhC6P = accounts[1]
		const addressIWCLX4F = accounts[2]
		const uint16mJIBXZ5 = await BancorV2_ZapIn_General_V1_1lxG3vsc.set_new_goodwill.call(uintWTwOXwL, {from: accounts[1]});
//		const uint256fO7dNtv = await BancorV2_ZapIn_General_V1_1lxG3vsc.ZapInSingleSided.call(addressIWCLX4F, addressYfXhC6P, addressOKnV2tG, uintJ6VnHFX, uintX6HDgE8, addressUduttSJ, addressg2v66kX, byteai6RA5s, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1lxG3vsc.ZapInSingleSided.call(addressIWCLX4F, addressYfXhC6P, addressOKnV2tG, uintJ6VnHFX, uintX6HDgE8, addressUduttSJ, addressg2v66kX, byteai6RA5s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintPqddmct = BigInt("1316")
		const BancorV2_ZapIn_General_V1_1lxG3vsc = await BancorV2_ZapIn_General_V1_1.new(uintPqddmct, {from: accounts[1]});
		const addressBfDIcut = accounts[3]
		const byteQOlPbqk = "0x071e0a051018161313170a131812020f16040e011a08090f1400060818"
		const addressRfFjEbg = "0x0000000000000000000000000000000000000001"
		const addressTGajkaB = accounts[1]
		const uintA4frS68 = BigInt("140")
		const uinttDw2ur = BigInt("1004")
		const addresst9DeHNi = accounts[1]
		const addressDCKKnh = accounts[1]
		const addressdkfL8No = accounts[2]
//		const addressu230LdJ = await BancorV2_ZapIn_General_V1_1lxG3vsc.inCaseTokengetsStuck.call(addressBfDIcut, {from: accounts[1]});
//		const uint256fO7dNtv = await BancorV2_ZapIn_General_V1_1lxG3vsc.ZapInSingleSided.call(addressdkfL8No, addressDCKKnh, addresst9DeHNi, uinttDw2ur, uintA4frS68, addressTGajkaB, addressRfFjEbg, byteQOlPbqk, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1lxG3vsc.inCaseTokengetsStuck.call(addressBfDIcut, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintidxewKG = BigInt("813")
		const BancorV2_ZapIn_General_V1_1WpYqAAj = await BancorV2_ZapIn_General_V1_1.new(uintidxewKG, {from: accounts[4]});
		const addressym6Mv99 = accounts[5]
		const addressHnGVy0v = accounts[2]
		const addresstqW1Agl = await BancorV2_ZapIn_General_V1_1WpYqAAj.transferOwnership.call(addressym6Mv99, {from: accounts[4]});
//		const addresszl9iSY = await BancorV2_ZapIn_General_V1_1WpYqAAj.inCaseTokengetsStuck.call(addressHnGVy0v, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1WpYqAAj.withdraw.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1WpYqAAj.inCaseTokengetsStuck.call(addressHnGVy0v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintkxRkYw = BigInt("1316")
		const BancorV2_ZapIn_General_V1_1lxG3vsc = await BancorV2_ZapIn_General_V1_1.new(uintkxRkYw, {from: accounts[1]});
		const addressrpSC99V = accounts[0]
//		await BancorV2_ZapIn_General_V1_1lxG3vsc.renounceOwnership.call({from: accounts[1]});
//		const addressOqDh3z = await BancorV2_ZapIn_General_V1_1lxG3vsc.toPayable.call(addressrpSC99V, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1lxG3vsc.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJbfAsmV = BigInt("1316")
		const BancorV2_ZapIn_General_V1_1lxG3vsc = await BancorV2_ZapIn_General_V1_1.new(uintJbfAsmV, {from: accounts[1]});
		const uintXBb9E17 = BigInt("1075")
		const byteMxaBpWn = "0x071e0a051018161313170a131812020f16040e011a08090f1400060818"
		const addressIMjByV = "0x0000000000000000000000000000000000000001"
		const addressvMxCGD2 = accounts[0]
		const uintMnMudU7 = BigInt("140")
		const uinttyxvcYH = BigInt("1004")
		const addressid3u1LL = accounts[1]
		const addressfjZDno9 = accounts[1]
		const addressr0XpREw = accounts[3]
//		await BancorV2_ZapIn_General_V1_1lxG3vsc.toggleContractActive.call({from: accounts[1]});
//		const uint16GgA5xuh = await BancorV2_ZapIn_General_V1_1lxG3vsc.set_new_goodwill.call(uintXBb9E17, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256fO7dNtv = await BancorV2_ZapIn_General_V1_1lxG3vsc.ZapInSingleSided.call(addressr0XpREw, addressfjZDno9, addressid3u1LL, uinttyxvcYH, uintMnMudU7, addressvMxCGD2, addressIMjByV, byteMxaBpWn, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1lxG3vsc.toggleContractActive.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})