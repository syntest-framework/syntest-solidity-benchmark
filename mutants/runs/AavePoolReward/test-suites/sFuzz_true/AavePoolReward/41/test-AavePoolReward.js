const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardGIgqjNQ = await AavePoolReward.new({from: accounts[5]});
		const uint256LePjjQ = await AavePoolRewardGIgqjNQ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iCUaFt = await AavePoolRewardGIgqjNQ.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256LePjjQ, BigInt("0"))
		assert.equal(uint256iCUaFt, BigInt("0"))
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardyutYpnS = await AavePoolReward.new({from: accounts[4]});
		const uintgYF400b = BigInt("485")
		const addressUf5crf7 = accounts[3]
		const uint256bEuoMz = await AavePoolRewardyutYpnS.lastTimeRewardApplicable.call({from: accounts[4]});
		await AavePoolRewardyutYpnS.exit.call({from: accounts[0]});
		const uint256tFpkKu = await AavePoolRewardyutYpnS.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256M3Ad4f = await AavePoolRewardyutYpnS.notifyRewardAmount.call(uintgYF400b, {from: accounts[0]});
		const uint256mpaAspS = await AavePoolRewardyutYpnS.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256IUUSPSD = await AavePoolRewardyutYpnS.earned.call(addressUf5crf7, {from: accounts[1]});

		assert.equal(uint256bEuoMz, BigInt("0"))
		await expect(AavePoolRewardyutYpnS.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardtVCHFNH = await AavePoolReward.new({from: accounts[5]});
		const uintxYJUUY = BigInt("1866")
		const uint256vZrjpNr = await AavePoolRewardtVCHFNH.notifyRewardAmount.call(uintxYJUUY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fDcNNX = await AavePoolRewardtVCHFNH.rewardPerToken.call({from: accounts[4]});

		await expect(AavePoolRewardtVCHFNH.notifyRewardAmount.call(uintxYJUUY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardN6SGppD = await AavePoolReward.new({from: accounts[1]});
		const uintiuD8fKt = BigInt("86")
		const addresssXSqFwb = accounts[5]
		const uint256fLnwgSt = await AavePoolRewardN6SGppD.withdraw.call(uintiuD8fKt, {from: accounts[2]});
		const addressj6dCukz = await AavePoolRewardN6SGppD.dev.call(addresssXSqFwb, {from: accounts[4]});
		await AavePoolRewardN6SGppD.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardN6SGppD.withdraw.call(uintiuD8fKt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolReward3YG1e1 = await AavePoolReward.new({from: accounts[5]});
		const uintiTbJ1cw = BigInt("1687")
		const uintob44MDB = BigInt("1746")
		const uint256y2vtPj = await AavePoolReward3YG1e1.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint2566UmTjY = await AavePoolReward3YG1e1.stake.call(uintiTbJ1cw, {from: accounts[4]});
		await AavePoolReward3YG1e1.exit.call({from: accounts[5]});
		const uint256xEy2nAQ = await AavePoolReward3YG1e1.withdraw.call(uintob44MDB, {from: accounts[0]});

		assert.equal(uint256y2vtPj, BigInt("0"))
		await expect(AavePoolReward3YG1e1.stake.call(uintiTbJ1cw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardJTiC4gy = await AavePoolReward.new({from: accounts[2]});
		const addressaNLzFfY = accounts[2]
		const uintORl2l3k = BigInt("1956")
		const uint256vJlbvUB = await AavePoolRewardJTiC4gy.rewardPerToken.call({from: accounts[4]});
		const addresshavSRvq = await AavePoolRewardJTiC4gy.dev.call(addressaNLzFfY, {from: accounts[0]});
		const uint256enAoTfX = await AavePoolRewardJTiC4gy.stake.call(uintORl2l3k, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256vJlbvUB, BigInt("0"))
		await expect(AavePoolRewardJTiC4gy.dev.call(addressaNLzFfY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolReward4P1P6f = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwBxXyk3 = BigInt("963")
		const uintNUIY14W = BigInt("335")
		const uintIwHCp4J = BigInt("1024")
		const uintUQn1V0 = BigInt("166")
		const uint256GnKErN8 = await AavePoolReward4P1P6f.withdraw.call(uintwBxXyk3, {from: accounts[0]});
		const uint256iKj6rvu = await AavePoolReward4P1P6f.stake.call(uintNUIY14W, {from: accounts[2]});
		await AavePoolReward4P1P6f.exit.call({from: accounts[0]});
		const uint2561oW9tc = await AavePoolReward4P1P6f.notifyRewardAmount.call(uintIwHCp4J, {from: accounts[4]});
		const uint256V78qQf6 = await AavePoolReward4P1P6f.notifyRewardAmount.call(uintUQn1V0, {from: accounts[2]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardJTiC4gy = await AavePoolReward.new({from: accounts[2]});
		const uintxM7DUZr = BigInt("1637")
		const addressbuY9rMl = accounts[2]
		const uintRHj1RHR = BigInt("1558")
		const uinta32rKzD = BigInt("1956")
		const uint256vJlbvUB = await AavePoolRewardJTiC4gy.rewardPerToken.call({from: accounts[4]});
		const uint256UcwzZB1 = await AavePoolRewardJTiC4gy.notifyRewardAmount.call(uintxM7DUZr, {from: accounts[2]});
		const addresshavSRvq = await AavePoolRewardJTiC4gy.dev.call(addressbuY9rMl, {from: accounts[0]});
		const uint256mypT1TZ = await AavePoolRewardJTiC4gy.rewardPerToken.call({from: accounts[3]});
		const uint256ULANvQr = await AavePoolRewardJTiC4gy.stake.call(uintRHj1RHR, {from: accounts[1]});
		const uint256enAoTfX = await AavePoolRewardJTiC4gy.stake.call(uinta32rKzD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256vJlbvUB, BigInt("0"))
		await expect(AavePoolRewardJTiC4gy.dev.call(addressbuY9rMl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardxPf5mGw = await AavePoolReward.new({from: accounts[0]});
		const addressYvnClhn = accounts[4]
		const uintk089sF8 = BigInt("1929")
		const uintGvcmFJl = BigInt("609")
		const addressQe4cQQp = await AavePoolRewardxPf5mGw.updateReward.call(addressYvnClhn, {from: accounts[4]});
		const uint256DwLMIqY = await AavePoolRewardxPf5mGw.withdraw.call(uintk089sF8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256phlFYmU = await AavePoolRewardxPf5mGw.stake.call(uintGvcmFJl, {from: accounts[3]});

		await expect(AavePoolRewardxPf5mGw.updateReward.call(addressYvnClhn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardJTiC4gy = await AavePoolReward.new({from: accounts[2]});
		const addressJ0r8s5V = accounts[3]
		const addressLZIsRYj = accounts[0]
		const uint256W2eTkUZ = await AavePoolRewardJTiC4gy.rewardPerToken.call({from: accounts[1]});
		const uint256iKx7wYr = await AavePoolRewardJTiC4gy.earned.call(addressJ0r8s5V, {from: "0x0000000000000000000000000000000000000001"});
		const addressOTjhqiY = await AavePoolRewardJTiC4gy.dev.call(addressLZIsRYj, {from: accounts[2]});

		assert.equal(uint256W2eTkUZ, BigInt("0"))
		assert.equal(uint256iKx7wYr, BigInt("0"))
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardJTiC4gy = await AavePoolReward.new({from: accounts[2]});
		const uintEUWuaBo = BigInt("0")
		const uint256enAoTfX = await AavePoolRewardJTiC4gy.stake.call(uintEUWuaBo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HHB8CiT = await AavePoolRewardJTiC4gy.rewardPerToken.call({from: accounts[2]});
		await AavePoolRewardJTiC4gy.getReward.call({from: accounts[2]});

		await expect(AavePoolRewardJTiC4gy.stake.call(uintEUWuaBo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})