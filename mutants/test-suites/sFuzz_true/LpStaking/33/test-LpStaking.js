const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingQtGnvHO = await LpStaking.new({from: accounts[2]});
		const addressQcjPlKa = accounts[0]
//		const uint256eDtY8jR = await LpStakingQtGnvHO.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256h8baq76 = await LpStakingQtGnvHO.getUserAccumulatedWithdrawIncome.call(addressQcjPlKa, {from: accounts[0]});

		await expect(LpStakingQtGnvHO.lastTimeRewardApplicable.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingVa7LeDB = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTVqQ4uo = accounts[3]
		const addressUL8UCXA = accounts[1]
		const uint256nbH1aU6 = await LpStakingVa7LeDB.incomeEarned.call(addressTVqQ4uo, {from: accounts[3]});
		await LpStakingVa7LeDB.lpRewardRateChanged.call({from: accounts[2]});
		const uint256scMqe4k = await LpStakingVa7LeDB.incomeEarned.call(addressUL8UCXA, {from: accounts[3]});
		await LpStakingVa7LeDB.exit.call({from: accounts[4]});
	});

	it('test for LpStaking', async () => {
		const LpStakingfhaGVGz = await LpStaking.new({from: accounts[1]});
		const addressBJuYk6v = "0x0000000000000000000000000000000000000001"
		const boolvhB9ybE = true
		const uintzmDeXEk = BigInt("1831")
		const uintYOG7g0P = BigInt("629")
		const addressyNSSy5J = accounts[0]
//		const uint256OVXRwq = await LpStakingfhaGVGz.incomePerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingfhaGVGz.lpIncomeRateChanged.call({from: accounts[0]});
//		const addressFOKCORS = await LpStakingfhaGVGz.updateReward.call(addressBJuYk6v, {from: accounts[4]});
//		const boolpgxJ4N = await LpStakingfhaGVGz.setEmergencyStop.call(boolvhB9ybE, {from: accounts[1]});
//		const uint256tlZuTcR = await LpStakingfhaGVGz.stake.call(uintzmDeXEk, {from: accounts[1]});
//		const addressELU8TyE = await LpStakingfhaGVGz.inCaseTokensGetStuck.call(addressyNSSy5J, uintYOG7g0P, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingfhaGVGz.incomePerToken.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingOlzUdVX = await LpStaking.new({from: accounts[3]});
		const addressTJk887 = accounts[1]
		const addressc1gunWp = accounts[0]
		const addresskCUpPLd = accounts[3]
		const addresso5AQFeC = accounts[4]
		const addressPql0usD = accounts[0]
		const addressuYhohek = accounts[0]
		const addressGwW1PRo = accounts[3]
		const addressvrpueG = accounts[3]
		const uintG7LpWwL = BigInt("199")
		const addressH5LFGY6 = accounts[4]
		const addressGHnY6Hn = accounts[3]
//		await LpStakingOlzUdVX.lpRewardRateChanged.call({from: accounts[4]});
//		const addressdbmJvh = await LpStakingOlzUdVX.initialize.call(addresso5AQFeC, addresskCUpPLd, addressc1gunWp, addressTJk887, {from: "0x0000000000000000000000000000000000000001"});
//		const addressSMKjZYu = await LpStakingOlzUdVX.initialize.call(addressvrpueG, addressGwW1PRo, addressuYhohek, addressPql0usD, {from: accounts[1]});
//		const addressYgEVx3F = await LpStakingOlzUdVX.inCaseTokensGetStuck.call(addressH5LFGY6, uintG7LpWwL, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256FhGgM6j = await LpStakingOlzUdVX.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256rQFIs0F = await LpStakingOlzUdVX.rewardEarned.call(addressGHnY6Hn, {from: accounts[4]});

		await expect(LpStakingOlzUdVX.lpRewardRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingUSUIBQP = await LpStaking.new({from: accounts[3]});
		const byteHDyXqnN = "0x0b191c1a1c1009031a0a171b18191c081305060b0e0c0613141c0701020e1b0b"
		const byteqKsVYQX = "0x13171e1b110105121704010c1a181614120d0f120e1b10151a1b050e01020e0c"
		const uint1IcRaW = BigInt("186")
		const uintx174p7 = BigInt("1803")
		const uintVn6Qjyt = BigInt("1673")
		const addresso4j69k6 = accounts[0]
		const uintiFeMgHL = BigInt("1747")
//		const uint256EfOli0m = await LpStakingUSUIBQP.stakeWithPermit.call(uintVn6Qjyt, uintx174p7, uint1IcRaW, byteqKsVYQX, byteHDyXqnN, {from: accounts[4]});
//		const uint256XIy8TsJ = await LpStakingUSUIBQP.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256DVGE0D = await LpStakingUSUIBQP.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256QkRUOvI = await LpStakingUSUIBQP.rewardEarned.call(addresso4j69k6, {from: accounts[1]});
//		const uint256e8Z7rJt = await LpStakingUSUIBQP.weiToSatoshi.call(uintiFeMgHL, {from: accounts[0]});

		await expect(LpStakingUSUIBQP.stakeWithPermit.call(uintVn6Qjyt, uintx174p7, uint1IcRaW, byteqKsVYQX, byteHDyXqnN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingrdr7OdC = await LpStaking.new({from: accounts[5]});
		const addresss9kkpVZ = accounts[3]
		const addressxvb9y5F = accounts[3]
//		const addressFu8AYZ = await LpStakingrdr7OdC.transferOwnership.call(addresss9kkpVZ, {from: accounts[4]});
//		await LpStakingrdr7OdC.getIncome.call({from: accounts[2]});
//		const uint256OjAuT7e = await LpStakingrdr7OdC.incomeEarned.call(addressxvb9y5F, {from: accounts[4]});
//		await LpStakingrdr7OdC.getReward.call({from: accounts[2]});

		await expect(LpStakingrdr7OdC.transferOwnership.call(addresss9kkpVZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingVHwokzK = await LpStaking.new({from: accounts[0]});
		const addressujPtMgm = accounts[4]
		const addressyAWwfC3 = "0x0000000000000000000000000000000000000001"
		const uint256ArpTLkJ = await LpStakingVHwokzK.rewardEarned.call(addressujPtMgm, {from: accounts[0]});
//		await LpStakingVHwokzK.getReward.call({from: accounts[3]});
//		const addressiEFnHye = await LpStakingVHwokzK.updateIncome.call(addressyAWwfC3, {from: accounts[4]});

		assert.equal(uint256ArpTLkJ, BigInt("0"))
		await expect(LpStakingVHwokzK.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking7Z7aQ6 = await LpStaking.new({from: accounts[2]});
		const addresswIQFRvw = accounts[3]
		const byteS3Bby2G = "0x1a1e120f1c040f0a0a0d1e1e080e080b0a041714151e0c12121b0b0d0f021a02"
		const byteodYx2m = "0x130c081814021117081c1f1c010c12180810041c1a0f0f1720051f1d00180f0f"
		const uintaEgwRir = BigInt("144")
		const uinttAk8WMZ = BigInt("1932")
		const uintNnKPZZ8 = BigInt("1643")
		const byteXhDcmul = "0x1e0f0d110f020509151402011e1120031b01170d071a030e090c0c1e03140201"
		const byteeO0MqPq = "0x1901090208060f0d1a14061f06000108070f18060c010e0607060d1e17070a1b"
		const uintBtKyVej = BigInt("177")
		const uintmssIgt7 = BigInt("1500")
		const uintmnTX7f4 = BigInt("2006")
//		await LpStaking7Z7aQ6.nonEmergencyStop.call({from: accounts[0]});
//		const addressjfLkNWC = await LpStaking7Z7aQ6.updateReward.call(addresswIQFRvw, {from: accounts[0]});
//		const uint256TKwDaP9 = await LpStaking7Z7aQ6.stakeWithPermit.call(uintNnKPZZ8, uinttAk8WMZ, uintaEgwRir, byteodYx2m, byteS3Bby2G, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256z8qutCJ = await LpStaking7Z7aQ6.stakeWithPermit.call(uintmnTX7f4, uintmssIgt7, uintBtKyVej, byteeO0MqPq, byteXhDcmul, {from: accounts[2]});
//		await LpStaking7Z7aQ6.lpIncomeRateChanged.call({from: accounts[5]});

		await expect(LpStaking7Z7aQ6.nonEmergencyStop.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingQtGnvHO = await LpStaking.new({from: accounts[2]});
		const addressYl29FG0 = accounts[0]
		const uint256h8baq76 = await LpStakingQtGnvHO.getUserAccumulatedWithdrawIncome.call(addressYl29FG0, {from: accounts[0]});

		assert.equal(uint256h8baq76, BigInt("0"))
	});

	it('test for LpStaking', async () => {
		const LpStakingQtGnvHO = await LpStaking.new({from: accounts[2]});
		const addressYOo1CRC = accounts[1]
		const addressIXsxUm = "0x0000000000000000000000000000000000000001"
		const addressHoCRC1N = "0x0000000000000000000000000000000000000001"
		const addressNinsFqd = accounts[2]
		const addressf9fnxr = accounts[0]
		const addressLYQKThi = "0x0000000000000000000000000000000000000001"
		const addressQ7dMHeT = accounts[1]
		const addressZIZhdMh = "0x0000000000000000000000000000000000000001"
		const addressRtrfQBN = "0x0000000000000000000000000000000000000001"
		const addressbcpvv1n = await LpStakingQtGnvHO.initialize.call(addressNinsFqd, addressHoCRC1N, addressIXsxUm, addressYOo1CRC, {from: accounts[1]});
		const uint256h8baq76 = await LpStakingQtGnvHO.getUserAccumulatedWithdrawIncome.call(addressf9fnxr, {from: accounts[0]});
//		await LpStakingQtGnvHO.getIncome.call({from: accounts[4]});
//		const addressyLdonqJ = await LpStakingQtGnvHO.initialize.call(addressRtrfQBN, addressZIZhdMh, addressQ7dMHeT, addressLYQKThi, {from: accounts[4]});

		assert.equal(uint256h8baq76, BigInt("0"))
		await expect(LpStakingQtGnvHO.getIncome.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingQtGnvHO = await LpStaking.new({from: accounts[2]});
		const addressAuUxDv0 = accounts[1]
		const addressVy6X2xq = accounts[2]
		const uint256h8baq76 = await LpStakingQtGnvHO.getUserAccumulatedWithdrawIncome.call(addressAuUxDv0, {from: accounts[0]});
//		const uint256LaJETui = await LpStakingQtGnvHO.getCurIncomeRate.call({from: accounts[2]});
//		const addressUxW4ilw = await LpStakingQtGnvHO.updateReward.call(addressVy6X2xq, {from: accounts[2]});

		assert.equal(uint256h8baq76, BigInt("0"))
		await expect(LpStakingQtGnvHO.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingVHwokzK = await LpStaking.new({from: accounts[0]});
		const addressjlXoPUl = accounts[5]
		const uint256ArpTLkJ = await LpStakingVHwokzK.rewardEarned.call(addressjlXoPUl, {from: accounts[0]});
//		await LpStakingVHwokzK.exit.call({from: accounts[5]});

		assert.equal(uint256ArpTLkJ, BigInt("0"))
		await expect(LpStakingVHwokzK.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingCcIN0g4 = await LpStaking.new({from: accounts[2]});
		const addressjIRjhy = accounts[4]
		const addressxTwsNFx = accounts[5]
		const addressIzJjIW = accounts[5]
		const addressAsYgh0o = accounts[3]
		const addressYvyRsM6 = accounts[5]
		const addressvyXozUI = accounts[0]
		const addresshYBvIhV = accounts[3]
		const addressAPChYXV = accounts[3]
		const addressvwwjKhu = accounts[0]
		const addressfnNdPXY = accounts[1]
		const addressHxWZMMc = accounts[2]
		const addressk9Cb0SA = accounts[4]
		const addressXiRYhFb = accounts[1]
		const addresssYoIpZF = accounts[0]
		const addressNmQQKQR = await LpStakingCcIN0g4.initialize.call(addressAsYgh0o, addressIzJjIW, addressxTwsNFx, addressjIRjhy, {from: accounts[0]});
		const uint256j67zrxw = await LpStakingCcIN0g4.rewardEarned.call(addressYvyRsM6, {from: accounts[1]});
		const addressbryzib = await LpStakingCcIN0g4.initialize.call(addressvwwjKhu, addressAPChYXV, addresshYBvIhV, addressvyXozUI, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256H3VI6Y0 = await LpStakingCcIN0g4.incomeEarned.call(addressfnNdPXY, {from: accounts[2]});
//		const addressoOTezbj = await LpStakingCcIN0g4.initialize.call(addresssYoIpZF, addressXiRYhFb, addressk9Cb0SA, addressHxWZMMc, {from: accounts[3]});

		assert.equal(uint256j67zrxw, BigInt("0"))
		await expect(LpStakingCcIN0g4.incomeEarned.call(addressfnNdPXY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})