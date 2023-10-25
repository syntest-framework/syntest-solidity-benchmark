const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsz00Y4K9 = await UFragments.new({from: accounts[2]});
		const intxBT2Kmg = BigInt("-1955")
		const intw7mQ0re = BigInt("-171")
		const uintye6f2I2 = BigInt("607")
		const addressIORSWNe = "0x0000000000000000000000000000000000000001"
		const uint8Obed3uD = await UFragmentsz00Y4K9.decimals.call({from: accounts[1]});
		const uint8oHqawIg = await UFragmentsz00Y4K9.decimals.call({from: accounts[0]});
		const int256cA8TLHX = await UFragmentsz00Y4K9.div.call(intw7mQ0re, intxBT2Kmg, {from: accounts[3]});
		const addressL53DmQ = await UFragmentsz00Y4K9.initRebase.call(addressIORSWNe, uintye6f2I2, {from: accounts[4]});

		assert.equal(uint8Obed3uD, BigInt("0"))
		assert.equal(uint8oHqawIg, BigInt("0"))
		await expect(UFragmentsz00Y4K9.div.call(intw7mQ0re, intxBT2Kmg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentspI7CaXh = await UFragments.new({from: accounts[4]});
		const uintoAK9qMP = BigInt("1034")
		const addressjYXp2bQ = "0x0000000000000000000000000000000000000001"
		const inte2zXQxn = BigInt("663")
		const int6hersw = BigInt("-880")
		const boolSWcraTy = await UFragmentspI7CaXh.isOwner.call({from: accounts[1]});
		const addresszL0YgTG = await UFragmentspI7CaXh.initRebase.call(addressjYXp2bQ, uintoAK9qMP, {from: accounts[1]});
		const int256x4pUlsN = await UFragmentspI7CaXh.sub.call(int6hersw, inte2zXQxn, {from: accounts[1]});

		assert.equal(boolSWcraTy, false)
		await expect(UFragmentspI7CaXh.initRebase.call(addressjYXp2bQ, uintoAK9qMP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsbVDqhZy = await UFragments.new({from: accounts[4]});
		const addressOysqp4o = accounts[3]
		const uintqUX7aN2 = BigInt("954")
		const addressCAJhrdh = accounts[4]
		const uinttEyzsMK = BigInt("1604")
		const addressAbpJ62s = accounts[2]
		const addressdgOHdyN = accounts[2]
		const uint256LtkB7PX = await UFragmentsbVDqhZy.balanceOf.call(addressOysqp4o, {from: accounts[2]});
		const boolKaR61gh = await UFragmentsbVDqhZy.transfer.call(addressCAJhrdh, uintqUX7aN2, {from: accounts[2]});
		const boollNWQzTo = await UFragmentsbVDqhZy.isOwner.call({from: accounts[1]});
		const boolTrLWAOz = await UFragmentsbVDqhZy.transferFrom.call(addressdgOHdyN, addressAbpJ62s, uinttEyzsMK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256LtkB7PX, BigInt("0"))
		await expect(UFragmentsbVDqhZy.transfer.call(addressCAJhrdh, uintqUX7aN2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstUs0Vt = await UFragments.new({from: accounts[4]});
		const intbIDTKNj = BigInt("-1123")
		const intrSfy34i = BigInt("1873")
		const intmg9ND01 = BigInt("606")
		const intFKk4eJn = BigInt("-509")
		const addressBKLxoZt = accounts[5]
		const uint256OZkhrV3 = await UFragmentstUs0Vt.totalSupply.call({from: accounts[0]});
		const boolwV3wy7K = await UFragmentstUs0Vt.rebaseTimeInfo.call({from: accounts[1]});
		const int256AdyoNZH = await UFragmentstUs0Vt.add.call(intrSfy34i, intbIDTKNj, {from: accounts[4]});
		const int256ojCvr0F = await UFragmentstUs0Vt.sub.call(intFKk4eJn, intmg9ND01, {from: accounts[4]});
		const addressx22htYA = await UFragmentstUs0Vt.transferOwnership.call(addressBKLxoZt, {from: accounts[4]});
		const booljz11We = await UFragmentstUs0Vt.isOwner.call({from: accounts[4]});

		assert.equal(uint256OZkhrV3, BigInt("0"))
		await expect(UFragmentstUs0Vt.add.call(intrSfy34i, intbIDTKNj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsZrHKo2N = await UFragments.new({from: accounts[4]});
		const uintyKJdRFT = BigInt("1420")
		const addressAWNlzDL = accounts[5]
		const stringyc6rqeb = await UFragmentsZrHKo2N.symbol.call({from: accounts[4]});
		const boolGuAz8PZ = await UFragmentsZrHKo2N.approve.call(addressAWNlzDL, uintyKJdRFT, {from: accounts[3]});

		assert.equal(boolGuAz8PZ, true)
		assert.equal(stringyc6rqeb, "")
	});

	it('test for UFragments', async () => {
		const UFragmentsVoHgGd7 = await UFragments.new({from: accounts[5]});
		const uintxf3ImQe = BigInt("118")
		const addressdJ9sK0g = accounts[0]
		const addressbpOMd5r = accounts[1]
		const addresshGhZzB = accounts[3]
		const uintZ05jYjb = BigInt("620")
		const addressjg56LZz = accounts[0]
		const boolmDLedyN = await UFragmentsVoHgGd7.transferFrom.call(addressbpOMd5r, addressdJ9sK0g, uintxf3ImQe, {from: accounts[3]});
		const boolCUQyWvw = await UFragmentsVoHgGd7.rebaseTimeInfo.call({from: accounts[0]});
		const addresseEPF7hx = await UFragmentsVoHgGd7.initialize.call(addresshGhZzB, {from: accounts[2]});
		const boolZq39PE2 = await UFragmentsVoHgGd7.approve.call(addressjg56LZz, uintZ05jYjb, {from: accounts[1]});
		await UFragmentsVoHgGd7.initializer.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UFragmentsVoHgGd7.transferFrom.call(addressbpOMd5r, addressdJ9sK0g, uintxf3ImQe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstUs0Vt = await UFragments.new({from: accounts[4]});
		const intV1ImzfO = BigInt("-1123")
		const intkKsApb = BigInt("1873")
		const intef8KqRH = BigInt("606")
		const intGPN88q = BigInt("-509")
		const addressE8IVSAh = accounts[5]
		const stringbuNSD2y = await UFragmentstUs0Vt.name.call({from: accounts[3]});
		const uint256OZkhrV3 = await UFragmentstUs0Vt.totalSupply.call({from: accounts[0]});
		const boolwV3wy7K = await UFragmentstUs0Vt.rebaseTimeInfo.call({from: accounts[1]});
		const int256AdyoNZH = await UFragmentstUs0Vt.add.call(intkKsApb, intV1ImzfO, {from: accounts[4]});
		const boolmK72UBe = await UFragmentstUs0Vt.rebaseTimeInfo.call({from: accounts[1]});
		const int256ojCvr0F = await UFragmentstUs0Vt.sub.call(intGPN88q, intef8KqRH, {from: accounts[4]});
		const addressx22htYA = await UFragmentstUs0Vt.transferOwnership.call(addressE8IVSAh, {from: accounts[4]});
		const booljz11We = await UFragmentstUs0Vt.isOwner.call({from: accounts[4]});

		assert.equal(stringbuNSD2y, "")
		assert.equal(uint256OZkhrV3, BigInt("0"))
		await expect(UFragmentstUs0Vt.add.call(intkKsApb, intV1ImzfO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsVoHgGd7 = await UFragments.new({from: accounts[5]});
		const addressuHYoe53 = accounts[2]
		const uintvV0C9tB = BigInt("118")
		const addressaQvYkNj = accounts[0]
		const addressX1sc2lg = accounts[1]
		const addressFsDRPrD = accounts[3]
		const uintUNfKC27 = BigInt("620")
		const addressQcqjgnT = accounts[0]
		const address71taFx = await UFragmentsVoHgGd7.initialize.call(addressuHYoe53, {from: accounts[2]});
		const boolmDLedyN = await UFragmentsVoHgGd7.transferFrom.call(addressX1sc2lg, addressaQvYkNj, uintvV0C9tB, {from: accounts[3]});
		const boolCUQyWvw = await UFragmentsVoHgGd7.rebaseTimeInfo.call({from: accounts[0]});
		const addresseEPF7hx = await UFragmentsVoHgGd7.initialize.call(addressFsDRPrD, {from: accounts[2]});
		const boolZq39PE2 = await UFragmentsVoHgGd7.approve.call(addressQcqjgnT, uintUNfKC27, {from: accounts[1]});
		await UFragmentsVoHgGd7.initializer.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UFragmentsVoHgGd7.initialize.call(addressuHYoe53, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentslhYbTa = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intLUwvpuh = BigInt("-310")
		const inthku3m83 = BigInt("420")
		const int256S6XdCm = await UFragmentslhYbTa.sub.call(inthku3m83, intLUwvpuh, {from: accounts[5]});
		const uint8VMCCbf = await UFragmentslhYbTa.decimals.call({from: accounts[2]});
	});

	it('test for UFragments', async () => {
		const UFragmentsbVDqhZy = await UFragments.new({from: accounts[4]});
		const addressHb83jYW = accounts[0]
		const addressXcBpwbS = accounts[0]
		const addressN2PHfff = accounts[3]
		const uintytoGNR4 = BigInt("954")
		const addressvVj25O = accounts[4]
		const uintFXVHNA = BigInt("1604")
		const addressMmJf3a = accounts[2]
		const addressG2n6JOG = accounts[2]
		const uint256qQJSGC9 = await UFragmentsbVDqhZy.allowance.call(addressXcBpwbS, addressHb83jYW, {from: accounts[0]});
		const uint256LtkB7PX = await UFragmentsbVDqhZy.balanceOf.call(addressN2PHfff, {from: accounts[2]});
		const boolKaR61gh = await UFragmentsbVDqhZy.transfer.call(addressvVj25O, uintytoGNR4, {from: accounts[2]});
		const boollNWQzTo = await UFragmentsbVDqhZy.isOwner.call({from: accounts[1]});
		const boolTrLWAOz = await UFragmentsbVDqhZy.transferFrom.call(addressG2n6JOG, addressMmJf3a, uintFXVHNA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256LtkB7PX, BigInt("0"))
		assert.equal(uint256qQJSGC9, BigInt("0"))
		await expect(UFragmentsbVDqhZy.transfer.call(addressvVj25O, uintytoGNR4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentspR2zGCn = await UFragments.new({from: accounts[3]});
		const addresseemnGbf = accounts[2]
		const addressb81xf96 = accounts[0]
		const uint256zWMqYW = await UFragmentspR2zGCn.calRebase.call({from: accounts[0]});
		const stringdHzBu01 = await UFragmentspR2zGCn.name.call({from: accounts[1]});
		const boolhuQfbJO = await UFragmentspR2zGCn.rebaseTimeInfo.call({from: accounts[2]});
		const uint256sYz2BpZ = await UFragmentspR2zGCn.allowance.call(addressb81xf96, addresseemnGbf, {from: accounts[2]});

		await expect(UFragmentspR2zGCn.calRebase.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsbVDqhZy = await UFragments.new({from: accounts[4]});
		const addresswwGIl2e = accounts[3]
		const uintncCOwpw = BigInt("154")
		const stringK2KEFNK = "OfeMRnvWC4XuVjpJQ6JodTCWusm5CPLSa8zat6Y6k2osr1MLJbPfXu3B"
		const stringar1HWAB = "omUXN0x22WXSWCvb9qS2FnOhqL"
		const uintlfaGpsP = BigInt("226")
		const addressQ1xfUs = accounts[3]
		const addressCGx8fbE = accounts[5]
		const uint4b4Jqj = BigInt("1941")
		const addressuGHZbIu = accounts[4]
		const addressSuSPY22 = accounts[2]
		const addresscHw3NQ4 = accounts[2]
		const uintjWS1yR = BigInt("1604")
		const addressZZnEEug = accounts[2]
		const addressg3mQWgO = accounts[2]
		const uint256LtkB7PX = await UFragmentsbVDqhZy.balanceOf.call(addresswwGIl2e, {from: accounts[2]});
		const stringVoVeiA = await UFragmentsbVDqhZy.initialize.call(stringar1HWAB, stringK2KEFNK, uintncCOwpw, {from: accounts[2]});
		const boolY7dCgo = await UFragmentsbVDqhZy.transferFrom.call(addressCGx8fbE, addressQ1xfUs, uintlfaGpsP, {from: accounts[4]});
		const stringekhftci = await UFragmentsbVDqhZy.symbol.call({from: accounts[4]});
		const boolKaR61gh = await UFragmentsbVDqhZy.transfer.call(addressuGHZbIu, uint4b4Jqj, {from: accounts[2]});
		const addressTpE2c1x = await UFragmentsbVDqhZy.initialize.call(addressSuSPY22, {from: accounts[4]});
		const addressUyWH0kJ = await UFragmentsbVDqhZy.initialize.call(addresscHw3NQ4, {from: accounts[2]});
		const boolTrLWAOz = await UFragmentsbVDqhZy.transferFrom.call(addressg3mQWgO, addressZZnEEug, uintjWS1yR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256LtkB7PX, BigInt("0"))
		await expect(UFragmentsbVDqhZy.transferFrom.call(addressCGx8fbE, addressQ1xfUs, uintlfaGpsP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsZrHKo2N = await UFragments.new({from: accounts[4]});
		const uintpAbs812 = BigInt("1420")
		const addressrY4Tx10 = accounts[2]
		const addresse3JMmaQ = accounts[0]
		const stringQtra1yZ = await UFragmentsZrHKo2N.name.call({from: accounts[2]});
		const addressP8jjQcn = await UFragmentsZrHKo2N.owner.call({from: accounts[3]});
		const boolGuAz8PZ = await UFragmentsZrHKo2N.approve.call(addressrY4Tx10, uintpAbs812, {from: accounts[3]});
		const addressYelgCJ2 = await UFragmentsZrHKo2N.initialize.call(addresse3JMmaQ, {from: accounts[4]});

		assert.equal(addressP8jjQcn, 0x0000000000000000000000000000000000000000)
		assert.equal(boolGuAz8PZ, true)
		assert.equal(stringQtra1yZ, "")
		await expect(UFragmentsZrHKo2N.initialize.call(addresse3JMmaQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})