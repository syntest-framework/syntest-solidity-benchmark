const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2jaaxNpp = await PRDZstakingV2.new({from: accounts[1]});
		const uintCJq1GEu = BigInt("1607")
		const uintNjUqOgu = BigInt("768")
		const addressMwMYAdH = accounts[4]
		const uintfMjaM9C = BigInt("1228")
		const uintuoEYkXu = await PRDZstakingV2jaaxNpp.updateOffer.call(uintNjUqOgu, uintCJq1GEu, {from: accounts[4]});
		await PRDZstakingV2jaaxNpp.deposit.call({from: "0x0000000000000000000000000000000000000001"});
		const uintOJm4r7Z = await PRDZstakingV2jaaxNpp.getStakingScore.call(addressMwMYAdH, {from: accounts[3]});
		const uintVvnq0qn = await PRDZstakingV2jaaxNpp.getTotalStaked.call({from: accounts[3]});
		await PRDZstakingV2jaaxNpp.claimReward.call({from: accounts[3]});
		const uintnwKrpKw = await PRDZstakingV2jaaxNpp.stake.call(uintfMjaM9C, {from: accounts[5]});

		await expect(PRDZstakingV2jaaxNpp.updateOffer.call(uintNjUqOgu, uintCJq1GEu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2lC2fQ0e = await PRDZstakingV2.new({from: accounts[2]});
		const uintzL8mRx3 = BigInt("1746")
		const uint9HwSEw = BigInt("2018")
		const uintXcqqMRE = await PRDZstakingV2lC2fQ0e.unstake.call(uintzL8mRx3, {from: accounts[2]});
		await PRDZstakingV2lC2fQ0e.claimScoreEth.call({from: accounts[0]});
		const uinttWGPdAn = await PRDZstakingV2lC2fQ0e.stake.call(uint9HwSEw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2lC2fQ0e.unstake.call(uintzL8mRx3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2mslEvlK = await PRDZstakingV2.new({from: accounts[0]});
		const addressTWvsKzp = accounts[3]
		await PRDZstakingV2mslEvlK.onlyOwner.call({from: accounts[0]});
		await PRDZstakingV2mslEvlK.onlyOwner.call({from: accounts[4]});
		await PRDZstakingV2mslEvlK.claimReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressxaBRp9y = await PRDZstakingV2mslEvlK.transferOwnership.call(addressTWvsKzp, {from: accounts[1]});
		const uintbHwdnF5 = await PRDZstakingV2mslEvlK.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2mslEvlK.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2JkKuClN = await PRDZstakingV2.new({from: accounts[3]});
		const uintK3qZ9Nh = BigInt("102")
		await PRDZstakingV2JkKuClN.claimReward.call({from: accounts[1]});
		const uinttAUmxha = await PRDZstakingV2JkKuClN.unstake.call(uintK3qZ9Nh, {from: accounts[5]});

		await expect(PRDZstakingV2JkKuClN.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2b9gy9mH = await PRDZstakingV2.new({from: accounts[0]});
		const uintzEq10dP = BigInt("762")
		const uinteo69alI = await PRDZstakingV2b9gy9mH.getTotalUnStaked.call({from: accounts[1]});
		const uint8vSVzn = await PRDZstakingV2b9gy9mH.updateScoreEth.call(uintzEq10dP, {from: accounts[2]});

		assert.equal(uinteo69alI, BigInt("0"))
		await expect(PRDZstakingV2b9gy9mH.updateScoreEth.call(uintzEq10dP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2bMvD63o = await PRDZstakingV2.new({from: accounts[0]});
		const addressE9rdzA7 = accounts[5]
		const uintKG6LCZz = BigInt("1862")
		const uintwUKR1T = BigInt("695")
		const addressJif4YN = accounts[4]
		const uinteb2clFK = await PRDZstakingV2bMvD63o.getNumberOfHolders.call({from: accounts[3]});
		const addressPnGpVe = await PRDZstakingV2bMvD63o.transferOwnership.call(addressE9rdzA7, {from: accounts[0]});
		const uintqi5L5Op = await PRDZstakingV2bMvD63o.updateOffer.call(uintwUKR1T, uintKG6LCZz, {from: accounts[2]});
		const uintVMB6VLc = await PRDZstakingV2bMvD63o.getPendingReward.call(addressJif4YN, {from: accounts[4]});

		assert.equal(uinteb2clFK, BigInt("0"))
		await expect(PRDZstakingV2bMvD63o.updateOffer.call(uintwUKR1T, uintKG6LCZz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2zfrRtMb = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressyJsQWEY = accounts[1]
		const uinthSBWsCS = await PRDZstakingV2zfrRtMb.getStakingScore.call(addressyJsQWEY, {from: accounts[2]});
		await PRDZstakingV2zfrRtMb.claimScoreEth.call({from: accounts[0]});
		await PRDZstakingV2zfrRtMb.claimReward.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2E9kV5JJ = await PRDZstakingV2.new({from: accounts[3]});
		const address0sdDQN = accounts[5]
		await PRDZstakingV2E9kV5JJ.claimScoreEth.call({from: accounts[4]});
		const addressHXd2dMn = await PRDZstakingV2E9kV5JJ.transferOwnership.call(address0sdDQN, {from: accounts[2]});
		await PRDZstakingV2E9kV5JJ.onlyOwner.call({from: accounts[0]});
		const uinteYLUjC = await PRDZstakingV2E9kV5JJ.getTotalFeeCollected.call({from: accounts[3]});
		await PRDZstakingV2E9kV5JJ.deposit.call({from: accounts[1]});
		const uintNnTawXG = await PRDZstakingV2E9kV5JJ.getTotalStaked.call({from: accounts[2]});

		await expect(PRDZstakingV2E9kV5JJ.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2JkKuClN = await PRDZstakingV2.new({from: accounts[3]});
		const uintCZLVaQG = BigInt("102")
		await PRDZstakingV2JkKuClN.claimReward.call({from: accounts[1]});
		const uinthxKkU7 = await PRDZstakingV2JkKuClN.getTotalFeeCollected.call({from: accounts[3]});
		const uinttAUmxha = await PRDZstakingV2JkKuClN.unstake.call(uintCZLVaQG, {from: accounts[5]});

		await expect(PRDZstakingV2JkKuClN.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ZRbQDuR = await PRDZstakingV2.new({from: accounts[3]});
		const addressY8OJEmT = accounts[4]
		const addressa6NRkPE = accounts[0]
		const uint1mqBmO = BigInt("1278")
		const uintDpQ6XUt = BigInt("1396")
		const uintbGGubhy = await PRDZstakingV2ZRbQDuR.getScoreEth.call(addressY8OJEmT, {from: accounts[2]});
		const uintgGskJY = await PRDZstakingV2ZRbQDuR.getScoreEth.call(addressa6NRkPE, {from: accounts[0]});
		const uintSV3CAB3 = await PRDZstakingV2ZRbQDuR.updateScoreEth.call(uint1mqBmO, {from: accounts[4]});
		await PRDZstakingV2ZRbQDuR.deposit.call({from: accounts[0]});
		const uintUYVzJSG = await PRDZstakingV2ZRbQDuR.updateScoreEth.call(uintDpQ6XUt, {from: accounts[0]});

		assert.equal(uintbGGubhy, BigInt("0"))
		assert.equal(uintgGskJY, BigInt("0"))
		await expect(PRDZstakingV2ZRbQDuR.updateScoreEth.call(uint1mqBmO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2JkKuClN = await PRDZstakingV2.new({from: accounts[3]});
		const uintlEfeD4m = BigInt("879")
		const uintEH35RyV = BigInt("102")
		await PRDZstakingV2JkKuClN.claimReward.call({from: accounts[1]});
		await PRDZstakingV2JkKuClN.deposit.call({from: accounts[4]});
		const uinthxKkU7 = await PRDZstakingV2JkKuClN.getTotalFeeCollected.call({from: accounts[3]});
		const uintOcizG05 = await PRDZstakingV2JkKuClN.unstake.call(uintlEfeD4m, {from: accounts[4]});
		const uinttAUmxha = await PRDZstakingV2JkKuClN.unstake.call(uintEH35RyV, {from: accounts[5]});

		await expect(PRDZstakingV2JkKuClN.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ecG4FIf = await PRDZstakingV2.new({from: accounts[3]});
		const uintbnGYv5 = BigInt("1454")
		await PRDZstakingV2ecG4FIf.claimReward.call({from: accounts[5]});
		const uinty9jXhhU = await PRDZstakingV2ecG4FIf.getNumberOfHolders.call({from: accounts[2]});
		const uintSP1xMTr = await PRDZstakingV2ecG4FIf.getTotalUnStaked.call({from: accounts[1]});
		const uintgJKSRwf = await PRDZstakingV2ecG4FIf.updateScoreEth.call(uintbnGYv5, {from: accounts[3]});
		const uintgY2zFEp = await PRDZstakingV2ecG4FIf.getNumberOfHolders.call({from: accounts[2]});

		await expect(PRDZstakingV2ecG4FIf.claimReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2E9kV5JJ = await PRDZstakingV2.new({from: accounts[3]});
		const addresszgqKpuR = accounts[1]
		const uintqh1Irg2 = BigInt("272")
		const addressNo3rtCN = accounts[5]
		const uintVP1NI9N = await PRDZstakingV2E9kV5JJ.getStakingScore.call(addresszgqKpuR, {from: accounts[1]});
		await PRDZstakingV2E9kV5JJ.deposit.call({from: accounts[3]});
		await PRDZstakingV2E9kV5JJ.claimScoreEth.call({from: accounts[4]});
		const uintlMrQdVy = await PRDZstakingV2E9kV5JJ.updateScoreEth.call(uintqh1Irg2, {from: accounts[2]});
		const addressHXd2dMn = await PRDZstakingV2E9kV5JJ.transferOwnership.call(addressNo3rtCN, {from: accounts[2]});
		await PRDZstakingV2E9kV5JJ.onlyOwner.call({from: accounts[0]});
		const uinteYLUjC = await PRDZstakingV2E9kV5JJ.getTotalFeeCollected.call({from: accounts[3]});
		const uintNnTawXG = await PRDZstakingV2E9kV5JJ.getTotalStaked.call({from: accounts[2]});

		assert.equal(uintVP1NI9N, BigInt("0"))
		await expect(PRDZstakingV2E9kV5JJ.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2JkKuClN = await PRDZstakingV2.new({from: accounts[3]});
		const uintupq2Jfv = BigInt("1866")
		const uintBOIiT5e = BigInt("1258")
		await PRDZstakingV2JkKuClN.claimReward.call({from: accounts[1]});
		const uintcDd4D97 = await PRDZstakingV2JkKuClN.stake.call(uintupq2Jfv, {from: "0x0000000000000000000000000000000000000001"});
		const uinthxKkU7 = await PRDZstakingV2JkKuClN.getTotalFeeCollected.call({from: accounts[3]});
		const uinttAUmxha = await PRDZstakingV2JkKuClN.unstake.call(uintBOIiT5e, {from: accounts[5]});
		const uintw5AUAhj = await PRDZstakingV2JkKuClN.getTotalClaimed.call({from: accounts[0]});

		await expect(PRDZstakingV2JkKuClN.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2JkKuClN = await PRDZstakingV2.new({from: accounts[3]});
		const uintcjNsBtZ = BigInt("102")
		const uintry9lOh8 = await PRDZstakingV2JkKuClN.getTotalClaimed.call({from: accounts[3]});
		await PRDZstakingV2JkKuClN.claimReward.call({from: accounts[1]});
		const uinttAUmxha = await PRDZstakingV2JkKuClN.unstake.call(uintcjNsBtZ, {from: accounts[5]});

		assert.equal(uintry9lOh8, BigInt("0"))
		await expect(PRDZstakingV2JkKuClN.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2JkKuClN = await PRDZstakingV2.new({from: accounts[3]});
		const uintCyMTDNv = await PRDZstakingV2JkKuClN.getTotalStaked.call({from: accounts[4]});
		await PRDZstakingV2JkKuClN.claimReward.call({from: accounts[1]});
		const uintyPiQst = await PRDZstakingV2JkKuClN.getNumberOfHolders.call({from: accounts[3]});
		const uintg5kOo8 = await PRDZstakingV2JkKuClN.getTotalClaimed.call({from: accounts[2]});

		assert.equal(uintCyMTDNv, BigInt("0"))
		await expect(PRDZstakingV2JkKuClN.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ssTCLWf = await PRDZstakingV2.new({from: accounts[0]});
		const uintLVIOFPY = BigInt("886")
		const uintsdSKbMC = BigInt("1677")
		const addressZvsqC7I = accounts[0]
		const uintuqxX7SX = BigInt("159")
		const uintOo3q6Mx = await PRDZstakingV2ssTCLWf.updateOffer.call(uintsdSKbMC, uintLVIOFPY, {from: accounts[0]});
		const uintMGI5HfE = await PRDZstakingV2ssTCLWf.getStakingScore.call(addressZvsqC7I, {from: accounts[0]});
		const uintNR6aNgq = await PRDZstakingV2ssTCLWf.stake.call(uintuqxX7SX, {from: accounts[2]});
		await PRDZstakingV2ssTCLWf.claimReward.call({from: accounts[0]});
		const uintBMyAhGa = await PRDZstakingV2ssTCLWf.getTotalFeeCollected.call({from: accounts[1]});

		assert.equal(uintMGI5HfE, BigInt("0"))
		await expect(PRDZstakingV2ssTCLWf.stake.call(uintuqxX7SX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2JkKuClN = await PRDZstakingV2.new({from: accounts[3]});
		const uintpdXu5mL = BigInt("0")
		const uintQI5RrsO = await PRDZstakingV2JkKuClN.stake.call(uintpdXu5mL, {from: accounts[3]});
		await PRDZstakingV2JkKuClN.claimScoreEth.call({from: accounts[4]});
		const uintBy7EbAZ = await PRDZstakingV2JkKuClN.getTotalClaimed.call({from: accounts[2]});

		await expect(PRDZstakingV2JkKuClN.stake.call(uintpdXu5mL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})