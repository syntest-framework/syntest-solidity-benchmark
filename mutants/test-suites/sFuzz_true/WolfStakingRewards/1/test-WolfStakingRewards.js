const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressZwUDz3B = accounts[4]
		const addresswXm1dAd = accounts[4]
		const addresskZnqFC = accounts[3]
		const WolfStakingRewardsRDhaQtW = await WolfStakingRewards.new(addressZwUDz3B, addresswXm1dAd, addresskZnqFC, {from: accounts[4]});
		const uintD6VtCLT = BigInt("504")
		const uintppazrWE = BigInt("820")
		const uintbIQe0YG = BigInt("1878")
		const uintuygOZNw = BigInt("151")
		const uint256FpACa0x = await WolfStakingRewardsRDhaQtW.lastTimeRewardApplicable.call(uintD6VtCLT, {from: accounts[1]});
		const uintvmUoHxm = await WolfStakingRewardsRDhaQtW.getReward.call(uintppazrWE, {from: accounts[1]});
//		const uint256hNswKWC = await WolfStakingRewardsRDhaQtW.exit.call(uintbIQe0YG, {from: accounts[0]});
//		const uint8mwU7qoQ = await WolfStakingRewardsRDhaQtW.decimals.call({from: accounts[4]});
//		const stringtWsJbe4 = await WolfStakingRewardsRDhaQtW.symbol.call({from: accounts[5]});
//		const uintAcB0wEf = await WolfStakingRewardsRDhaQtW.getReward.call(uintuygOZNw, {from: accounts[1]});

		assert.equal(uint256FpACa0x, BigInt("0"))
		await expect(WolfStakingRewardsRDhaQtW.exit.call(uintbIQe0YG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressye1L1va = accounts[3]
		const addressk0uycU6 = accounts[1]
		const addressALniBSB = accounts[2]
		const WolfStakingRewardsbpFt1u = await WolfStakingRewards.new(addressye1L1va, addressk0uycU6, addressALniBSB, {from: accounts[5]});
		const uintFaHUNXM = BigInt("1065")
		const uintAsSBpDC = BigInt("1723")
		const uintQyRVgWr = BigInt("1336")
		const uintWPfgy5 = BigInt("1571")
//		const uint256gpYXUsY = await WolfStakingRewardsbpFt1u.withdrawRemainingBalance.call(uintAsSBpDC, uintFaHUNXM, {from: accounts[2]});
//		await WolfStakingRewardsbpFt1u.nonReentrant.call({from: accounts[0]});
//		const uint8KEdiJeo = await WolfStakingRewardsbpFt1u.decimals.call({from: accounts[0]});
//		const uint256nMGFDU = await WolfStakingRewardsbpFt1u.withdrawRemainingBalance.call(uintWPfgy5, uintQyRVgWr, {from: accounts[0]});

		await expect(WolfStakingRewardsbpFt1u.withdrawRemainingBalance.call(uintAsSBpDC, uintFaHUNXM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringVmqyIP5 = "VDIPIMJ3sBd1Y4pCmh7ZFo2G6HC41BylTntJga6FWl8odX9UG3kTksYqQBLGsy3M5HnEHVZycAOxgWEwaaR5WskABaj"
		const stringgNEBh7x = "mDIgFk6quxAyLUiviaqj6F9"
		const uintwbFxNCi = BigInt("145")
		const WolfStakingRewardsJKV1M0w = await WolfStakingRewards.new(stringVmqyIP5, stringgNEBh7x, uintwbFxNCi, {from: accounts[2]});
		const uintEgG8MYA = BigInt("1265")
		const addressQY9bB3z = accounts[0]
		const uint256Dt51ODO = await WolfStakingRewardsJKV1M0w.earned.call(addressQY9bB3z, uintEgG8MYA, {from: accounts[3]});
		await WolfStakingRewardsJKV1M0w.nonReentrant.call({from: accounts[3]});
		const stringh3HBMnf = await WolfStakingRewardsJKV1M0w.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzORxEEW = "eIabFwRsYLLQJIgTzO6rBIJWqcukIxykJgwbeynLHSuwDDnAZoaL"
		const stringlNwkAmp = "nDB85NGSWJOze2VLy9Bn6IvIcT0ikfLB2CjMtwIRDhxmdg1HSS0xDH8zx5192YXmlQcgnNpC1Udf3fJct"
		const uintDzY21kE = BigInt("153")
		const WolfStakingRewards3WoTS2 = await WolfStakingRewards.new(stringzORxEEW, stringlNwkAmp, uintDzY21kE, {from: accounts[5]});
		const uinte8UuNe = BigInt("1717")
		const uintt8CXuIo = BigInt("1694")
		const addresssonBLCJ = accounts[3]
		const uintWyzIViW = BigInt("587")
		const addressuLqj9TX = accounts[3]
		const uintGKlnwJp = BigInt("770")
		const uintw4IKG0 = BigInt("469")
		const uintxRsFden = BigInt("1394")
		const uint8lTXFYlF = await WolfStakingRewards3WoTS2.decimals.call({from: accounts[3]});
		const uint256IBQ5L66 = await WolfStakingRewards3WoTS2.getRewardForDuration.call(uinte8UuNe, {from: accounts[0]});
		const addresscU79Xhf = await WolfStakingRewards3WoTS2.updateReward.call(addresssonBLCJ, uintt8CXuIo, {from: accounts[2]});
		const uint256u3iLnp = await WolfStakingRewards3WoTS2.balanceOfPerPool.call(addressuLqj9TX, uintWyzIViW, {from: accounts[1]});
		const uint256iWt8ErT = await WolfStakingRewards3WoTS2.totalSupplyPerPool.call(uintGKlnwJp, {from: accounts[0]});
		const uint256Du2jYGU = await WolfStakingRewards3WoTS2.withdraw.call(uintxRsFden, uintw4IKG0, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressPwloxta = accounts[5]
		const addressrRLvRm = accounts[0]
		const addressp7q9Hmi = accounts[2]
		const WolfStakingRewardshlQGMgQ = await WolfStakingRewards.new(addressPwloxta, addressrRLvRm, addressp7q9Hmi, {from: accounts[2]});
		const uintxVhyrTo = BigInt("1323")
		const uintM34a0Yw = BigInt("1325")
		const uintwGqUjIB = BigInt("1077")
		const uintHNEirpw = BigInt("774")
		const uintQI1Cqxn = BigInt("2014")
		const uintUdns2eq = BigInt("1718")
//		const uint256tbqBa4k = await WolfStakingRewardshlQGMgQ.withdraw.call(uintM34a0Yw, uintxVhyrTo, {from: accounts[2]});
//		const uint256eXaWN93 = await WolfStakingRewardshlQGMgQ.withdrawRemainingBalance.call(uintHNEirpw, uintwGqUjIB, {from: accounts[3]});
//		const uint256XHvAfIa = await WolfStakingRewardshlQGMgQ.withdrawRemainingBalance.call(uintUdns2eq, uintQI1Cqxn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardshlQGMgQ.withdraw.call(uintM34a0Yw, uintxVhyrTo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringD9fXSLP = "SubMnrSbdi9uScfRqxOVr1Ec6xDL5QsQGvlLnMCL0siSMAdwLgOSC6DjAzQ49XIKF45dIFoJD"
		const stringPHXc4pZ = "sZMoF6KkJngs9cmiLgXHmPSfbWbyoK3sApNC3tC2unrXD8bkka1Oucxy1JQcRMnXXip6oXLKPbJOR9xr9ct8XPgq"
		const uintiq6Uqb = BigInt("76")
		const WolfStakingRewardsxffgmN7 = await WolfStakingRewards.new(stringD9fXSLP, stringPHXc4pZ, uintiq6Uqb, {from: accounts[4]});
		const uintVNYzvZY = BigInt("1492")
		const uintT6c0fFg = BigInt("761")
		const addressRb5s89T = accounts[3]
		const uintZ2oYXSW = BigInt("874")
		const uinthLGvo6v = BigInt("1847")
		const stringK1doh2n = await WolfStakingRewardsxffgmN7.symbol.call({from: accounts[2]});
		const uint256gEBWDMk = await WolfStakingRewardsxffgmN7.rewardPerToken.call(uintVNYzvZY, {from: accounts[3]});
		const stringzDls41z = await WolfStakingRewardsxffgmN7.symbol.call({from: accounts[4]});
		const uint256JYLQn1 = await WolfStakingRewardsxffgmN7.earned.call(addressRb5s89T, uintT6c0fFg, {from: accounts[3]});
		const uint256FyLKajP = await WolfStakingRewardsxffgmN7.withdraw.call(uinthLGvo6v, uintZ2oYXSW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressZkUh8xo = accounts[2]
		const addresswECobNC = accounts[1]
		const addressu0nZlR6 = accounts[0]
		const WolfStakingRewardsEMTSJ9 = await WolfStakingRewards.new(addressZkUh8xo, addresswECobNC, addressu0nZlR6, {from: accounts[0]});
		const uintZIQLDZL = BigInt("1237")
		const uintXOoaYkA = BigInt("723")
		const uintvOVayp = BigInt("18")
		const addressmNwZjV7 = accounts[3]
//		const uint256NSos8Om = await WolfStakingRewardsEMTSJ9.getRewardForDuration.call(uintZIQLDZL, {from: accounts[1]});
//		const uintXIpWtwX = await WolfStakingRewardsEMTSJ9.getReward.call(uintXOoaYkA, {from: accounts[2]});
//		const stringU0nGJL9 = await WolfStakingRewardsEMTSJ9.symbol.call({from: accounts[2]});
//		const addresst1gIPQ1 = await WolfStakingRewardsEMTSJ9.updateReward.call(addressmNwZjV7, uintvOVayp, {from: accounts[4]});

		await expect(WolfStakingRewardsEMTSJ9.getRewardForDuration.call(uintZIQLDZL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressSI9sQZy = accounts[1]
		const addressR3czu40 = accounts[4]
		const addressgPImZun = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardsZnoJ4th = await WolfStakingRewards.new(addressSI9sQZy, addressR3czu40, addressgPImZun, {from: accounts[4]});
		const uintBeREeO = BigInt("754")
		const uintf3lQUOy = BigInt("1151")
		const uintWjgA4SW = BigInt("1906")
//		const stringlHlOiBh = await WolfStakingRewardsZnoJ4th.symbol.call({from: accounts[1]});
//		const uint8x6XZM0R = await WolfStakingRewardsZnoJ4th.decimals.call({from: accounts[3]});
//		const uint256qgAaTRM = await WolfStakingRewardsZnoJ4th.getRewardForDuration.call(uintBeREeO, {from: accounts[4]});
//		const uint256O6GxB2X = await WolfStakingRewardsZnoJ4th.rewardPerToken.call(uintf3lQUOy, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256NbLAbhX = await WolfStakingRewardsZnoJ4th.lastTimeRewardApplicable.call(uintWjgA4SW, {from: accounts[5]});

		await expect(WolfStakingRewardsZnoJ4th.symbol.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressBc5zekB = accounts[3]
		const addressnYY1xyl = accounts[2]
		const addressyXYRBFe = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardsefNXOzt = await WolfStakingRewards.new(addressBc5zekB, addressnYY1xyl, addressyXYRBFe, {from: "0x0000000000000000000000000000000000000001"});
		const uintKlT3AH = BigInt("822")
		const uintBxrqgZc = BigInt("219")
		const uintrFba7kK = BigInt("260")
		const uintS9JreOA = BigInt("289")
		const uinteuHBou8 = BigInt("1482")
		const uintRntL62P = BigInt("1292")
		const uintNZSJgeZ = BigInt("1693")
		const uint256UkYB97O = await WolfStakingRewardsefNXOzt.totalSupplyPerPool.call(uintKlT3AH, {from: accounts[1]});
		const uint256Exukmwv = await WolfStakingRewardsefNXOzt.withdrawRemainingBalance.call(uintrFba7kK, uintBxrqgZc, {from: accounts[4]});
		const uint256pCdEfxf = await WolfStakingRewardsefNXOzt.withdrawRemainingBalance.call(uinteuHBou8, uintS9JreOA, {from: accounts[2]});
		const uint256dfJwgVz = await WolfStakingRewardsefNXOzt.withdraw.call(uintNZSJgeZ, uintRntL62P, {from: accounts[2]});
		await WolfStakingRewardsefNXOzt.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressIqzU9n8 = accounts[4]
		const addressadaxnNH = accounts[4]
		const addressLnZajNy = accounts[3]
		const WolfStakingRewardsRDhaQtW = await WolfStakingRewards.new(addressIqzU9n8, addressadaxnNH, addressLnZajNy, {from: accounts[4]});
		const uintRUqK19k = BigInt("504")
		const uintX1115uo = BigInt("820")
		const uintJNoqamm = BigInt("1878")
		const uint256FpACa0x = await WolfStakingRewardsRDhaQtW.lastTimeRewardApplicable.call(uintRUqK19k, {from: accounts[1]});
		const uintvmUoHxm = await WolfStakingRewardsRDhaQtW.getReward.call(uintX1115uo, {from: accounts[1]});
//		const uint256hNswKWC = await WolfStakingRewardsRDhaQtW.exit.call(uintJNoqamm, {from: accounts[0]});
//		const uint8mwU7qoQ = await WolfStakingRewardsRDhaQtW.decimals.call({from: accounts[4]});
//		const stringtWsJbe4 = await WolfStakingRewardsRDhaQtW.symbol.call({from: accounts[5]});

		assert.equal(uint256FpACa0x, BigInt("0"))
		await expect(WolfStakingRewardsRDhaQtW.exit.call(uintJNoqamm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressGl1Hb3l = accounts[5]
		const addressBEpKy7c = accounts[0]
		const addressnQj1IK6 = accounts[2]
		const WolfStakingRewardshlQGMgQ = await WolfStakingRewards.new(addressGl1Hb3l, addressBEpKy7c, addressnQj1IK6, {from: accounts[2]});
		const uintnVebOJ = BigInt("817")
		const uintT9ueDQQ = BigInt("1104")
		const uintzAw30lU = BigInt("1323")
		const uintCFGVOq = BigInt("1325")
		const uintdaxyLl = BigInt("133")
		const uintrISJ4U = BigInt("1701")
		const uintsusI35e = BigInt("5")
		const uintjb9ApsU = BigInt("1077")
		const uintthrC5fA = BigInt("774")
		const uintwslVXp9 = BigInt("2045")
		const uintjEnLbPT = BigInt("1718")
//		const uint256jg4Ed5N = await WolfStakingRewardshlQGMgQ.stake.call(uintT9ueDQQ, uintnVebOJ, {from: accounts[4]});
//		const uint256tbqBa4k = await WolfStakingRewardshlQGMgQ.withdraw.call(uintCFGVOq, uintzAw30lU, {from: accounts[2]});
//		const uint2560Onp4n = await WolfStakingRewardshlQGMgQ.withdraw.call(uintrISJ4U, uintdaxyLl, {from: accounts[3]});
//		const uintfJ6V1Eg = await WolfStakingRewardshlQGMgQ.getReward.call(uintsusI35e, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256eXaWN93 = await WolfStakingRewardshlQGMgQ.withdrawRemainingBalance.call(uintthrC5fA, uintjb9ApsU, {from: accounts[3]});
//		const uint256XHvAfIa = await WolfStakingRewardshlQGMgQ.withdrawRemainingBalance.call(uintjEnLbPT, uintwslVXp9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardshlQGMgQ.stake.call(uintT9ueDQQ, uintnVebOJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressuZwQYeh = accounts[5]
		const addressMeFTboj = accounts[0]
		const addressbL6NjH = accounts[2]
		const WolfStakingRewardshlQGMgQ = await WolfStakingRewards.new(addressuZwQYeh, addressMeFTboj, addressbL6NjH, {from: accounts[2]});
		const uintFImao2Y = BigInt("1323")
		const uintz2XL7i3 = BigInt("1322")
		const uintMqk0eQ = BigInt("1077")
		const uintk3bjMtg = BigInt("774")
		const uintNBBx3K = BigInt("2014")
		const uintxfg6Ths = BigInt("1718")
//		const uint256tbqBa4k = await WolfStakingRewardshlQGMgQ.withdraw.call(uintz2XL7i3, uintFImao2Y, {from: accounts[2]});
//		const uint256eXaWN93 = await WolfStakingRewardshlQGMgQ.withdrawRemainingBalance.call(uintk3bjMtg, uintMqk0eQ, {from: accounts[3]});
//		const uint256XHvAfIa = await WolfStakingRewardshlQGMgQ.withdrawRemainingBalance.call(uintxfg6Ths, uintNBBx3K, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardshlQGMgQ.withdraw.call(uintz2XL7i3, uintFImao2Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressj9E3WM7 = accounts[4]
		const addressbtvdtU5 = accounts[4]
		const addressIqTEk30 = accounts[3]
		const WolfStakingRewardsRDhaQtW = await WolfStakingRewards.new(addressj9E3WM7, addressbtvdtU5, addressIqTEk30, {from: accounts[4]});
		const uintyB5dyis = BigInt("504")
		const uintpSGatIa = BigInt("1014")
		const uintaCQuRk3 = BigInt("820")
		const uintAhC8PGO = BigInt("1878")
		const uintRoCz5xb = BigInt("151")
		const uint256FpACa0x = await WolfStakingRewardsRDhaQtW.lastTimeRewardApplicable.call(uintyB5dyis, {from: accounts[1]});
		const uint256Vopmqpz = await WolfStakingRewardsRDhaQtW.rewardPerToken.call(uintpSGatIa, {from: accounts[1]});
		const uintvmUoHxm = await WolfStakingRewardsRDhaQtW.getReward.call(uintaCQuRk3, {from: accounts[1]});
//		const uint256hNswKWC = await WolfStakingRewardsRDhaQtW.exit.call(uintAhC8PGO, {from: accounts[0]});
//		const uint8mwU7qoQ = await WolfStakingRewardsRDhaQtW.decimals.call({from: accounts[4]});
//		const stringtWsJbe4 = await WolfStakingRewardsRDhaQtW.symbol.call({from: accounts[5]});
//		const uintAcB0wEf = await WolfStakingRewardsRDhaQtW.getReward.call(uintRoCz5xb, {from: accounts[1]});

		assert.equal(uint256FpACa0x, BigInt("0"))
		assert.equal(uint256Vopmqpz, BigInt("0"))
		await expect(WolfStakingRewardsRDhaQtW.exit.call(uintAhC8PGO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressDAaZ7In = accounts[3]
		const addressIag4dTc = accounts[3]
		const addressXG5nmjG = accounts[2]
		const WolfStakingRewardsZLIAvTj = await WolfStakingRewards.new(addressDAaZ7In, addressIag4dTc, addressXG5nmjG, {from: accounts[0]});
		const uintQ08Ufhj = BigInt("1980")
		const addresss89OCJZ = accounts[0]
		const uintUhGicgp = BigInt("1567")
		const addressFq9aj0A = accounts[3]
		const uint256TYBYk4K = await WolfStakingRewardsZLIAvTj.balanceOfPerPool.call(addresss89OCJZ, uintQ08Ufhj, {from: accounts[4]});
		const uint256DFRhz6x = await WolfStakingRewardsZLIAvTj.earned.call(addressFq9aj0A, uintUhGicgp, {from: accounts[0]});

		assert.equal(uint256DFRhz6x, BigInt("0"))
		assert.equal(uint256TYBYk4K, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const addressGBrV4q = accounts[5]
		const addressCBIH0Vl = accounts[0]
		const addressPnSSkRp = accounts[2]
		const WolfStakingRewardshlQGMgQ = await WolfStakingRewards.new(addressGBrV4q, addressCBIH0Vl, addressPnSSkRp, {from: accounts[2]});
		const uintFXT7KNJ = BigInt("817")
		const uintPcA5Ybj = BigInt("1104")
		const uintrsx3fG8 = BigInt("1005")
		const address4PxlYO = accounts[1]
		const uintYoFeQZN = BigInt("1323")
		const uintlvHi1D0 = BigInt("1325")
		const uintK8nrNbS = BigInt("131")
		const uintyEQpluT = BigInt("1701")
		const uint4m8gTD = BigInt("5")
		const uintVfmSj09 = BigInt("1077")
		const uintemv9WmC = BigInt("774")
		const uintN2yEsrF = BigInt("2045")
		const uinter7qEjr = BigInt("1718")
//		const uint256jg4Ed5N = await WolfStakingRewardshlQGMgQ.stake.call(uintPcA5Ybj, uintFXT7KNJ, {from: accounts[4]});
//		const uint256rzfde55 = await WolfStakingRewardshlQGMgQ.earned.call(address4PxlYO, uintrsx3fG8, {from: accounts[1]});
//		const uint256tbqBa4k = await WolfStakingRewardshlQGMgQ.withdraw.call(uintlvHi1D0, uintYoFeQZN, {from: accounts[2]});
//		const uint2560Onp4n = await WolfStakingRewardshlQGMgQ.withdraw.call(uintyEQpluT, uintK8nrNbS, {from: accounts[3]});
//		const uintfJ6V1Eg = await WolfStakingRewardshlQGMgQ.getReward.call(uint4m8gTD, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256eXaWN93 = await WolfStakingRewardshlQGMgQ.withdrawRemainingBalance.call(uintemv9WmC, uintVfmSj09, {from: accounts[3]});
//		const uint256XHvAfIa = await WolfStakingRewardshlQGMgQ.withdrawRemainingBalance.call(uinter7qEjr, uintN2yEsrF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardshlQGMgQ.stake.call(uintPcA5Ybj, uintFXT7KNJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringxjbmguP = "TOy96aY7ttzyOxj5cqiVk7MiBzz37d6PD13moxzPierBYhtf2OKnBneauenSgduF7TdtMlnsQ7P826MEUfBNAtejsqwod9cPkHz"
		const stringgpA9rWy = "BP68N"
		const uint5eOkL4 = BigInt("38")
		const WolfStakingRewardsBvmnbG3 = await WolfStakingRewards.new(stringxjbmguP, stringgpA9rWy, uint5eOkL4, {from: accounts[4]});
		const uintPGK85NK = BigInt("1256")
		const uintBPp99LF = BigInt("1332")
		const uintjlueQPN = BigInt("1355")
		const uintp0JrTEZ = BigInt("1618")
		const uint256xlEdoa4 = await WolfStakingRewardsBvmnbG3.lastTimeRewardApplicable.call(uintPGK85NK, {from: accounts[0]});
		const uint256JpA36dM = await WolfStakingRewardsBvmnbG3.stake.call(uintjlueQPN, uintBPp99LF, {from: accounts[2]});
		const uinttq6ROa = await WolfStakingRewardsBvmnbG3.getReward.call(uintp0JrTEZ, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressd59xZIZ = accounts[4]
		const addressnMtixc0 = accounts[1]
		const addressUbGz3fo = accounts[4]
		const WolfStakingRewardszGtiYGT = await WolfStakingRewards.new(addressd59xZIZ, addressnMtixc0, addressUbGz3fo, {from: accounts[5]});
		const uintsK67a3k = BigInt("1841")
		const uintesSnF2e = BigInt("1059")
		const addressneXgZiN = accounts[0]
		const uint256gYLN6dP = await WolfStakingRewardszGtiYGT.totalSupplyPerPool.call(uintsK67a3k, {from: accounts[0]});
//		const addressDGFFNx5 = await WolfStakingRewardszGtiYGT.updateReward.call(addressneXgZiN, uintesSnF2e, {from: accounts[4]});

		assert.equal(uint256gYLN6dP, BigInt("0"))
		await expect(WolfStakingRewardszGtiYGT.updateReward.call(addressneXgZiN, uintesSnF2e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringOugY9Ea = "t98VBSU7rE4XyDiUirrbcTXYmxG43kvwS8uPxtT8lrVDNvRcAn"
		const stringBMA5sC6 = "cpiZpj9lrduoL"
		const uintJTJDpSv = BigInt("6")
		const WolfStakingRewardsCMQpmE = await WolfStakingRewards.new(stringOugY9Ea, stringBMA5sC6, uintJTJDpSv, {from: accounts[0]});
		const uintmpr5AS = BigInt("942")
		const addressizArKsn = accounts[3]
		const uintij9i8lt = BigInt("817")
		const addressMbcRM57 = accounts[2]
		const uint8Brnvw04 = await WolfStakingRewardsCMQpmE.decimals.call({from: accounts[3]});
		const addresse4bJDQD = await WolfStakingRewardsCMQpmE.updateReward.call(addressizArKsn, uintmpr5AS, {from: accounts[2]});
		const uint256OImNkKE = await WolfStakingRewardsCMQpmE.balanceOfPerPool.call(addressMbcRM57, uintij9i8lt, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLGNcyOs = "purPCV49ddkRyI3De2GuTqsPKb"
		const stringkjnvyH0 = "V8gKGVkrb5ke3Q8fvrM1DxC7wNKjyE3cuLrbMxN6NTWux"
		const uintNtqVt3c = BigInt("149")
		const WolfStakingRewardsuHJtrkC = await WolfStakingRewards.new(stringLGNcyOs, stringkjnvyH0, uintNtqVt3c, {from: accounts[0]});
		const uintlIR1pCE = BigInt("252")
		const addressDuS3CZb = accounts[0]
		const uint8O26DXvd = await WolfStakingRewardsuHJtrkC.decimals.call({from: accounts[2]});
		const uint256UuCnl3t = await WolfStakingRewardsuHJtrkC.balanceOfPerPool.call(addressDuS3CZb, uintlIR1pCE, {from: accounts[2]});
		const uint8TpFFxl8 = await WolfStakingRewardsuHJtrkC.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIdw99TV = "13RQ5ht2HLG8CMlHRUegSk8kiSwmS"
		const stringLvju0Yj = "EICz9zL0y3e6XMxeNLeTA3SLZFhurGJiW0cRlUNozUQX5drRj7UkDDfOtBv0EhOpcXijwoaOREFVwlIPynm2YGbHrHqhVY"
		const uintrWm4tMA = BigInt("73")
		const WolfStakingRewardsmaygomn = await WolfStakingRewards.new(stringIdw99TV, stringLvju0Yj, uintrWm4tMA, {from: accounts[3]});
		const uintByUntsa = BigInt("1033")
		const uintwaF9ZtN = BigInt("869")
		const uint256RxKrwev = await WolfStakingRewardsmaygomn.stake.call(uintwaF9ZtN, uintByUntsa, {from: accounts[4]});
		const uint8PY2uEvf = await WolfStakingRewardsmaygomn.decimals.call({from: accounts[4]});
		const uint8Zq0p0C = await WolfStakingRewardsmaygomn.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringze2F6um = "m8aV1XRoI1VFc5"
		const stringtzAtj8a = "2hdkQS7mUWqcKkCKhEiXjYK8xxOrtlFHpBCW7MPENT9inLouM1qYIJSTjKuhCvyjLlZKnq577vxvL3K"
		const uintTGp9MHk = BigInt("255")
		const WolfStakingRewardscdFwb9V = await WolfStakingRewards.new(stringze2F6um, stringtzAtj8a, uintTGp9MHk, {from: accounts[0]});
		const uintSXBGP88 = BigInt("1374")
		const uintMqSzHCw = BigInt("1676")
		const stringwUd2b4p = await WolfStakingRewardscdFwb9V.symbol.call({from: accounts[3]});
		const uint256XlVVBp3 = await WolfStakingRewardscdFwb9V.getRewardForDuration.call(uintSXBGP88, {from: accounts[1]});
		const uint256Vby8BYB = await WolfStakingRewardscdFwb9V.exit.call(uintMqSzHCw, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZlsC6TD = "GY3ZQcWO6LDyY6VcyODSyU9blKkrxW9m"
		const stringMCjTbAN = "U44p47mGVR8kEcJjS3LWXLvr3oZBpaN59162RpitjQpIoW4zAJGgSgIaqy1ePCoq6M2wBq87DUzxM0"
		const uintA82AlMq = BigInt("117")
		const WolfStakingRewardsnMvmx2 = await WolfStakingRewards.new(stringZlsC6TD, stringMCjTbAN, uintA82AlMq, {from: accounts[2]});
		const uintYiLKQ0Q = BigInt("1150")
		const uintJu1yJe8 = BigInt("1772")
		const uintybdQVey = BigInt("92")
		const stringwqG4swM = await WolfStakingRewardsnMvmx2.symbol.call({from: accounts[1]});
		const uint256kREr2oK = await WolfStakingRewardsnMvmx2.rewardPerToken.call(uintYiLKQ0Q, {from: accounts[4]});
		await WolfStakingRewardsnMvmx2.nonReentrant.call({from: accounts[5]});
		const uint256iccb2tF = await WolfStakingRewardsnMvmx2.withdrawRemainingBalance.call(uintybdQVey, uintJu1yJe8, {from: accounts[4]});
		const stringza0W0T5 = await WolfStakingRewardsnMvmx2.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressyB9aKR2 = accounts[5]
		const addresso5loqt = accounts[0]
		const addressu25tqt = accounts[2]
		const WolfStakingRewardshlQGMgQ = await WolfStakingRewards.new(addressyB9aKR2, addresso5loqt, addressu25tqt, {from: accounts[2]});
		const uintZpNsMQ = BigInt("1556")
		const uintSRsFsCN = BigInt("565")
//		const uint256arrayvxv8oWW = await WolfStakingRewardshlQGMgQ.updateNotifyRewardAmount.call(uintZpNsMQ, {from: accounts[0]});
//		const uintgbDk8YL = await WolfStakingRewardshlQGMgQ.getReward.call(uintSRsFsCN, {from: accounts[1]});

		await expect(WolfStakingRewardshlQGMgQ.updateNotifyRewardAmount.call(uintZpNsMQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringpdoCYYR = "qqd9cwQuEjj5mawDhi94q8Z30C78rnGOH4ky5HQ8Bd6tH8lrBmXl"
		const stringM1sdxj9 = "jM4br96iZz"
		const uintqpwJDwN = BigInt("251")
		const WolfStakingRewardsLZLviIj = await WolfStakingRewards.new(stringpdoCYYR, stringM1sdxj9, uintqpwJDwN, {from: accounts[4]});
		const uintXPMhutL = BigInt("356")
		const uintAUfUNNW = BigInt("476")
		const uint256V2agnNt = await WolfStakingRewardsLZLviIj.stake.call(uintAUfUNNW, uintXPMhutL, {from: accounts[5]});
		await WolfStakingRewardsLZLviIj.nonReentrant.call({from: accounts[1]});
		await WolfStakingRewardsLZLviIj.nonReentrant.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnvXN3Lc = "uejYUIurAXkWEMRyt7OecqyGmcm2wFVhbx4MwuqAl6kobxR6CQoDfO"
		const stringaGYu4w5 = "i9FGJK9yBRIINbIu5GcozBXu9zEYg7MUYCGRrAWPwwtadR2RlaIuJKmht3ldn8p4tVJ"
		const uintfuO16jq = BigInt("79")
		const WolfStakingRewardsaPDGrW6 = await WolfStakingRewards.new(stringnvXN3Lc, stringaGYu4w5, uintfuO16jq, {from: accounts[1]});
		const uintxm0TXa6 = BigInt("94")
		const uintezLqwgt = BigInt("103")
		const uintbywgbGM = BigInt("1996")
		const uintHPAooPV = BigInt("1250")
		const uintQbpIbyR = BigInt("1989")
		const uint8EjjUFIc = await WolfStakingRewardsaPDGrW6.decimals.call({from: accounts[1]});
		const uint256T8KJkHT = await WolfStakingRewardsaPDGrW6.stake.call(uintezLqwgt, uintxm0TXa6, {from: accounts[4]});
		const uint256uitxn0i = await WolfStakingRewardsaPDGrW6.lastTimeRewardApplicable.call(uintbywgbGM, {from: accounts[2]});
		const uint256Xso7SuK = await WolfStakingRewardsaPDGrW6.getRewardForDuration.call(uintHPAooPV, {from: accounts[2]});
		const uint256GMVTWnK = await WolfStakingRewardsaPDGrW6.totalSupplyPerPool.call(uintQbpIbyR, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressEZfvipx = accounts[3]
		const addressI3PZlrt = accounts[3]
		const addressAlY9hec = accounts[3]
		const WolfStakingRewardswHv9kmu = await WolfStakingRewards.new(addressEZfvipx, addressI3PZlrt, addressAlY9hec, {from: accounts[2]});
		const uintwfNCfnr = BigInt("828")
		const addresspZtTnpG = accounts[3]
		const uintgEoNS7V = BigInt("647")
		const uintQe4vIn = BigInt("646")
		const uintzyf2VYK = BigInt("1816")
		const uintIuz9Yzw = BigInt("1666")
		const addressXiLxQNE = accounts[0]
		const uint256aFRzlG2 = await WolfStakingRewardswHv9kmu.earned.call(addresspZtTnpG, uintwfNCfnr, {from: accounts[3]});
		const uint256KBRTNTp = await WolfStakingRewardswHv9kmu.lastTimeRewardApplicable.call(uintgEoNS7V, {from: accounts[3]});
//		const uint256n1b0ham = await WolfStakingRewardswHv9kmu.withdrawRemainingBalance.call(uintzyf2VYK, uintQe4vIn, {from: accounts[2]});
//		const uint256EoLQlRP = await WolfStakingRewardswHv9kmu.earned.call(addressXiLxQNE, uintIuz9Yzw, {from: accounts[1]});

		assert.equal(uint256KBRTNTp, BigInt("0"))
		assert.equal(uint256aFRzlG2, BigInt("0"))
		await expect(WolfStakingRewardswHv9kmu.withdrawRemainingBalance.call(uintzyf2VYK, uintQe4vIn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringZ0oEjMy = "llcTvkysJ2ykqYvkf6JTePb9M1FIGlYzCAzK8QdNoWURV6JfXzagRHnEhevujGF3SgC8NCkfwVaMoW"
		const stringljMXXzH = "I9Sf3lQdLNtdE70QdmeL9LbyKwFwxtshtnLjLPe"
		const uintTOwkIs = BigInt("190")
		const WolfStakingRewardsS45DxgD = await WolfStakingRewards.new(stringZ0oEjMy, stringljMXXzH, uintTOwkIs, {from: accounts[0]});
		const uintCmC6w2 = BigInt("1629")
		const uintpG0hf44 = BigInt("127")
		const uint6z5VMY = BigInt("174")
		const uint256wYwSYkI = await WolfStakingRewardsS45DxgD.rewardPerToken.call(uintCmC6w2, {from: accounts[0]});
		await WolfStakingRewardsS45DxgD.onlyOwner.call({from: accounts[3]});
		const uint256SYZvFOR = await WolfStakingRewardsS45DxgD.withdraw.call(uint6z5VMY, uintpG0hf44, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWtDUtdO = "1U"
		const stringknFQ7T5 = "UkSvCqbqOCuGkYyXRWM"
		const uintpaOPP3I = BigInt("236")
		const WolfStakingRewardsFC0UkSh = await WolfStakingRewards.new(stringWtDUtdO, stringknFQ7T5, uintpaOPP3I, {from: accounts[4]});
		const uintUz0BKfW = BigInt("251")
		const uintcEjlJW7 = BigInt("1996")
		const uintBVMs70 = BigInt("645")
		const uintayCVt2L = BigInt("1209")
		const uintMMUtoIA = BigInt("772")
		const uint256pBXDdOG = await WolfStakingRewardsFC0UkSh.withdrawRemainingBalance.call(uintcEjlJW7, uintUz0BKfW, {from: accounts[4]});
		const uint256Br7ZYsW = await WolfStakingRewardsFC0UkSh.exit.call(uintBVMs70, {from: accounts[4]});
		const uint256islCaSJ = await WolfStakingRewardsFC0UkSh.stake.call(uintMMUtoIA, uintayCVt2L, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbpG6ewK = "hkkJnXGnj4527BCDeiKp2S8kD43bKAYA3yqpWTj94jt9drs8j7qoKNehlUHOIzCoWafQcJ7Ar54Tl"
		const stringZMHBsVN = "qWt4ujPF6YV0lophntp2bA75LRmdZGqVdEmYEbMPLlRPUTUWt51TJJ2U928ySw62A"
		const uintgtDDKRH = BigInt("215")
		const WolfStakingRewardsYB6qvrS = await WolfStakingRewards.new(stringbpG6ewK, stringZMHBsVN, uintgtDDKRH, {from: "0x0000000000000000000000000000000000000001"});
		const uintntyqZ6V = BigInt("1220")
		const addressadTxJb = accounts[0]
		const uint7cMLfQ = BigInt("1844")
		const addressjOaQPa = accounts[1]
		const addresszfocp1Y = await WolfStakingRewardsYB6qvrS.updateReward.call(addressadTxJb, uintntyqZ6V, {from: accounts[0]});
		const uint256Z5TlLIA = await WolfStakingRewardsYB6qvrS.earned.call(addressjOaQPa, uint7cMLfQ, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressF4yJSVo = accounts[5]
		const addressG9O3OW = accounts[0]
		const addressGKTjs2a = accounts[2]
		const WolfStakingRewardshlQGMgQ = await WolfStakingRewards.new(addressF4yJSVo, addressG9O3OW, addressGKTjs2a, {from: accounts[2]});
		const uintjHIhfSe = BigInt("277")
		const uintLuh86IV = BigInt("621")
		const uintEehZwe = BigInt("11")
		const uintSgH3m78 = await WolfStakingRewardshlQGMgQ.getReward.call(uintjHIhfSe, {from: accounts[1]});
		const uintgbDk8YL = await WolfStakingRewardshlQGMgQ.getReward.call(uintLuh86IV, {from: accounts[1]});
//		const uint256K4n8UxU = await WolfStakingRewardshlQGMgQ.exit.call(uintEehZwe, {from: accounts[4]});

		await expect(WolfStakingRewardshlQGMgQ.exit.call(uintEehZwe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringKYjDhHW = "nttf4NO"
		const stringaO5KNIh = "4DMxbwi8G6IaUgDAF9vrYVAdMRXcCmX9Wlzg8bxt1IFgIq4mIHpVeRmOg3hYKu5mjUE1wcBtMXhnT5JuvI"
		const uintTlFERKk = BigInt("227")
		const WolfStakingRewardspznio9k = await WolfStakingRewards.new(stringKYjDhHW, stringaO5KNIh, uintTlFERKk, {from: accounts[2]});
		const uintUureCcH = BigInt("241")
		const uintYMP7FCE = BigInt("1956")
		const uintVLhOM3i = BigInt("876")
		const addressOsMq9Y = accounts[5]
		const uintDg3x0ND = BigInt("1403")
		const uint256yqLHJ7 = await WolfStakingRewardspznio9k.withdrawRemainingBalance.call(uintYMP7FCE, uintUureCcH, {from: accounts[4]});
		await WolfStakingRewardspznio9k.onlyRewardsDistribution.call({from: accounts[3]});
		const addressJ1mjUcf = await WolfStakingRewardspznio9k.updateReward.call(addressOsMq9Y, uintVLhOM3i, {from: accounts[5]});
		const uint256Oxrx0Ic = await WolfStakingRewardspznio9k.getRewardForDuration.call(uintDg3x0ND, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const string9BgWll = "IJu6P878Xyw7qnQynK5BO1v6LqoppVqDPDOlFKGv"
		const stringHgGychb = "X8iMC7OHfVRXyOpqZX1c5fRDiFLOsEd8ei8uqMO2giasPe4nh9VYw9yplr2ihtiaPe71kHkIINJHqK6"
		const uintw37yAHJ = BigInt("211")
		const WolfStakingRewardspL1IqzR = await WolfStakingRewards.new(string9BgWll, stringHgGychb, uintw37yAHJ, {from: accounts[2]});
		const uintC79aQ05 = BigInt("636")
		const addressIqtn2C = accounts[4]
		const uintrvgrI7D = BigInt("1014")
		const addressXIaHVrO = accounts[4]
		const uintmc0q34A = BigInt("405")
		const addressEKAsaAo = accounts[0]
		const uint256MfhPFsk = await WolfStakingRewardspL1IqzR.balanceOfPerPool.call(addressIqtn2C, uintC79aQ05, {from: accounts[4]});
		const uint256u1FSUmk = await WolfStakingRewardspL1IqzR.earned.call(addressXIaHVrO, uintrvgrI7D, {from: accounts[1]});
		await WolfStakingRewardspL1IqzR.nonReentrant.call({from: accounts[5]});
		const addressiKRSgzd = await WolfStakingRewardspL1IqzR.updateReward.call(addressEKAsaAo, uintmc0q34A, {from: accounts[4]});
		await WolfStakingRewardspL1IqzR.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrqt2gY = "EokEONPiOBgHzxK1LUVDg6Hkc7kwu9EEJfP6FjTRurhYtSCvW5a"
		const stringKRQtZeV = "kKEWzEhaX7sVFEZy5PWl"
		const uintgpb2Ln4 = BigInt("79")
		const WolfStakingRewardsteu4an7 = await WolfStakingRewards.new(stringrqt2gY, stringKRQtZeV, uintgpb2Ln4, {from: accounts[0]});
		const uintItN9WXg = BigInt("729")
		const uint256AGiC2gb = await WolfStakingRewardsteu4an7.totalSupplyPerPool.call(uintItN9WXg, {from: accounts[1]});
		await WolfStakingRewardsteu4an7.nonReentrant.call({from: accounts[4]});
		await WolfStakingRewardsteu4an7.nonReentrant.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQ2O3GNL = "IVAiL23SNfxsXeop6AmitNfJBiGNU6hK6UHg1ln4LtThU1ZPnPgpQm"
		const stringS59MBeM = "fy7dHBrIXL5"
		const uintJkyc03b = BigInt("18")
		const WolfStakingRewardsYtzHpKQ = await WolfStakingRewards.new(stringQ2O3GNL, stringS59MBeM, uintJkyc03b, {from: accounts[4]});
		const uintVKTPL2a = BigInt("1700")
		const stringWVU69sO = await WolfStakingRewardsYtzHpKQ.symbol.call({from: accounts[4]});
		const uintmWPF2La = await WolfStakingRewardsYtzHpKQ.getReward.call(uintVKTPL2a, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLw3MfY6 = "oYNBQx9wkJ2W1gOIfvDXhzI3cV4DmYuaTu"
		const stringI3okME1 = "mSPutpj6x7DnzzrKr5KWyZ82LlCCFTubAUEKgX9r7KfCqcLckSzGtxTuv6vXvqsiTj5"
		const uintC3QSWIZ = BigInt("76")
		const WolfStakingRewardsoK1UNsb = await WolfStakingRewards.new(stringLw3MfY6, stringI3okME1, uintC3QSWIZ, {from: accounts[2]});
		const uintlEwegsO = BigInt("1354")
		const uintw1R2hH = BigInt("258")
		const uintB0g2IfJ = BigInt("1936")
		const uint256edRlBeI = await WolfStakingRewardsoK1UNsb.withdrawRemainingBalance.call(uintw1R2hH, uintlEwegsO, {from: accounts[3]});
		const uintdxog0NQ = await WolfStakingRewardsoK1UNsb.getReward.call(uintB0g2IfJ, {from: accounts[1]});
		const uint8xLukQFH = await WolfStakingRewardsoK1UNsb.decimals.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBODPgfl = "PrmWXpVn7thj2OTZ1VtVoHby29e7NYagRm4DKzsO0n5wG48c4XL9"
		const stringcSif2mP = "rBB9K7liVYfa61VEXKpgS5t8"
		const uintOmPZfk1 = BigInt("92")
		const WolfStakingRewardskuKzEFn = await WolfStakingRewards.new(stringBODPgfl, stringcSif2mP, uintOmPZfk1, {from: accounts[5]});
		const uintj41iYQD = BigInt("1156")
		const uintCPb5mCo = BigInt("1914")
		const uintAgHLz1p = BigInt("1904")
		const uintTLNq6g2 = BigInt("668")
		const uint256nFPChvn = await WolfStakingRewardskuKzEFn.getRewardForDuration.call(uintj41iYQD, {from: accounts[0]});
		const stringsHD4n1b = await WolfStakingRewardskuKzEFn.symbol.call({from: accounts[4]});
		const uint256pASWvD0 = await WolfStakingRewardskuKzEFn.lastTimeRewardApplicable.call(uintCPb5mCo, {from: accounts[2]});
		await WolfStakingRewardskuKzEFn.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256WEWKf5p = await WolfStakingRewardskuKzEFn.withdrawRemainingBalance.call(uintTLNq6g2, uintAgHLz1p, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYKjhAfN = "PhGzGP6imTq73iayhhxJfu51B"
		const stringdc5iNu = "zxlS6h6xgdiJiwmGNQnuA7GYVLkaLtgTQZ"
		const uintj7hS2hJ = BigInt("170")
		const WolfStakingRewardsk7Km2A = await WolfStakingRewards.new(stringYKjhAfN, stringdc5iNu, uintj7hS2hJ, {from: accounts[4]});
		const uintzsXim6V = BigInt("1990")
		const uintGuCTA5W = BigInt("2030")
		const addressHHaPODr = accounts[0]
		const uintHnUj0tm = BigInt("1279")
		const uintKKgenEn = BigInt("671")
		const uint256kXqzUyz = await WolfStakingRewardsk7Km2A.rewardPerToken.call(uintzsXim6V, {from: accounts[1]});
		const uint256qKJNkxK = await WolfStakingRewardsk7Km2A.earned.call(addressHHaPODr, uintGuCTA5W, {from: accounts[0]});
		const uint256Swxc9es = await WolfStakingRewardsk7Km2A.rewardPerToken.call(uintHnUj0tm, {from: accounts[2]});
		const uint256arrayu0x6dKN = await WolfStakingRewardsk7Km2A.updateNotifyRewardAmount.call(uintKKgenEn, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyTqUstV = "9J14KwVNMjnwJM7JbhFZN3H8S"
		const stringMpJmAD = "aHt5FPJVsfBYU6Ncs6CREqA4aYbkXh"
		const uintHXGfZSq = BigInt("56")
		const WolfStakingRewardseQ8CZCq = await WolfStakingRewards.new(stringyTqUstV, stringMpJmAD, uintHXGfZSq, {from: accounts[0]});
		const uintOp6mhcr = BigInt("971")
		const uintGvsGJS = BigInt("544")
		const uintAclXHq = BigInt("444")
		const uintNpGDZyW = BigInt("797")
		const addressDNOVwUV = accounts[3]
		const uintiwCQXTu = BigInt("1517")
		const uintro2PCGw = BigInt("1457")
		const uint256a4uEXhl = await WolfStakingRewardseQ8CZCq.exit.call(uintOp6mhcr, {from: accounts[4]});
		const stringF4XwLOK = await WolfStakingRewardseQ8CZCq.name.call({from: accounts[0]});
		const uint256h2DbpY = await WolfStakingRewardseQ8CZCq.withdrawRemainingBalance.call(uintAclXHq, uintGvsGJS, {from: accounts[1]});
		const uint256LHAqSCB = await WolfStakingRewardseQ8CZCq.earned.call(addressDNOVwUV, uintNpGDZyW, {from: accounts[2]});
		const uint256ZEafg9P = await WolfStakingRewardseQ8CZCq.withdrawRemainingBalance.call(uintro2PCGw, uintiwCQXTu, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVuahwyl = "OUjQYiwHyQ59DqlVfrP9dcGtsD670zjwpl598ANXSRzIauzhGn3R5WyBdxQk6eP6kXMo5iL1CKfnsHQhyLJhLULRqqlHGrT2l"
		const stringGzA3FuB = "3fUYCGIuU6MB6kY64PiqkhkmR7Y6kx75bhx4SImLTdaklTIagLGLTRWVQwNQoUs6n"
		const uintSm6HKzq = BigInt("246")
		const WolfStakingRewardsC27Or2M = await WolfStakingRewards.new(stringVuahwyl, stringGzA3FuB, uintSm6HKzq, {from: accounts[0]});
		const uintdbQkPXI = BigInt("448")
		const uintFRcuO7a = BigInt("654")
		const uintDoj7IfN = BigInt("888")
		const uintMzBrl4Y = BigInt("1006")
		const uintDvZLBTN = BigInt("984")
		const uint256sPmrpOr = await WolfStakingRewardsC27Or2M.exit.call(uintdbQkPXI, {from: accounts[2]});
		const uint256tIG2kE = await WolfStakingRewardsC27Or2M.getRewardForDuration.call(uintFRcuO7a, {from: accounts[0]});
		const uint256sdrozLq = await WolfStakingRewardsC27Or2M.withdrawRemainingBalance.call(uintMzBrl4Y, uintDoj7IfN, {from: accounts[5]});
		const uintw3BIlg3 = await WolfStakingRewardsC27Or2M.getReward.call(uintDvZLBTN, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkf6n8an = "UexWNB5T3ARsDlqzYPQtMB2rj19WGd5FIXYritMS61vt0Nv63unxW9mNgK8gV24g7hmvqER18OhjiyXA5eWF"
		const stringWtQlFr2 = "ujwAETuHz6i0x6meFU8ogo8FI1aCHFzdOqDvwc4OKE26e479D2cJWV7vCe"
		const uintAJbQX0z = BigInt("84")
		const WolfStakingRewardsQKmvP2p = await WolfStakingRewards.new(stringkf6n8an, stringWtQlFr2, uintAJbQX0z, {from: accounts[0]});
		const uintBKheMou = BigInt("1586")
		const addressYqPsfe9 = accounts[2]
		const uintuPOdzgV = BigInt("87")
		const uintf1dd9s = BigInt("1899")
		const uintY5i5ER = BigInt("488")
		const uint8JfEXrle = await WolfStakingRewardsQKmvP2p.decimals.call({from: accounts[3]});
		const addressSzCv5XS = await WolfStakingRewardsQKmvP2p.updateReward.call(addressYqPsfe9, uintBKheMou, {from: accounts[5]});
		const uint256a77K9kk = await WolfStakingRewardsQKmvP2p.totalSupplyPerPool.call(uintuPOdzgV, {from: accounts[5]});
		const uint256JJHDIA1 = await WolfStakingRewardsQKmvP2p.lastTimeRewardApplicable.call(uintf1dd9s, {from: accounts[4]});
		const uint256ZMejkjr = await WolfStakingRewardsQKmvP2p.totalSupplyPerPool.call(uintY5i5ER, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKMnS7Nd = "D57IN27dvLzJ4uBimYthIr43fY3cB8S8hf7WSPL54ZLVHy1lvMnCfJYxIDn0NPxFwEIcbhbx2L8CJgc9dv5Ksh6hOU"
		const stringKt32ZII = "DgbFzg1tRjkmqxVDp4Jt3KOCgDGdDYcwRCiq9rowRUbggjNdP"
		const uintmGBuAKS = BigInt("50")
		const WolfStakingRewardsr1xdpwE = await WolfStakingRewards.new(stringKMnS7Nd, stringKt32ZII, uintmGBuAKS, {from: accounts[0]});
		const uintES2Vsn = BigInt("2009")
		const addresssqPFaDq = accounts[1]
		const uintW5c7U4E = BigInt("1352")
		const uintdzl26kB = BigInt("1245")
		const uintjHiv4zQ = BigInt("1473")
		const addressA4eAxj = await WolfStakingRewardsr1xdpwE.updateReward.call(addresssqPFaDq, uintES2Vsn, {from: accounts[0]});
		const uint256arrayVxtqKwD = await WolfStakingRewardsr1xdpwE.updateNotifyRewardAmount.call(uintW5c7U4E, {from: accounts[4]});
		await WolfStakingRewardsr1xdpwE.nonReentrant.call({from: accounts[5]});
		const uint256kOrFgZR = await WolfStakingRewardsr1xdpwE.rewardPerToken.call(uintdzl26kB, {from: accounts[2]});
		const stringaaARW7s = await WolfStakingRewardsr1xdpwE.symbol.call({from: accounts[2]});
		const uint256bdLlJo1 = await WolfStakingRewardsr1xdpwE.rewardPerToken.call(uintjHiv4zQ, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdakOtPD = "GcHq3cbeNM9CzVemVrruz"
		const stringjXBTd4z = "XBFj3m"
		const uintwLXAor = BigInt("169")
		const WolfStakingRewardsXqedvYl = await WolfStakingRewards.new(stringdakOtPD, stringjXBTd4z, uintwLXAor, {from: accounts[4]});
		const uintb8MFNoV = BigInt("1663")
		const uintoeOHd10 = BigInt("1826")
		const uintd7lBuW3 = BigInt("873")
		const uint256qWYRDyW = await WolfStakingRewardsXqedvYl.rewardPerToken.call(uintb8MFNoV, {from: accounts[4]});
		const uint256iEY9sfs = await WolfStakingRewardsXqedvYl.totalSupplyPerPool.call(uintoeOHd10, {from: accounts[0]});
		const uint256b0o00V8 = await WolfStakingRewardsXqedvYl.rewardPerToken.call(uintd7lBuW3, {from: accounts[2]});
		const stringqCB31Ol = await WolfStakingRewardsXqedvYl.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringW4FHA7y = "NUbMGrc3sxXFfRO3lUFCdXz3W9TpA7imbq55E5wxzBg4uCi3EADIGY4Z45pUz0MTJqQr07Qdrrm"
		const stringnRLBDVJ = "llAYudTN7"
		const uint1LnmZe = BigInt("152")
		const WolfStakingRewardsz7e5AU8 = await WolfStakingRewards.new(stringW4FHA7y, stringnRLBDVJ, uint1LnmZe, {from: accounts[3]});
		const uintLW4r3hg = BigInt("207")
		const addressg3xgoOc = accounts[2]
		await WolfStakingRewardsz7e5AU8.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256cLoexbH = await WolfStakingRewardsz7e5AU8.balanceOfPerPool.call(addressg3xgoOc, uintLW4r3hg, {from: accounts[2]});
		await WolfStakingRewardsz7e5AU8.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringC4EDO6q = "Hs2r8n9ccfhEnVCCPSN9s0tlRlCIDfTXn4rQ9iQrEQ1YtPeuSHklU21nTW5y6p"
		const stringHKxpkfc = "qQOm5jXZfWnLvUMIQteJfJhK3wfaSl"
		const uintXvV8Deq = BigInt("244")
		const WolfStakingRewardsKKEVSo7 = await WolfStakingRewards.new(stringC4EDO6q, stringHKxpkfc, uintXvV8Deq, {from: accounts[1]});
		const uint1B1xdY = BigInt("176")
		const uintu5pIUOt = BigInt("1762")
		const uint9qV51c = BigInt("285")
		const addressZ2xAebn = accounts[0]
		const uintsmAVGQ1 = BigInt("960")
		const addresshlZVp7F = accounts[4]
		const uintj8Hi8ay = BigInt("342")
		const uintRF6HR0k = BigInt("747")
		const uint256v9ilLC5 = await WolfStakingRewardsKKEVSo7.withdrawRemainingBalance.call(uintu5pIUOt, uint1B1xdY, {from: accounts[1]});
		const uint256diaP8xH = await WolfStakingRewardsKKEVSo7.balanceOfPerPool.call(addressZ2xAebn, uint9qV51c, {from: accounts[5]});
		const uint256lbdyHw6 = await WolfStakingRewardsKKEVSo7.balanceOfPerPool.call(addresshlZVp7F, uintsmAVGQ1, {from: accounts[1]});
		const uint256mB8yQLS = await WolfStakingRewardsKKEVSo7.lastTimeRewardApplicable.call(uintj8Hi8ay, {from: accounts[2]});
		const uint256iZIrpql = await WolfStakingRewardsKKEVSo7.getRewardForDuration.call(uintRF6HR0k, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMc3UBCj = "Py3tO2V6NKDbaVZ9lm8XgHKwNKBniFzEzzccN9ym7fr3vUEURDkKWeLgdHXBNcUSf1dRxNNgQ47mVyC"
		const stringVkK6T4E = "Ie5R4qKF7xgUEVCO7NQOUXKgrNrfxOV4ycBCWTOh3v0bhTQ526qsuI"
		const uintPKTBHPf = BigInt("34")
		const WolfStakingRewardsnBIStc = await WolfStakingRewards.new(stringMc3UBCj, stringVkK6T4E, uintPKTBHPf, {from: accounts[3]});
		const uinttpPvn28 = BigInt("230")
		const uintvst1L8V = BigInt("1960")
		const uintoKTBp2d = BigInt("718")
		const uint256arrayRs2XFnJ = await WolfStakingRewardsnBIStc.updateNotifyRewardAmount.call(uinttpPvn28, {from: accounts[1]});
		const uint256z99L2c = await WolfStakingRewardsnBIStc.exit.call(uintvst1L8V, {from: accounts[0]});
		await WolfStakingRewardsnBIStc.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256tvCmP9b = await WolfStakingRewardsnBIStc.exit.call(uintoKTBp2d, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwCRuuEp = "hkMRCGjiBAxlsgfYeVEZ7hYs5YtUgQYJsConnYsO59NJ2hEBaP7AdkoS3tbP7W1sbCP36aunX5TFQJhGqG8C"
		const stringgg4M5i0 = "clIkGETTv0YXcP7pzZjKxmBqYmaDX81JHlAPoeQP4cnzEKLCWF"
		const uintGUPbCZ9 = BigInt("176")
		const WolfStakingRewardswKonoxe = await WolfStakingRewards.new(stringwCRuuEp, stringgg4M5i0, uintGUPbCZ9, {from: accounts[2]});
		const uinty8tFGRi = BigInt("1406")
		const uintWSrYrE7 = BigInt("1239")
		const addressyBbJV86 = accounts[3]
		const uintqgSm9b = BigInt("7")
		const uintpye4ta = BigInt("450")
		await WolfStakingRewardswKonoxe.nonReentrant.call({from: accounts[4]});
		const uint256arrayOiU4AoG = await WolfStakingRewardswKonoxe.updateNotifyRewardAmount.call(uinty8tFGRi, {from: accounts[2]});
		const addressKthh1qr = await WolfStakingRewardswKonoxe.updateReward.call(addressyBbJV86, uintWSrYrE7, {from: accounts[5]});
		const uint256i4rbpCi = await WolfStakingRewardswKonoxe.lastTimeRewardApplicable.call(uintqgSm9b, {from: accounts[0]});
		const uint256KOG6RWE = await WolfStakingRewardswKonoxe.totalSupplyPerPool.call(uintpye4ta, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZn9Nx3Q = "GcRHEK3HyidLcYMMGPJ6rKXqpCKktGOJCi9N"
		const stringUAHiOjA = "9"
		const uintaSnunnA = BigInt("68")
		const WolfStakingRewardsB62SUOK = await WolfStakingRewards.new(stringZn9Nx3Q, stringUAHiOjA, uintaSnunnA, {from: accounts[3]});
		const uintXbkDiCx = BigInt("1552")
		const addressHp13ltA = accounts[4]
		const uintyEQcOWG = BigInt("721")
		const addressemujGRr = accounts[4]
		const addressaEKjrKv = await WolfStakingRewardsB62SUOK.updateReward.call(addressHp13ltA, uintXbkDiCx, {from: accounts[2]});
		const addressTYJaJs = await WolfStakingRewardsB62SUOK.updateReward.call(addressemujGRr, uintyEQcOWG, {from: accounts[0]});
		await WolfStakingRewardsB62SUOK.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIAuWwbN = "m5XIuG56MOtRmimoVvMVtpTRe3rH8WxVET1JoeCoZYnUtjfiL0iELCz1SXaPBnqiI1gv3Sft0vlg8Kag9PtY"
		const stringfcNVNVc = "7umaCKjjvLVSe1RvXkiyruojVazaUJ88nR9nEHfJxkHQOO7zSRIRK1dYQC6ampim2e6g"
		const uint9BxCZn = BigInt("167")
		const WolfStakingRewardsQMYEat7 = await WolfStakingRewards.new(stringIAuWwbN, stringfcNVNVc, uint9BxCZn, {from: accounts[0]});
		const uintGpmTPPI = BigInt("981")
		const addressM2TJ88E = accounts[0]
		const uintzQ59fw = BigInt("1259")
		const uintYDhEVGU = BigInt("699")
		const uintyb1Bosn = BigInt("1273")
		const uintoVOkSz5 = BigInt("1998")
		const uintxqyFhnF = BigInt("1758")
		const address9O1zJH = accounts[4]
		const uint256h1vLEj7 = await WolfStakingRewardsQMYEat7.balanceOfPerPool.call(addressM2TJ88E, uintGpmTPPI, {from: accounts[0]});
		const uint256pjwPjK = await WolfStakingRewardsQMYEat7.exit.call(uintzQ59fw, {from: accounts[4]});
		const uint25627Hksv = await WolfStakingRewardsQMYEat7.withdraw.call(uintyb1Bosn, uintYDhEVGU, {from: accounts[2]});
		const uint256hQ7LyBY = await WolfStakingRewardsQMYEat7.getRewardForDuration.call(uintoVOkSz5, {from: accounts[3]});
		const uint256AtG1zCz = await WolfStakingRewardsQMYEat7.earned.call(address9O1zJH, uintxqyFhnF, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTgEKBu7 = "OHCMawOKq41AfxbZAEN9o6dKypUOZ"
		const stringQ8P5eOl = "8bT9xbJbQquisjZOhnWXYFw23nyYuGdgaB0Nxp5crZ7EtDkc89obV1F13ek7D"
		const uintHgScnvI = BigInt("144")
		const WolfStakingRewardspIm5ary = await WolfStakingRewards.new(stringTgEKBu7, stringQ8P5eOl, uintHgScnvI, {from: accounts[0]});
		const uintQAQZeRT = BigInt("1566")
		const addressA9MoKi = accounts[5]
		const uintnSNVfxT = BigInt("948")
		const uintERHA5oa = BigInt("905")
		const uintEz4MQiD = BigInt("922")
		const uintZh4Ypuw = BigInt("1616")
		const uintIb8Tcf = BigInt("785")
		const addressW021UnZ = await WolfStakingRewardspIm5ary.updateReward.call(addressA9MoKi, uintQAQZeRT, {from: accounts[1]});
		const uint256arrayWNsDEJJ = await WolfStakingRewardspIm5ary.updateNotifyRewardAmount.call(uintnSNVfxT, {from: accounts[1]});
		const stringcFY7W80 = await WolfStakingRewardspIm5ary.symbol.call({from: accounts[3]});
		const uint256nf4Y7AW = await WolfStakingRewardspIm5ary.withdraw.call(uintEz4MQiD, uintERHA5oa, {from: accounts[4]});
		const uint256VVG4a6H = await WolfStakingRewardspIm5ary.exit.call(uintZh4Ypuw, {from: accounts[0]});
		const uint256GQMoEEb = await WolfStakingRewardspIm5ary.rewardPerToken.call(uintIb8Tcf, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxGG4c9E = "iWsXqvuItYeXHwH8gs9x3m2Gppv8fYrD7fD"
		const stringfE0v1gc = "e9lu9xyWJm3zsurwNFO84m63swcfsFX9BeUSgjwbpR232CtPWwTbq1pnIaRJ2q4XSEsOg84dm9PEQWzOO"
		const uintxV7Vy7 = BigInt("18")
		const WolfStakingRewardsYNLvmrS = await WolfStakingRewards.new(stringxGG4c9E, stringfE0v1gc, uintxV7Vy7, {from: accounts[5]});
		const uintRyBaxIJ = BigInt("784")
		const uintZTFIZwo = BigInt("584")
		const uintnzxLJk3 = BigInt("1527")
		const uint256f37dFvf = await WolfStakingRewardsYNLvmrS.totalSupplyPerPool.call(uintRyBaxIJ, {from: accounts[2]});
		const uint256QTsjgu = await WolfStakingRewardsYNLvmrS.withdrawRemainingBalance.call(uintnzxLJk3, uintZTFIZwo, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsmRVxyV = "bk6hrj28k1aQsbdg6wKrK0Njy1hL5L7CABrajrTbjxYOtppR6BNflWqgkbnHVbwOzIaHVjr"
		const stringF0tNZte = "s0aVYRmyiVtyhAWFmBljrWW5Cyo6u6x99KpfNgVh5FoMXkDbYHanWypQZgYFc4gRoSgLDXGLqk8TsMpXzglUtaa2YoUCnrL"
		const uintIfHzsfq = BigInt("201")
		const WolfStakingRewardsCJypTt1 = await WolfStakingRewards.new(stringsmRVxyV, stringF0tNZte, uintIfHzsfq, {from: "0x0000000000000000000000000000000000000001"});
		const uintSqcDFI = BigInt("1376")
		const addressDEmFJrl = accounts[4]
		const uint256oEoZ8e5 = await WolfStakingRewardsCJypTt1.balanceOfPerPool.call(addressDEmFJrl, uintSqcDFI, {from: accounts[2]});
		await WolfStakingRewardsCJypTt1.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWQJUKAW = "ElylKiTA6GnwRQNYtGXmS5Duedj3P6X3FS16ZN9ZwSiytbnVs7OoqU7nVkWqYtN3QC"
		const stringS0RE7Ge = "vmIvJRejKad0fTSRxfzZGoULRhzm1oaUwIxrWCMONBtdNMszhb4Y8ZfTXEsTBAiqPp7SlilUTWWFAkHzMdp1PDm7w"
		const uintfxm02N1 = BigInt("4")
		const WolfStakingRewardsUpWOB2O = await WolfStakingRewards.new(stringWQJUKAW, stringS0RE7Ge, uintfxm02N1, {from: accounts[2]});
		const uintx0SYp5Q = BigInt("1470")
		const uintBupBF4z = BigInt("1300")
		const address8E2O8T = accounts[2]
		await WolfStakingRewardsUpWOB2O.onlyOwner.call({from: accounts[3]});
		await WolfStakingRewardsUpWOB2O.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256arrayvkvPCja = await WolfStakingRewardsUpWOB2O.updateNotifyRewardAmount.call(uintx0SYp5Q, {from: accounts[1]});
		const uint2561pMVGR = await WolfStakingRewardsUpWOB2O.earned.call(address8E2O8T, uintBupBF4z, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPz6BQPm = "ck7QEhg4datYleTgeKZaBXuuHuQ71"
		const stringBVUFjlr = "YE4EQuUVDhONZaOuei8SvhqbVslJRXCIeGcjjvU5EK8Mv4IP2HP3INbnXV3CnrxNM0W3NoyDdVIyCUf"
		const uintCFgKCW = BigInt("60")
		const WolfStakingRewardsxALUpNu = await WolfStakingRewards.new(stringPz6BQPm, stringBVUFjlr, uintCFgKCW, {from: accounts[4]});
		const uintEsb1BPH = BigInt("782")
		const uintEQhlJmZ = BigInt("1016")
		const uintizMe176 = BigInt("1154")
		const addressEi8ULTl = accounts[2]
		const uintOYlRQRf = BigInt("1590")
		const addressaYEvQ7z = accounts[0]
		const uint256oXwcl1m = await WolfStakingRewardsxALUpNu.totalSupplyPerPool.call(uintEsb1BPH, {from: accounts[1]});
		const uint256tMnSpn = await WolfStakingRewardsxALUpNu.exit.call(uintEQhlJmZ, {from: accounts[3]});
		const addressqtCbMCO = await WolfStakingRewardsxALUpNu.updateReward.call(addressEi8ULTl, uintizMe176, {from: accounts[4]});
		const uint256opLIIjE = await WolfStakingRewardsxALUpNu.balanceOfPerPool.call(addressaYEvQ7z, uintOYlRQRf, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZbNm74C = "eR3uVOV8OqX7k9JqfFa3C6w5OxB1cvEQhngK0KIHfgm1EpSB4AcdY7FPym7jFFTAsQzSzSGL8YOqkKnHPIcWuRe9xtnFeH2"
		const stringgtsVpGi = "YKeTUpMRbIgdaFw"
		const uintIPUmsfV = BigInt("152")
		const WolfStakingRewardsi74XVPZ = await WolfStakingRewards.new(stringZbNm74C, stringgtsVpGi, uintIPUmsfV, {from: accounts[1]});
		const uintWazq3CS = BigInt("1838")
		const addressDN7hCzL = accounts[4]
		const uintJDVpXXA = BigInt("1025")
		const uinttN9LAv = BigInt("778")
		const uintS3xVhP = BigInt("1223")
		const addressBgSJfwQ = await WolfStakingRewardsi74XVPZ.updateReward.call(addressDN7hCzL, uintWazq3CS, {from: accounts[2]});
		const uint256niYx6wG = await WolfStakingRewardsi74XVPZ.totalSupplyPerPool.call(uintJDVpXXA, {from: accounts[0]});
		const uint8vFGLatd = await WolfStakingRewardsi74XVPZ.decimals.call({from: accounts[1]});
		const uint256CWXVCiG = await WolfStakingRewardsi74XVPZ.withdraw.call(uintS3xVhP, uinttN9LAv, {from: accounts[3]});
		const uint8tomAKN = await WolfStakingRewardsi74XVPZ.decimals.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringE6Vp05B = "bBl8MYBJIGRLykZQtKg"
		const stringQsbis1x = "Kl1EdAvWl8XD5NOVKtgqX1wtsnDaFugbXMvGAuWi0tBEzA1w7yuaFfUFCTLQ"
		const uintoL2DpkC = BigInt("246")
		const WolfStakingRewardswqJv5iD = await WolfStakingRewards.new(stringE6Vp05B, stringQsbis1x, uintoL2DpkC, {from: accounts[1]});
		const uintZ3pyN5H = BigInt("171")
		const addressoIocwN8 = accounts[0]
		await WolfStakingRewardswqJv5iD.onlyRewardsDistribution.call({from: accounts[4]});
		const addressJiUWZTn = await WolfStakingRewardswqJv5iD.updateReward.call(addressoIocwN8, uintZ3pyN5H, {from: accounts[3]});
		const uint86OydgB = await WolfStakingRewardswqJv5iD.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWWWc2Kg = "K"
		const stringSpkseXe = "xXtiY1cQFGYZWzjuG7riBerRZRWY"
		const uintfkm7JU = BigInt("151")
		const WolfStakingRewardsivsUnne = await WolfStakingRewards.new(stringWWWc2Kg, stringSpkseXe, uintfkm7JU, {from: accounts[1]});
		const uintku3KzEU = BigInt("292")
		const uintiLicZwm = BigInt("1297")
		const uintHl5g0k = BigInt("1351")
		const addresst7lL1EV = "0x0000000000000000000000000000000000000001"
		const uintGX95lS1 = BigInt("658")
		const addresszLBE8I = accounts[4]
		const uint256nRo8JzT = await WolfStakingRewardsivsUnne.withdraw.call(uintiLicZwm, uintku3KzEU, {from: accounts[1]});
		const uint8F1qjpcV = await WolfStakingRewardsivsUnne.decimals.call({from: accounts[3]});
		const uint256ZfZEtoO = await WolfStakingRewardsivsUnne.earned.call(addresst7lL1EV, uintHl5g0k, {from: accounts[3]});
		const uint256WMF5bH2 = await WolfStakingRewardsivsUnne.balanceOfPerPool.call(addresszLBE8I, uintGX95lS1, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringou2eFt7 = "CXiASC"
		const stringO0sJS4k = "TKuERByJDfFzSr8gHVhJyLK3bX3FwXoGQQ2G4fdUFB3CjuCnvsxmFFshTaiu3DL2IWIwQA"
		const uinto4OhBP = BigInt("210")
		const WolfStakingRewardsBp6cSGu = await WolfStakingRewards.new(stringou2eFt7, stringO0sJS4k, uinto4OhBP, {from: "0x0000000000000000000000000000000000000001"});
		const uintnm3oVi7 = BigInt("1306")
		const uinthhcferA = BigInt("1639")
		const uintZEafbch = BigInt("1245")
		const uint256ZTR5LNN = await WolfStakingRewardsBp6cSGu.withdrawRemainingBalance.call(uinthhcferA, uintnm3oVi7, {from: accounts[5]});
		const uint256fYlJ03K = await WolfStakingRewardsBp6cSGu.lastTimeRewardApplicable.call(uintZEafbch, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbdJiUjV = "nsBoXy5eILWLdpObBx6fFM5Yll64EektnCf78Xd3FHKhL"
		const stringbuxjR8V = "d6H2F5mGIz4nwz8bXxuSePYFNWynUgkH7x3GXlErd0U9bGxSEmnSywU"
		const uintrl1Bsl3 = BigInt("188")
		const WolfStakingRewardsdJRInBT = await WolfStakingRewards.new(stringbdJiUjV, stringbuxjR8V, uintrl1Bsl3, {from: accounts[5]});
		const uintsvPthFi = BigInt("599")
		await WolfStakingRewardsdJRInBT.onlyRewardsDistribution.call({from: accounts[2]});
		await WolfStakingRewardsdJRInBT.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256array6bSAzi = await WolfStakingRewardsdJRInBT.updateNotifyRewardAmount.call(uintsvPthFi, {from: accounts[1]});
	});
})