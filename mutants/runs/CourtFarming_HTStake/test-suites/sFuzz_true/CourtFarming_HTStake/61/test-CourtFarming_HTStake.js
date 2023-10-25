const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeIWuVDzi = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressri0r5tq = accounts[0]
		const uintJFjy5um = BigInt("386")
		const uint256Y3bpLrN = await CourtFarming_HTStakeIWuVDzi.balanceOf.call(addressri0r5tq, {from: accounts[4]});
		const uint256VNzg9Qw = await CourtFarming_HTStakeIWuVDzi.expectedRewardsToday.call(uintJFjy5um, {from: "0x0000000000000000000000000000000000000001"});
		const uint256K8Irv4N = await CourtFarming_HTStakeIWuVDzi.lastUpdateBlock.call({from: accounts[5]});

		assert.equal(uint256K8Irv4N, BigInt("1730"))
		assert.equal(uint256Y3bpLrN, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyorOnh4 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressqCitPd5 = accounts[4]
		const addressf8lS4df = "0x0000000000000000000000000000000000000001"
		const addressDp8bh4D = await CourtFarming_HTStakeyorOnh4.updateReward.call(addressqCitPd5, {from: accounts[4]});
		const addressUcbAa54 = await CourtFarming_HTStakeyorOnh4.setCourtStake.call(addressf8lS4df, {from: accounts[3]});

		await expect(CourtFarming_HTStakeyorOnh4.setCourtStake.call(addressf8lS4df, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakey3OAdQ4 = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressQkaDZEU = accounts[4]
		const uintU6b8dKV = BigInt("1893")
		const uint256m4aHDui = await CourtFarming_HTStakey3OAdQ4.rewards.call(addressQkaDZEU, {from: "0x0000000000000000000000000000000000000001"});
		const boolL4dKozL = await CourtFarming_HTStakey3OAdQ4.stakeIncvRewards.call(uintU6b8dKV, {from: accounts[4]});
		const uint256BQ06fJk = await CourtFarming_HTStakey3OAdQ4.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolL4dKozL, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeAGvmtHw = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressDgEds4W = accounts[1]
		const uinty5jAtW3 = BigInt("528")
		const uintH9usfT = BigInt("1933")
		const uintx3iUpEM = BigInt("1015")
		const uint256LmhyIU = await CourtFarming_HTStakeAGvmtHw.getCurrentTime.call({from: accounts[0]});
		const addressI5jRB0N = await CourtFarming_HTStakeAGvmtHw.setCourtStake.call(addressDgEds4W, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iavnYfB = await CourtFarming_HTStakeAGvmtHw._stakeParametrsCalculation.call(uintx3iUpEM, uintH9usfT, uinty5jAtW3, {from: accounts[2]});

		assert.equal(uint256LmhyIU, BigInt("1630201323"))
		await expect(CourtFarming_HTStakeAGvmtHw.setCourtStake.call(addressDgEds4W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakea0jB4dU = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintSA13h4T = BigInt("626")
		const addressO3h68qj = accounts[3]
		const uintseCn9xY = BigInt("1099")
		const uintKih64cD = BigInt("623")
		const uintCuGEXat = BigInt("867")
		const uint256Mw8qVR = await CourtFarming_HTStakea0jB4dU.getCurrentTime.call({from: accounts[3]});
		const uint256zAoYQwl = await CourtFarming_HTStakea0jB4dU.blockNumber.call({from: accounts[4]});
		const uint256jqvcQ7X = await CourtFarming_HTStakea0jB4dU.stake.call(uintSA13h4T, {from: accounts[1]});
		const addressL6yTGsg = await CourtFarming_HTStakea0jB4dU.setCourtStake.call(addressO3h68qj, {from: accounts[4]});
		await CourtFarming_HTStakea0jB4dU.changeStakeParameters.call(uintCuGEXat, uintKih64cD, uintseCn9xY, {from: accounts[3]});
		const uint256IVG4loB = await CourtFarming_HTStakea0jB4dU.totalStaked.call({from: accounts[4]});

		assert.equal(uint256Mw8qVR, BigInt("1630201328"))
		assert.equal(uint256zAoYQwl, BigInt("1730"))
		await expect(CourtFarming_HTStakea0jB4dU.stake.call(uintSA13h4T, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeUbBzO0Q = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintEaKUCOE = BigInt("1485")
		const uintSlJKueQ = BigInt("1369")
		const uintR37ZPUs = BigInt("1386")
		const uintg5vfPgx = BigInt("1481")
		const uintgpQQEkA = BigInt("1203")
		const uintgdnGdBN = BigInt("1191")
		const uintYOG7RSr = BigInt("1688")
		const uint256YpMgK21 = await CourtFarming_HTStakeUbBzO0Q._stakeParametrsCalculation.call(uintR37ZPUs, uintSlJKueQ, uintEaKUCOE, {from: accounts[3]});
		const uint256C834pgg = await CourtFarming_HTStakeUbBzO0Q.totalStaked.call({from: accounts[3]});
		await CourtFarming_HTStakeUbBzO0Q.changeStakeParameters.call(uintgdnGdBN, uintgpQQEkA, uintg5vfPgx, {from: "0x0000000000000000000000000000000000000001"});
		const boolnUgzQq6 = await CourtFarming_HTStakeUbBzO0Q.stakeIncvRewards.call(uintYOG7RSr, {from: accounts[4]});

		await expect(CourtFarming_HTStakeUbBzO0Q._stakeParametrsCalculation.call(uintR37ZPUs, uintSlJKueQ, uintEaKUCOE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake1YsfCh = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressmqdI301 = accounts[1]
		const uintERtbXy6 = BigInt("555")
		const uintphIcxoF = BigInt("11")
		const uintuPPNUP = BigInt("365")
		const uint256Wc9TYrs = await CourtFarming_HTStake1YsfCh.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rq3QUwW = await CourtFarming_HTStake1YsfCh.balanceOf.call(addressmqdI301, {from: accounts[5]});
		await CourtFarming_HTStake1YsfCh.changeStakeParameters.call(uintuPPNUP, uintphIcxoF, uintERtbXy6, {from: accounts[3]});

		assert.equal(uint256Wc9TYrs, BigInt("1630201320"))
		assert.equal(uint256rq3QUwW, BigInt("0"))
		await expect(CourtFarming_HTStake1YsfCh.changeStakeParameters.call(uintuPPNUP, uintphIcxoF, uintERtbXy6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakey3OAdQ4 = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressqC4IFwW = accounts[4]
		const addressRQSBef9 = accounts[2]
		const uintyFUPCUL = BigInt("47")
		const uintnAmVLZP = BigInt("1267")
		const uintiWZJ9cK = BigInt("1675")
		const uintx26k6PO = BigInt("1893")
		const uint256m4aHDui = await CourtFarming_HTStakey3OAdQ4.rewards.call(addressqC4IFwW, {from: "0x0000000000000000000000000000000000000001"});
		const addressX1dSpg = await CourtFarming_HTStakey3OAdQ4.updateReward.call(addressRQSBef9, {from: accounts[0]});
		await CourtFarming_HTStakey3OAdQ4.changeStakeParameters.call(uintiWZJ9cK, uintnAmVLZP, uintyFUPCUL, {from: accounts[5]});
		const boolL4dKozL = await CourtFarming_HTStakey3OAdQ4.stakeIncvRewards.call(uintx26k6PO, {from: accounts[4]});
		const uint256BQ06fJk = await CourtFarming_HTStakey3OAdQ4.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakey3OAdQ4.changeStakeParameters.call(uintiWZJ9cK, uintnAmVLZP, uintyFUPCUL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyorOnh4 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressWF8Kk0k = accounts[5]
		const addressoACQadd = "0x0000000000000000000000000000000000000001"
		const addressITP5l1x = accounts[1]
		const uint256uXnyBab = await CourtFarming_HTStakeyorOnh4.incvRewardClaim.call({from: accounts[2]});
		const addressDp8bh4D = await CourtFarming_HTStakeyorOnh4.updateReward.call(addressWF8Kk0k, {from: accounts[4]});
		const addressUcbAa54 = await CourtFarming_HTStakeyorOnh4.setCourtStake.call(addressoACQadd, {from: accounts[3]});
		const uint256W2AG15B = await CourtFarming_HTStakeyorOnh4.rewards.call(addressITP5l1x, {from: accounts[0]});

		assert.equal(uint256uXnyBab, BigInt("0"))
		await expect(CourtFarming_HTStakeyorOnh4.setCourtStake.call(addressoACQadd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMOpziT = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintlCQzLu = BigInt("591")
		const boola0e3FMi = false
		const uintBNQDzX3 = BigInt("869")
		const uint2566D4wzF = await CourtFarming_HTStakeMOpziT.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const boolVuXO0zE = await CourtFarming_HTStakeMOpziT.stakeIncvRewards.call(uintlCQzLu, {from: accounts[3]});
		const uint256F6uWbCd = await CourtFarming_HTStakeMOpziT.unstake.call(uintBNQDzX3, boola0e3FMi, {from: accounts[2]});
		const uint256MT6uc8 = await CourtFarming_HTStakeMOpziT.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVuXO0zE, false)
		assert.equal(uint2566D4wzF, BigInt("1730"))
		await expect(CourtFarming_HTStakeMOpziT.unstake.call(uintBNQDzX3, boola0e3FMi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakevHCt4uC = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressE1BF5P2 = accounts[1]
		const uint256onHupIU = await CourtFarming_HTStakevHCt4uC.incvRewardInfo.call({from: accounts[3]});
		const uint256eHk4HM9 = await CourtFarming_HTStakevHCt4uC.rewards.call(addressE1BF5P2, {from: accounts[1]});
		const uint256Zr7PcXE = await CourtFarming_HTStakevHCt4uC.totalStaked.call({from: accounts[2]});
		const uint256oh6dmfl = await CourtFarming_HTStakevHCt4uC.blockNumber.call({from: accounts[4]});
		const uint256ypI6aWW = await CourtFarming_HTStakevHCt4uC.totalStaked.call({from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMOpziT = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintYZyHmHe = BigInt("601")
		const uint256o1h3qCU = await CourtFarming_HTStakeMOpziT.totalStaked.call({from: accounts[1]});
		const boolVuXO0zE = await CourtFarming_HTStakeMOpziT.stakeIncvRewards.call(uintYZyHmHe, {from: accounts[3]});

		assert.equal(boolVuXO0zE, false)
		assert.equal(uint256o1h3qCU, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakey3OAdQ4 = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressz8z0h4Z = accounts[1]
		const addresspH2aCWe = accounts[4]
		const addressfqfmJop = await CourtFarming_HTStakey3OAdQ4.getBeneficiaryInfo.call(addressz8z0h4Z, {from: accounts[4]});
		const uint256m4aHDui = await CourtFarming_HTStakey3OAdQ4.rewards.call(addresspH2aCWe, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BQ06fJk = await CourtFarming_HTStakey3OAdQ4.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakey3OAdQ4 = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressgDGikcu = accounts[3]
		const address3iMS96 = accounts[0]
		const boolsiyG9g4 = false
		const uintoCVovb = BigInt("1335")
		const uint256tjC0k6 = await CourtFarming_HTStakey3OAdQ4.rewards.call(addressgDGikcu, {from: accounts[5]});
		const addressQyuDx7W = await CourtFarming_HTStakey3OAdQ4.setCourtStake.call(address3iMS96, {from: accounts[4]});
		const uint256BQ06fJk = await CourtFarming_HTStakey3OAdQ4.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Mkl2coZ = await CourtFarming_HTStakey3OAdQ4.unstake.call(uintoCVovb, boolsiyG9g4, {from: accounts[4]});

		await expect(CourtFarming_HTStakey3OAdQ4.setCourtStake.call(address3iMS96, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMOpziT = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintrpq3nPR = BigInt("0")
		const addressnxj2yTQ = accounts[5]
		const addressHeURffy = accounts[2]
		const addressJFkszl = accounts[1]
		const uint256zYlQqs = await CourtFarming_HTStakeMOpziT.stake.call(uintrpq3nPR, {from: accounts[2]});
		const addressU6vALXB = await CourtFarming_HTStakeMOpziT.setCourtStake.call(addressnxj2yTQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZuixhZ = await CourtFarming_HTStakeMOpziT.rewards.call(addressHeURffy, {from: accounts[3]});
		const uint256TedYwpc = await CourtFarming_HTStakeMOpziT.balanceOf.call(addressJFkszl, {from: accounts[5]});

		await expect(CourtFarming_HTStakeMOpziT.setCourtStake.call(addressnxj2yTQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMOpziT = await CourtFarming_HTStake.new({from: accounts[1]});
		const uint2FD8kM = BigInt("0")
		const uintPswWYoE = BigInt("476")
		const boolVuXO0zE = await CourtFarming_HTStakeMOpziT.stakeIncvRewards.call(uint2FD8kM, {from: accounts[3]});
		const boolgOT3NKL = await CourtFarming_HTStakeMOpziT.stakeIncvRewards.call(uintPswWYoE, {from: accounts[0]});

		assert.equal(boolVuXO0zE, false)
		assert.equal(boolgOT3NKL, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMOpziT = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintLcpVv61 = BigInt("601")
		const boolvNqhVK = false
		const uintIr4W56y = BigInt("0")
		const boolZfFzNTV = false
		const uintv4gRXK1 = BigInt("502")
		const boolVuXO0zE = await CourtFarming_HTStakeMOpziT.stakeIncvRewards.call(uintLcpVv61, {from: accounts[3]});
		const uint256GJVpvPx = await CourtFarming_HTStakeMOpziT.totalStaked.call({from: accounts[4]});
		const uint256Jdu5Dc3 = await CourtFarming_HTStakeMOpziT.unstake.call(uintIr4W56y, boolvNqhVK, {from: accounts[2]});
		const uint256GXFBoeF = await CourtFarming_HTStakeMOpziT.unstake.call(uintv4gRXK1, boolZfFzNTV, {from: accounts[0]});

		assert.equal(boolVuXO0zE, false)
		assert.equal(uint256GJVpvPx, BigInt("0"))
		await expect(CourtFarming_HTStakeMOpziT.unstake.call(uintv4gRXK1, boolZfFzNTV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})