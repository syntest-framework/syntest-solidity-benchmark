const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolkmOu4rn = await ETFXPool.new({from: accounts[1]});
		const uintYqYwfv8 = BigInt("1198")
		const addressRIaJWPq = accounts[0]
		await ETFXPoolkmOu4rn.nonReentrant.call({from: accounts[1]});
		const boolyWiwMl = await ETFXPoolkmOu4rn.increaseAllowance.call(addressRIaJWPq, uintYqYwfv8, {from: accounts[5]});

		await expect(ETFXPoolkmOu4rn.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUW951Xy = await ETFXPool.new({from: accounts[0]});
		const uinthu40lCE = BigInt("1311")
		const addressnDISRFl = accounts[1]
		const uintDG8jUW8 = BigInt("1288")
		const uintuwtu8pH = BigInt("1265")
		const uintcN4SMxi = BigInt("1431")
		const addressgwKwbRT = accounts[1]
		const addressRFOEI4 = accounts[3]
		const boolnfYBEAM = await ETFXPoolUW951Xy.decreaseAllowance.call(addressnDISRFl, uinthu40lCE, {from: accounts[0]});
		const uint256upHDOJ2 = await ETFXPoolUW951Xy.stake.call(uintDG8jUW8, {from: accounts[0]});
		const uint256zUk4nkY = await ETFXPoolUW951Xy.stake.call(uintuwtu8pH, {from: accounts[0]});
		const boolGvridh = await ETFXPoolUW951Xy.transferFrom.call(addressRFOEI4, addressgwKwbRT, uintcN4SMxi, {from: accounts[0]});

		await expect(ETFXPoolUW951Xy.decreaseAllowance.call(addressnDISRFl, uinthu40lCE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolrzuld1C = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHK4gxFd = BigInt("1653")
		const addressFc72m5 = accounts[5]
		const addresshtpqDc = accounts[1]
		const uintBQBhGz = BigInt("1137")
		const addressKewainj = accounts[2]
		const uint256h1II0xV = await ETFXPoolrzuld1C.stake.call(uintHK4gxFd, {from: accounts[1]});
		const uint256TNZECsQ = await ETFXPoolrzuld1C.allowance.call(addresshtpqDc, addressFc72m5, {from: accounts[0]});
		const uint256WHzSxH = await ETFXPoolrzuld1C.withdraw.call(uintBQBhGz, {from: accounts[1]});
		await ETFXPoolrzuld1C.exit.call({from: accounts[1]});
		const addressNlUiq0N = await ETFXPoolrzuld1C.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressKzCwdQ = await ETFXPoolrzuld1C.transferOwnership.call(addressKewainj, {from: accounts[3]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloqCEBN6 = await ETFXPool.new({from: accounts[4]});
		const uintg7N8349 = BigInt("1162")
		const addressL5rflQj = accounts[3]
		const uint256WlLTz4 = await ETFXPooloqCEBN6.totalSupply.call({from: accounts[1]});
		const boolbfVT7Bb = await ETFXPooloqCEBN6.decreaseAllowance.call(addressL5rflQj, uintg7N8349, {from: accounts[3]});
		const uint8C5pYo4F = await ETFXPooloqCEBN6.decimals.call({from: accounts[5]});
		const stringqUjcRqo = await ETFXPooloqCEBN6.name.call({from: accounts[1]});
		const addressxxHbumb = await ETFXPooloqCEBN6.owner.call({from: accounts[2]});

		assert.equal(uint256WlLTz4, BigInt("0"))
		await expect(ETFXPooloqCEBN6.decreaseAllowance.call(addressL5rflQj, uintg7N8349, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqdJiPl = await ETFXPool.new({from: accounts[3]});
		const uintS6ymQTF = BigInt("981")
		const addressWavSQSE = accounts[5]
		const uintslLJYJ = BigInt("1091")
		const addressA7fHi4Q = accounts[0]
		const uintKxUlRNj = BigInt("1389")
		const uint256VbulLD = await ETFXPoolqdJiPl.rewardPerToken.call({from: accounts[4]});
		const boolN4AdXw = await ETFXPoolqdJiPl.transfer.call(addressWavSQSE, uintS6ymQTF, {from: accounts[0]});
		const uint256IfGIFB = await ETFXPoolqdJiPl.totalSupply.call({from: accounts[5]});
		const bool5W9avA = await ETFXPoolqdJiPl.decreaseAllowance.call(addressA7fHi4Q, uintslLJYJ, {from: accounts[0]});
		const uint256y97ZzVh = await ETFXPoolqdJiPl.withdraw.call(uintKxUlRNj, {from: accounts[0]});

		assert.equal(uint256VbulLD, BigInt("0"))
		await expect(ETFXPoolqdJiPl.transfer.call(addressWavSQSE, uintS6ymQTF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolS2Ni8o9 = await ETFXPool.new({from: accounts[0]});
		const uinti6ntnt2 = BigInt("200")
		const addressJ5nXhf0 = accounts[1]
		const addressNRfOxmT = accounts[2]
		const boolE8YjUsV = await ETFXPoolS2Ni8o9.increaseAllowance.call(addressJ5nXhf0, uinti6ntnt2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xFKb61n = await ETFXPoolS2Ni8o9.earned.call(addressNRfOxmT, {from: accounts[3]});

		assert.equal(boolE8YjUsV, true)
		await expect(ETFXPoolS2Ni8o9.earned.call(addressNRfOxmT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringaAsKAjT = "cJoFF19huxuPIouqSab76ychGbZRUNMEkA1RHXAHc0Mr8yU4ITRaTC0v6NqyHJb9m"
		const stringYS3MuFg = "7RpSOHViblBoew9wXNDo2ZoxmglJLUmiDDBINB2RDepP1RwfTjOsVDfQN"
		const uintXRc8hRj = BigInt("201")
		const ETFXPoold7Vi6wV = await ETFXPool.new(stringaAsKAjT, stringYS3MuFg, uintXRc8hRj, {from: accounts[3]});
		const uintEID1qxX = BigInt("1861")
		const addressfSwinqU = accounts[2]
		const uintZUk0iho = BigInt("1856")
		const addresswLnrdF2 = accounts[1]
		const addressPR93eTO = accounts[2]
		const uint256juAVM4l = await ETFXPoold7Vi6wV.stake.call(uintEID1qxX, {from: "0x0000000000000000000000000000000000000001"});
		const addressUwU9ae0 = await ETFXPoold7Vi6wV.transferOwnership.call(addressfSwinqU, {from: accounts[5]});
		const boolLFBoMEe = await ETFXPoold7Vi6wV.transferFrom.call(addressPR93eTO, addresswLnrdF2, uintZUk0iho, {from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolgQjFBnP = await ETFXPool.new({from: accounts[1]});
		const addressATwJURA = accounts[0]
		const addressTWHekS = "0x0000000000000000000000000000000000000001"
		await ETFXPoolgQjFBnP.exit.call({from: accounts[4]});
		const uint256N14mEdE = await ETFXPoolgQjFBnP.allowance.call(addressTWHekS, addressATwJURA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HrkmHOs = await ETFXPoolgQjFBnP.totalSupply.call({from: accounts[2]});

		await expect(ETFXPoolgQjFBnP.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolq1dQl6 = await ETFXPool.new({from: accounts[1]});
		const uinttYF4N7A = BigInt("1397")
		const addressrxAwhPV = "0x0000000000000000000000000000000000000001"
		const uinthkj3uKg = BigInt("1230")
		const addressMtKJr7B = accounts[3]
		const uintcwQompz = BigInt("549")
		const boolwiuRsH = await ETFXPoolq1dQl6.approve.call(addressrxAwhPV, uinttYF4N7A, {from: accounts[3]});
		const boolHISDNlm = await ETFXPoolq1dQl6.approve.call(addressMtKJr7B, uinthkj3uKg, {from: accounts[0]});
		const uint256J9Rzav7 = await ETFXPoolq1dQl6.stake.call(uintcwQompz, {from: accounts[4]});

		assert.equal(boolHISDNlm, true)
		assert.equal(boolwiuRsH, true)
		await expect(ETFXPoolq1dQl6.stake.call(uintcwQompz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolkmOu4rn = await ETFXPool.new({from: accounts[1]});
		const addressgGVc7C7 = accounts[3]
		const uintDZkxKSz = BigInt("1198")
		const address3tj2ou = accounts[0]
		const stringk8Vv75 = await ETFXPoolkmOu4rn.symbol.call({from: accounts[2]});
		const uint256FH376l3 = await ETFXPoolkmOu4rn.earned.call(addressgGVc7C7, {from: accounts[1]});
		await ETFXPoolkmOu4rn.nonReentrant.call({from: accounts[1]});
		const boolyWiwMl = await ETFXPoolkmOu4rn.increaseAllowance.call(address3tj2ou, uintDZkxKSz, {from: accounts[5]});

		assert.equal(stringk8Vv75, "FETFX")
		await expect(ETFXPoolkmOu4rn.earned.call(addressgGVc7C7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqdJiPl = await ETFXPool.new({from: accounts[3]});
		const uintns1tU9h = BigInt("981")
		const addressHbiMByv = accounts[5]
		const uintsfJa3tt = BigInt("1091")
		const addressJ1KmPIs = accounts[0]
		const uintmoEN1gO = BigInt("1389")
		const uint256VbulLD = await ETFXPoolqdJiPl.rewardPerToken.call({from: accounts[4]});
		await ETFXPoolqdJiPl.renounceOwnership.call({from: accounts[4]});
		const boolN4AdXw = await ETFXPoolqdJiPl.transfer.call(addressHbiMByv, uintns1tU9h, {from: accounts[0]});
		const uint256IfGIFB = await ETFXPoolqdJiPl.totalSupply.call({from: accounts[5]});
		const bool5W9avA = await ETFXPoolqdJiPl.decreaseAllowance.call(addressJ1KmPIs, uintsfJa3tt, {from: accounts[0]});
		const uint256y97ZzVh = await ETFXPoolqdJiPl.withdraw.call(uintmoEN1gO, {from: accounts[0]});

		assert.equal(uint256VbulLD, BigInt("0"))
		await expect(ETFXPoolqdJiPl.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloqCEBN6 = await ETFXPool.new({from: accounts[4]});
		const addressnm3geje = accounts[0]
		const addressC56vI9a = accounts[1]
		const uintLxi0YwM = BigInt("1162")
		const addressxi5nM1a = accounts[3]
		const uint256WlLTz4 = await ETFXPooloqCEBN6.totalSupply.call({from: accounts[1]});
		const uint256oceal5b = await ETFXPooloqCEBN6.allowance.call(addressC56vI9a, addressnm3geje, {from: "0x0000000000000000000000000000000000000001"});
		const boolbfVT7Bb = await ETFXPooloqCEBN6.decreaseAllowance.call(addressxi5nM1a, uintLxi0YwM, {from: accounts[3]});
		const uint8C5pYo4F = await ETFXPooloqCEBN6.decimals.call({from: accounts[5]});
		const stringqUjcRqo = await ETFXPooloqCEBN6.name.call({from: accounts[1]});
		const addressxxHbumb = await ETFXPooloqCEBN6.owner.call({from: accounts[2]});

		assert.equal(uint256WlLTz4, BigInt("0"))
		assert.equal(uint256oceal5b, BigInt("0"))
		await expect(ETFXPooloqCEBN6.decreaseAllowance.call(addressxi5nM1a, uintLxi0YwM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqdJiPl = await ETFXPool.new({from: accounts[3]});
		const uintXLaes0R = BigInt("1482")
		const uint256VbulLD = await ETFXPoolqdJiPl.rewardPerToken.call({from: accounts[4]});
		const uint256IfGIFB = await ETFXPoolqdJiPl.totalSupply.call({from: accounts[5]});
		const uint256y97ZzVh = await ETFXPoolqdJiPl.withdraw.call(uintXLaes0R, {from: accounts[0]});

		assert.equal(uint256IfGIFB, BigInt("0"))
		assert.equal(uint256VbulLD, BigInt("0"))
		await expect(ETFXPoolqdJiPl.withdraw.call(uintXLaes0R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolL2JyVX2 = await ETFXPool.new({from: accounts[1]});
		const addressKTtihnd = accounts[0]
		const addressQ9cZtHP = accounts[0]
		const uint256GFcyiFG = await ETFXPoolL2JyVX2.totalSupply.call({from: accounts[4]});
		const uint256VzjU4hD = await ETFXPoolL2JyVX2.balanceOf.call(addressKTtihnd, {from: accounts[2]});
		const uint8nOU4TeT = await ETFXPoolL2JyVX2.decimals.call({from: accounts[0]});
		await ETFXPoolL2JyVX2.exit.call({from: accounts[3]});
		await ETFXPoolL2JyVX2.exit.call({from: accounts[3]});
		const uint256PzGfwtY = await ETFXPoolL2JyVX2.earned.call(addressQ9cZtHP, {from: accounts[1]});

		assert.equal(uint256GFcyiFG, BigInt("0"))
		assert.equal(uint256VzjU4hD, BigInt("0"))
		assert.equal(uint8nOU4TeT, BigInt("8"))
		await expect(ETFXPoolL2JyVX2.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolS2Ni8o9 = await ETFXPool.new({from: accounts[0]});
		const uintBMS7Xhu = BigInt("166")
		const addressJuKkx1 = accounts[2]
		const uinta2e2mur = BigInt("1363")
		const addressysomvp8 = accounts[3]
		const uintRReDr5f = BigInt("1422")
		const addressctkVege = accounts[2]
		const boolE8YjUsV = await ETFXPoolS2Ni8o9.increaseAllowance.call(addressJuKkx1, uintBMS7Xhu, {from: "0x0000000000000000000000000000000000000001"});
		const boolA52uwH = await ETFXPoolS2Ni8o9.increaseAllowance.call(addressysomvp8, uinta2e2mur, {from: accounts[3]});
		const stringOY8yNdr = await ETFXPoolS2Ni8o9.name.call({from: accounts[1]});
		const boolrkHnrmV = await ETFXPoolS2Ni8o9.decreaseAllowance.call(addressctkVege, uintRReDr5f, {from: accounts[4]});

		assert.equal(boolA52uwH, true)
		assert.equal(boolE8YjUsV, true)
		assert.equal(stringOY8yNdr, "ETFX-FARM")
		await expect(ETFXPoolS2Ni8o9.decreaseAllowance.call(addressctkVege, uintRReDr5f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqdJiPl = await ETFXPool.new({from: accounts[3]});
		const uintoRTyQnZ = BigInt("1495")
		const uint256VbulLD = await ETFXPoolqdJiPl.rewardPerToken.call({from: accounts[4]});
		const addressDGz6pNJ = await ETFXPoolqdJiPl.owner.call({from: accounts[3]});
		const uint8jrXsWPV = await ETFXPoolqdJiPl.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const addressKDAczsn = await ETFXPoolqdJiPl.owner.call({from: accounts[1]});
		const uint256y97ZzVh = await ETFXPoolqdJiPl.withdraw.call(uintoRTyQnZ, {from: accounts[0]});

		assert.equal(addressDGz6pNJ, 0x90683240E2abC5ED3fC2C40C299314e834EAEDe5)
		assert.equal(addressKDAczsn, 0x90683240E2abC5ED3fC2C40C299314e834EAEDe5)
		assert.equal(uint256VbulLD, BigInt("0"))
		assert.equal(uint8jrXsWPV, BigInt("8"))
		await expect(ETFXPoolqdJiPl.withdraw.call(uintoRTyQnZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUW951Xy = await ETFXPool.new({from: accounts[0]});
		const uintI9gJw1W = BigInt("390")
		const addressmADmflT = accounts[4]
		const uintoFrvaD = BigInt("458")
		const addresskojtVty = accounts[5]
		const addressDrzKljI = accounts[2]
		const addresswOI4zEn = await ETFXPoolUW951Xy.owner.call({from: accounts[1]});
		const boolV6rMmDL = await ETFXPoolUW951Xy.increaseAllowance.call(addressmADmflT, uintI9gJw1W, {from: accounts[2]});
		const booladhBfeC = await ETFXPoolUW951Xy.transferFrom.call(addressDrzKljI, addresskojtVty, uintoFrvaD, {from: accounts[3]});

		assert.equal(addresswOI4zEn, 0xfdece88D41b40C688d50B265B7B5490435D8396a)
		assert.equal(boolV6rMmDL, true)
		await expect(ETFXPoolUW951Xy.transferFrom.call(addressDrzKljI, addresskojtVty, uintoFrvaD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUW951Xy = await ETFXPool.new({from: accounts[0]});
		const uintQq93Owz = BigInt("1311")
		const addressMmbPLFi = accounts[2]
		await ETFXPoolUW951Xy.getReward.call({from: accounts[2]});
		const boolnfYBEAM = await ETFXPoolUW951Xy.decreaseAllowance.call(addressMmbPLFi, uintQq93Owz, {from: accounts[0]});
		const addressEXLzsb7 = await ETFXPoolUW951Xy.owner.call({from: accounts[2]});

		await expect(ETFXPoolUW951Xy.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUW951Xy = await ETFXPool.new({from: accounts[0]});
		const addressEMvKqz6 = accounts[3]
		const uintxx5rmuu = BigInt("824")
		const addressc69PsBL = accounts[1]
		const addressie6mEwS = await ETFXPoolUW951Xy.transferOwnership.call(addressEMvKqz6, {from: accounts[0]});
		const boolnfYBEAM = await ETFXPoolUW951Xy.decreaseAllowance.call(addressc69PsBL, uintxx5rmuu, {from: accounts[0]});

		await expect(ETFXPoolUW951Xy.decreaseAllowance.call(addressc69PsBL, uintxx5rmuu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqdJiPl = await ETFXPool.new({from: accounts[3]});
		const uint256VbulLD = await ETFXPoolqdJiPl.rewardPerToken.call({from: accounts[4]});
		await ETFXPoolqdJiPl.renounceOwnership.call({from: accounts[3]});
		await ETFXPoolqdJiPl.nonReentrant.call({from: accounts[0]});
		await ETFXPoolqdJiPl.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint256VbulLD, BigInt("0"))
		await expect(ETFXPoolqdJiPl.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})