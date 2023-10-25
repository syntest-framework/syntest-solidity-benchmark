const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressKdSttc = accounts[2]
		const addressNQjZB8p = accounts[5]
		const StakingDextokenBXjUvQk = await StakingDextoken.new(addressKdSttc, addressNQjZB8p, {from: accounts[0]});
		const addressutmnbp8 = accounts[0]
		const addressmsXa7KS = accounts[5]
		const addressOgmNTzj = accounts[2]
		const addresssh4eRJV = accounts[3]
		const addressQLH8ZKR = await StakingDextokenBXjUvQk.setBeneficial.call(addressutmnbp8, {from: accounts[2]});
		const uintmelZF1n = await StakingDextokenBXjUvQk.balanceOf.call(addressmsXa7KS, {from: accounts[0]});
		await StakingDextokenBXjUvQk.notifyRewards.call({from: accounts[4]});
		const boolqz0wyVb = await StakingDextokenBXjUvQk.freezeAccount.call(addressOgmNTzj, {from: accounts[0]});
		await StakingDextokenBXjUvQk.claim.call({from: accounts[5]});
		const uintbmzdRip = await StakingDextokenBXjUvQk.stakeOf.call(addresssh4eRJV, {from: accounts[4]});

		await expect(StakingDextokenBXjUvQk.setBeneficial.call(addressutmnbp8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressgXQLBIe = accounts[0]
		const addressjRWH6pu = accounts[2]
		const StakingDextokenKduTZtC = await StakingDextoken.new(addressgXQLBIe, addressjRWH6pu, {from: accounts[2]});
		const uintVqrIcMG = BigInt("1313")
		const uintrTjhZjK = await StakingDextokenKduTZtC.withdraw.call(uintVqrIcMG, {from: accounts[3]});
		const uintR7rJVl0 = await StakingDextokenKduTZtC.getEndTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
		const uintD0Gq2pq = await StakingDextokenKduTZtC.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenKduTZtC.withdraw.call(uintVqrIcMG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressar17Y3J = accounts[3]
		const addressqrfaTN = accounts[3]
		const StakingDextokendN13Lzq = await StakingDextoken.new(addressar17Y3J, addressqrfaTN, {from: accounts[2]});
		const addressRGohweg = accounts[2]
		const addressUswfXw8 = accounts[1]
		const uintK51pgr2 = await StakingDextokendN13Lzq.rewardOf.call(addressRGohweg, {from: "0x0000000000000000000000000000000000000001"});
		const uintyCA4F0W = await StakingDextokendN13Lzq.getEndTimestamp.call({from: accounts[1]});
		const uintwTG1lNA = await StakingDextokendN13Lzq.getStartTimestamp.call({from: accounts[4]});
		const addressKhICtKE = await StakingDextokendN13Lzq.setBeneficial.call(addressUswfXw8, {from: accounts[3]});

		assert.equal(uintK51pgr2, BigInt("0"))
		assert.equal(uintwTG1lNA, BigInt("0"))
		assert.equal(uintyCA4F0W, BigInt("0"))
		await expect(StakingDextokendN13Lzq.setBeneficial.call(addressUswfXw8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressoqv8AHZ = accounts[4]
		const addressCI9bQju = accounts[5]
		const StakingDextokenc83ugeU = await StakingDextoken.new(addressoqv8AHZ, addressCI9bQju, {from: accounts[4]});
		const addressf5Z5QXt = accounts[1]
		const addressaV54SLG = accounts[1]
		const addressDVWxnnj = accounts[3]
		const uintwSbxjbt = await StakingDextokenc83ugeU.totalRewards.call({from: accounts[5]});
		const uintAvMehML = await StakingDextokenc83ugeU.earned.call(addressf5Z5QXt, {from: accounts[3]});
		const uintrgpX6EL = await StakingDextokenc83ugeU.getWithdrawalOf.call(addressaV54SLG, {from: accounts[4]});
		const uintdPbIKIo = await StakingDextokenc83ugeU.lastTimeRewardApplicable.call({from: accounts[2]});
		const addresstOAhxDu = await StakingDextokenc83ugeU.updateReward.call(addressDVWxnnj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintAvMehML, BigInt("0"))
		assert.equal(uintdPbIKIo, BigInt("0"))
		assert.equal(uintrgpX6EL, BigInt("0"))
		assert.equal(uintwSbxjbt, BigInt("0"))
		await expect(StakingDextokenc83ugeU.updateReward.call(addressDVWxnnj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressGbsc4p = accounts[1]
		const addressIC9ynx = accounts[4]
		const StakingDextokenqgfY2l4 = await StakingDextoken.new(addressGbsc4p, addressIC9ynx, {from: "0x0000000000000000000000000000000000000001"});
		const addressM4FzZgm = accounts[2]
		const address5DL3RB = accounts[2]
		const uintw3RRnkC = await StakingDextokenqgfY2l4.earned.call(addressM4FzZgm, {from: "0x0000000000000000000000000000000000000001"});
		const uintHRWTHFD = await StakingDextokenqgfY2l4.rewardPerToken.call({from: accounts[2]});
		const uintzc4Kzsp = await StakingDextokenqgfY2l4.getWithdrawalOf.call(address5DL3RB, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for StakingDextoken', async () => {
		const addresshJwCSjj = accounts[0]
		const addressmemvCx5 = accounts[0]
		const StakingDextokenlTM2ZVI = await StakingDextoken.new(addresshJwCSjj, addressmemvCx5, {from: accounts[1]});
		const addressgNfSlqO = "0x0000000000000000000000000000000000000001"
		const uintHwGEHm = BigInt("61")
		const uintMScFb66 = BigInt("1602")
		const uintKscgu1c = BigInt("942")
		const uintkBRut6n = BigInt("408")
		const uintgdv6rhB = BigInt("2008")
		const uintR1K733a = BigInt("1461")
		const uintt2nXx8P = BigInt("1520")
		const uintHH2e0Aw = BigInt("768")
		const uintohfkxCz = BigInt("685")
		await StakingDextokenlTM2ZVI.claim.call({from: accounts[5]});
		const uintm0REbbC = await StakingDextokenlTM2ZVI.getClaimOf.call(addressgNfSlqO, {from: accounts[3]});
		const uintcOZyoD7 = await StakingDextokenlTM2ZVI.setRewardRound.call(uintkBRut6n, uintKscgu1c, uintMScFb66, uintHwGEHm, {from: accounts[2]});
		const uintWxXxRuX = await StakingDextokenlTM2ZVI.setRewardRound.call(uintHH2e0Aw, uintt2nXx8P, uintR1K733a, uintgdv6rhB, {from: "0x0000000000000000000000000000000000000001"});
		const uintkOtMzG1 = await StakingDextokenlTM2ZVI.withdraw.call(uintohfkxCz, {from: accounts[0]});

		await expect(StakingDextokenlTM2ZVI.claim.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresskltwmQ5 = accounts[0]
		const addressfCTuRlL = accounts[0]
		const StakingDextokenzMx5Cwh = await StakingDextoken.new(addresskltwmQ5, addressfCTuRlL, {from: accounts[1]});
		const addressAtgMIoj = accounts[5]
		const uintmsJw55c = await StakingDextokenzMx5Cwh.getStartTimestamp.call({from: accounts[0]});
		const uintKTYwIrd = await StakingDextokenzMx5Cwh.getClaimOf.call(addressAtgMIoj, {from: accounts[0]});

		assert.equal(uintKTYwIrd, BigInt("0"))
		assert.equal(uintmsJw55c, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressSvdC1B8 = accounts[0]
		const addressrVRsloy = accounts[2]
		const StakingDextokenKduTZtC = await StakingDextoken.new(addressSvdC1B8, addressrVRsloy, {from: accounts[2]});
		const uintPhlmpT = BigInt("1260")
		const addresswNKWYau = accounts[1]
		const uintErGfPW = await StakingDextokenKduTZtC.remainingRewards.call({from: accounts[0]});
		const uintrTjhZjK = await StakingDextokenKduTZtC.withdraw.call(uintPhlmpT, {from: accounts[3]});
		const uintWgYQlIV = await StakingDextokenKduTZtC.earned.call(addresswNKWYau, {from: accounts[0]});
		const uintR7rJVl0 = await StakingDextokenKduTZtC.getEndTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
		const uintD0Gq2pq = await StakingDextokenKduTZtC.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintErGfPW, BigInt("0"))
		await expect(StakingDextokenKduTZtC.withdraw.call(uintPhlmpT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressYVqEABz = accounts[0]
		const addressCzYgxR = accounts[0]
		const StakingDextokenzMx5Cwh = await StakingDextoken.new(addressYVqEABz, addressCzYgxR, {from: accounts[1]});
		const addressP30A6Ur = accounts[5]
		const addressc6b5YIf = accounts[0]
		const uintMVith0v = BigInt("1202")
		const address0st2xB = accounts[4]
		const uintKTYwIrd = await StakingDextokenzMx5Cwh.getClaimOf.call(addressP30A6Ur, {from: accounts[0]});
		const uintcrOCcMw = await StakingDextokenzMx5Cwh.getClaimOf.call(addressc6b5YIf, {from: "0x0000000000000000000000000000000000000001"});
		const uintu8iPwQ = await StakingDextokenzMx5Cwh.deposit.call(uintMVith0v, {from: accounts[3]});
		const addressMrPrNhB = await StakingDextokenzMx5Cwh.setBeneficial.call(address0st2xB, {from: accounts[1]});

		assert.equal(uintKTYwIrd, BigInt("0"))
		assert.equal(uintcrOCcMw, BigInt("0"))
		await expect(StakingDextokenzMx5Cwh.deposit.call(uintMVith0v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressBYfETSo = accounts[0]
		const addressrnYnfDv = accounts[2]
		const StakingDextokenKduTZtC = await StakingDextoken.new(addressBYfETSo, addressrnYnfDv, {from: accounts[2]});
		const addressR4RIkEB = accounts[2]
		const uintyNy3BzM = BigInt("1602")
		const uintR7rJVl0 = await StakingDextokenKduTZtC.getEndTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
		const uinttbfFalL = await StakingDextokenKduTZtC.stakeOf.call(addressR4RIkEB, {from: accounts[3]});
		const uintD0Gq2pq = await StakingDextokenKduTZtC.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint3ePpDg = await StakingDextokenKduTZtC.deposit.call(uintyNy3BzM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintD0Gq2pq, BigInt("0"))
		assert.equal(uintR7rJVl0, BigInt("0"))
		assert.equal(uinttbfFalL, BigInt("0"))
		await expect(StakingDextokenKduTZtC.deposit.call(uintyNy3BzM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressbvhj5Go = accounts[0]
		const addressTDjnfyE = accounts[0]
		const StakingDextokenzMx5Cwh = await StakingDextoken.new(addressbvhj5Go, addressTDjnfyE, {from: accounts[1]});
		const addressziY5Cf3 = accounts[5]
		const addressuy66Ozv = accounts[4]
		const uintKTYwIrd = await StakingDextokenzMx5Cwh.getClaimOf.call(addressziY5Cf3, {from: accounts[0]});
		const addressMrPrNhB = await StakingDextokenzMx5Cwh.setBeneficial.call(addressuy66Ozv, {from: accounts[1]});

		assert.equal(uintKTYwIrd, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressC6d9OZM = accounts[0]
		const addressYRphALt = accounts[0]
		const StakingDextokenlTM2ZVI = await StakingDextoken.new(addressC6d9OZM, addressYRphALt, {from: accounts[1]});
		const uintVE6VUQ1 = BigInt("0")
		const uintkOtMzG1 = await StakingDextokenlTM2ZVI.withdraw.call(uintVE6VUQ1, {from: accounts[0]});

		await expect(StakingDextokenlTM2ZVI.withdraw.call(uintVE6VUQ1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressKfvXTjc = accounts[0]
		const addressilXk0jR = accounts[0]
		const StakingDextokenlTM2ZVI = await StakingDextoken.new(addressKfvXTjc, addressilXk0jR, {from: accounts[1]});
		const addresspQKCRuz = accounts[2]
		await StakingDextokenlTM2ZVI.notifyRewards.call({from: accounts[1]});
		const uintUGpWfJ8 = await StakingDextokenlTM2ZVI.rewardPerToken.call({from: accounts[1]});
		const boollagPL2a = await StakingDextokenlTM2ZVI.freezeAccount.call(addresspQKCRuz, {from: accounts[0]});
		await StakingDextokenlTM2ZVI.claim.call({from: accounts[5]});

		await expect(StakingDextokenlTM2ZVI.notifyRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZfpiXPt = accounts[0]
		const addressLbzD1za = accounts[2]
		const StakingDextokenKduTZtC = await StakingDextoken.new(addressZfpiXPt, addressLbzD1za, {from: accounts[2]});
		const addressbj8KalI = accounts[0]
		const addressJe5Ogvd = accounts[4]
		const uintYn2dVZV = BigInt("1602")
		await StakingDextokenKduTZtC.notifyRewards.call({from: accounts[2]});
		const uintR7rJVl0 = await StakingDextokenKduTZtC.getEndTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
		const uinttbfFalL = await StakingDextokenKduTZtC.stakeOf.call(addressbj8KalI, {from: accounts[3]});
		const boolvPFq2kU = await StakingDextokenKduTZtC.freezeAccount.call(addressJe5Ogvd, {from: accounts[2]});
		const uint3ePpDg = await StakingDextokenKduTZtC.deposit.call(uintYn2dVZV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenKduTZtC.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfrFMwAv = accounts[0]
		const addressj0AhV6h = accounts[0]
		const StakingDextokenlTM2ZVI = await StakingDextoken.new(addressfrFMwAv, addressj0AhV6h, {from: accounts[1]});
		const addresswZg2rkg = "0x0000000000000000000000000000000000000001"
		const addressowy6IE = accounts[1]
		const uintFkT4EKD = BigInt("785")
		const addressTguiqtL = "0x0000000000000000000000000000000000000001"
		const addressT5Mtra = accounts[2]
		const addresssgS0iyC = await StakingDextokenlTM2ZVI.setBeneficial.call(addresswZg2rkg, {from: accounts[1]});
		const uintGZTTU2 = await StakingDextokenlTM2ZVI.getClaimOf.call(addressowy6IE, {from: accounts[1]});
		const addressYQCgW8a = await StakingDextokenlTM2ZVI.capture.call(addressTguiqtL, uintFkT4EKD, {from: accounts[1]});
		const addressrwagSXZ = await StakingDextokenlTM2ZVI.updateReward.call(addressT5Mtra, {from: accounts[4]});
		await StakingDextokenlTM2ZVI.claim.call({from: accounts[5]});

		assert.equal(uintGZTTU2, BigInt("0"))
		await expect(StakingDextokenlTM2ZVI.capture.call(addressTguiqtL, uintFkT4EKD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZDoMomz = accounts[0]
		const addressRwrk21v = accounts[0]
		const StakingDextokenlTM2ZVI = await StakingDextoken.new(addressZDoMomz, addressRwrk21v, {from: accounts[1]});
		const uintq0Z8A6c = BigInt("584")
		const uintEvH4ZE = BigInt("1129")
		const uintQscPtEZ = BigInt("1183")
		const uintiMgonb = BigInt("1003")
		const uintTUFkNMc = BigInt("709")
		const uintYE3VYok = await StakingDextokenlTM2ZVI.lastTimeRewardApplicable.call({from: accounts[2]});
		const uintXBqKzJr = await StakingDextokenlTM2ZVI.setRewardRound.call(uintiMgonb, uintQscPtEZ, uintEvH4ZE, uintq0Z8A6c, {from: accounts[1]});
		const uintkOtMzG1 = await StakingDextokenlTM2ZVI.withdraw.call(uintTUFkNMc, {from: accounts[0]});

		assert.equal(uintYE3VYok, BigInt("0"))
		await expect(StakingDextokenlTM2ZVI.setRewardRound.call(uintiMgonb, uintQscPtEZ, uintEvH4ZE, uintq0Z8A6c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressVaQR6O = accounts[0]
		const addressH6YZKkJ = accounts[0]
		const StakingDextokenlTM2ZVI = await StakingDextoken.new(addressVaQR6O, addressH6YZKkJ, {from: accounts[1]});
		const addressosd3Hox = "0x0000000000000000000000000000000000000001"
		const uintBZCwHbR = BigInt("675")
		await StakingDextokenlTM2ZVI.notifyRewards.call({from: accounts[1]});
		const boolnxnr6Q = await StakingDextokenlTM2ZVI.unfreezeAccount.call(addressosd3Hox, {from: accounts[1]});
		const uintJCFXCla = await StakingDextokenlTM2ZVI.withdraw.call(uintBZCwHbR, {from: accounts[1]});

		await expect(StakingDextokenlTM2ZVI.notifyRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresscqnyg5C = accounts[0]
		const address6zuFov = accounts[0]
		const StakingDextokenlTM2ZVI = await StakingDextoken.new(addresscqnyg5C, address6zuFov, {from: accounts[1]});
		const addressUFVgQwD = "0x0000000000000000000000000000000000000000"
		const uintopTG8ur = BigInt("785")
		const addressDf5eSyE = "0x0000000000000000000000000000000000000001"
		const addressG1bkk5p = accounts[3]
		const addresssgS0iyC = await StakingDextokenlTM2ZVI.setBeneficial.call(addressUFVgQwD, {from: accounts[1]});
		const addressYQCgW8a = await StakingDextokenlTM2ZVI.capture.call(addressDf5eSyE, uintopTG8ur, {from: accounts[1]});
		const addressrwagSXZ = await StakingDextokenlTM2ZVI.updateReward.call(addressG1bkk5p, {from: accounts[4]});
		await StakingDextokenlTM2ZVI.claim.call({from: accounts[5]});

		await expect(StakingDextokenlTM2ZVI.setBeneficial.call(addressUFVgQwD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressIVvuRAT = accounts[0]
		const addressBhIN5G = accounts[0]
		const StakingDextokenlTM2ZVI = await StakingDextoken.new(addressIVvuRAT, addressBhIN5G, {from: accounts[1]});
		const addressD6OjEJ = "0x0000000000000000000000000000000000000001"
		const uintk6JfjcC = BigInt("785")
		const addressEe0ndKG = accounts[0]
		const addressm69IZhG = accounts[4]
		const addressegAmgJ = accounts[1]
		const addressTj0EtNm = accounts[5]
		const addresskPfWGT = accounts[2]
		const uintMiV5KJ9 = await StakingDextokenlTM2ZVI.rewardPerToken.call({from: accounts[1]});
		const addresssgS0iyC = await StakingDextokenlTM2ZVI.setBeneficial.call(addressD6OjEJ, {from: accounts[1]});
		const addressYQCgW8a = await StakingDextokenlTM2ZVI.capture.call(addressEe0ndKG, uintk6JfjcC, {from: accounts[1]});
		const uintXuD6bqV = await StakingDextokenlTM2ZVI.getWithdrawalOf.call(addressm69IZhG, {from: accounts[3]});
		const boolr9ojmBR = await StakingDextokenlTM2ZVI.unfreezeAccount.call(addressegAmgJ, {from: "0x0000000000000000000000000000000000000001"});
		const addressrwagSXZ = await StakingDextokenlTM2ZVI.updateReward.call(addressTj0EtNm, {from: accounts[4]});
		const addresszb47nGr = await StakingDextokenlTM2ZVI.updateReward.call(addresskPfWGT, {from: accounts[4]});
		await StakingDextokenlTM2ZVI.claim.call({from: accounts[5]});

		assert.equal(uintMiV5KJ9, BigInt("0"))
		await expect(StakingDextokenlTM2ZVI.capture.call(addressEe0ndKG, uintk6JfjcC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZo3PeMI = accounts[0]
		const addressAM9EVTg = accounts[0]
		const StakingDextokenlTM2ZVI = await StakingDextoken.new(addressZo3PeMI, addressAM9EVTg, {from: accounts[1]});
		const uintkeVqYEx = BigInt("756")
		const addresswvNBI1 = "0x00000000000000000000000000000000000000-1"
		const uintNq4uesa = await StakingDextokenlTM2ZVI.getTotalStakes.call({from: accounts[4]});
		const addressYQCgW8a = await StakingDextokenlTM2ZVI.capture.call(addresswvNBI1, uintkeVqYEx, {from: accounts[1]});
		const uintl89aYKa = await StakingDextokenlTM2ZVI.getTotalStakes.call({from: accounts[0]});

		assert.equal(uintNq4uesa, BigInt("0"))
		await expect(StakingDextokenlTM2ZVI.capture.call(addresswvNBI1, uintkeVqYEx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressdo5tljr = accounts[2]
		const addressRuozt9l = "0x0000000000000000000000000000000000000001"
		const StakingDextokenmpvbYpB = await StakingDextoken.new(addressdo5tljr, addressRuozt9l, {from: accounts[0]});
		const addressVaybZUy = accounts[0]
		const uintNdm9gNX = BigInt("428")
		const addressiBpaAjT = "0x0000000000000000000000000000000000000001"
		const uintWCrmzra = BigInt("1388")
		const uintJaUgagV = BigInt("1315")
		const uintPvpBe37 = BigInt("1910")
		const uintC1pMnMe = BigInt("450")
		const uintAiErcnW = await StakingDextokenmpvbYpB.rewardOf.call(addressVaybZUy, {from: accounts[5]});
		const addressYaTMQDn = await StakingDextokenmpvbYpB.capture.call(addressiBpaAjT, uintNdm9gNX, {from: accounts[0]});
		const uintOnsT4Ix = await StakingDextokenmpvbYpB.getStartTimestamp.call({from: accounts[2]});
		const uintqlsf4KD = await StakingDextokenmpvbYpB.setRewardRound.call(uintC1pMnMe, uintPvpBe37, uintJaUgagV, uintWCrmzra, {from: accounts[3]});

		assert.equal(uintAiErcnW, BigInt("0"))
		await expect(StakingDextokenmpvbYpB.capture.call(addressiBpaAjT, uintNdm9gNX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})