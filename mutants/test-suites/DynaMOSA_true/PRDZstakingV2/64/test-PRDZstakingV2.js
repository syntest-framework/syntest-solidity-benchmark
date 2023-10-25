const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Ang3xPY = await PRDZstakingV2.new({from: accounts[2]});
		const addressJdqgpKV = accounts[4]
		const uintbS9baKz = await PRDZstakingV2Ang3xPY.getScoreEth.call(addressJdqgpKV, {from: accounts[4]});
//		await PRDZstakingV2Ang3xPY.claimScoreEth.call({from: accounts[3]});
//		await PRDZstakingV2Ang3xPY.deposit.call({from: accounts[2]});

		assert.equal(uintbS9baKz, BigInt("0"))
		await expect(PRDZstakingV2Ang3xPY.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2L45fzzR = await PRDZstakingV2.new({from: accounts[0]});
		const uintFJBV720 = BigInt("1401")
//		await PRDZstakingV2L45fzzR.onlyOwner.call({from: accounts[0]});
//		await PRDZstakingV2L45fzzR.claimReward.call({from: accounts[2]});
//		const uintmC0QYSC = await PRDZstakingV2L45fzzR.stake.call(uintFJBV720, {from: accounts[5]});
//		const uintGPoXz6a = await PRDZstakingV2L45fzzR.getTotalUnStaked.call({from: accounts[3]});

		await expect(PRDZstakingV2L45fzzR.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2oeWwAoX = await PRDZstakingV2.new({from: accounts[4]});
		const addressH1IoBEe = accounts[2]
		const addressjovxtib = accounts[2]
		const addressKFQLHQD = await PRDZstakingV2oeWwAoX.transferOwnership.call(addressH1IoBEe, {from: accounts[4]});
//		await PRDZstakingV2oeWwAoX.deposit.call({from: accounts[1]});
//		const uinta8sKTpN = await PRDZstakingV2oeWwAoX.getScoreEth.call(addressjovxtib, {from: accounts[0]});

		await expect(PRDZstakingV2oeWwAoX.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV29SKMWd = await PRDZstakingV2.new({from: accounts[5]});
		const uintGjs0TtC = BigInt("377")
		const uintjbgraT2 = BigInt("71")
		const uintJCkVvo = BigInt("1066")
		const uintUgYTJOp = BigInt("1266")
//		const uinteCxbZwa = await PRDZstakingV29SKMWd.unstake.call(uintGjs0TtC, {from: accounts[0]});
//		const uintAZcxkGh = await PRDZstakingV29SKMWd.stake.call(uintjbgraT2, {from: accounts[0]});
//		const uintLLo077A = await PRDZstakingV29SKMWd.updateOffer.call(uintUgYTJOp, uintJCkVvo, {from: accounts[5]});

		await expect(PRDZstakingV29SKMWd.unstake.call(uintGjs0TtC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ir43Duw = await PRDZstakingV2.new({from: accounts[2]});
		const uintk4XUyN1 = BigInt("758")
		const uintp6DSLya = BigInt("1455")
		const uintRL5GLmT = BigInt("330")
//		const uintVEmxaT = await PRDZstakingV2ir43Duw.stake.call(uintk4XUyN1, {from: accounts[3]});
//		const uintNnhCbje = await PRDZstakingV2ir43Duw.getTotalStaked.call({from: accounts[0]});
//		await PRDZstakingV2ir43Duw.claimScoreEth.call({from: accounts[1]});
//		const uintAtyaXSX = await PRDZstakingV2ir43Duw.stake.call(uintp6DSLya, {from: accounts[1]});
//		const uintlwl3QzT = await PRDZstakingV2ir43Duw.stake.call(uintRL5GLmT, {from: accounts[3]});

		await expect(PRDZstakingV2ir43Duw.stake.call(uintk4XUyN1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2pukiV6 = await PRDZstakingV2.new({from: accounts[3]});
		const uintDDKZDcC = BigInt("1371")
		const address2k4agH = "0x0000000000000000000000000000000000000001"
//		await PRDZstakingV2pukiV6.claimReward.call({from: accounts[5]});
//		const uintoLIleZ = await PRDZstakingV2pukiV6.updateScoreEth.call(uintDDKZDcC, {from: accounts[0]});
//		const uintrzbmF8N = await PRDZstakingV2pukiV6.getTotalFeeCollected.call({from: accounts[1]});
//		const uintsk4v19J = await PRDZstakingV2pukiV6.getPendingReward.call(address2k4agH, {from: accounts[0]});
//		const uintiFb3cKw = await PRDZstakingV2pukiV6.getTotalUnStaked.call({from: accounts[2]});
//		const uintuyWZQ4G = await PRDZstakingV2pukiV6.getNumberOfHolders.call({from: accounts[4]});

		await expect(PRDZstakingV2pukiV6.claimReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2fYsRbym = await PRDZstakingV2.new({from: accounts[0]});
		const uintiyEG3sO = BigInt("1136")
		const uintpJQCc74 = BigInt("1545")
		const addresspasNreU = "0x0000000000000000000000000000000000000001"
//		await PRDZstakingV2fYsRbym.claimReward.call({from: accounts[4]});
//		const uintKZlM2E4 = await PRDZstakingV2fYsRbym.getTotalStaked.call({from: accounts[3]});
//		const uintVYKJUU = await PRDZstakingV2fYsRbym.stake.call(uintiyEG3sO, {from: accounts[1]});
//		const uintOAD1F4H = await PRDZstakingV2fYsRbym.unstake.call(uintpJQCc74, {from: accounts[4]});
//		const uintj5YsBAH = await PRDZstakingV2fYsRbym.getNumberOfHolders.call({from: accounts[1]});
//		const uintMUUgiWa = await PRDZstakingV2fYsRbym.getScoreEth.call(addresspasNreU, {from: accounts[3]});

		await expect(PRDZstakingV2fYsRbym.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2QMpGxpc = await PRDZstakingV2.new({from: accounts[2]});
		const addressM5yVrRf = accounts[3]
		const addressbIGWInM = accounts[1]
		const uintMpVngsT = await PRDZstakingV2QMpGxpc.getTotalUnStaked.call({from: accounts[2]});
		const uintiJ4uw51 = await PRDZstakingV2QMpGxpc.getTotalFeeCollected.call({from: accounts[2]});
		const uintZZLl3jw = await PRDZstakingV2QMpGxpc.getScoreEth.call(addressM5yVrRf, {from: accounts[2]});
//		const addressyBgAkmA = await PRDZstakingV2QMpGxpc.transferOwnership.call(addressbIGWInM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintMpVngsT, BigInt("0"))
		assert.equal(uintZZLl3jw, BigInt("0"))
		assert.equal(uintiJ4uw51, BigInt("0"))
		await expect(PRDZstakingV2QMpGxpc.transferOwnership.call(addressbIGWInM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2nDoEcYE = await PRDZstakingV2.new({from: accounts[0]});
		const uintrPl4jRl = BigInt("411")
		const uintrtVHU7z = BigInt("968")
		const uintiUmR2vX = await PRDZstakingV2nDoEcYE.getTotalFeeCollected.call({from: accounts[1]});
		const uintzJtyGDh = await PRDZstakingV2nDoEcYE.getNumberOfHolders.call({from: accounts[2]});
//		const uintzuebpCW = await PRDZstakingV2nDoEcYE.unstake.call(uintrPl4jRl, {from: accounts[5]});
//		const uintgDWCovP = await PRDZstakingV2nDoEcYE.unstake.call(uintrtVHU7z, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintiUmR2vX, BigInt("0"))
		assert.equal(uintzJtyGDh, BigInt("0"))
		await expect(PRDZstakingV2nDoEcYE.unstake.call(uintrPl4jRl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2cx5b4QS = await PRDZstakingV2.new({from: accounts[4]});
		const addressAPppPL = accounts[2]
//		await PRDZstakingV2cx5b4QS.claimScoreEth.call({from: accounts[0]});
//		const uinthAdQSvE = await PRDZstakingV2cx5b4QS.getTotalClaimed.call({from: accounts[3]});
//		await PRDZstakingV2cx5b4QS.deposit.call({from: accounts[1]});
//		const uintpH3AH9I = await PRDZstakingV2cx5b4QS.getStakingScore.call(addressAPppPL, {from: accounts[2]});

		await expect(PRDZstakingV2cx5b4QS.claimScoreEth.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2kPr5EzT = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssrhGBS = "0x0000000000000000000000000000000000000001"
		const addressGo6Fm6O = accounts[2]
		const uintN1xYM5x = BigInt("109")
		const uintTMCtjP7 = BigInt("1419")
		const uint7fvj98 = await PRDZstakingV2kPr5EzT.getPendingReward.call(addresssrhGBS, {from: accounts[3]});
		const uintYWzFr73 = await PRDZstakingV2kPr5EzT.getStakingScore.call(addressGo6Fm6O, {from: accounts[5]});
		const uintkCsoKf = await PRDZstakingV2kPr5EzT.getTotalFeeCollected.call({from: accounts[0]});
		const uintOaBfHiw = await PRDZstakingV2kPr5EzT.updateScoreEth.call(uintN1xYM5x, {from: accounts[4]});
		const uintKqbqeKN = await PRDZstakingV2kPr5EzT.stake.call(uintTMCtjP7, {from: accounts[3]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Ang3xPY = await PRDZstakingV2.new({from: accounts[2]});
		const addressVn3w7uA = accounts[5]
		const uintS3rWZz = BigInt("1007")
		const uintB3PNR7 = BigInt("774")
		const uint2btDp2 = BigInt("78")
		const uintknbMGo = BigInt("270")
		const uintbS9baKz = await PRDZstakingV2Ang3xPY.getScoreEth.call(addressVn3w7uA, {from: accounts[4]});
		const uintOnz7aN0 = await PRDZstakingV2Ang3xPY.updateScoreEth.call(uintS3rWZz, {from: accounts[2]});
//		await PRDZstakingV2Ang3xPY.claimReward.call({from: accounts[4]});
//		await PRDZstakingV2Ang3xPY.claimScoreEth.call({from: accounts[0]});
//		const uintPsMTQJ8 = await PRDZstakingV2Ang3xPY.stake.call(uintB3PNR7, {from: accounts[4]});
//		const uintmvpKk3I = await PRDZstakingV2Ang3xPY.stake.call(uint2btDp2, {from: accounts[2]});
//		await PRDZstakingV2Ang3xPY.claimScoreEth.call({from: accounts[3]});
//		await PRDZstakingV2Ang3xPY.deposit.call({from: accounts[2]});
//		const uintM4ebuH = await PRDZstakingV2Ang3xPY.updateScoreEth.call(uintknbMGo, {from: accounts[2]});

		assert.equal(uintbS9baKz, BigInt("0"))
		await expect(PRDZstakingV2Ang3xPY.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Ang3xPY = await PRDZstakingV2.new({from: accounts[2]});
		const uintBMk0Mh2 = BigInt("0")
		const addressmkoDznU = "0x0000000000000000000000000000000000000001"
		const uintYUDK8fD = BigInt("270")
//		await PRDZstakingV2Ang3xPY.deposit.call({from: accounts[1]});
//		await PRDZstakingV2Ang3xPY.claimReward.call({from: accounts[4]});
//		const uintmvpKk3I = await PRDZstakingV2Ang3xPY.stake.call(uintBMk0Mh2, {from: accounts[2]});
//		const uintxBfnEmc = await PRDZstakingV2Ang3xPY.getPendingReward.call(addressmkoDznU, {from: accounts[2]});
//		await PRDZstakingV2Ang3xPY.claimScoreEth.call({from: accounts[3]});
//		await PRDZstakingV2Ang3xPY.deposit.call({from: accounts[2]});
//		const uintM4ebuH = await PRDZstakingV2Ang3xPY.updateScoreEth.call(uintYUDK8fD, {from: accounts[2]});

		await expect(PRDZstakingV2Ang3xPY.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ntzUqrY = await PRDZstakingV2.new({from: accounts[4]});
		const uintaMY8WTP = BigInt("1026")
		const uintVjsl6zY = BigInt("536")
		const uintTm4j31l = await PRDZstakingV2ntzUqrY.updateOffer.call(uintVjsl6zY, uintaMY8WTP, {from: accounts[4]});
//		await PRDZstakingV2ntzUqrY.claimReward.call({from: accounts[4]});

		await expect(PRDZstakingV2ntzUqrY.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})