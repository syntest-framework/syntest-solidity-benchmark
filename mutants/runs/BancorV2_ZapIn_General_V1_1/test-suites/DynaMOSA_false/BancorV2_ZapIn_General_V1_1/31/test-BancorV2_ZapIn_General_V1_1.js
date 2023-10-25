const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintxbUExgI = BigInt("637")
		const BancorV2_ZapIn_General_V1_1kR942Y2 = await BancorV2_ZapIn_General_V1_1.new(uintxbUExgI, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1kR942Y2.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1kR942Y2.nonReentrant.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1kR942Y2.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintbbMi3s9 = BigInt("450")
		const BancorV2_ZapIn_General_V1_1JoYyA8O = await BancorV2_ZapIn_General_V1_1.new(uintbbMi3s9, {from: "0x0000000000000000000000000000000000000001"});
		const uintbzgyRLu = BigInt("1722")
		const address4kUzyt = accounts[2]
		const uint16He9zQxw = await BancorV2_ZapIn_General_V1_1JoYyA8O.set_new_goodwill.call(uintbzgyRLu, {from: accounts[4]});
		const addressPvnBvlf = await BancorV2_ZapIn_General_V1_1JoYyA8O.inCaseTokengetsStuck.call(address4kUzyt, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1JoYyA8O.onlyOwner.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1JoYyA8O.toggleContractActive.call({from: accounts[5]});
		const addresselJGjdP = await BancorV2_ZapIn_General_V1_1JoYyA8O.owner.call({from: accounts[1]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintPT6kTuO = BigInt("1064")
		const BancorV2_ZapIn_General_V1_1rVrHWg3 = await BancorV2_ZapIn_General_V1_1.new(uintPT6kTuO, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1rVrHWg3.onlyOwner.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1rVrHWg3.stopInEmergency.call({from: accounts[3]});
		const boolY8CmIJs = await BancorV2_ZapIn_General_V1_1rVrHWg3.isOwner.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1rVrHWg3.renounceOwnership.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1rVrHWg3.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintWtrsEXt = BigInt("1663")
		const BancorV2_ZapIn_General_V1_1dDOkLEn = await BancorV2_ZapIn_General_V1_1.new(uintWtrsEXt, {from: accounts[4]});
		const byteec1MkZQ = "0x191609030505200b161909131d1c0e"
		const addressKb8jFum = accounts[4]
		const addressbGCNtmk = accounts[3]
		const uintDPVeyZV = BigInt("1314")
		const uintqZwRrl2 = BigInt("426")
		const addressjzrrS5y = accounts[0]
		const addressrrH0AVQ = accounts[2]
		const addressN0jUHdR = accounts[2]
		const uint256X3RJWDB = await BancorV2_ZapIn_General_V1_1dDOkLEn.ZapInSingleSided.call(addressN0jUHdR, addressrrH0AVQ, addressjzrrS5y, uintqZwRrl2, uintDPVeyZV, addressbGCNtmk, addressKb8jFum, byteec1MkZQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolfncAk3f = await BancorV2_ZapIn_General_V1_1dDOkLEn.isOwner.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1dDOkLEn.toggleContractActive.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1dDOkLEn.ZapInSingleSided.call(addressN0jUHdR, addressrrH0AVQ, addressjzrrS5y, uintqZwRrl2, uintDPVeyZV, addressbGCNtmk, addressKb8jFum, byteec1MkZQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintGHNs2Yu = BigInt("1703")
		const BancorV2_ZapIn_General_V1_1gp2hE18 = await BancorV2_ZapIn_General_V1_1.new(uintGHNs2Yu, {from: accounts[1]});
		const byteqICZlj3 = "0x01110f0c19120607200912060b"
		const addressSyvhMko = accounts[0]
		const addressgP306si = accounts[4]
		const uintAfEkUYp = BigInt("699")
		const uintM925lJT = BigInt("495")
		const addressO6vbZ1I = accounts[1]
		const addressF1jMF3T = accounts[2]
		const addresssXi9tGy = accounts[1]
		const addressHIaF9B9 = await BancorV2_ZapIn_General_V1_1gp2hE18.owner.call({from: accounts[0]});
		const uint256EnBljf6 = await BancorV2_ZapIn_General_V1_1gp2hE18.ZapInSingleSided.call(addresssXi9tGy, addressF1jMF3T, addressO6vbZ1I, uintM925lJT, uintAfEkUYp, addressgP306si, addressSyvhMko, byteqICZlj3, {from: accounts[4]});
		const addressZt0mTnc = await BancorV2_ZapIn_General_V1_1gp2hE18.owner.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1gp2hE18.renounceOwnership.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1gp2hE18.withdraw.call({from: accounts[0]});

		assert.equal(addressHIaF9B9, 0x5055d657f1744b3Ec99ab5a76Ec7146BB378b311)
		await expect(BancorV2_ZapIn_General_V1_1gp2hE18.ZapInSingleSided.call(addresssXi9tGy, addressF1jMF3T, addressO6vbZ1I, uintM925lJT, uintAfEkUYp, addressgP306si, addressSyvhMko, byteqICZlj3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintGoxr1qn = BigInt("1729")
		const BancorV2_ZapIn_General_V1_1vXub3Rg = await BancorV2_ZapIn_General_V1_1.new(uintGoxr1qn, {from: accounts[2]});
		const addressTP44FtJ = accounts[2]
		const addressj3ZYp2l = await BancorV2_ZapIn_General_V1_1vXub3Rg.inCaseTokengetsStuck.call(addressTP44FtJ, {from: accounts[2]});
		const boolHW5k8Ul = await BancorV2_ZapIn_General_V1_1vXub3Rg.isOwner.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1vXub3Rg.inCaseTokengetsStuck.call(addressTP44FtJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintCU1Uf6L = BigInt("1703")
		const BancorV2_ZapIn_General_V1_1gp2hE18 = await BancorV2_ZapIn_General_V1_1.new(uintCU1Uf6L, {from: accounts[1]});
		const byteti1wYq = "0x01110f0c19120607200912060b"
		const addressqgtcFZB = accounts[0]
		const addresshBedLKT = accounts[4]
		const uintErxKzHI = BigInt("699")
		const uintHuF5KCi = BigInt("511")
		const addressHHw3GhJ = accounts[1]
		const addressCQ5xixR = accounts[2]
		const addressyio1wT = accounts[1]
		await BancorV2_ZapIn_General_V1_1gp2hE18.withdraw.call({from: accounts[1]});
		const addressHIaF9B9 = await BancorV2_ZapIn_General_V1_1gp2hE18.owner.call({from: accounts[0]});
		const uint256EnBljf6 = await BancorV2_ZapIn_General_V1_1gp2hE18.ZapInSingleSided.call(addressyio1wT, addressCQ5xixR, addressHHw3GhJ, uintHuF5KCi, uintErxKzHI, addresshBedLKT, addressqgtcFZB, byteti1wYq, {from: accounts[4]});
		const addressZt0mTnc = await BancorV2_ZapIn_General_V1_1gp2hE18.owner.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1gp2hE18.nonReentrant.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1gp2hE18.renounceOwnership.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1gp2hE18.renounceOwnership.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1gp2hE18.withdraw.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1gp2hE18.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})