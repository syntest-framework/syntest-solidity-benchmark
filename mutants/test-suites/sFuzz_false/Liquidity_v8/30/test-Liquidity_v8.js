const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringi0wIPkJ = "1UpOXKWkcAG29IbmFOk6K2vaNPURuYoLcEnIiEAFt843bjV38eljEIJlVIpbJ6xzfcqLPC9"
		const addressUOJPlB = accounts[4]
		const addressCdv3m9Q = accounts[2]
		const uintN66m87U = BigInt("409")
		const uintEal24p5 = BigInt("339")
		const Liquidity_v8NHoCZwU = await Liquidity_v8.new(stringi0wIPkJ, addressUOJPlB, addressCdv3m9Q, uintN66m87U, uintEal24p5, {from: accounts[2]});
		const uintlHCY89 = BigInt("447")
		const addressbCL3PWJ = accounts[3]
		const boolwH0FtiU = await Liquidity_v8NHoCZwU.emergencyWithdraw.call({from: accounts[0]});
		const boolaAjzqF4 = await Liquidity_v8NHoCZwU.isOwner.call({from: accounts[3]});
		const uint64FHeagCB = await Liquidity_v8NHoCZwU.setRate.call(uintlHCY89, {from: accounts[3]});
		const uint256mKcUJMc = await Liquidity_v8NHoCZwU.calculate.call(addressbCL3PWJ, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringBs2dfcb = "1kv71TTpavw5hgXyIkeX3OriZPS9ZE8JHaf8Eq8CocSUDnW4Vf8qCnFBsV6rgkA5Jckg8QXc6aem3w4XrahJEzlFio5fjPAHay"
		const addressXMViq0B = accounts[4]
		const addressW3to6D4 = accounts[0]
		const uintsUQCP3P = BigInt("80")
		const uintqFvNzT = BigInt("1154")
		const Liquidity_v8WHWwNHG = await Liquidity_v8.new(stringBs2dfcb, addressXMViq0B, addressW3to6D4, uintsUQCP3P, uintqFvNzT, {from: accounts[3]});
		const addressWnbxdNU = "0x0000000000000000000000000000000000000001"
		const uint256wH2MjQB = await Liquidity_v8WHWwNHG.calculate.call(addressWnbxdNU, {from: accounts[5]});
		await Liquidity_v8WHWwNHG.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringxB1LYgb = "TRKlaKFYM1I9bLXfeyyGpaWrRGCRIcKRTE"
		const addressMaEivy8 = accounts[1]
		const addresskGcvbeQ = accounts[3]
		const uintE2xblfP = BigInt("944")
		const uintji15gfX = BigInt("1167")
		const Liquidity_v8ZyDTq4d = await Liquidity_v8.new(stringxB1LYgb, addressMaEivy8, addresskGcvbeQ, uintE2xblfP, uintji15gfX, {from: accounts[4]});
		const addresswPSftsJ = "0x0000000000000000000000000000000000000001"
		const uintKhsjcTv = BigInt("1628")
		const uintw5ZwTQ3 = BigInt("637")
		const addresszvgPB82 = await Liquidity_v8ZyDTq4d.transferOwnership.call(addresswPSftsJ, {from: accounts[4]});
		const boolfPV9JXe = await Liquidity_v8ZyDTq4d.stake.call(uintKhsjcTv, {from: accounts[1]});
		const boolbMQBiKl = await Liquidity_v8ZyDTq4d.isOwner.call({from: accounts[2]});
		const boolNUbevP8 = await Liquidity_v8ZyDTq4d.emergencyWithdraw.call({from: accounts[0]});
		const booliFeKYo = await Liquidity_v8ZyDTq4d.withdraw.call({from: accounts[1]});
		const uint256J5H1sD1 = await Liquidity_v8ZyDTq4d.changeLockDuration.call(uintw5ZwTQ3, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringNZbhuGP = "dptAqPRMyK2b9Jbp8YucPIAiSvRkkw0ExB9iPi52pCdZTeSjyoM3JQlBlPBvFfyu8C4q4IyIQsoUvkOu"
		const addressQ3o7cMG = accounts[2]
		const addressc9pz51K = accounts[2]
		const uintThcITmZ = BigInt("1577")
		const uintROfqW7m = BigInt("1839")
		const Liquidity_v8k8OxqSt = await Liquidity_v8.new(stringNZbhuGP, addressQ3o7cMG, addressc9pz51K, uintThcITmZ, uintROfqW7m, {from: accounts[5]});
		const uintLdaqwBr = BigInt("380")
		const uintQWUEdKk = BigInt("1889")
		const uintJoNjzTm = BigInt("161")
		const uint256AHyzyMm = await Liquidity_v8k8OxqSt.changeLockDuration.call(uintLdaqwBr, {from: accounts[3]});
		const boolwr0Xt7w = await Liquidity_v8k8OxqSt.emergencyWithdraw.call({from: accounts[0]});
		const uint64OgnLC2q = await Liquidity_v8k8OxqSt.setRate.call(uintQWUEdKk, {from: accounts[3]});
		await Liquidity_v8k8OxqSt.onlyOwner.call({from: accounts[0]});
		const boolz3Yhpeg = await Liquidity_v8k8OxqSt.addReward.call(uintJoNjzTm, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringllNTgM = "AUYHV5bMCt7SWfLxymg7V8QNWubW8"
		const addressvkHHiT = accounts[4]
		const addressP9ufiTK = accounts[2]
		const uint2yl4vC = BigInt("1022")
		const uintDW0ttcR = BigInt("2044")
		const Liquidity_v8Qqy2mO8 = await Liquidity_v8.new(stringllNTgM, addressvkHHiT, addressP9ufiTK, uint2yl4vC, uintDW0ttcR, {from: accounts[4]});
		const uintiwSuIsY = BigInt("58")
		const uintkfamFaK = BigInt("1978")
		const boolAHyszmA = await Liquidity_v8Qqy2mO8.withdraw.call({from: accounts[3]});
		const boolRn3O6U = await Liquidity_v8Qqy2mO8.addReward.call(uintiwSuIsY, {from: accounts[2]});
		const boolRUftrlF = await Liquidity_v8Qqy2mO8.stake.call(uintkfamFaK, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const string8b0a9e = "a"
		const addressx1LBQMi = accounts[5]
		const addressSedyJ7h = accounts[0]
		const uintbTo5Q6s = BigInt("309")
		const uintC1cKwT = BigInt("2022")
		const Liquidity_v8fOM8xo = await Liquidity_v8.new(string8b0a9e, addressx1LBQMi, addressSedyJ7h, uintbTo5Q6s, uintC1cKwT, {from: "0x0000000000000000000000000000000000000001"});
		const addressrKDcJiK = accounts[1]
		const addresssW6cUY4 = accounts[5]
		const boolq0VjvCp = await Liquidity_v8fOM8xo.emergencyWithdraw.call({from: accounts[1]});
		const uint256pbtlASR = await Liquidity_v8fOM8xo.calculate.call(addressrKDcJiK, {from: accounts[1]});
		const addressyrvULe9 = await Liquidity_v8fOM8xo.transferOwnership.call(addresssW6cUY4, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringBs2dfcb = "1kv71TTpavw5hgXyIkeX3OriZPS9ZE8JHaf8Eq8CocSUDnW4Vf8qCnFBsV6rgkA5Jckg8QXc6aem3w4XrahJEzlFio5fjPAHay"
		const addressDRwSbna = accounts[4]
		const addressh8ALdC1 = accounts[0]
		const uintGAOh4OB = BigInt("80")
		const uintt61bIOf = BigInt("1154")
		const Liquidity_v8WHWwNHG = await Liquidity_v8.new(stringBs2dfcb, addressDRwSbna, addressh8ALdC1, uintGAOh4OB, uintt61bIOf, {from: accounts[3]});
		const addresshYW5I3E = accounts[0]
		const 
fTtX5FH = await Liquidity_v8WHWwNHG.userDeposits.call(addresshYW5I3E, {from: accounts[0]});
		await Liquidity_v8WHWwNHG.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolDjNi5y9 = await Liquidity_v8WHWwNHG.withdraw.call({from: accounts[1]});
		await Liquidity_v8WHWwNHG.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringBs2dfcb = "1kv71TTpavw5hgXyIkeX3OriZPS9ZE8JHaf8Eq8CocSUDnW4Vf8qCnFBsV6rgkA5Jckg8QXc6aem3w4XrahJEzlFio5fjPAHay"
		const addressoJVYCqm = accounts[4]
		const addressdEyDnT5 = accounts[0]
		const uintTNGnCzz = BigInt("80")
		const uintnvumJj = BigInt("1154")
		const Liquidity_v8WHWwNHG = await Liquidity_v8.new(stringBs2dfcb, addressoJVYCqm, addressdEyDnT5, uintTNGnCzz, uintnvumJj, {from: accounts[3]});
		const address6lycfu = await Liquidity_v8WHWwNHG.owner.call({from: accounts[1]});
		const bool5U0kWe = await Liquidity_v8WHWwNHG.emergencyWithdraw.call({from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8WHWwNHG.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringBs2dfcb = "1kv71TTpavw5hgXyIkeX3OriZPS9ZE8JHaf8Eq8CocSUDnW4Vf8qCnFBsV6rgkA5Jckg8QXc6aem3w4XrahJEzlFio5fjPAHay"
		const addressOUCeo6Z = accounts[4]
		const addressanW7SzZ = accounts[0]
		const uinteIbavwE = BigInt("80")
		const uintOV4M2Kv = BigInt("1154")
		const Liquidity_v8WHWwNHG = await Liquidity_v8.new(stringBs2dfcb, addressOUCeo6Z, addressanW7SzZ, uinteIbavwE, uintOV4M2Kv, {from: accounts[3]});
		await Liquidity_v8WHWwNHG.renounceOwnership.call({from: accounts[3]});
		await Liquidity_v8WHWwNHG.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringBs2dfcb = "1kv71TTpavw5hgXyIkeX3OriZPS9ZE8JHaf8Eq8CocSUDnW4Vf8qCnFBsV6rgkA5Jckg8QXc6aem3w4XrahJEzlFio5fjPAHay"
		const addressQTt2OKw = accounts[4]
		const addressvp9m5W6 = accounts[0]
		const uintjUWi5Jw = BigInt("80")
		const uintZMRnZny = BigInt("1154")
		const Liquidity_v8WHWwNHG = await Liquidity_v8.new(stringBs2dfcb, addressQTt2OKw, addressvp9m5W6, uintjUWi5Jw, uintZMRnZny, {from: accounts[3]});
		const uintEADyJnm = BigInt("1808")
		const addressTJyi4t3 = accounts[2]
		const uint64iG8cBL1 = await Liquidity_v8WHWwNHG.setRate.call(uintEADyJnm, {from: accounts[3]});
		const 
fTtX5FH = await Liquidity_v8WHWwNHG.userDeposits.call(addressTJyi4t3, {from: accounts[0]});
		const boolrLUPtyq = await Liquidity_v8WHWwNHG.withdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgQaTW6w = "yfQMWG4CRKNERdCfLfodybV8awtl6BDqgNjyE6lsD96Je9XMDOuYfJlIhFE8WHIQrPP3vGIBHdVXcnwPv3H2"
		const addressvpRhaI = accounts[1]
		const addressqCzErnk = "0x0000000000000000000000000000000000000001"
		const uint4lMxK8 = BigInt("1837")
		const uintwM7pj5b = BigInt("679")
		const Liquidity_v8XiLc9AX = await Liquidity_v8.new(stringgQaTW6w, addressvpRhaI, addressqCzErnk, uint4lMxK8, uintwM7pj5b, {from: accounts[1]});
		const uintnh1Bty8 = BigInt("869")
		const addressiY8ym5O = accounts[3]
		const addressGzsdqsD = accounts[4]
		const addressRtndjnH = accounts[1]
		const uint256QqmK2ZQ = await Liquidity_v8XiLc9AX.changeLockDuration.call(uintnh1Bty8, {from: accounts[1]});
		const 
ROSPLrM = await Liquidity_v8XiLc9AX.userDeposits.call(addressiY8ym5O, {from: accounts[2]});
		const boolInvnwjM = await Liquidity_v8XiLc9AX.emergencyWithdraw.call({from: accounts[4]});
		const uint256pPuoQWB = await Liquidity_v8XiLc9AX.calculate.call(addressGzsdqsD, {from: accounts[3]});
		await Liquidity_v8XiLc9AX.renounceOwnership.call({from: accounts[0]});
		const addresskjFHd6 = await Liquidity_v8XiLc9AX.transferOwnership.call(addressRtndjnH, {from: accounts[4]});
	});
})