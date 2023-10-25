const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2BzLlC1p = await YieldFarmLP2.new({from: accounts[1]});
		const uintxhwCPng = BigInt("1897")
		const uintzxrAwQ = BigInt("296")
		const addresslOsN8Po = accounts[5]
		const uintHBwAjgy = BigInt("1153")
		const addressXvkQDJ = accounts[1]
		const uintYxEjg4 = BigInt("572")
		const addressGsQXmDP = accounts[0]
		const uintG6riKVy = await YieldFarmLP2BzLlC1p.getPoolSize.call(uintxhwCPng, {from: accounts[1]});
		const uintOwNV4ya = await YieldFarmLP2BzLlC1p.getEpochStake.call(addresslOsN8Po, uintzxrAwQ, {from: accounts[5]});
		const uintbUGa9Up = await YieldFarmLP2BzLlC1p.getEpochStake.call(addressXvkQDJ, uintHBwAjgy, {from: accounts[3]});
		const uintsEkQtRt = await YieldFarmLP2BzLlC1p.getEpochStake.call(addressGsQXmDP, uintYxEjg4, {from: accounts[4]});

		await expect(YieldFarmLP2BzLlC1p.getPoolSize.call(uintxhwCPng, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2KBOobwx = await YieldFarmLP2.new({from: accounts[1]});
		const addressm40UFm5 = accounts[2]
		const addresszhxNB1h = accounts[0]
		const addressiNN76f5 = accounts[0]
		const addresseN5NvEC = accounts[2]
		const addressoOrSBZD = accounts[4]
		const addressb5wtafw = accounts[2]
		const addressBLcW6nF = accounts[0]
		const addressDzZPHxH = accounts[0]
		const addressCpki48q = accounts[3]
		const uintCzUyuaq = await YieldFarmLP2KBOobwx.claimable.call(addressm40UFm5, {from: accounts[2]});
		const addressWPN7Qet = await YieldFarmLP2KBOobwx.initialize.call(addressoOrSBZD, addresseN5NvEC, addressiNN76f5, addresszhxNB1h, {from: accounts[3]});
		const uintMgbxaO = await YieldFarmLP2KBOobwx.getCurrentEpoch.call({from: accounts[2]});
		const addressH7bsQdv = await YieldFarmLP2KBOobwx.initialize.call(addressCpki48q, addressDzZPHxH, addressBLcW6nF, addressb5wtafw, {from: accounts[3]});

		await expect(YieldFarmLP2KBOobwx.claimable.call(addressm40UFm5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2jjen8hy = await YieldFarmLP2.new({from: accounts[3]});
		const uintbyb5fkH = await YieldFarmLP2jjen8hy.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});
		const uintzTJJkk = await YieldFarmLP2jjen8hy.massHarvest.call({from: accounts[5]});

		await expect(YieldFarmLP2jjen8hy.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ZyKpvJp = await YieldFarmLP2.new({from: accounts[3]});
		const uintF1dXo5H = BigInt("1812")
		const uintGQfZIqU = BigInt("955")
		const uintRPkKqyU = BigInt("286")
		const uintDnlBGVI = await YieldFarmLP2ZyKpvJp.harvest.call(uintF1dXo5H, {from: accounts[0]});
		const uintV5hHJSA = await YieldFarmLP2ZyKpvJp.getPoolSize.call(uintGQfZIqU, {from: accounts[2]});
		const uintTRjJur9 = await YieldFarmLP2ZyKpvJp.getCurrentEpoch.call({from: accounts[0]});
		const uintLWYWnzN = await YieldFarmLP2ZyKpvJp.userLastEpochIdHarvested.call({from: accounts[1]});
		const uintMvxqcr5 = await YieldFarmLP2ZyKpvJp.massHarvest.call({from: accounts[3]});
		const uintkeE4pJK = await YieldFarmLP2ZyKpvJp.getPoolSize.call(uintRPkKqyU, {from: accounts[3]});

		await expect(YieldFarmLP2ZyKpvJp.harvest.call(uintF1dXo5H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2dgrujs = await YieldFarmLP2.new({from: accounts[4]});
		const uintm0d8fVb = BigInt("516")
		const uinteHA306g = await YieldFarmLP2dgrujs.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
		const uintXLwyNpz = await YieldFarmLP2dgrujs.massHarvest.call({from: accounts[0]});
		const uintVoVPqsH = await YieldFarmLP2dgrujs.getPoolSize.call(uintm0d8fVb, {from: accounts[0]});

		await expect(YieldFarmLP2dgrujs.massHarvest.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2m2EWUY4 = await YieldFarmLP2.new({from: accounts[0]});
		const addressMaiKGMQ = accounts[4]
		const addressgmFS9yJ = accounts[2]
		const addressiQJL92v = accounts[4]
		const addressB7ZKPL = accounts[3]
		const uintPCaX577 = BigInt("1106")
		const addressyYNmC1a = accounts[3]
		const uintk0VRCcI = BigInt("1297")
		const addressuT2HSa8 = await YieldFarmLP2m2EWUY4.initialize.call(addressB7ZKPL, addressiQJL92v, addressgmFS9yJ, addressMaiKGMQ, {from: accounts[1]});
		const uintaaQiP5x = await YieldFarmLP2m2EWUY4.getEpochStake.call(addressyYNmC1a, uintPCaX577, {from: accounts[1]});
		const uintktjxpPd = await YieldFarmLP2m2EWUY4.harvest.call(uintk0VRCcI, {from: accounts[0]});

		await expect(YieldFarmLP2m2EWUY4.initialize.call(addressB7ZKPL, addressiQJL92v, addressgmFS9yJ, addressMaiKGMQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2jjen8hy = await YieldFarmLP2.new({from: accounts[3]});
		const uintT1g65ju = BigInt("215")
		const addressF9N2QYK = accounts[4]
		const uintVjjthOc = await YieldFarmLP2jjen8hy.getEpochStake.call(addressF9N2QYK, uintT1g65ju, {from: accounts[3]});
		const uintbyb5fkH = await YieldFarmLP2jjen8hy.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2jjen8hy.getEpochStake.call(addressF9N2QYK, uintT1g65ju, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ACRlugp = await YieldFarmLP2.new({from: accounts[1]});
		const addressbUoAgVn = accounts[5]
		const uintwlRO5H6 = BigInt("1316")
		const uintmYUTxXk = BigInt("1526")
		const addressgUu3uuQ = accounts[1]
		const uintWsIEm7y = await YieldFarmLP2ACRlugp.userLastEpochIdHarvested.call({from: accounts[2]});
		const uintohkl1W6 = await YieldFarmLP2ACRlugp.claimable.call(addressbUoAgVn, {from: accounts[2]});
		const uinthdBV4w9 = await YieldFarmLP2ACRlugp.harvest.call(uintwlRO5H6, {from: accounts[4]});
		const uintL3MppjQ = await YieldFarmLP2ACRlugp.harvest.call(uintmYUTxXk, {from: accounts[3]});
		const uintNg7JDCW = await YieldFarmLP2ACRlugp.claimable.call(addressgUu3uuQ, {from: accounts[4]});

		assert.equal(uintWsIEm7y, BigInt("0"))
		await expect(YieldFarmLP2ACRlugp.claimable.call(addressbUoAgVn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2HEgzs4h = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressC8m5Tgs = "0x0000000000000000000000000000000000000001"
		const addressmSRzwKu = accounts[1]
		const addressq3aYhb = accounts[0]
		const addressrIpSNl = accounts[5]
		const uintUo5RStJ = BigInt("1579")
		const uintOG71M3c = await YieldFarmLP2HEgzs4h.userLastEpochIdHarvested.call({from: accounts[1]});
		const addressx0v7uGq = await YieldFarmLP2HEgzs4h.initialize.call(addressrIpSNl, addressq3aYhb, addressmSRzwKu, addressC8m5Tgs, {from: accounts[4]});
		const uintACvuFS = await YieldFarmLP2HEgzs4h.getPoolSize.call(uintUo5RStJ, {from: accounts[4]});
		const uintQnic9YX = await YieldFarmLP2HEgzs4h.massHarvest.call({from: accounts[3]});
		const uintzlOj4xu = await YieldFarmLP2HEgzs4h.getCurrentEpoch.call({from: accounts[3]});
	});
})