const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressMrBrIPy = accounts[3]
		const addressr41Iqjt = accounts[4]
		const StakingDextokenJ9p83qG = await StakingDextoken.new(addressMrBrIPy, addressr41Iqjt, {from: accounts[2]});
		const addressY1aztzu = accounts[1]
		const address4y95pz = accounts[4]
		const addressb1ijzto = accounts[0]
		const addressLjIk1C7 = await StakingDextokenJ9p83qG.setBeneficial.call(addressY1aztzu, {from: accounts[4]});
		const uintR6g6nIz = await StakingDextokenJ9p83qG.getTotalStakes.call({from: accounts[2]});
		const uintoO7r3Rr = await StakingDextokenJ9p83qG.earned.call(address4y95pz, {from: accounts[5]});
		const boolpogcrl = await StakingDextokenJ9p83qG.freezeAccount.call(addressb1ijzto, {from: "0x0000000000000000000000000000000000000001"});
		const uintLefv53 = await StakingDextokenJ9p83qG.remainingRewards.call({from: accounts[3]});

		await expect(StakingDextokenJ9p83qG.setBeneficial.call(addressY1aztzu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfY5B1Sn = accounts[2]
		const addressxDjBEaO = accounts[5]
		const StakingDextokenvO9VXPE = await StakingDextoken.new(addressfY5B1Sn, addressxDjBEaO, {from: accounts[5]});
		const addressV62m533 = accounts[3]
		const uintW8c6CuI = BigInt("1055")
		const uintMNCzppK = BigInt("1327")
		const uinttxPROyj = BigInt("822")
		const uintOTEsmZM = BigInt("1979")
		const uintPaulN9C = await StakingDextokenvO9VXPE.getEndTimestamp.call({from: accounts[3]});
		const boolSUxh6gZ = await StakingDextokenvO9VXPE.unfreezeAccount.call(addressV62m533, {from: accounts[5]});
		const uintZ7n9JyG = await StakingDextokenvO9VXPE.setRewardRound.call(uintOTEsmZM, uinttxPROyj, uintMNCzppK, uintW8c6CuI, {from: "0x0000000000000000000000000000000000000001"});
		const uintTzkd0Bp = await StakingDextokenvO9VXPE.totalRewards.call({from: accounts[5]});

		assert.equal(uintPaulN9C, BigInt("0"))
		await expect(StakingDextokenvO9VXPE.unfreezeAccount.call(addressV62m533, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresss9rhM2 = accounts[3]
		const addressAgmuPGN = accounts[5]
		const StakingDextokensaLNvYY = await StakingDextoken.new(addresss9rhM2, addressAgmuPGN, {from: "0x0000000000000000000000000000000000000001"});
		const uintBMR7moL = await StakingDextokensaLNvYY.lastTimeRewardApplicable.call({from: accounts[5]});
		const uintPvpzdX5 = await StakingDextokensaLNvYY.lastTimeRewardApplicable.call({from: accounts[0]});
		await StakingDextokensaLNvYY.notifyRewards.call({from: accounts[3]});
	});

	it('test for StakingDextoken', async () => {
		const addressUADTV5v = "0x0000000000000000000000000000000000000001"
		const addressuQWZE7Q = "0x0000000000000000000000000000000000000001"
		const StakingDextokenYHeSOPh = await StakingDextoken.new(addressUADTV5v, addressuQWZE7Q, {from: accounts[0]});
		const uintqvQ3gf = await StakingDextokenYHeSOPh.lastTimeRewardApplicable.call({from: accounts[3]});
		await StakingDextokenYHeSOPh.claim.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintqvQ3gf, BigInt("0"))
		await expect(StakingDextokenYHeSOPh.claim.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresslHt4cqc = accounts[2]
		const addressWR0G01d = accounts[4]
		const StakingDextokeneOhNk6S = await StakingDextoken.new(addresslHt4cqc, addressWR0G01d, {from: accounts[1]});
		const uintZt5XIsK = BigInt("1464")
		const addressyUvZsXa = accounts[2]
		const addressCddaLl0 = accounts[4]
		const addressReTiKgZ = "0x0000000000000000000000000000000000000001"
		const uintk9fA4Lo = await StakingDextokeneOhNk6S.withdraw.call(uintZt5XIsK, {from: "0x0000000000000000000000000000000000000001"});
		const uintKCONgxk = await StakingDextokeneOhNk6S.earned.call(addressyUvZsXa, {from: accounts[1]});
		const uintFL5TYCZ = await StakingDextokeneOhNk6S.getClaimOf.call(addressCddaLl0, {from: accounts[1]});
		const uintAym8O2M = await StakingDextokeneOhNk6S.totalRewards.call({from: accounts[1]});
		const uintG5RXlvf = await StakingDextokeneOhNk6S.earned.call(addressReTiKgZ, {from: accounts[4]});

		await expect(StakingDextokeneOhNk6S.withdraw.call(uintZt5XIsK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvY0rix0 = accounts[0]
		const addressNUjpf8F = "0x0000000000000000000000000000000000000001"
		const StakingDextokenX7ZEweE = await StakingDextoken.new(addressvY0rix0, addressNUjpf8F, {from: accounts[0]});
		const addressv66Gljv = accounts[5]
		const uinto08Yb1o = await StakingDextokenX7ZEweE.getStartTimestamp.call({from: accounts[3]});
		const uintryKSvsc = await StakingDextokenX7ZEweE.totalRewards.call({from: accounts[4]});
		const addressplRRKzP = await StakingDextokenX7ZEweE.setBeneficial.call(addressv66Gljv, {from: "0x0000000000000000000000000000000000000001"});
		const uinteHayRPI = await StakingDextokenX7ZEweE.rewardPerToken.call({from: accounts[3]});

		assert.equal(uinto08Yb1o, BigInt("0"))
		assert.equal(uintryKSvsc, BigInt("0"))
		await expect(StakingDextokenX7ZEweE.setBeneficial.call(addressv66Gljv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressSkt1Kkx = "0x0000000000000000000000000000000000000001"
		const addressgzkGlfG = "0x0000000000000000000000000000000000000001"
		const StakingDextokenYHeSOPh = await StakingDextoken.new(addressSkt1Kkx, addressgzkGlfG, {from: accounts[0]});
		const addressZ3PL8H = accounts[2]
		const uintqvQ3gf = await StakingDextokenYHeSOPh.lastTimeRewardApplicable.call({from: accounts[3]});
		const boolSu4tZUV = await StakingDextokenYHeSOPh.freezeAccount.call(addressZ3PL8H, {from: accounts[0]});
		await StakingDextokenYHeSOPh.claim.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolSu4tZUV, true)
		assert.equal(uintqvQ3gf, BigInt("0"))
		await expect(StakingDextokenYHeSOPh.claim.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressUH9450p = "0x0000000000000000000000000000000000000001"
		const addressNzDb1P9 = accounts[1]
		const StakingDextokenpg0QlC = await StakingDextoken.new(addressUH9450p, addressNzDb1P9, {from: accounts[1]});
		const addresskMQ1psA = accounts[3]
		const uintiS6gV5G = await StakingDextokenpg0QlC.getStartTimestamp.call({from: accounts[4]});
		const addressL7Y9s9w = await StakingDextokenpg0QlC.notFrozen.call(addresskMQ1psA, {from: accounts[5]});

		assert.equal(uintiS6gV5G, BigInt("0"))
		await expect(StakingDextokenpg0QlC.notFrozen.call(addresskMQ1psA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressJsRKK4w = accounts[1]
		const addresstVJNzI7 = accounts[2]
		const StakingDextokensz5haxr = await StakingDextoken.new(addressJsRKK4w, addresstVJNzI7, {from: accounts[2]});
		const uintF2L9KLT = BigInt("1428")
		const uintjH5H9mh = await StakingDextokensz5haxr.rewardPerToken.call({from: accounts[0]});
		const uintvrA2pc8 = await StakingDextokensz5haxr.deposit.call(uintF2L9KLT, {from: accounts[3]});

		assert.equal(uintjH5H9mh, BigInt("0"))
		await expect(StakingDextokensz5haxr.deposit.call(uintF2L9KLT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressROv8WUG = "0x0000000000000000000000000000000000000001"
		const addressvDCeHB = accounts[3]
		const StakingDextokenGBUaxHv = await StakingDextoken.new(addressROv8WUG, addressvDCeHB, {from: accounts[5]});
		const addressPQtja9N = accounts[2]
		const addressbWkWGLb = accounts[0]
		const addressdLAsXbf = accounts[4]
		const uintZW0I4fL = await StakingDextokenGBUaxHv.rewardOf.call(addressPQtja9N, {from: accounts[0]});
		const uintx2oCsDB = await StakingDextokenGBUaxHv.earned.call(addressbWkWGLb, {from: accounts[2]});
		const boolKeqztD3 = await StakingDextokenGBUaxHv.freezeAccount.call(addressdLAsXbf, {from: accounts[1]});

		assert.equal(uintZW0I4fL, BigInt("0"))
		assert.equal(uintx2oCsDB, BigInt("0"))
		await expect(StakingDextokenGBUaxHv.freezeAccount.call(addressdLAsXbf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressos6HQYz = accounts[1]
		const addressJqtnRS = accounts[2]
		const StakingDextokensz5haxr = await StakingDextoken.new(addressos6HQYz, addressJqtnRS, {from: accounts[2]});
		const addressLHpmPPz = accounts[2]
		const uintMlol3K8 = await StakingDextokensz5haxr.stakeOf.call(addressLHpmPPz, {from: accounts[1]});
		const uintjH5H9mh = await StakingDextokensz5haxr.rewardPerToken.call({from: accounts[0]});

		assert.equal(uintMlol3K8, BigInt("0"))
		assert.equal(uintjH5H9mh, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressDMBuxSV = accounts[3]
		const addressPUd1lPz = accounts[3]
		const StakingDextokenUtdFx9M = await StakingDextoken.new(addressDMBuxSV, addressPUd1lPz, {from: accounts[2]});
		const addressMlYZtq5 = accounts[4]
		const addressvE4s2GB = accounts[1]
		const uintG8NEKHG = await StakingDextokenUtdFx9M.balanceOf.call(addressMlYZtq5, {from: accounts[3]});
		const uintnaWNWDI = await StakingDextokenUtdFx9M.getWithdrawalOf.call(addressvE4s2GB, {from: accounts[2]});
		const uinthefDOgd = await StakingDextokenUtdFx9M.remainingRewards.call({from: accounts[4]});
		const uintYQeB8A = await StakingDextokenUtdFx9M.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await StakingDextokenUtdFx9M.notifyRewards.call({from: accounts[3]});

		assert.equal(uintG8NEKHG, BigInt("0"))
		assert.equal(uintYQeB8A, BigInt("0"))
		assert.equal(uinthefDOgd, BigInt("0"))
		assert.equal(uintnaWNWDI, BigInt("0"))
		await expect(StakingDextokenUtdFx9M.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPrsJy8A = accounts[1]
		const addressgFXtgh = accounts[3]
		const StakingDextokenMdShaTr = await StakingDextoken.new(addressPrsJy8A, addressgFXtgh, {from: accounts[0]});
		const addressOn9wTuX = accounts[4]
		const uintHF9tUkw = await StakingDextokenMdShaTr.totalRewards.call({from: accounts[0]});
		const uintxwuHmRk = await StakingDextokenMdShaTr.getStartTimestamp.call({from: accounts[4]});
		const uintM2cfws = await StakingDextokenMdShaTr.getClaimOf.call(addressOn9wTuX, {from: accounts[5]});
		const uinteJ8CfKy = await StakingDextokenMdShaTr.rewardPerToken.call({from: accounts[3]});

		assert.equal(uintHF9tUkw, BigInt("0"))
		assert.equal(uintM2cfws, BigInt("0"))
		assert.equal(uinteJ8CfKy, BigInt("0"))
		assert.equal(uintxwuHmRk, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressaSZYbkI = accounts[1]
		const addressPEmj0ET = accounts[2]
		const StakingDextokensz5haxr = await StakingDextoken.new(addressaSZYbkI, addressPEmj0ET, {from: accounts[2]});
		const uintST0ogA = BigInt("1688")
		const addresscdk2HkO = accounts[4]
		const uintfE414qU = BigInt("1441")
		const uintz0olEHZ = await StakingDextokensz5haxr.rewardPerToken.call({from: accounts[0]});
		const addressip8jOmK = await StakingDextokensz5haxr.capture.call(addresscdk2HkO, uintST0ogA, {from: accounts[2]});
		const uintvrA2pc8 = await StakingDextokensz5haxr.deposit.call(uintfE414qU, {from: accounts[3]});

		assert.equal(uintz0olEHZ, BigInt("0"))
		await expect(StakingDextokensz5haxr.capture.call(addresscdk2HkO, uintST0ogA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressYg0br5j = "0x0000000000000000000000000000000000000001"
		const addressAk092z2 = "0x0000000000000000000000000000000000000001"
		const StakingDextokenYHeSOPh = await StakingDextoken.new(addressYg0br5j, addressAk092z2, {from: accounts[0]});
		const addressvE7pPkI = accounts[1]
		const uintFUXoA5A = BigInt("263")
		const addressdPHpmrF = accounts[1]
		const addressCcL3dev = accounts[1]
		const addressfIBGSPB = await StakingDextokenYHeSOPh.setBeneficial.call(addressvE7pPkI, {from: accounts[0]});
		const uintaT77U2p = await StakingDextokenYHeSOPh.deposit.call(uintFUXoA5A, {from: accounts[3]});
		const uintG7bD6sw = await StakingDextokenYHeSOPh.stakeOf.call(addressdPHpmrF, {from: accounts[5]});
		const addressRyHFF5b = await StakingDextokenYHeSOPh.setBeneficial.call(addressCcL3dev, {from: accounts[2]});
		await StakingDextokenYHeSOPh.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const uintlwccpG = await StakingDextokenYHeSOPh.remainingRewards.call({from: accounts[1]});

		await expect(StakingDextokenYHeSOPh.deposit.call(uintFUXoA5A, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresslf0qcp3 = "0x0000000000000000000000000000000000000001"
		const addressRpKQrvv = "0x0000000000000000000000000000000000000001"
		const StakingDextokenYHeSOPh = await StakingDextoken.new(addresslf0qcp3, addressRpKQrvv, {from: accounts[0]});
		await StakingDextokenYHeSOPh.notifyRewards.call({from: accounts[0]});
		await StakingDextokenYHeSOPh.claim.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenYHeSOPh.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressJiJIGa = accounts[1]
		const addressS1RxnNS = accounts[2]
		const StakingDextokensz5haxr = await StakingDextoken.new(addressJiJIGa, addressS1RxnNS, {from: accounts[2]});
		const uintsfZV2nF = BigInt("1688")
		const addressmK9wJLN = accounts[1]
		const uintJJo4sv3 = BigInt("1441")
		const addressMM6AcLi = accounts[5]
		const addressc9HcPG5 = accounts[0]
		const uintz0olEHZ = await StakingDextokensz5haxr.rewardPerToken.call({from: accounts[0]});
		const addressip8jOmK = await StakingDextokensz5haxr.capture.call(addressmK9wJLN, uintsfZV2nF, {from: accounts[2]});
		const uintvrA2pc8 = await StakingDextokensz5haxr.deposit.call(uintJJo4sv3, {from: accounts[3]});
		const uintUhKC5qr = await StakingDextokensz5haxr.getClaimOf.call(addressMM6AcLi, {from: accounts[5]});
		const addressTpeXqWP = await StakingDextokensz5haxr.updateReward.call(addressc9HcPG5, {from: accounts[4]});

		assert.equal(uintz0olEHZ, BigInt("0"))
		await expect(StakingDextokensz5haxr.capture.call(addressmK9wJLN, uintsfZV2nF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressJGY9xLY = accounts[1]
		const addressDtwTqMm = accounts[4]
		const StakingDextokend1uJyVx = await StakingDextoken.new(addressJGY9xLY, addressDtwTqMm, {from: accounts[4]});
		const uintrj6bge = BigInt("1368")
		const uintD8ghXFK = BigInt("516")
		const uintuUqIL5f = BigInt("1056")
		const uintWtF7IHo = BigInt("640")
		const uintOQyhdy6 = await StakingDextokend1uJyVx.remainingRewards.call({from: accounts[1]});
		const uintBe4BGS2 = await StakingDextokend1uJyVx.setRewardRound.call(uintWtF7IHo, uintuUqIL5f, uintD8ghXFK, uintrj6bge, {from: accounts[4]});

		assert.equal(uintOQyhdy6, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressvOcLbDz = accounts[2]
		const addressrVli1Vl = accounts[4]
		const StakingDextokenTWs2nEo = await StakingDextoken.new(addressvOcLbDz, addressrVli1Vl, {from: accounts[3]});
		const addressquNn2m6 = accounts[1]
		const uintNWL2rW2 = BigInt("1092")
		const addressLxhTq3T = accounts[4]
		const addressVpexIi = accounts[4]
		const addressuec7xVN = accounts[5]
		const addressUBaeGry = accounts[4]
		const uintPEGqFTf = await StakingDextokenTWs2nEo.getClaimOf.call(addressquNn2m6, {from: "0x0000000000000000000000000000000000000001"});
		const addressuGStv6l = await StakingDextokenTWs2nEo.capture.call(addressLxhTq3T, uintNWL2rW2, {from: accounts[3]});
		const boolVgCjeiE = await StakingDextokenTWs2nEo.unfreezeAccount.call(addressVpexIi, {from: accounts[4]});
		const boolLDk4Dbf = await StakingDextokenTWs2nEo.unfreezeAccount.call(addressuec7xVN, {from: accounts[4]});
		const uintwVWw2F0 = await StakingDextokenTWs2nEo.rewardOf.call(addressUBaeGry, {from: accounts[3]});

		assert.equal(uintPEGqFTf, BigInt("0"))
		await expect(StakingDextokenTWs2nEo.capture.call(addressLxhTq3T, uintNWL2rW2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressqiInvMt = accounts[2]
		const addressDjDitjY = accounts[2]
		const StakingDextokenkwHjqlD = await StakingDextoken.new(addressqiInvMt, addressDjDitjY, {from: accounts[2]});
		const uintfyj454F = BigInt("852")
		const uintwcVnSRw = BigInt("1740")
		const uintNsXgAAx = BigInt("1125")
		const uintMJOwqpq = BigInt("1504")
		const addressKanJ8ne = accounts[5]
		const addressA7Jlec4 = accounts[1]
		const uintLdRemtY = BigInt("1498")
		const addresskFRf6Eu = accounts[1]
		const uintbAFYuCq = await StakingDextokenkwHjqlD.setRewardRound.call(uintMJOwqpq, uintNsXgAAx, uintwcVnSRw, uintfyj454F, {from: accounts[2]});
		const boolL686rpk = await StakingDextokenkwHjqlD.freezeAccount.call(addressKanJ8ne, {from: accounts[1]});
		const addressOkiyEjY = await StakingDextokenkwHjqlD.updateReward.call(addressA7Jlec4, {from: accounts[1]});
		const addressUoftbZD = await StakingDextokenkwHjqlD.capture.call(addresskFRf6Eu, uintLdRemtY, {from: accounts[3]});

		await expect(StakingDextokenkwHjqlD.setRewardRound.call(uintMJOwqpq, uintNsXgAAx, uintwcVnSRw, uintfyj454F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})