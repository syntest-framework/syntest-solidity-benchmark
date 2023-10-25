const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressKSEGg7c = accounts[3]
		const addressKvhuPgR = accounts[3]
		const uintOAQDFFL = BigInt("406")
		const uintEUyk2a4 = BigInt("831")
		const MisesLegacyPoole034TcS = await MisesLegacyPool.new(addressKSEGg7c, addressKvhuPgR, uintOAQDFFL, uintEUyk2a4, {from: accounts[4]});
		const uintGFqj7vi = BigInt("1832")
		const uinthHvDxMC = BigInt("326")
		await MisesLegacyPoole034TcS.getReward.call({from: accounts[1]});
		const uint256bUeFn0 = await MisesLegacyPoole034TcS.notifyRewardAmount.call(uintGFqj7vi, {from: accounts[2]});
		const uint256Syhy6ad = await MisesLegacyPoole034TcS.withdraw.call(uinthHvDxMC, {from: accounts[3]});

		await expect(MisesLegacyPoole034TcS.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressVngcmc6 = accounts[1]
		const addressc7kOCE3 = accounts[5]
		const uintrRvdqyF = BigInt("573")
		const uintggHBoLm = BigInt("750")
		const MisesLegacyPool55k6vW = await MisesLegacyPool.new(addressVngcmc6, addressc7kOCE3, uintrRvdqyF, uintggHBoLm, {from: accounts[2]});
		const uintXqQDneh = BigInt("1851")
		const addressKREpGQ = accounts[3]
		await MisesLegacyPool55k6vW.checkStart.call({from: accounts[3]});
		await MisesLegacyPool55k6vW.getReward.call({from: accounts[2]});
		const uint256IiuGIFM = await MisesLegacyPool55k6vW.withdraw.call(uintXqQDneh, {from: accounts[4]});
		const addressYbEdUlL = await MisesLegacyPool55k6vW.updateReward.call(addressKREpGQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MisesLegacyPool55k6vW.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresssxIyPVj = accounts[4]
		const addressjoSbe7M = "0x0000000000000000000000000000000000000001"
		const uintqPyYvzZ = BigInt("319")
		const uintSvJISrD = BigInt("958")
		const MisesLegacyPoolXnMs3I7 = await MisesLegacyPool.new(addresssxIyPVj, addressjoSbe7M, uintqPyYvzZ, uintSvJISrD, {from: accounts[5]});
		const uinthj7EEiI = BigInt("1151")
		const uintajwKcZP = BigInt("324")
		const uint256sHhMahE = await MisesLegacyPoolXnMs3I7.stake.call(uinthj7EEiI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GdYI9oE = await MisesLegacyPoolXnMs3I7.notifyRewardAmount.call(uintajwKcZP, {from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPoolXnMs3I7.checkStart.call({from: accounts[4]});
		await MisesLegacyPoolXnMs3I7.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPoolXnMs3I7.exit.call({from: accounts[0]});

		await expect(MisesLegacyPoolXnMs3I7.stake.call(uinthj7EEiI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const address9q9FEv = accounts[3]
		const addressuoCL7Wj = accounts[3]
		const uinttiXUBB = BigInt("509")
		const uintRBmTNvd = BigInt("1130")
		const MisesLegacyPoolJsSyOaV = await MisesLegacyPool.new(address9q9FEv, addressuoCL7Wj, uinttiXUBB, uintRBmTNvd, {from: accounts[0]});
		const uintEVa4cJg = BigInt("184")
		const addresstVkmKu8 = accounts[1]
		const addressFFQDNXx = accounts[2]
		const uintBoOqTyE = BigInt("533")
		const addressosH3Byh = accounts[3]
		const uint256Wreyzn4 = await MisesLegacyPoolJsSyOaV.withdraw.call(uintEVa4cJg, {from: accounts[1]});
		const uint256cIRkn8 = await MisesLegacyPoolJsSyOaV.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256eFqvRFC = await MisesLegacyPoolJsSyOaV.earned.call(addresstVkmKu8, {from: accounts[4]});
		const uint256p11QW7v = await MisesLegacyPoolJsSyOaV.earned.call(addressFFQDNXx, {from: accounts[0]});
		const uint256GRb2eC = await MisesLegacyPoolJsSyOaV.notifyRewardAmount.call(uintBoOqTyE, {from: accounts[3]});
		const uint256KMCBlHV = await MisesLegacyPoolJsSyOaV.earned.call(addressosH3Byh, {from: accounts[5]});

		await expect(MisesLegacyPoolJsSyOaV.withdraw.call(uintEVa4cJg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressjN3tBOk = accounts[2]
		const addressGan7Ak8 = accounts[4]
		const uintv9RkhvV = BigInt("508")
		const uintNC37BF6 = BigInt("1269")
		const MisesLegacyPoolJjg6bcx = await MisesLegacyPool.new(addressjN3tBOk, addressGan7Ak8, uintv9RkhvV, uintNC37BF6, {from: accounts[1]});
		const uint256ocf9yC0 = await MisesLegacyPoolJjg6bcx.rewardPerToken.call({from: accounts[0]});
		await MisesLegacyPoolJjg6bcx.exit.call({from: accounts[0]});

		assert.equal(uint256ocf9yC0, BigInt("0"))
		await expect(MisesLegacyPoolJjg6bcx.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressCWFnNvP = accounts[0]
		const addressoqdt2rZ = accounts[4]
		const uintZ6AY5Dn = BigInt("1281")
		const uintWRX3be = BigInt("907")
		const MisesLegacyPoolcT7oLsA = await MisesLegacyPool.new(addressCWFnNvP, addressoqdt2rZ, uintZ6AY5Dn, uintWRX3be, {from: "0x0000000000000000000000000000000000000001"});
		const uint8v1rWr = BigInt("410")
		const addresslUev0k0 = accounts[5]
		const uintuxAf0nV = BigInt("552")
		const uint256HJgv0vY = await MisesLegacyPoolcT7oLsA.stake.call(uint8v1rWr, {from: accounts[4]});
		await MisesLegacyPoolcT7oLsA.getReward.call({from: accounts[0]});
		const addressg9UgqBp = await MisesLegacyPoolcT7oLsA.updateReward.call(addresslUev0k0, {from: accounts[3]});
		const uint256jf7Q8lC = await MisesLegacyPoolcT7oLsA.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPoolcT7oLsA.exit.call({from: accounts[3]});
		const uint256CIjWK8T = await MisesLegacyPoolcT7oLsA.withdraw.call(uintuxAf0nV, {from: accounts[3]});
	});
})