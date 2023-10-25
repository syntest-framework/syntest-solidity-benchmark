const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2SoHC35e = await PRDZstakingV2.new({from: accounts[4]});
		const uintC19rd7o = BigInt("207")
		const addressD5ZwzWe = accounts[0]
		const addressWjRu7mW = accounts[1]
		await PRDZstakingV2SoHC35e.deposit.call({from: accounts[2]});
		const uintbgCQnoF = await PRDZstakingV2SoHC35e.unstake.call(uintC19rd7o, {from: accounts[0]});
		const uintlYksruA = await PRDZstakingV2SoHC35e.getPendingReward.call(addressD5ZwzWe, {from: accounts[2]});
		const addressUvEVbus = await PRDZstakingV2SoHC35e.transferOwnership.call(addressWjRu7mW, {from: accounts[0]});

		await expect(PRDZstakingV2SoHC35e.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2q68STzB = await PRDZstakingV2.new({from: accounts[4]});
		const uintquCzB7c = BigInt("146")
		const addressRqFf4Ls = accounts[5]
		const uintu7soK2 = BigInt("1104")
		const addresskpQXSt = accounts[5]
		const uintzKXiJNp = await PRDZstakingV2q68STzB.updateScoreEth.call(uintquCzB7c, {from: accounts[4]});
		const uintCD1KO54 = await PRDZstakingV2q68STzB.getScoreEth.call(addressRqFf4Ls, {from: accounts[2]});
		const uintooyI8zS = await PRDZstakingV2q68STzB.unstake.call(uintu7soK2, {from: accounts[2]});
		const uintDIgOg1D = await PRDZstakingV2q68STzB.getPendingReward.call(addresskpQXSt, {from: accounts[3]});
		const uintdJ83UhA = await PRDZstakingV2q68STzB.getTotalUnStaked.call({from: accounts[3]});

		assert.equal(uintCD1KO54, BigInt("0"))
		await expect(PRDZstakingV2q68STzB.unstake.call(uintu7soK2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2eBeFNRK = await PRDZstakingV2.new({from: accounts[3]});
		const uintghoJtY0 = BigInt("987")
		const addressF7Qv5sF = accounts[1]
		const uintecQP9nq = await PRDZstakingV2eBeFNRK.updateScoreEth.call(uintghoJtY0, {from: accounts[0]});
		const uintNBbmZ7b = await PRDZstakingV2eBeFNRK.getScoreEth.call(addressF7Qv5sF, {from: accounts[4]});
		await PRDZstakingV2eBeFNRK.claimScoreEth.call({from: accounts[2]});

		await expect(PRDZstakingV2eBeFNRK.updateScoreEth.call(uintghoJtY0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2XU082rY = await PRDZstakingV2.new({from: accounts[3]});
		const addressDRzyTH8 = accounts[1]
		const uintSKlIRkf = await PRDZstakingV2XU082rY.getTotalFeeCollected.call({from: accounts[4]});
		const uintRfHDTfn = await PRDZstakingV2XU082rY.getPendingReward.call(addressDRzyTH8, {from: accounts[3]});
		const uint78K6lE = await PRDZstakingV2XU082rY.getTotalClaimed.call({from: accounts[1]});

		assert.equal(uint78K6lE, BigInt("0"))
		assert.equal(uintRfHDTfn, BigInt("0"))
		assert.equal(uintSKlIRkf, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2d1CJRnm = await PRDZstakingV2.new({from: accounts[1]});
		const addressGd9BBw = accounts[3]
		const addressxg6aqpW = accounts[4]
		const uintHXFaQT8 = await PRDZstakingV2d1CJRnm.getTotalFeeCollected.call({from: accounts[3]});
		const uintpHVw7Rb = await PRDZstakingV2d1CJRnm.getScoreEth.call(addressGd9BBw, {from: accounts[4]});
		const uintbHSKUEC = await PRDZstakingV2d1CJRnm.getTotalStaked.call({from: accounts[4]});
		await PRDZstakingV2d1CJRnm.claimScoreEth.call({from: accounts[4]});
		const addressicuUt2 = await PRDZstakingV2d1CJRnm.transferOwnership.call(addressxg6aqpW, {from: accounts[3]});

		assert.equal(uintHXFaQT8, BigInt("0"))
		assert.equal(uintbHSKUEC, BigInt("0"))
		assert.equal(uintpHVw7Rb, BigInt("0"))
		await expect(PRDZstakingV2d1CJRnm.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2oaXCaRo = await PRDZstakingV2.new({from: accounts[3]});
		const uintyTiuN0Y = await PRDZstakingV2oaXCaRo.getTotalUnStaked.call({from: accounts[2]});
		await PRDZstakingV2oaXCaRo.deposit.call({from: accounts[2]});
		const uintktJkAhn = await PRDZstakingV2oaXCaRo.getTotalUnStaked.call({from: accounts[3]});
		await PRDZstakingV2oaXCaRo.onlyOwner.call({from: accounts[4]});

		assert.equal(uintyTiuN0Y, BigInt("0"))
		await expect(PRDZstakingV2oaXCaRo.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2MdNkkeG = await PRDZstakingV2.new({from: accounts[4]});
		const uintozBlJEU = BigInt("671")
		const uintwd3HY18 = await PRDZstakingV2MdNkkeG.stake.call(uintozBlJEU, {from: accounts[2]});
		const uintN1iw4U = await PRDZstakingV2MdNkkeG.getNumberOfHolders.call({from: accounts[2]});

		await expect(PRDZstakingV2MdNkkeG.stake.call(uintozBlJEU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2o9u9Oc2 = await PRDZstakingV2.new({from: accounts[2]});
		const uintr7PrdO = await PRDZstakingV2o9u9Oc2.getNumberOfHolders.call({from: accounts[0]});
		await PRDZstakingV2o9u9Oc2.claimReward.call({from: accounts[2]});
		const uintwC6HbAM = await PRDZstakingV2o9u9Oc2.getTotalFeeCollected.call({from: accounts[4]});

		assert.equal(uintr7PrdO, BigInt("0"))
		await expect(PRDZstakingV2o9u9Oc2.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2d1CJRnm = await PRDZstakingV2.new({from: accounts[1]});
		const addresshrb6WSO = accounts[3]
		const uintylqu4G = BigInt("294")
		const uintSSYSSQR = BigInt("213")
		const addresspVjWxuw = accounts[4]
		const uintHXFaQT8 = await PRDZstakingV2d1CJRnm.getTotalFeeCollected.call({from: accounts[3]});
		const uintpHVw7Rb = await PRDZstakingV2d1CJRnm.getScoreEth.call(addresshrb6WSO, {from: accounts[4]});
		const uintbHSKUEC = await PRDZstakingV2d1CJRnm.getTotalStaked.call({from: accounts[4]});
		const uintt67Q4AK = await PRDZstakingV2d1CJRnm.updateOffer.call(uintSSYSSQR, uintylqu4G, {from: accounts[1]});
		await PRDZstakingV2d1CJRnm.claimScoreEth.call({from: accounts[4]});
		await PRDZstakingV2d1CJRnm.claimReward.call({from: accounts[2]});
		const addressicuUt2 = await PRDZstakingV2d1CJRnm.transferOwnership.call(addresspVjWxuw, {from: accounts[3]});

		assert.equal(uintHXFaQT8, BigInt("0"))
		assert.equal(uintbHSKUEC, BigInt("0"))
		assert.equal(uintpHVw7Rb, BigInt("0"))
		await expect(PRDZstakingV2d1CJRnm.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2XU082rY = await PRDZstakingV2.new({from: accounts[3]});
		const addressq9WZ97m = accounts[3]
		const addressjLBScbs = accounts[1]
		const uintLHTTqTn = BigInt("382")
		const uintln86vHG = await PRDZstakingV2XU082rY.getStakingScore.call(addressq9WZ97m, {from: accounts[3]});
		const uintdOSIOJn = await PRDZstakingV2XU082rY.getNumberOfHolders.call({from: accounts[1]});
		const uintRfHDTfn = await PRDZstakingV2XU082rY.getPendingReward.call(addressjLBScbs, {from: accounts[3]});
		const uintLX7vJAD = await PRDZstakingV2XU082rY.getTotalFeeCollected.call({from: accounts[2]});
		const uintuRgnX6k = await PRDZstakingV2XU082rY.unstake.call(uintLHTTqTn, {from: accounts[2]});

		assert.equal(uintLX7vJAD, BigInt("0"))
		assert.equal(uintRfHDTfn, BigInt("0"))
		assert.equal(uintdOSIOJn, BigInt("0"))
		assert.equal(uintln86vHG, BigInt("0"))
		await expect(PRDZstakingV2XU082rY.unstake.call(uintLHTTqTn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Piofsje = await PRDZstakingV2.new({from: accounts[3]});
		const addressRtIcts = accounts[5]
		const uintpCPE7ah = BigInt("1204")
		const uintOgga7FR = BigInt("1615")
		const addresskVBMSn3 = await PRDZstakingV2Piofsje.transferOwnership.call(addressRtIcts, {from: accounts[3]});
		const uintixeqGDN = await PRDZstakingV2Piofsje.updateOffer.call(uintOgga7FR, uintpCPE7ah, {from: accounts[3]});
		const uintNVMfTnj = await PRDZstakingV2Piofsje.getTotalFeeCollected.call({from: accounts[3]});
		const uinto47Bady = await PRDZstakingV2Piofsje.getTotalStaked.call({from: accounts[3]});
		const uintrCFoIQU = await PRDZstakingV2Piofsje.getTotalClaimed.call({from: accounts[0]});

		assert.equal(uintNVMfTnj, BigInt("0"))
		assert.equal(uinto47Bady, BigInt("0"))
		assert.equal(uintrCFoIQU, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2VOuNJay = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskLomMU = accounts[3]
		const addressoKJ5uWH = accounts[4]
		await PRDZstakingV2VOuNJay.deposit.call({from: accounts[4]});
		const uintlf7WdQz = await PRDZstakingV2VOuNJay.getPendingReward.call(addresskLomMU, {from: accounts[5]});
		const uintcJVTDP5 = await PRDZstakingV2VOuNJay.getTotalFeeCollected.call({from: accounts[4]});
		const uintFR0fYKI = await PRDZstakingV2VOuNJay.getStakingScore.call(addressoKJ5uWH, {from: accounts[5]});
		const uintIYA3ewv = await PRDZstakingV2VOuNJay.getNumberOfHolders.call({from: accounts[0]});
		const uintTFDW3hd = await PRDZstakingV2VOuNJay.getTotalFeeCollected.call({from: "0x0000000000000000000000000000000000000001"});
	});
})