const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolwUZpF1s = await ETFXPool.new({from: accounts[3]});
		const uintmMf0Q9Q = BigInt("1556")
		const addresseofFyFP = "0x0000000000000000000000000000000000000001"
		const addressLTv7SU0 = accounts[3]
//		await ETFXPoolwUZpF1s.onlyOwner.call({from: accounts[4]});
//		const boolEKx6MkS = await ETFXPoolwUZpF1s.transfer.call(addresseofFyFP, uintmMf0Q9Q, {from: accounts[5]});
//		const uint256naKyiTO = await ETFXPoolwUZpF1s.earned.call(addressLTv7SU0, {from: accounts[1]});

		await expect(ETFXPoolwUZpF1s.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolAJyGDA = await ETFXPool.new({from: accounts[1]});
		const uinto1QSDId = BigInt("1688")
		const uintGqI7rxW = BigInt("1055")
		const addresso1DAs5B = accounts[2]
		const addressSVoKjC4 = accounts[3]
//		const uint256zOxu2vb = await ETFXPoolAJyGDA.withdraw.call(uinto1QSDId, {from: accounts[3]});
//		const boolWdDI9q0 = await ETFXPoolAJyGDA.transferFrom.call(addressSVoKjC4, addresso1DAs5B, uintGqI7rxW, {from: accounts[0]});
//		await ETFXPoolAJyGDA.exit.call({from: accounts[4]});

		await expect(ETFXPoolAJyGDA.withdraw.call(uinto1QSDId, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool9DkdH4 = await ETFXPool.new({from: accounts[1]});
		const uintYPAT97h = BigInt("1705")
		const address0uzc3q = accounts[3]
		const addressvJgCFU8 = accounts[3]
//		await ETFXPool9DkdH4.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256204JmK = await ETFXPool9DkdH4.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const booljOov1U = await ETFXPool9DkdH4.approve.call(address0uzc3q, uintYPAT97h, {from: accounts[0]});
//		await ETFXPool9DkdH4.nonReentrant.call({from: accounts[0]});
//		const addressgipmXJy = await ETFXPool9DkdH4.transferOwnership.call(addressvJgCFU8, {from: accounts[4]});

		await expect(ETFXPool9DkdH4.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDihfL3w = await ETFXPool.new({from: accounts[4]});
		const uintxZnVrWb = BigInt("1019")
		const addresso9elAoX = accounts[0]
		const addressZHJlPiW = accounts[3]
		const uintNIcGkoD = BigInt("1274")
		const uintIW0uxht = BigInt("1627")
		const uintry4LLaS = BigInt("1597")
		const addressXHl73OY = accounts[0]
		const uintuzzeSTw = BigInt("286")
//		const boolGISxNv0 = await ETFXPoolDihfL3w.transferFrom.call(addressZHJlPiW, addresso9elAoX, uintxZnVrWb, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256FqYEyp = await ETFXPoolDihfL3w.stake.call(uintNIcGkoD, {from: accounts[2]});
//		const uint256wc4ig9 = await ETFXPoolDihfL3w.stake.call(uintIW0uxht, {from: accounts[2]});
//		const boolIV0P69p = await ETFXPoolDihfL3w.approve.call(addressXHl73OY, uintry4LLaS, {from: accounts[2]});
//		const uint256hfmEVwG = await ETFXPoolDihfL3w.stake.call(uintuzzeSTw, {from: accounts[4]});

		await expect(ETFXPoolDihfL3w.transferFrom.call(addressZHJlPiW, addresso9elAoX, uintxZnVrWb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolR2jCDyI = await ETFXPool.new({from: accounts[3]});
		const uintJlrKKaP = BigInt("1090")
		const addresszTH5loA = accounts[4]
		const addressnan7kw = "0x0000000000000000000000000000000000000001"
		const boolhc1g1Op = await ETFXPoolR2jCDyI.increaseAllowance.call(addresszTH5loA, uintJlrKKaP, {from: accounts[1]});
		const uint256kTE5WNd = await ETFXPoolR2jCDyI.rewardPerToken.call({from: accounts[0]});
//		await ETFXPoolR2jCDyI.onlyOwner.call({from: accounts[4]});
//		const addressqkZWeKW = await ETFXPoolR2jCDyI.transferOwnership.call(addressnan7kw, {from: accounts[1]});
//		const uint256iGUKiew = await ETFXPoolR2jCDyI.totalSupply.call({from: accounts[4]});
//		await ETFXPoolR2jCDyI.getReward.call({from: accounts[4]});

		assert.equal(boolhc1g1Op, true)
		assert.equal(uint256kTE5WNd, BigInt("0"))
		await expect(ETFXPoolR2jCDyI.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringuOdzozS = "rooFqsqP4ljyYll1UZjJu8EkmF12qk4PSXfNC1gg5Q6s"
		const stringbndM7XR = "brYleDt9VTjC88KbBXYd1eXi4qLjgkNIzjmZ"
		const uintl668sdK = BigInt("89")
		const ETFXPoolk4zwPg = await ETFXPool.new(stringuOdzozS, stringbndM7XR, uintl668sdK, {from: accounts[2]});
		const uintMCASNSR = BigInt("1104")
		const addresseQ6Si8 = accounts[0]
		const addressRfgAz8 = await ETFXPoolk4zwPg.owner.call({from: accounts[2]});
		const stringunGUnu = await ETFXPoolk4zwPg.symbol.call({from: accounts[3]});
		const uint256szsMPtv = await ETFXPoolk4zwPg.totalSupply.call({from: accounts[4]});
		const boolUCflbAW = await ETFXPoolk4zwPg.transfer.call(addresseQ6Si8, uintMCASNSR, {from: accounts[4]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDgXUTz3 = await ETFXPool.new({from: accounts[4]});
		const uint8JTDdbG = await ETFXPoolDgXUTz3.decimals.call({from: accounts[4]});
		const uint256lZhGCcA = await ETFXPoolDgXUTz3.totalSupply.call({from: accounts[1]});
		const stringpCDETei = await ETFXPoolDgXUTz3.symbol.call({from: accounts[4]});
		const uint256Fl0pCbF = await ETFXPoolDgXUTz3.totalSupply.call({from: accounts[0]});
		const addresslitraj = await ETFXPoolDgXUTz3.owner.call({from: accounts[4]});
		const uint89wMJzx = await ETFXPoolDgXUTz3.decimals.call({from: accounts[5]});

		assert.equal(addresslitraj, 0xCce900B234658215024c337aFc1bB1Cc2C3dDa2C)
		assert.equal(stringpCDETei, "FETFX")
		assert.equal(uint256Fl0pCbF, BigInt("0"))
		assert.equal(uint256lZhGCcA, BigInt("0"))
		assert.equal(uint89wMJzx, BigInt("8"))
		assert.equal(uint8JTDdbG, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDgXUTz3 = await ETFXPool.new({from: accounts[4]});
		const uintFjPge17 = BigInt("88")
		const uint8JTDdbG = await ETFXPoolDgXUTz3.decimals.call({from: accounts[4]});
		const uint256lZhGCcA = await ETFXPoolDgXUTz3.totalSupply.call({from: accounts[1]});
		const stringpCDETei = await ETFXPoolDgXUTz3.symbol.call({from: accounts[4]});
//		const uint256UekpqF = await ETFXPoolDgXUTz3.stake.call(uintFjPge17, {from: accounts[1]});
//		const uint256Fl0pCbF = await ETFXPoolDgXUTz3.totalSupply.call({from: accounts[0]});
//		const addresslitraj = await ETFXPoolDgXUTz3.owner.call({from: accounts[4]});
//		const uint89wMJzx = await ETFXPoolDgXUTz3.decimals.call({from: accounts[5]});

		assert.equal(stringpCDETei, "FETFX")
		assert.equal(uint256lZhGCcA, BigInt("0"))
		assert.equal(uint8JTDdbG, BigInt("8"))
		await expect(ETFXPoolDgXUTz3.stake.call(uintFjPge17, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolR2jCDyI = await ETFXPool.new({from: accounts[3]});
		const addresstsbDwBu = accounts[4]
		const addressvFk15Je = accounts[4]
		const uintR26xWQ = BigInt("1090")
		const addressySeD7A9 = accounts[4]
		const uintgrSs4mn = BigInt("1362")
		const addressic1HMtk = accounts[4]
		const addressEIRnx1y = "0x0000000000000000000000000000000000000000"
		const uint256ofcvVl0 = await ETFXPoolR2jCDyI.allowance.call(addressvFk15Je, addresstsbDwBu, {from: accounts[3]});
		const boolhc1g1Op = await ETFXPoolR2jCDyI.increaseAllowance.call(addressySeD7A9, uintR26xWQ, {from: accounts[1]});
//		const boolprGwkfw = await ETFXPoolR2jCDyI.decreaseAllowance.call(addressic1HMtk, uintgrSs4mn, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256kTE5WNd = await ETFXPoolR2jCDyI.rewardPerToken.call({from: accounts[0]});
//		await ETFXPoolR2jCDyI.onlyOwner.call({from: accounts[4]});
//		const addressqkZWeKW = await ETFXPoolR2jCDyI.transferOwnership.call(addressEIRnx1y, {from: accounts[1]});
//		const uint256iGUKiew = await ETFXPoolR2jCDyI.totalSupply.call({from: accounts[4]});
//		await ETFXPoolR2jCDyI.getReward.call({from: accounts[4]});

		assert.equal(boolhc1g1Op, true)
		assert.equal(uint256ofcvVl0, BigInt("0"))
		await expect(ETFXPoolR2jCDyI.decreaseAllowance.call(addressic1HMtk, uintgrSs4mn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDgXUTz3 = await ETFXPool.new({from: accounts[4]});
		const uint8JTDdbG = await ETFXPoolDgXUTz3.decimals.call({from: accounts[4]});
		const uint256lZhGCcA = await ETFXPoolDgXUTz3.totalSupply.call({from: accounts[1]});
//		await ETFXPoolDgXUTz3.getReward.call({from: accounts[1]});
//		const stringpCDETei = await ETFXPoolDgXUTz3.symbol.call({from: accounts[4]});
//		const uint256Fl0pCbF = await ETFXPoolDgXUTz3.totalSupply.call({from: accounts[0]});
//		const addresslitraj = await ETFXPoolDgXUTz3.owner.call({from: accounts[4]});
//		const uint89wMJzx = await ETFXPoolDgXUTz3.decimals.call({from: accounts[5]});

		assert.equal(uint256lZhGCcA, BigInt("0"))
		assert.equal(uint8JTDdbG, BigInt("8"))
		await expect(ETFXPoolDgXUTz3.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolwUZpF1s = await ETFXPool.new({from: accounts[3]});
		const uintWErgmMd = BigInt("1556")
		const addresso01Vdnu = "0x0000000000000000000000000000000000000001"
		const addressqBIgBF = accounts[3]
//		const boolEKx6MkS = await ETFXPoolwUZpF1s.transfer.call(addresso01Vdnu, uintWErgmMd, {from: accounts[5]});
//		const uint256naKyiTO = await ETFXPoolwUZpF1s.earned.call(addressqBIgBF, {from: accounts[1]});

		await expect(ETFXPoolwUZpF1s.transfer.call(addresso01Vdnu, uintWErgmMd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolR2jCDyI = await ETFXPool.new({from: accounts[3]});
		const addresspfTTZF = "0x0000000000000000000000000000000000000001"
		const uint256kTE5WNd = await ETFXPoolR2jCDyI.rewardPerToken.call({from: accounts[0]});
//		const addressqkZWeKW = await ETFXPoolR2jCDyI.transferOwnership.call(addresspfTTZF, {from: accounts[1]});
//		await ETFXPoolR2jCDyI.getReward.call({from: accounts[4]});

		assert.equal(uint256kTE5WNd, BigInt("0"))
		await expect(ETFXPoolR2jCDyI.transferOwnership.call(addresspfTTZF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolR2jCDyI = await ETFXPool.new({from: accounts[3]});
		const uintzzOJZ6d = BigInt("0")
		const addressE9ZufED = accounts[1]
		const addressc76IxQh = "0x0000000000000000000000000000000000000000"
		const uint256kTE5WNd = await ETFXPoolR2jCDyI.rewardPerToken.call({from: accounts[0]});
		const booljIeRo3 = await ETFXPoolR2jCDyI.approve.call(addressE9ZufED, uintzzOJZ6d, {from: accounts[0]});
//		const addressqkZWeKW = await ETFXPoolR2jCDyI.transferOwnership.call(addressc76IxQh, {from: accounts[1]});
//		await ETFXPoolR2jCDyI.getReward.call({from: accounts[4]});

		assert.equal(booljIeRo3, true)
		assert.equal(uint256kTE5WNd, BigInt("0"))
		await expect(ETFXPoolR2jCDyI.transferOwnership.call(addressc76IxQh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolwUZpF1s = await ETFXPool.new({from: accounts[3]});
		const address4wHBdI = accounts[4]
//		await ETFXPoolwUZpF1s.renounceOwnership.call({from: accounts[3]});
//		const uint256naKyiTO = await ETFXPoolwUZpF1s.earned.call(address4wHBdI, {from: accounts[1]});

		await expect(ETFXPoolwUZpF1s.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolR2jCDyI = await ETFXPool.new({from: accounts[3]});
		const addressgF0S5CU = accounts[5]
		const stringtNzRz7o = await ETFXPoolR2jCDyI.name.call({from: accounts[3]});
		const uint256kTE5WNd = await ETFXPoolR2jCDyI.rewardPerToken.call({from: accounts[0]});
		const uint256mPSKbN1 = await ETFXPoolR2jCDyI.balanceOf.call(addressgF0S5CU, {from: accounts[5]});
//		await ETFXPoolR2jCDyI.getReward.call({from: accounts[4]});

		assert.equal(stringtNzRz7o, "ETFX-FARM")
		assert.equal(uint256kTE5WNd, BigInt("0"))
		assert.equal(uint256mPSKbN1, BigInt("0"))
		await expect(ETFXPoolR2jCDyI.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolR2jCDyI = await ETFXPool.new({from: accounts[3]});
		const addresstYR7TQ = accounts[4]
		const addressqsJur3C = await ETFXPoolR2jCDyI.transferOwnership.call(addresstYR7TQ, {from: accounts[3]});
//		await ETFXPoolR2jCDyI.getReward.call({from: accounts[4]});

		await expect(ETFXPoolR2jCDyI.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolk6Ekxv5 = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintn8qLXtR = BigInt("1089")
		const addressUSgcZ5O = accounts[0]
		const addressxcFwSp = accounts[4]
		const addressIMzhccN = accounts[2]
		const uintpXzljv = BigInt("1506")
		const addressQaoqzu7 = accounts[1]
		const addressEzHsE15 = accounts[3]
		const uint8UYLys6 = await ETFXPoolk6Ekxv5.decimals.call({from: accounts[1]});
		const boolFPXllLm = await ETFXPoolk6Ekxv5.transferFrom.call(addressxcFwSp, addressUSgcZ5O, uintn8qLXtR, {from: accounts[3]});
		const uint256ZcD6hdn = await ETFXPoolk6Ekxv5.balanceOf.call(addressIMzhccN, {from: "0x0000000000000000000000000000000000000001"});
		const boolnt3DwQ8 = await ETFXPoolk6Ekxv5.transferFrom.call(addressEzHsE15, addressQaoqzu7, uintpXzljv, {from: accounts[4]});
		await ETFXPoolk6Ekxv5.nonReentrant.call({from: accounts[2]});
	});
})