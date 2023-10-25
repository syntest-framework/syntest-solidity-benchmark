const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerWjoN8e = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addresspL0J4U9 = accounts[2]
		const uint256k7r1ul = await CourtFarming_RoomLPStakerWjoN8e.incvRewardInfo.call({from: accounts[4]});
		const uint256SOverdb = await CourtFarming_RoomLPStakerWjoN8e.blockNumber.call({from: accounts[0]});
//		const addressbtFtDG = await CourtFarming_RoomLPStakerWjoN8e.setCourtStake.call(addresspL0J4U9, {from: accounts[2]});
//		const uint256TkH0tiV = await CourtFarming_RoomLPStakerWjoN8e.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256SOverdb, BigInt("1749"))
		await expect(CourtFarming_RoomLPStakerWjoN8e.setCourtStake.call(addresspL0J4U9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeDT7F9a = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressPV6igOL = accounts[1]
		const addressZ27KoVF = accounts[2]
		const boolb4VUm6v = true
		const uintp3ZBEGj = BigInt("1732")
		const uint256ZKCSvNB = await CourtFarming_RoomLPStakeDT7F9a.getCurrentTime.call({from: accounts[4]});
		const uint256S4f2ilj = await CourtFarming_RoomLPStakeDT7F9a.balanceOf.call(addressPV6igOL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256XR4ta4N = await CourtFarming_RoomLPStakeDT7F9a.balanceOf.call(addressZ27KoVF, {from: accounts[0]});
//		const uint256ZIYdTgc = await CourtFarming_RoomLPStakeDT7F9a.unstake.call(uintp3ZBEGj, boolb4VUm6v, {from: accounts[3]});

		assert.equal(uint256S4f2ilj, BigInt("0"))
		assert.equal(uint256XR4ta4N, BigInt("0"))
		assert.equal(uint256ZKCSvNB, BigInt("1630201589"))
		await expect(CourtFarming_RoomLPStakeDT7F9a.unstake.call(uintp3ZBEGj, boolb4VUm6v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeL0gSK6i = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressBeODRdF = accounts[0]
		const addressPabIlox = accounts[2]
		const addressxiG5Uw = await CourtFarming_RoomLPStakeL0gSK6i.getBeneficiaryInfo.call(addressBeODRdF, {from: accounts[2]});
		const uint256BYthUVw = await CourtFarming_RoomLPStakeL0gSK6i.blockNumber.call({from: accounts[5]});
		const uint256Pr0OJ4R = await CourtFarming_RoomLPStakeL0gSK6i.getCurrentTime.call({from: accounts[2]});
//		const addresscpack41 = await CourtFarming_RoomLPStakeL0gSK6i.setCourtStake.call(addressPabIlox, {from: accounts[1]});

		assert.equal(uint256BYthUVw, BigInt("1749"))
		assert.equal(uint256Pr0OJ4R, BigInt("1630201584"))
		await expect(CourtFarming_RoomLPStakeL0gSK6i.setCourtStake.call(addressPabIlox, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFoRp5VA = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintFVKnBNJ = BigInt("108")
		const uintU6WaoyL = BigInt("1978")
		const uintjqpjaIK = BigInt("1763")
		const uintpyj9wEb = BigInt("1770")
//		const uint256ge5QR33 = await CourtFarming_RoomLPStakeFoRp5VA.stake.call(uintFVKnBNJ, {from: accounts[4]});
//		await CourtFarming_RoomLPStakeFoRp5VA.changeStakeParameters.call(uintpyj9wEb, uintjqpjaIK, uintU6WaoyL, {from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeFoRp5VA.stake.call(uintFVKnBNJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejQHCUrI = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOCnzsgk = accounts[0]
		const addressgjouFNY = accounts[0]
		const boolXSPpwhU = false
		const uintBChUfm = BigInt("104")
		const addresslHWDeuv = await CourtFarming_RoomLPStakejQHCUrI.getBeneficiaryInfo.call(addressOCnzsgk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NAHcrMa = await CourtFarming_RoomLPStakejQHCUrI.getCurrentTime.call({from: accounts[2]});
		const uint256IUnoPGM = await CourtFarming_RoomLPStakejQHCUrI.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const addressbIQRHqu = await CourtFarming_RoomLPStakejQHCUrI.setCourtStake.call(addressgjouFNY, {from: accounts[1]});
		const uint256yLka27l = await CourtFarming_RoomLPStakejQHCUrI.unstake.call(uintBChUfm, boolXSPpwhU, {from: accounts[4]});
		const uint256VRPDTdS = await CourtFarming_RoomLPStakejQHCUrI.blockNumber.call({from: accounts[0]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakehkkciDZ = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintbCN3yGq = BigInt("850")
		const uintO7EPUQF = BigInt("1875")
		const uintoPbVOSz = BigInt("1339")
		const uintMYDSIYD = BigInt("52")
		const uintdn6CE0p = BigInt("799")
		const uintwg2YOzO = BigInt("1814")
//		await CourtFarming_RoomLPStakehkkciDZ.changeStakeParameters.call(uintoPbVOSz, uintO7EPUQF, uintbCN3yGq, {from: accounts[0]});
//		const uint256Orobcw = await CourtFarming_RoomLPStakehkkciDZ.expectedRewardsToday.call(uintMYDSIYD, {from: accounts[3]});
//		const uint256SwR5vJ4 = await CourtFarming_RoomLPStakehkkciDZ.expectedRewardsToday.call(uintdn6CE0p, {from: accounts[1]});
//		const boolkT54Lsw = await CourtFarming_RoomLPStakehkkciDZ.stakeIncvRewards.call(uintwg2YOzO, {from: accounts[4]});
//		const uint256E9UKwQR = await CourtFarming_RoomLPStakehkkciDZ.incvRewardInfo.call({from: accounts[0]});

		await expect(CourtFarming_RoomLPStakehkkciDZ.changeStakeParameters.call(uintoPbVOSz, uintO7EPUQF, uintbCN3yGq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeMLIACX = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressESruxCM = accounts[3]
		const uintiPpzGqV = BigInt("1041")
		const uintuPg0T0S = BigInt("1917")
		const uint256x1KPuV = await CourtFarming_RoomLPStakeMLIACX.totalStaked.call({from: accounts[3]});
		const addressSGQrcig = await CourtFarming_RoomLPStakeMLIACX.getBeneficiaryInfo.call(addressESruxCM, {from: accounts[5]});
		const uint256VG4cY70 = await CourtFarming_RoomLPStakeMLIACX.totalStaked.call({from: accounts[2]});
		const boolchhFggu = await CourtFarming_RoomLPStakeMLIACX.stakeIncvRewards.call(uintiPpzGqV, {from: accounts[0]});
		const uint256KRMrvqG = await CourtFarming_RoomLPStakeMLIACX.incvRewardInfo.call({from: accounts[0]});
		const boolycODQ2p = await CourtFarming_RoomLPStakeMLIACX.stakeIncvRewards.call(uintuPg0T0S, {from: accounts[5]});

		assert.equal(boolchhFggu, false)
		assert.equal(boolycODQ2p, false)
		assert.equal(uint256VG4cY70, BigInt("0"))
		assert.equal(uint256x1KPuV, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeMLIACX = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintPANQAIR = BigInt("344")
		const addressj8tZjWh = accounts[3]
		const uintVMASPsS = BigInt("1041")
		const uintGkqMAjQ = BigInt("1917")
		const uint256qPTqw2s = await CourtFarming_RoomLPStakeMLIACX.expectedRewardsToday.call(uintPANQAIR, {from: accounts[0]});
		const uint256x1KPuV = await CourtFarming_RoomLPStakeMLIACX.totalStaked.call({from: accounts[3]});
		const addressSGQrcig = await CourtFarming_RoomLPStakeMLIACX.getBeneficiaryInfo.call(addressj8tZjWh, {from: accounts[5]});
		const uint256VG4cY70 = await CourtFarming_RoomLPStakeMLIACX.totalStaked.call({from: accounts[2]});
		const boolchhFggu = await CourtFarming_RoomLPStakeMLIACX.stakeIncvRewards.call(uintVMASPsS, {from: accounts[0]});
		const uint256KRMrvqG = await CourtFarming_RoomLPStakeMLIACX.incvRewardInfo.call({from: accounts[0]});
		const boolycODQ2p = await CourtFarming_RoomLPStakeMLIACX.stakeIncvRewards.call(uintGkqMAjQ, {from: accounts[5]});

		assert.equal(boolchhFggu, false)
		assert.equal(boolycODQ2p, false)
		assert.equal(uint256VG4cY70, BigInt("0"))
		assert.equal(uint256x1KPuV, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeraGKivE = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uint256Cp37OwQ = await CourtFarming_RoomLPStakeraGKivE.incvRewardInfo.call({from: accounts[2]});
		const uint2566vnHdE = await CourtFarming_RoomLPStakeraGKivE.incvRewardClaim.call({from: accounts[2]});
		const uint256gWZNcXT = await CourtFarming_RoomLPStakeraGKivE.incvRewardInfo.call({from: accounts[0]});

		assert.equal(uint2566vnHdE, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeraGKivE = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uint256XkkO2na = await CourtFarming_RoomLPStakeraGKivE.blockNumber.call({from: accounts[2]});
		const uint256qCAzvYL = await CourtFarming_RoomLPStakeraGKivE.lastUpdateBlock.call({from: accounts[3]});
		const uint256Cp37OwQ = await CourtFarming_RoomLPStakeraGKivE.incvRewardInfo.call({from: accounts[2]});
		const uint256BncKmOR = await CourtFarming_RoomLPStakeraGKivE.incvRewardInfo.call({from: accounts[4]});
		const uint256gWZNcXT = await CourtFarming_RoomLPStakeraGKivE.incvRewardInfo.call({from: accounts[0]});

		assert.equal(uint256XkkO2na, BigInt("1749"))
		assert.equal(uint256qCAzvYL, BigInt("1749"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFoRp5VA = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintGSJN0S2 = BigInt("0")
		const uintzxYVCmt = BigInt("1928")
		const uint256ge5QR33 = await CourtFarming_RoomLPStakeFoRp5VA.stake.call(uintGSJN0S2, {from: accounts[4]});
		const uint256EmJpPts = await CourtFarming_RoomLPStakeFoRp5VA.incvRewardClaim.call({from: accounts[4]});
//		const uint256n8VBTXz = await CourtFarming_RoomLPStakeFoRp5VA.stake.call(uintzxYVCmt, {from: accounts[3]});

		assert.equal(uint256EmJpPts, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeFoRp5VA.stake.call(uintzxYVCmt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeraGKivE = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintgffgwVP = BigInt("1489")
		const uintJfX6eR = BigInt("0")
		const boolrS9qRnY = await CourtFarming_RoomLPStakeraGKivE.stakeIncvRewards.call(uintgffgwVP, {from: accounts[1]});
		const uint256Cp37OwQ = await CourtFarming_RoomLPStakeraGKivE.incvRewardInfo.call({from: accounts[2]});
		const boolsBG8dcn = await CourtFarming_RoomLPStakeraGKivE.stakeIncvRewards.call(uintJfX6eR, {from: accounts[4]});
		const uint256KlQz8jQ = await CourtFarming_RoomLPStakeraGKivE.incvRewardClaim.call({from: accounts[1]});
		const uint256pqQDcvM = await CourtFarming_RoomLPStakeraGKivE.totalStaked.call({from: accounts[1]});

		assert.equal(boolrS9qRnY, false)
		assert.equal(boolsBG8dcn, false)
		assert.equal(uint256KlQz8jQ, BigInt("0"))
		assert.equal(uint256pqQDcvM, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeraGKivE = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressAy3oxjO = accounts[2]
		const addresskMcHd6 = accounts[3]
		const uint256Cp37OwQ = await CourtFarming_RoomLPStakeraGKivE.incvRewardInfo.call({from: accounts[2]});
		const addressGnsYGXI = await CourtFarming_RoomLPStakeraGKivE.updateReward.call(addressAy3oxjO, {from: accounts[2]});
//		const addressaGxI2Y = await CourtFarming_RoomLPStakeraGKivE.setCourtStake.call(addresskMcHd6, {from: accounts[5]});

		await expect(CourtFarming_RoomLPStakeraGKivE.setCourtStake.call(addresskMcHd6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakePvrZO09 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressDTKr1kA = accounts[1]
		const boolIkoT224 = true
		const uintZZyfuwz = BigInt("0")
		const uint256X64AeTn = await CourtFarming_RoomLPStakePvrZO09.blockNumber.call({from: accounts[5]});
		const uint256Fu3pb9P = await CourtFarming_RoomLPStakePvrZO09.balanceOf.call(addressDTKr1kA, {from: accounts[1]});
		const uint256zLhJjXU = await CourtFarming_RoomLPStakePvrZO09.unstake.call(uintZZyfuwz, boolIkoT224, {from: accounts[2]});

		assert.equal(uint256Fu3pb9P, BigInt("0"))
		assert.equal(uint256X64AeTn, BigInt("1749"))
	});
})