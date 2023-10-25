const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolcxAgcKt = await ETFXPool.new({from: accounts[1]});
		const addressQLQQaau = accounts[4]
		const address85QRTo = "0x0000000000000000000000000000000000000001"
		const uintcM097dU = BigInt("1875")
		const addressVrIYHFV = accounts[5]
		await ETFXPoolcxAgcKt.getReward.call({from: accounts[4]});
		const uint256edlcVOk = await ETFXPoolcxAgcKt.allowance.call(address85QRTo, addressQLQQaau, {from: accounts[0]});
		const booliszANSF = await ETFXPoolcxAgcKt.increaseAllowance.call(addressVrIYHFV, uintcM097dU, {from: accounts[0]});

		await expect(ETFXPoolcxAgcKt.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolWEyLIGk = await ETFXPool.new({from: accounts[2]});
		const addresshR6gGGe = accounts[2]
		const addressevDVl2a = accounts[1]
		const addressstgb925 = accounts[3]
		const uint8Z4Y0pN3 = await ETFXPoolWEyLIGk.decimals.call({from: accounts[3]});
		const uint256NRuAl19 = await ETFXPoolWEyLIGk.earned.call(addresshR6gGGe, {from: accounts[2]});
		const uint256WOxV2Gd = await ETFXPoolWEyLIGk.allowance.call(addressstgb925, addressevDVl2a, {from: accounts[5]});

		assert.equal(uint8Z4Y0pN3, BigInt("8"))
		await expect(ETFXPoolWEyLIGk.earned.call(addresshR6gGGe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvLPJY9L = await ETFXPool.new({from: accounts[2]});
		const addressD1c6T7 = "0x0000000000000000000000000000000000000001"
		const addressEkDrfKO = accounts[4]
		const uintQiG3Hd = BigInt("503")
		const uint8skiLYav = await ETFXPoolvLPJY9L.decimals.call({from: accounts[2]});
		await ETFXPoolvLPJY9L.nonReentrant.call({from: accounts[4]});
		await ETFXPoolvLPJY9L.onlyOwner.call({from: accounts[0]});
		const uint256TsfAMr4 = await ETFXPoolvLPJY9L.rewardPerToken.call({from: accounts[3]});
		const uint256GdYp0wA = await ETFXPoolvLPJY9L.allowance.call(addressEkDrfKO, addressD1c6T7, {from: accounts[4]});
		const uint256crM7bBC = await ETFXPoolvLPJY9L.withdraw.call(uintQiG3Hd, {from: accounts[4]});

		assert.equal(uint8skiLYav, BigInt("8"))
		await expect(ETFXPoolvLPJY9L.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooldeN9zpG = await ETFXPool.new({from: accounts[3]});
		const uintRXOC9xr = BigInt("1928")
		const addresshxAswxO = accounts[4]
		const addressMEftGA2 = accounts[0]
		const addressajeqOut = accounts[1]
		const booltAF6WR3 = await ETFXPooldeN9zpG.transferFrom.call(addressMEftGA2, addresshxAswxO, uintRXOC9xr, {from: accounts[2]});
		await ETFXPooldeN9zpG.getReward.call({from: accounts[1]});
		await ETFXPooldeN9zpG.nonReentrant.call({from: accounts[0]});
		const uint256FujkotB = await ETFXPooldeN9zpG.earned.call(addressajeqOut, {from: accounts[3]});

		await expect(ETFXPooldeN9zpG.transferFrom.call(addressMEftGA2, addresshxAswxO, uintRXOC9xr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringxfNSKF8 = "zmPwnfVvEPibpI3sfTy"
		const stringqupOZw6 = "22hQwjacTLG9DLhwWsdqAUzrRHIf3o9kGhiKeVtsmR9we13qjSxMrxjLOxqTu0mo9o5ovNMECEN1NEV90kPWhkWATbWe"
		const uintiO5dcBR = BigInt("18")
		const ETFXPoolxgQ9VAq = await ETFXPool.new(stringxfNSKF8, stringqupOZw6, uintiO5dcBR, {from: accounts[3]});
		const uintW1rYJAY = BigInt("1610")
		const uint256RTCbtjb = await ETFXPoolxgQ9VAq.stake.call(uintW1rYJAY, {from: accounts[3]});
		const uint256eBO6VUl = await ETFXPoolxgQ9VAq.totalSupply.call({from: accounts[5]});
		const uint256g47mrq7 = await ETFXPoolxgQ9VAq.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolxCU9Ify = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const addressX6eeL1f = accounts[1]
		const addressk3F3LyO = "0x0000000000000000000000000000000000000001"
		const uintVPY59yC = BigInt("1724")
		const addressQOuifaW = "0x0000000000000000000000000000000000000001"
		const uintp9JX9Lc = BigInt("1014")
		const addressmdISBh5 = accounts[5]
		const uintKz5VBqQ = BigInt("593")
		const addressgQpXkA3 = accounts[1]
		const uinta46gwm = BigInt("1740")
		const addressHj81DNc = accounts[2]
		const uint256T43va1 = await ETFXPoolxCU9Ify.totalSupply.call({from: accounts[3]});
		const uint256goI6sJz = await ETFXPoolxCU9Ify.allowance.call(addressk3F3LyO, addressX6eeL1f, {from: accounts[3]});
		const boolTTt1o7n = await ETFXPoolxCU9Ify.transfer.call(addressQOuifaW, uintVPY59yC, {from: accounts[4]});
		const boolrw30EEH = await ETFXPoolxCU9Ify.decreaseAllowance.call(addressmdISBh5, uintp9JX9Lc, {from: "0x0000000000000000000000000000000000000001"});
		const boollJ3n5dl = await ETFXPoolxCU9Ify.approve.call(addressgQpXkA3, uintKz5VBqQ, {from: accounts[0]});
		const boolMcF0ZMK = await ETFXPoolxCU9Ify.increaseAllowance.call(addressHj81DNc, uinta46gwm, {from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolAb1CZz1 = await ETFXPool.new({from: accounts[2]});
		const uint256btkK3vv = await ETFXPoolAb1CZz1.totalSupply.call({from: accounts[0]});
		await ETFXPoolAb1CZz1.exit.call({from: accounts[0]});
		await ETFXPoolAb1CZz1.getReward.call({from: accounts[3]});
		await ETFXPoolAb1CZz1.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256btkK3vv, BigInt("0"))
		await expect(ETFXPoolAb1CZz1.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolgFRi5NR = await ETFXPool.new({from: accounts[3]});
		const uintmhQCbsu = BigInt("1390")
		const stringtRJy4In = await ETFXPoolgFRi5NR.symbol.call({from: accounts[0]});
		const uint256iPhem9d = await ETFXPoolgFRi5NR.totalSupply.call({from: accounts[3]});
		const uint256gSWxbJi = await ETFXPoolgFRi5NR.stake.call(uintmhQCbsu, {from: accounts[5]});
		const stringb9ofZnS = await ETFXPoolgFRi5NR.symbol.call({from: accounts[3]});

		assert.equal(stringtRJy4In, "FETFX")
		assert.equal(uint256iPhem9d, BigInt("0"))
		await expect(ETFXPoolgFRi5NR.stake.call(uintmhQCbsu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolcxAgcKt = await ETFXPool.new({from: accounts[1]});
		const uintSN7XTJL = BigInt("1875")
		const addressDjV5ZYq = accounts[5]
		const booliszANSF = await ETFXPoolcxAgcKt.increaseAllowance.call(addressDjV5ZYq, uintSN7XTJL, {from: accounts[0]});

		assert.equal(booliszANSF, true)
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolcxAgcKt = await ETFXPool.new({from: accounts[1]});
		const uinttCieX88 = BigInt("1571")
		const addressza71XXA = accounts[4]
		await ETFXPoolcxAgcKt.renounceOwnership.call({from: accounts[3]});
		const boolqOzMdwz = await ETFXPoolcxAgcKt.approve.call(addressza71XXA, uinttCieX88, {from: accounts[5]});
		await ETFXPoolcxAgcKt.getReward.call({from: accounts[4]});

		await expect(ETFXPoolcxAgcKt.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolcxAgcKt = await ETFXPool.new({from: accounts[1]});
		const addressnCO69hG = await ETFXPoolcxAgcKt.owner.call({from: accounts[1]});
		await ETFXPoolcxAgcKt.getReward.call({from: accounts[4]});

		assert.equal(addressnCO69hG, 0x31ddBfd32A4b0cc4cF94B35709cBa98209B6794e)
		await expect(ETFXPoolcxAgcKt.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolcxAgcKt = await ETFXPool.new({from: accounts[1]});
		const stringg2abWDi = await ETFXPoolcxAgcKt.name.call({from: accounts[1]});
		await ETFXPoolcxAgcKt.getReward.call({from: accounts[4]});

		assert.equal(stringg2abWDi, "ETFX-FARM")
		await expect(ETFXPoolcxAgcKt.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolcxAgcKt = await ETFXPool.new({from: accounts[1]});
		const uintOgTJZV = BigInt("1123")
		const addressRYRymrs = accounts[1]
		const boolMZHGCOG = await ETFXPoolcxAgcKt.transfer.call(addressRYRymrs, uintOgTJZV, {from: accounts[2]});
		await ETFXPoolcxAgcKt.nonReentrant.call({from: accounts[1]});
		await ETFXPoolcxAgcKt.getReward.call({from: accounts[0]});
		await ETFXPoolcxAgcKt.getReward.call({from: accounts[4]});

		await expect(ETFXPoolcxAgcKt.transfer.call(addressRYRymrs, uintOgTJZV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloJXoCRb = await ETFXPool.new({from: accounts[3]});
		const uintJhp3tkw = BigInt("437")
		const addressAGq1Af9 = accounts[2]
		const uintzQCwBYq = BigInt("670")
		const addressxTgwjCM = accounts[1]
		const boolUvyA3qY = await ETFXPooloJXoCRb.decreaseAllowance.call(addressAGq1Af9, uintJhp3tkw, {from: accounts[4]});
		const uint256QJY4wxt = await ETFXPooloJXoCRb.withdraw.call(uintzQCwBYq, {from: accounts[3]});
		const addressCTCj7yW = await ETFXPooloJXoCRb.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressMEsjORm = await ETFXPooloJXoCRb.transferOwnership.call(addressxTgwjCM, {from: accounts[5]});

		await expect(ETFXPooloJXoCRb.decreaseAllowance.call(addressAGq1Af9, uintJhp3tkw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloJXoCRb = await ETFXPool.new({from: accounts[3]});
		const uintfQVdy83 = BigInt("1320")
		const addressr111PbI = accounts[2]
		const uintwgINjV5 = BigInt("437")
		const addressepqFJSq = accounts[3]
		const boolNdRg0Va = await ETFXPooloJXoCRb.approve.call(addressr111PbI, uintfQVdy83, {from: "0x0000000000000000000000000000000000000001"});
		const boolUvyA3qY = await ETFXPooloJXoCRb.decreaseAllowance.call(addressepqFJSq, uintwgINjV5, {from: accounts[4]});
		const addressCTCj7yW = await ETFXPooloJXoCRb.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNdRg0Va, true)
		await expect(ETFXPooloJXoCRb.decreaseAllowance.call(addressepqFJSq, uintwgINjV5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloJXoCRb = await ETFXPool.new({from: accounts[3]});
		const uintmKZoZkr = BigInt("37")
		const uintWMBOFxE = BigInt("437")
		const addresslcoqD2C = accounts[3]
		const uint2562v8KAu = await ETFXPooloJXoCRb.withdraw.call(uintmKZoZkr, {from: accounts[3]});
		const boolUvyA3qY = await ETFXPooloJXoCRb.decreaseAllowance.call(addresslcoqD2C, uintWMBOFxE, {from: accounts[4]});
		const addressCTCj7yW = await ETFXPooloJXoCRb.owner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPooloJXoCRb.withdraw.call(uintmKZoZkr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloJXoCRb = await ETFXPool.new({from: accounts[3]});
		const uintOpVC37n = BigInt("655")
		const addressKhGTV5f = accounts[2]
		const address1Ex93x = accounts[3]
		await ETFXPooloJXoCRb.renounceOwnership.call({from: accounts[3]});
		const boolUvyA3qY = await ETFXPooloJXoCRb.decreaseAllowance.call(addressKhGTV5f, uintOpVC37n, {from: accounts[4]});
		const uint256XZVfM2 = await ETFXPooloJXoCRb.earned.call(address1Ex93x, {from: accounts[3]});

		await expect(ETFXPooloJXoCRb.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolxzL6v8r = await ETFXPool.new({from: accounts[2]});
		const addressI3GpyNL = accounts[3]
		const addresskBiqCIo = accounts[2]
		const addressE2Y2oUB = accounts[1]
		const addressDSwG27U = accounts[3]
		const uinthfbQIc = BigInt("1925")
		const uint256JrMuM7t = await ETFXPoolxzL6v8r.allowance.call(addresskBiqCIo, addressI3GpyNL, {from: accounts[0]});
		const uint2562TqOIK = await ETFXPoolxzL6v8r.allowance.call(addressDSwG27U, addressE2Y2oUB, {from: accounts[5]});
		const uint256mCmGorf = await ETFXPoolxzL6v8r.withdraw.call(uinthfbQIc, {from: accounts[3]});

		assert.equal(uint2562TqOIK, BigInt("0"))
		assert.equal(uint256JrMuM7t, BigInt("0"))
		await expect(ETFXPoolxzL6v8r.withdraw.call(uinthfbQIc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloJXoCRb = await ETFXPool.new({from: accounts[3]});
		const uintCxTuMz3 = BigInt("437")
		const addressLvflwdJ = accounts[3]
		const uint256E8BREeg = await ETFXPooloJXoCRb.rewardPerToken.call({from: accounts[4]});
		const stringXieCjDd = await ETFXPooloJXoCRb.symbol.call({from: accounts[4]});
		const boolUvyA3qY = await ETFXPooloJXoCRb.decreaseAllowance.call(addressLvflwdJ, uintCxTuMz3, {from: accounts[4]});

		assert.equal(stringXieCjDd, "FETFX")
		assert.equal(uint256E8BREeg, BigInt("0"))
		await expect(ETFXPooloJXoCRb.decreaseAllowance.call(addressLvflwdJ, uintCxTuMz3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloJXoCRb = await ETFXPool.new({from: accounts[3]});
		const address3fq6x9 = accounts[2]
		const uint3259XY = BigInt("436")
		const addressWbNimQS = accounts[2]
		const addressSMCYWsC = await ETFXPooloJXoCRb.owner.call({from: accounts[0]});
		const addresstVVRxG = await ETFXPooloJXoCRb.transferOwnership.call(address3fq6x9, {from: accounts[3]});
		await ETFXPooloJXoCRb.exit.call({from: accounts[5]});
		const boolUvyA3qY = await ETFXPooloJXoCRb.decreaseAllowance.call(addressWbNimQS, uint3259XY, {from: accounts[4]});

		assert.equal(addressSMCYWsC, 0x75aA944D2F77a471be380d3C6Af4b53cEF57C5fE)
		await expect(ETFXPooloJXoCRb.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})