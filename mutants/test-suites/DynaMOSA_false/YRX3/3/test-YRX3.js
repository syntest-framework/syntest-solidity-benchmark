const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3SkpqBTe = await YRX3.new({from: accounts[3]});
		const uint4WOXiS = BigInt("728")
		const addressO5wR9Ar = accounts[1]
		const addressftmuMEJ = accounts[2]
//		await YRX3SkpqBTe.checkNextEpoch.call({from: accounts[4]});
//		const uint256fNcClft = await YRX3SkpqBTe.stake.call(uint4WOXiS, {from: accounts[0]});
//		const addressrSuKRE6 = await YRX3SkpqBTe.toPayable.call(addressO5wR9Ar, {from: accounts[0]});
//		const addressqQRBadw = await YRX3SkpqBTe.toPayable.call(addressftmuMEJ, {from: accounts[2]});

		await expect(YRX3SkpqBTe.checkNextEpoch.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3TVsrCG1 = await YRX3.new({from: accounts[3]});
		const addressSZnBYVT = accounts[2]
		const uintF6OAiU = BigInt("1935")
		const uintad2a6qR = BigInt("578")
		const uint256WQZYCTL = await YRX3TVsrCG1.earned.call(addressSZnBYVT, {from: accounts[0]});
//		const uint2565m5ocD = await YRX3TVsrCG1.withdraw.call(uintF6OAiU, {from: "0x0000000000000000000000000000000000000001"});
//		const bool6FHhSm = await YRX3TVsrCG1.isOwner.call({from: accounts[3]});
//		const uint256KEZC3cH = await YRX3TVsrCG1.stake.call(uintad2a6qR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256WQZYCTL, BigInt("0"))
		await expect(YRX3TVsrCG1.withdraw.call(uintF6OAiU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3f1yC9qN = await YRX3.new({from: accounts[1]});
		const addressZTxNAqD = accounts[0]
		const addressn4UwtqV = accounts[4]
		const addressJ9AEhgW = accounts[1]
		const boolvienMAr = await YRX3f1yC9qN.isOwner.call({from: accounts[0]});
		const uint256kFWp1mE = await YRX3f1yC9qN.earned.call(addressZTxNAqD, {from: accounts[3]});
//		const addressdmrAp7Z = await YRX3f1yC9qN.toPayable.call(addressn4UwtqV, {from: accounts[2]});
//		const addressZLSWHF = await YRX3f1yC9qN.emergencyDrain.call(addressJ9AEhgW, {from: accounts[2]});
//		await YRX3f1yC9qN.notifyRewardAmount.call({from: accounts[4]});
//		await YRX3f1yC9qN.onlyOwner.call({from: accounts[4]});

		assert.equal(boolvienMAr, false)
		assert.equal(uint256kFWp1mE, BigInt("0"))
		await expect(YRX3f1yC9qN.toPayable.call(addressn4UwtqV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3t6l9rxR = await YRX3.new({from: accounts[3]});
		const uintWcWWD69 = BigInt("173")
		const uintpPPuIHR = BigInt("1964")
		const addressZnsPNC = accounts[4]
//		await YRX3t6l9rxR.notifyRewardAmount.call({from: accounts[1]});
//		const uint256qZK8yeg = await YRX3t6l9rxR.stake.call(uintWcWWD69, {from: accounts[2]});
//		const uint256UzXoqbh = await YRX3t6l9rxR.rewardPerToken.call({from: accounts[3]});
//		const uint256fDbnNHc = await YRX3t6l9rxR.stake.call(uintpPPuIHR, {from: accounts[1]});
//		const addressibsY4O = await YRX3t6l9rxR.toPayable.call(addressZnsPNC, {from: accounts[0]});

		await expect(YRX3t6l9rxR.notifyRewardAmount.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3pn5QJvn = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uint1w0WaP = BigInt("956")
		const addressypFFijX = "0x0000000000000000000000000000000000000001"
		const addressn4Bg1ME = accounts[4]
		await YRX3pn5QJvn.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ok3N84E = await YRX3pn5QJvn.stake.call(uint1w0WaP, {from: accounts[1]});
		const addressBsNfOWR = await YRX3pn5QJvn.setRewardDistribution.call(addressypFFijX, {from: accounts[2]});
		const addressgqpC7ch = await YRX3pn5QJvn.transferOwnership.call(addressn4Bg1ME, {from: accounts[1]});
	});

	it('test for YRX3', async () => {
		const YRX3f1yC9qN = await YRX3.new({from: accounts[1]});
		const addressO0xsxke = accounts[4]
		const addressWul4FlG = accounts[1]
//		await YRX3f1yC9qN.renounceOwnership.call({from: accounts[2]});
//		const boolvienMAr = await YRX3f1yC9qN.isOwner.call({from: accounts[0]});
//		const addressdmrAp7Z = await YRX3f1yC9qN.toPayable.call(addressO0xsxke, {from: accounts[2]});
//		const addressZLSWHF = await YRX3f1yC9qN.emergencyDrain.call(addressWul4FlG, {from: accounts[2]});
//		await YRX3f1yC9qN.notifyRewardAmount.call({from: accounts[4]});
//		await YRX3f1yC9qN.onlyOwner.call({from: accounts[4]});

		await expect(YRX3f1yC9qN.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3YHyXDSB = await YRX3.new({from: accounts[1]});
		const uintVqrVwmv = BigInt("544")
//		const uint256jk0aWWJ = await YRX3YHyXDSB.stake.call(uintVqrVwmv, {from: "0x0000000000000000000000000000000000000001"});
//		const addressihPxu3A = await YRX3YHyXDSB.owner.call({from: accounts[0]});
//		await YRX3YHyXDSB.checkNextEpoch.call({from: accounts[4]});

		await expect(YRX3YHyXDSB.stake.call(uintVqrVwmv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3WNjICJe = await YRX3.new({from: accounts[0]});
		const addresspo08mh5 = accounts[1]
		const uintdFwKKeJ = BigInt("1437")
//		await YRX3WNjICJe.exit.call({from: accounts[2]});
//		const addresskeAOMrS = await YRX3WNjICJe.updateReward.call(addresspo08mh5, {from: accounts[0]});
//		const uint256e1qRXA8 = await YRX3WNjICJe.withdraw.call(uintdFwKKeJ, {from: accounts[4]});
//		await YRX3WNjICJe.onlyOwner.call({from: accounts[3]});

		await expect(YRX3WNjICJe.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3YHyXDSB = await YRX3.new({from: accounts[1]});
		const addressihPxu3A = await YRX3YHyXDSB.owner.call({from: accounts[0]});
//		await YRX3YHyXDSB.checkNextEpoch.call({from: accounts[4]});

		assert.equal(addressihPxu3A, 0xA689e3A737d4dcBf39A83Eb6503b38DE6804c8Cb)
		await expect(YRX3YHyXDSB.checkNextEpoch.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Ujqj0DK = await YRX3.new({from: accounts[3]});
		const addressqApwOUV = accounts[0]
		const uintpEBMSQV = BigInt("74")
		const uintVPA3YZk = BigInt("272")
		const addressrv3gp4c = accounts[3]
		const uintTPl3Axe = BigInt("1809")
		const uint256iYhyKvk = await YRX3Ujqj0DK.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256MQGU9RX = await YRX3Ujqj0DK.earned.call(addressqApwOUV, {from: accounts[1]});
//		await YRX3Ujqj0DK.getReward.call({from: accounts[3]});
//		const uint256qJK4yby = await YRX3Ujqj0DK.stake.call(uintpEBMSQV, {from: accounts[3]});
//		const uint256y3Bf61d = await YRX3Ujqj0DK.stake.call(uintVPA3YZk, {from: accounts[5]});
//		const uint256hh5XefK = await YRX3Ujqj0DK.balanceOf.call(addressrv3gp4c, {from: accounts[2]});
//		await YRX3Ujqj0DK.checkNextEpoch.call({from: accounts[3]});
//		const uint256P0eXnsI = await YRX3Ujqj0DK.stake.call(uintTPl3Axe, {from: accounts[0]});
//		await YRX3Ujqj0DK.checkStart.call({from: accounts[1]});

		assert.equal(uint256MQGU9RX, BigInt("0"))
		assert.equal(uint256iYhyKvk, BigInt("0"))
		await expect(YRX3Ujqj0DK.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3OfdroKR = await YRX3.new({from: accounts[2]});
		const uintWktU3Xp = BigInt("203")
		const addressbf5DShT = accounts[2]
//		await YRX3OfdroKR.renounceOwnership.call({from: accounts[2]});
//		const uint256UNsQ7RR = await YRX3OfdroKR.stake.call(uintWktU3Xp, {from: accounts[4]});
//		const addressQ2J1rcz = await YRX3OfdroKR.toPayable.call(addressbf5DShT, {from: accounts[1]});
//		const uint256SIdVgDx = await YRX3OfdroKR.rewardPerToken.call({from: accounts[0]});
//		const addressDAlWcD = await YRX3OfdroKR.owner.call({from: accounts[2]});

		await expect(YRX3OfdroKR.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3E4T9Zj6 = await YRX3.new({from: accounts[1]});
		const addressOMKXF6J = accounts[3]
		const uintmSP7qrZ = BigInt("992")
		const addressvh5vMzx = await YRX3E4T9Zj6.setRewardDistribution.call(addressOMKXF6J, {from: accounts[1]});
//		const uint256rjCIJdk = await YRX3E4T9Zj6.withdraw.call(uintmSP7qrZ, {from: accounts[4]});

		await expect(YRX3E4T9Zj6.withdraw.call(uintmSP7qrZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Ujqj0DK = await YRX3.new({from: accounts[3]});
		const addressJFv6L9V = accounts[0]
		const addresskbfK0c = "0x0000000000000000000000000000000000000001"
		const uintwCkzS9a = BigInt("74")
		const addressyAw7pWb = accounts[3]
		const address7KLIdl = accounts[4]
		const uintwRQ1axn = BigInt("1809")
		const uint256iYhyKvk = await YRX3Ujqj0DK.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256MQGU9RX = await YRX3Ujqj0DK.earned.call(addressJFv6L9V, {from: accounts[1]});
//		await YRX3Ujqj0DK.getReward.call({from: accounts[3]});
//		const addressLsx0wXQ = await YRX3Ujqj0DK.transferOwnership.call(addresskbfK0c, {from: accounts[3]});
//		const uint256P3BDAZR = await YRX3Ujqj0DK.totalSupply.call({from: accounts[1]});
//		const uint256qJK4yby = await YRX3Ujqj0DK.stake.call(uintwCkzS9a, {from: accounts[3]});
//		const uint256hh5XefK = await YRX3Ujqj0DK.balanceOf.call(addressyAw7pWb, {from: accounts[2]});
//		await YRX3Ujqj0DK.checkNextEpoch.call({from: accounts[3]});
//		const addressCLPRNx5 = await YRX3Ujqj0DK.emergencyDrain.call(address7KLIdl, {from: accounts[2]});
//		const uint256P0eXnsI = await YRX3Ujqj0DK.stake.call(uintwRQ1axn, {from: accounts[0]});
//		await YRX3Ujqj0DK.checkStart.call({from: accounts[1]});

		assert.equal(uint256MQGU9RX, BigInt("0"))
		assert.equal(uint256iYhyKvk, BigInt("0"))
		await expect(YRX3Ujqj0DK.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})