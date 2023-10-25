const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressjV3JEnO = accounts[3]
		const addressRn68e5b = accounts[3]
		const uintVxlRGal = BigInt("220")
		const uintJBZkaLP = BigInt("583")
		const MisesLegacyPooll5LMDZX = await MisesLegacyPool.new(addressjV3JEnO, addressRn68e5b, uintVxlRGal, uintJBZkaLP, {from: "0x0000000000000000000000000000000000000001"});
		const addressy7peM92 = accounts[0]
		const addressvlATOlQ = accounts[2]
		const uintddL3U2C = BigInt("326")
		const uint256B9BCZWV = await MisesLegacyPooll5LMDZX.earned.call(addressy7peM92, {from: accounts[3]});
		const addressnhxJmon = await MisesLegacyPooll5LMDZX.updateReward.call(addressvlATOlQ, {from: accounts[2]});
		await MisesLegacyPooll5LMDZX.exit.call({from: accounts[5]});
		const uint256gal1gh5 = await MisesLegacyPooll5LMDZX.notifyRewardAmount.call(uintddL3U2C, {from: accounts[4]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressOF6H5Yb = "0x0000000000000000000000000000000000000001"
		const addressjUNauj = accounts[1]
		const uintWAvKirN = BigInt("645")
		const uintYEmX6lG = BigInt("1218")
		const MisesLegacyPoolgca8ytJ = await MisesLegacyPool.new(addressOF6H5Yb, addressjUNauj, uintWAvKirN, uintYEmX6lG, {from: accounts[3]});
		const addressWEmnqma = accounts[3]
		const uintjr36KMz = BigInt("1695")
		const uintShjL4K = BigInt("348")
		const addressdpoO1dq = "0x0000000000000000000000000000000000000001"
		const uint256dimWd7d = await MisesLegacyPoolgca8ytJ.earned.call(addressWEmnqma, {from: accounts[4]});
//		const uint256gAPK22U = await MisesLegacyPoolgca8ytJ.stake.call(uintjr36KMz, {from: accounts[2]});
//		const uint256JKSVqd = await MisesLegacyPoolgca8ytJ.withdraw.call(uintShjL4K, {from: "0x0000000000000000000000000000000000000001"});
//		const addressNIOaVr = await MisesLegacyPoolgca8ytJ.updateReward.call(addressdpoO1dq, {from: accounts[5]});

		assert.equal(uint256dimWd7d, BigInt("0"))
		await expect(MisesLegacyPoolgca8ytJ.stake.call(uintjr36KMz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressWitphVx = accounts[4]
		const addressx4tWhc = accounts[4]
		const uintVteK0HN = BigInt("1866")
		const uintTNBGHLw = BigInt("620")
		const MisesLegacyPooleSCMUYx = await MisesLegacyPool.new(addressWitphVx, addressx4tWhc, uintVteK0HN, uintTNBGHLw, {from: accounts[3]});
		const uintAbooUy = BigInt("1584")
//		const uint256DYLjPA = await MisesLegacyPooleSCMUYx.withdraw.call(uintAbooUy, {from: accounts[0]});
//		await MisesLegacyPooleSCMUYx.checkStart.call({from: accounts[4]});
//		await MisesLegacyPooleSCMUYx.exit.call({from: accounts[4]});
//		await MisesLegacyPooleSCMUYx.exit.call({from: accounts[1]});
//		await MisesLegacyPooleSCMUYx.checkStart.call({from: accounts[1]});

		await expect(MisesLegacyPooleSCMUYx.withdraw.call(uintAbooUy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressGX7jWGG = accounts[3]
		const address4J2egy = accounts[4]
		const uintrZDg4KZ = BigInt("337")
		const uinthgqxmlg = BigInt("1970")
		const MisesLegacyPoolheevo4O = await MisesLegacyPool.new(addressGX7jWGG, address4J2egy, uintrZDg4KZ, uinthgqxmlg, {from: accounts[0]});
		const addressuilS3qj = accounts[5]
		const uintLDUOXdI = BigInt("1823")
		const addressEIAzpXp = accounts[4]
//		const addressunA6Bl = await MisesLegacyPoolheevo4O.updateReward.call(addressuilS3qj, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256aJEe2bC = await MisesLegacyPoolheevo4O.notifyRewardAmount.call(uintLDUOXdI, {from: accounts[2]});
//		const uint256yzcCn8M = await MisesLegacyPoolheevo4O.lastTimeRewardApplicable.call({from: accounts[2]});
//		const addressJSUaiVb = await MisesLegacyPoolheevo4O.updateReward.call(addressEIAzpXp, {from: accounts[0]});

		await expect(MisesLegacyPoolheevo4O.updateReward.call(addressuilS3qj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresszbhSPak = accounts[4]
		const addressIKt2SxF = accounts[0]
		const uintrcyoi5R = BigInt("1275")
		const uinthAjvqz3 = BigInt("644")
		const MisesLegacyPoolMCyg1Go = await MisesLegacyPool.new(addresszbhSPak, addressIKt2SxF, uintrcyoi5R, uinthAjvqz3, {from: accounts[1]});
		const uint256PFBCuBy = await MisesLegacyPoolMCyg1Go.rewardPerToken.call({from: accounts[0]});
		const uint256FzoQ9C = await MisesLegacyPoolMCyg1Go.lastTimeRewardApplicable.call({from: accounts[4]});
//		await MisesLegacyPoolMCyg1Go.exit.call({from: accounts[0]});

		assert.equal(uint256FzoQ9C, BigInt("0"))
		assert.equal(uint256PFBCuBy, BigInt("0"))
		await expect(MisesLegacyPoolMCyg1Go.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresswILpuqB = accounts[4]
		const addressyZPGTOh = accounts[0]
		const uintxO9u8m = BigInt("1275")
		const uintpNgndU9 = BigInt("644")
		const MisesLegacyPoolMCyg1Go = await MisesLegacyPool.new(addresswILpuqB, addressyZPGTOh, uintxO9u8m, uintpNgndU9, {from: accounts[1]});
		const uinth5oyckW = BigInt("714")
		const uint256PFBCuBy = await MisesLegacyPoolMCyg1Go.rewardPerToken.call({from: accounts[0]});
//		const uint256mx3R8FY = await MisesLegacyPoolMCyg1Go.notifyRewardAmount.call(uinth5oyckW, {from: accounts[3]});
//		const uint256FzoQ9C = await MisesLegacyPoolMCyg1Go.lastTimeRewardApplicable.call({from: accounts[4]});
//		await MisesLegacyPoolMCyg1Go.exit.call({from: accounts[0]});

		assert.equal(uint256PFBCuBy, BigInt("0"))
		await expect(MisesLegacyPoolMCyg1Go.notifyRewardAmount.call(uinth5oyckW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressrvOeHW6 = accounts[4]
		const addressshl6X2N = accounts[0]
		const uintsu1nomG = BigInt("1275")
		const uintj9GFj4q = BigInt("644")
		const MisesLegacyPoolMCyg1Go = await MisesLegacyPool.new(addressrvOeHW6, addressshl6X2N, uintsu1nomG, uintj9GFj4q, {from: accounts[1]});
		const uint256PFBCuBy = await MisesLegacyPoolMCyg1Go.rewardPerToken.call({from: accounts[0]});
//		await MisesLegacyPoolMCyg1Go.getReward.call({from: accounts[3]});
//		await MisesLegacyPoolMCyg1Go.checkStart.call({from: accounts[1]});
//		const uint256FzoQ9C = await MisesLegacyPoolMCyg1Go.lastTimeRewardApplicable.call({from: accounts[4]});
//		await MisesLegacyPoolMCyg1Go.exit.call({from: accounts[0]});

		assert.equal(uint256PFBCuBy, BigInt("0"))
		await expect(MisesLegacyPoolMCyg1Go.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressONnczZu = accounts[4]
		const addressNh4I7DW = accounts[4]
		const uintFhZDimn = BigInt("1522")
		const uintp1WapsE = BigInt("1827")
		const MisesLegacyPoolh1lnazX = await MisesLegacyPool.new(addressONnczZu, addressNh4I7DW, uintFhZDimn, uintp1WapsE, {from: accounts[3]});
		const uintAeWjz0t = BigInt("0")
		const uintNjBhg5w = BigInt("590")
//		const uint256M1MoCWJ = await MisesLegacyPoolh1lnazX.stake.call(uintAeWjz0t, {from: accounts[0]});
//		const uint256KguSI70 = await MisesLegacyPoolh1lnazX.stake.call(uintNjBhg5w, {from: accounts[1]});
//		const uint256LTQuSVr = await MisesLegacyPoolh1lnazX.rewardPerToken.call({from: accounts[0]});
//		const uint256UT70LNC = await MisesLegacyPoolh1lnazX.rewardPerToken.call({from: accounts[5]});
//		const uint256uNZ5c29 = await MisesLegacyPoolh1lnazX.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256v2KE1SE = await MisesLegacyPoolh1lnazX.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(MisesLegacyPoolh1lnazX.stake.call(uintAeWjz0t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})