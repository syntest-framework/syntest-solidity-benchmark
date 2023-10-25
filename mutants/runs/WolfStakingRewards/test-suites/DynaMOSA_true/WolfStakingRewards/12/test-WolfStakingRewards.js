const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringrs5oHmU = "5Yx92ZMllT4q"
		const stringRbQN6cn = "v6"
		const uintX0BFwpk = BigInt("44")
		const WolfStakingRewardseFmvzu7 = await WolfStakingRewards.new(stringrs5oHmU, stringRbQN6cn, uintX0BFwpk, {from: accounts[0]});
		const uintHFWEpcL = BigInt("1223")
		const uint8uIPvMtR = await WolfStakingRewardseFmvzu7.decimals.call({from: accounts[2]});
		const uintT4PDrUy = await WolfStakingRewardseFmvzu7.getReward.call(uintHFWEpcL, {from: accounts[1]});
		const uint8bCcudh = await WolfStakingRewardseFmvzu7.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCRT05Jn = "hRc31JgzxN1rSl6FU4moJqGsXNRVYnyYF6FJxHCx3m4ERVVvcL"
		const stringmYexADi = "llP2W5EZIzHQS8nIroOcRpOFLCvf9W2yVbn71hY3VOKvas1UGYEnCcEhpkFHZJxdYkS07vdcUEAobRxRpCmT2R3IXx"
		const uintaYMOCv4 = BigInt("62")
		const WolfStakingRewardsoLw3fmI = await WolfStakingRewards.new(stringCRT05Jn, stringmYexADi, uintaYMOCv4, {from: accounts[1]});
		const uintoYMylWW = BigInt("1092")
		const uintuddpwW5 = BigInt("820")
		const uintzVZBzM8 = BigInt("1390")
		const uintBdndWns = BigInt("2018")
		const uint256arrayGcSUGc0 = await WolfStakingRewardsoLw3fmI.updateNotifyRewardAmount.call(uintoYMylWW, {from: accounts[0]});
		const uint256YCLLwQY = await WolfStakingRewardsoLw3fmI.stake.call(uintzVZBzM8, uintuddpwW5, {from: accounts[4]});
		const uint256arrayNm4BRiB = await WolfStakingRewardsoLw3fmI.updateNotifyRewardAmount.call(uintBdndWns, {from: accounts[4]});
		await WolfStakingRewardsoLw3fmI.onlyOwner.call({from: accounts[4]});
		await WolfStakingRewardsoLw3fmI.nonReentrant.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringw29K6kF = "cItV8cf4q2JvBPPA4113GXqtlSQryntJKyLD9nBhcdDXi4uBFMzXKYIraUF"
		const stringRkGPhx = "8RpKwhQ4EKx2GFArChGzgEouXtm1OCxVV1PNc6bhHnGNENVGKGElvi8K7zhDsX"
		const uintQ4uCFDu = BigInt("76")
		const WolfStakingRewardsyNAwk1v = await WolfStakingRewards.new(stringw29K6kF, stringRkGPhx, uintQ4uCFDu, {from: accounts[2]});
		const uintrsPn41a = BigInt("2045")
		const addressRpVhPG = accounts[0]
		const uintc7IlErt = BigInt("1716")
		const addressjQ9axwP = accounts[5]
		const uintGOyPUIH = BigInt("1970")
		await WolfStakingRewardsyNAwk1v.onlyOwner.call({from: accounts[5]});
		const uint256wROgGeP = await WolfStakingRewardsyNAwk1v.balanceOfPerPool.call(addressRpVhPG, uintrsPn41a, {from: accounts[3]});
		const addressZ6FqfW6 = await WolfStakingRewardsyNAwk1v.updateReward.call(addressjQ9axwP, uintc7IlErt, {from: accounts[5]});
		const uint256MUImgfl = await WolfStakingRewardsyNAwk1v.lastTimeRewardApplicable.call(uintGOyPUIH, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressvlpErLS = accounts[5]
		const addressyMlJMDq = accounts[2]
		const addressjrxNqqI = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(addressvlpErLS, addressyMlJMDq, addressjrxNqqI, {from: accounts[0]});
		const uintzLTZKUt = BigInt("847")
		const uintXrsDFlc = BigInt("1199")
		const uintb6Dw7E6 = BigInt("944")
		const uint256W22d4ue = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintzLTZKUt, {from: accounts[2]});
		const uint256puqtWZ3 = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintXrsDFlc, {from: accounts[1]});
		const uint8RruXh1J = await WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintb6Dw7E6, {from: accounts[1]});
		await WolfStakingRewardskulP2xV.onlyRewardsDistribution.call({from: accounts[0]});

		assert.equal(uint256W22d4ue, BigInt("0"))
		assert.equal(uint256puqtWZ3, BigInt("0"))
		await expect(WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringdcSWkVs = "UwYd4HCFVblGSU5GqzOzY"
		const stringw9xMSlj = "LS57nbbbkS7W1raKFcPzIJMJIj4BFP8Gkc8zRcFVPF1muzwCvnZcWwvwRW2Sk244aRl1SFll4"
		const uintDqCUy7L = BigInt("130")
		const WolfStakingRewardswdzh1Fd = await WolfStakingRewards.new(stringdcSWkVs, stringw9xMSlj, uintDqCUy7L, {from: "0x0000000000000000000000000000000000000001"});
		const uintsoi4TO = BigInt("1857")
		const addressiOt8adv = accounts[4]
		const uintZYQ37uR = BigInt("1664")
		const addresslg8XrPH = accounts[2]
		const uintUhNXxHH = BigInt("1203")
		const addressskd38nv = accounts[4]
		const uint256l2ID9lY = await WolfStakingRewardswdzh1Fd.balanceOfPerPool.call(addressiOt8adv, uintsoi4TO, {from: accounts[4]});
		const uint256FjwetvH = await WolfStakingRewardswdzh1Fd.earned.call(addresslg8XrPH, uintZYQ37uR, {from: accounts[5]});
		const uint256quJSt1 = await WolfStakingRewardswdzh1Fd.earned.call(addressskd38nv, uintUhNXxHH, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnCL5dSh = "WWVOiOdOna58WNoDS01ASAxQ4UI20wWq49GyIxvC9Goi2oABn3L1lzHA1JqlGuB79qt7VFIEYKgDTmrIvnPO5q"
		const stringoH8Fdhq = "cxdanm7y8ecDfqOHn22ClYNdZWnr"
		const uintIHxKWLf = BigInt("20")
		const WolfStakingRewardsOLGnKZN = await WolfStakingRewards.new(stringnCL5dSh, stringoH8Fdhq, uintIHxKWLf, {from: accounts[1]});
		const uinti9qX6VR = BigInt("1057")
		const uintnmWvEPd = BigInt("1003")
		const uintUtOP1FB = BigInt("1048")
		const uintZmanGvO = BigInt("355")
		const uintr1jtSPQ = BigInt("1384")
		const addressFrrWhrv = accounts[0]
		const uint256arraydZ44v1Q = await WolfStakingRewardsOLGnKZN.updateNotifyRewardAmount.call(uinti9qX6VR, {from: accounts[4]});
		const uint256arrayOLdMsmr = await WolfStakingRewardsOLGnKZN.updateNotifyRewardAmount.call(uintnmWvEPd, {from: accounts[3]});
		const uint256arraynoVV0ab = await WolfStakingRewardsOLGnKZN.updateNotifyRewardAmount.call(uintUtOP1FB, {from: accounts[0]});
		const uint8ExMOHv2 = await WolfStakingRewardsOLGnKZN.decimals.call({from: accounts[4]});
		const uintJfQJyLs = await WolfStakingRewardsOLGnKZN.getReward.call(uintZmanGvO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rHZraE = await WolfStakingRewardsOLGnKZN.earned.call(addressFrrWhrv, uintr1jtSPQ, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxt0KxeY = "RqcCJ9l17cEdGqPB8cbsqeALHBmfPHn1mGpEcmbBkt"
		const stringiCVAlJf = "jFNfr1IBeRneuMcEygHgnvfDNqczhmXiDxrrDAvLBnjlSg45nL7"
		const uintWq2pM5Y = BigInt("36")
		const WolfStakingRewardsvL1aaeQ = await WolfStakingRewards.new(stringxt0KxeY, stringiCVAlJf, uintWq2pM5Y, {from: accounts[0]});
		const uintLxj0sUz = BigInt("896")
		const uintJhAUZTC = BigInt("2042")
		const uintHoO1N8 = BigInt("209")
		const uintTx62YpJ = BigInt("1181")
		const uintHhahPDN = BigInt("1649")
		const uintu4nmAiR = BigInt("13")
		const addressvLOV8ia = accounts[3]
		const uint256NicQNHl = await WolfStakingRewardsvL1aaeQ.totalSupplyPerPool.call(uintLxj0sUz, {from: accounts[4]});
		const uint256xhlPzdn = await WolfStakingRewardsvL1aaeQ.stake.call(uintHoO1N8, uintJhAUZTC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NLLcV47 = await WolfStakingRewardsvL1aaeQ.withdraw.call(uintHhahPDN, uintTx62YpJ, {from: accounts[2]});
		const uint256Fl4HrFz = await WolfStakingRewardsvL1aaeQ.earned.call(addressvLOV8ia, uintu4nmAiR, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgki2GcD = "02elQUydN6ly65pOjH1klWs3TZladgwbToJsV61WgjgM5LJHWpsC"
		const stringFbJX51l = "pMIx7pYfX0K16I1NMV8njU6Ey6427SWjth4tlyI5J5beGNm8B6"
		const uintROnsrWE = BigInt("231")
		const WolfStakingRewardsHAH03lF = await WolfStakingRewards.new(stringgki2GcD, stringFbJX51l, uintROnsrWE, {from: "0x0000000000000000000000000000000000000001"});
		const uintxN9IJ5U = BigInt("961")
		const uintt9KJ5se = BigInt("1107")
		const uintw4Wn1vJ = BigInt("1644")
		const uintrmeiGyW = BigInt("557")
		const uintwBNGGi3 = BigInt("442")
		const addressKI4hEZa = "0x0000000000000000000000000000000000000001"
		const uint256Eo0hX32 = await WolfStakingRewardsHAH03lF.withdraw.call(uintt9KJ5se, uintxN9IJ5U, {from: accounts[2]});
		const uint256wNeqbDT = await WolfStakingRewardsHAH03lF.rewardPerToken.call(uintw4Wn1vJ, {from: accounts[0]});
		const uint256Ol1XdG = await WolfStakingRewardsHAH03lF.exit.call(uintrmeiGyW, {from: accounts[5]});
		const uint256mb2Enjv = await WolfStakingRewardsHAH03lF.earned.call(addressKI4hEZa, uintwBNGGi3, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPTjS3aQ = "psgywM1i4MUu8DUxFMt8SRT2D"
		const stringVtxTp2s = "g2GhHgTCahQ1myJypIm8i7uqNbkTv75yXW611f9Asq9ERwRcMXrNtDKJnGxKmC3Hprdd8a9zHCL7hYUpu1agaiCA27XFUf9dt"
		const uintWyOOl89 = BigInt("5")
		const WolfStakingRewardsmp4XbYl = await WolfStakingRewards.new(stringPTjS3aQ, stringVtxTp2s, uintWyOOl89, {from: accounts[2]});
		const uintEqF74yl = BigInt("1830")
		const addressYSiEznL = accounts[3]
		const uintSKGguve = BigInt("141")
		const addressSDj1TDa = accounts[3]
		const uintj0llFdG = BigInt("115")
		const addressgYY9MNZ = accounts[2]
		const uint256Du4Wxm9 = await WolfStakingRewardsmp4XbYl.balanceOfPerPool.call(addressYSiEznL, uintEqF74yl, {from: accounts[3]});
		const uint256hoRM94Y = await WolfStakingRewardsmp4XbYl.balanceOfPerPool.call(addressSDj1TDa, uintSKGguve, {from: accounts[0]});
		const uint256d58rETX = await WolfStakingRewardsmp4XbYl.balanceOfPerPool.call(addressgYY9MNZ, uintj0llFdG, {from: accounts[4]});
		await WolfStakingRewardsmp4XbYl.onlyOwner.call({from: accounts[3]});
		await WolfStakingRewardsmp4XbYl.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYkQL4Bb = "XZrQRZ"
		const stringMIgI05x = "7nzRXzM1c2hle6"
		const uintLkiDQgx = BigInt("62")
		const WolfStakingRewardsazAOJe4 = await WolfStakingRewards.new(stringYkQL4Bb, stringMIgI05x, uintLkiDQgx, {from: accounts[1]});
		const uintDi3BHlK = BigInt("1777")
		const uintaPvY3i = BigInt("638")
		const addressv4nOCUz = accounts[2]
		const uintscI9il2 = BigInt("889")
		const uinteZwlSnd = BigInt("1897")
		const uint256arrayhJawr5M = await WolfStakingRewardsazAOJe4.updateNotifyRewardAmount.call(uintDi3BHlK, {from: accounts[0]});
		const addressiAsUGzX = await WolfStakingRewardsazAOJe4.updateReward.call(addressv4nOCUz, uintaPvY3i, {from: accounts[1]});
		const uint256QRIMyTS = await WolfStakingRewardsazAOJe4.rewardPerToken.call(uintscI9il2, {from: accounts[2]});
		const uint256arrayZzY4z7 = await WolfStakingRewardsazAOJe4.updateNotifyRewardAmount.call(uinteZwlSnd, {from: accounts[0]});
		await WolfStakingRewardsazAOJe4.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresszfrTMej = accounts[5]
		const address0Ze3tw = accounts[2]
		const addresskE5li8x = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(addresszfrTMej, address0Ze3tw, addresskE5li8x, {from: accounts[0]});
		const uintoKL86Dv = BigInt("847")
		const uintc5fy2jW = BigInt("1199")
		const uintfHPg8gf = BigInt("1150")
		const addressbds6QW = accounts[2]
		const uintNrT4HFF = BigInt("928")
		const uintmTt94ng = BigInt("563")
		const uintvF0V068 = BigInt("944")
		const uint256W22d4ue = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintoKL86Dv, {from: accounts[2]});
		const uint256puqtWZ3 = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintc5fy2jW, {from: accounts[1]});
		const uint256KRIYb21 = await WolfStakingRewardskulP2xV.balanceOfPerPool.call(addressbds6QW, uintfHPg8gf, {from: accounts[0]});
		const uint256hxuCWaM = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintNrT4HFF, {from: accounts[3]});
		const uint256PTfIWwF = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintmTt94ng, {from: accounts[0]});
		const uint8RruXh1J = await WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintvF0V068, {from: accounts[1]});

		assert.equal(uint256KRIYb21, BigInt("0"))
		assert.equal(uint256PTfIWwF, BigInt("0"))
		assert.equal(uint256W22d4ue, BigInt("0"))
		assert.equal(uint256hxuCWaM, BigInt("0"))
		assert.equal(uint256puqtWZ3, BigInt("0"))
		await expect(WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringYwuMZrP = "z8oHaVnUTgq3iCQR8tidivu0UjTELnYhfQ0zML2RLOoBtp6oCu1PM3kButojYxkCSCO5zza4iwqExnEkFMbgM7ARgEKRFWbc"
		const stringeMHIqpY = "4KnwP0RYUMStltctwylRNUgDvS62HseJGGuc5sTy7GmCI7YKOYlrHLzJ9bTpjYhkoNobzH5Oleo2OZRxmrPzOACF66weou2"
		const uintDobIHNq = BigInt("134")
		const WolfStakingRewardsCGcOXsn = await WolfStakingRewards.new(stringYwuMZrP, stringeMHIqpY, uintDobIHNq, {from: accounts[4]});
		const uintPmneVl0 = BigInt("121")
		const uintba73Mjk = BigInt("1289")
		const uintM9Knu44 = BigInt("1460")
		const uintZx4ZVjb = BigInt("1406")
		await WolfStakingRewardsCGcOXsn.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256LYZTRoq = await WolfStakingRewardsCGcOXsn.withdrawRemainingBalance.call(uintba73Mjk, uintPmneVl0, {from: accounts[0]});
		const uint256ERNunlS = await WolfStakingRewardsCGcOXsn.stake.call(uintZx4ZVjb, uintM9Knu44, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPwi0kw5 = "6ah3Bqpi5ivEqWCRVBTHF4AgRI6soqc61u5nYpSsYgwT1yOsmolEUmQoEGJxhtuovbnDaKAX3bVLf0hnj"
		const stringtuQQutb = "Vytl4OrZPXcQZDN6x5KUyCOUDIrSIR1Li9VWESpglEF40WZZFTrADHGcvvq5zmP"
		const uint66FJWS = BigInt("112")
		const WolfStakingRewardsJMHJvUb = await WolfStakingRewards.new(stringPwi0kw5, stringtuQQutb, uint66FJWS, {from: accounts[1]});
		const uinti0oXvma = BigInt("1730")
		const addresscN4bZdP = accounts[3]
		const uintKjH0UsR = BigInt("189")
		const uintlfmZMs2 = BigInt("429")
		const uintUhwbui = BigInt("1565")
		const uintt80jvii = BigInt("697")
		const uintzN9xaoB = BigInt("779")
		const address98lB0W = accounts[4]
		const uint256ua7xUPG = await WolfStakingRewardsJMHJvUb.balanceOfPerPool.call(addresscN4bZdP, uinti0oXvma, {from: accounts[0]});
		const uint256ZsUdDMD = await WolfStakingRewardsJMHJvUb.withdraw.call(uintlfmZMs2, uintKjH0UsR, {from: accounts[2]});
		const uint256xMQnzOf = await WolfStakingRewardsJMHJvUb.stake.call(uintt80jvii, uintUhwbui, {from: accounts[4]});
		await WolfStakingRewardsJMHJvUb.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256RhQdzcc = await WolfStakingRewardsJMHJvUb.balanceOfPerPool.call(address98lB0W, uintzN9xaoB, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresszoVF1z2 = accounts[5]
		const addressXhozBxu = accounts[2]
		const addressPmKLjJH = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(addresszoVF1z2, addressXhozBxu, addressPmKLjJH, {from: accounts[0]});
		const uint8pB4aT = BigInt("847")
		const uintwrc93VU = BigInt("944")
		const uintZO6xYrn = BigInt("1455")
		const uint256W22d4ue = await WolfStakingRewardskulP2xV.rewardPerToken.call(uint8pB4aT, {from: accounts[2]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintwrc93VU, {from: accounts[1]});
		const uint256jq1akOO = await WolfStakingRewardskulP2xV.exit.call(uintZO6xYrn, {from: accounts[1]});
		await WolfStakingRewardskulP2xV.onlyRewardsDistribution.call({from: accounts[0]});

		assert.equal(uint256W22d4ue, BigInt("0"))
		assert.equal(uint256WyVgQSV, BigInt("0"))
		await expect(WolfStakingRewardskulP2xV.exit.call(uintZO6xYrn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressMvQi5V2 = accounts[5]
		const addressC3Et9H = accounts[2]
		const addressfEWibfq = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(addressMvQi5V2, addressC3Et9H, addressfEWibfq, {from: accounts[0]});
		const uintBSl4oKa = BigInt("847")
		const uintz0DFdAi = BigInt("1199")
		const uintGeCBijX = BigInt("1150")
		const addresswwmVAXC = accounts[2]
		const uintCGTbvGX = BigInt("1678")
		const uintBhuIgzp = BigInt("13")
		const uintQGabwvc = BigInt("928")
		const uintO66cBFi = BigInt("560")
		const uintobTB9rV = BigInt("944")
		const uintaAG74B = BigInt("1315")
		const uint256W22d4ue = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintBSl4oKa, {from: accounts[2]});
		const uint256puqtWZ3 = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintz0DFdAi, {from: accounts[1]});
		const uint256KRIYb21 = await WolfStakingRewardskulP2xV.balanceOfPerPool.call(addresswwmVAXC, uintGeCBijX, {from: accounts[0]});
		const uint2564O9VE9 = await WolfStakingRewardskulP2xV.withdraw.call(uintBhuIgzp, uintCGTbvGX, {from: accounts[2]});
		const stringoJgCbpC = await WolfStakingRewardskulP2xV.symbol.call({from: accounts[1]});
		const uint256hxuCWaM = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintQGabwvc, {from: accounts[3]});
		const uint256PTfIWwF = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintO66cBFi, {from: accounts[0]});
		const uint8RruXh1J = await WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintobTB9rV, {from: accounts[1]});
		const uint256jEsNAbN = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintaAG74B, {from: accounts[4]});

		assert.equal(uint256KRIYb21, BigInt("0"))
		assert.equal(uint256W22d4ue, BigInt("0"))
		assert.equal(uint256puqtWZ3, BigInt("0"))
		await expect(WolfStakingRewardskulP2xV.withdraw.call(uintBhuIgzp, uintCGTbvGX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressy5i12ny = accounts[5]
		const addressl5v62KB = accounts[2]
		const addressGLm7Gli = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(addressy5i12ny, addressl5v62KB, addressGLm7Gli, {from: accounts[0]});
		const uintUdxMZi = BigInt("847")
		const uintBhYuoc = BigInt("1199")
		const uintpyDtRzn = BigInt("79")
		const uintIYcbVrP = BigInt("910")
		const uint256W22d4ue = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintUdxMZi, {from: accounts[2]});
		const uint256puqtWZ3 = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintBhYuoc, {from: accounts[1]});
		const uint256arraykugTWDZ = await WolfStakingRewardskulP2xV.updateNotifyRewardAmount.call(uintpyDtRzn, {from: accounts[0]});
		await WolfStakingRewardskulP2xV.nonReentrant.call({from: accounts[2]});
		const uint8RruXh1J = await WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintIYcbVrP, {from: accounts[1]});
		await WolfStakingRewardskulP2xV.onlyRewardsDistribution.call({from: accounts[0]});

		assert.equal(uint256W22d4ue, BigInt("0"))
		assert.equal(uint256puqtWZ3, BigInt("0"))
		await expect(WolfStakingRewardskulP2xV.updateNotifyRewardAmount.call(uintpyDtRzn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresskQeHBH5 = accounts[5]
		const addresszlHdrZ6 = accounts[2]
		const addressoYFX57y = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(addresskQeHBH5, addresszlHdrZ6, addressoYFX57y, {from: accounts[0]});
		const uintTMygne = BigInt("1527")
		const uintOY4XkpH = BigInt("847")
		const uintqpaKgG5 = BigInt("925")
		const uint256uElA3QA = await WolfStakingRewardskulP2xV.getRewardForDuration.call(uintTMygne, {from: accounts[2]});
		const uint256W22d4ue = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintOY4XkpH, {from: accounts[2]});
		const uint8RruXh1J = await WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintqpaKgG5, {from: accounts[1]});
		await WolfStakingRewardskulP2xV.onlyRewardsDistribution.call({from: accounts[0]});

		await expect(WolfStakingRewardskulP2xV.getRewardForDuration.call(uintTMygne, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressbpKDY0C = accounts[4]
		const addressEeFdiLk = accounts[0]
		const addresspVnUsww = accounts[0]
		const WolfStakingRewardscxBDLz6 = await WolfStakingRewards.new(addressbpKDY0C, addressEeFdiLk, addresspVnUsww, {from: "0x0000000000000000000000000000000000000001"});
		const uintlpYqUXh = BigInt("432")
		const uintL30nNr3 = BigInt("1318")
		const addressJEVBONJ = accounts[0]
		const uint256dW5bYY2 = await WolfStakingRewardscxBDLz6.lastTimeRewardApplicable.call(uintlpYqUXh, {from: accounts[3]});
		const uint256e6WkHqL = await WolfStakingRewardscxBDLz6.earned.call(addressJEVBONJ, uintL30nNr3, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressEtOF03W = accounts[5]
		const addressi9QGDzi = accounts[2]
		const addressfRhbRK = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(addressEtOF03W, addressi9QGDzi, addressfRhbRK, {from: accounts[0]});
		const uintD3iPQ3v = BigInt("847")
		const uintNq3nufD = BigInt("1199")
		const uintgkggTVZ = BigInt("1485")
		const uint7l6nVz = BigInt("1150")
		const addressU1frHUN = accounts[2]
		const uintst6PKc6 = BigInt("928")
		const uintVwv62f = BigInt("563")
		const uintBudbAX = BigInt("944")
		const uinttXfXH5 = BigInt("1315")
		const uint256W22d4ue = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintD3iPQ3v, {from: accounts[2]});
		const uint256puqtWZ3 = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintNq3nufD, {from: accounts[1]});
		const uint7dXHdL = await WolfStakingRewardskulP2xV.getReward.call(uintgkggTVZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KRIYb21 = await WolfStakingRewardskulP2xV.balanceOfPerPool.call(addressU1frHUN, uint7l6nVz, {from: accounts[0]});
		const uint256hxuCWaM = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintst6PKc6, {from: accounts[3]});
		const uint256PTfIWwF = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintVwv62f, {from: accounts[0]});
		const uint8RruXh1J = await WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintBudbAX, {from: accounts[1]});
		const uint256jEsNAbN = await WolfStakingRewardskulP2xV.rewardPerToken.call(uinttXfXH5, {from: accounts[4]});

		assert.equal(uint256KRIYb21, BigInt("0"))
		assert.equal(uint256PTfIWwF, BigInt("0"))
		assert.equal(uint256W22d4ue, BigInt("0"))
		assert.equal(uint256hxuCWaM, BigInt("0"))
		assert.equal(uint256puqtWZ3, BigInt("0"))
		await expect(WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressFKiQlCK = accounts[5]
		const addressqcVGXbV = accounts[2]
		const addressTMMjHc5 = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(addressFKiQlCK, addressqcVGXbV, addressTMMjHc5, {from: accounts[0]});
		const uintv5i05ND = BigInt("254")
		const uintCpplsAK = BigInt("1882")
		const uintW3MPxW7 = BigInt("579")
		const uintOLuuj6o = BigInt("1709")
		const uintL6r3bUx = BigInt("944")
		const uint256puqtWZ3 = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintv5i05ND, {from: accounts[1]});
		const uint256VUJ73Je = await WolfStakingRewardskulP2xV.stake.call(uintW3MPxW7, uintCpplsAK, {from: accounts[3]});
		const uint256on3Q529 = await WolfStakingRewardskulP2xV.lastTimeRewardApplicable.call(uintOLuuj6o, {from: accounts[3]});
		const uint8RruXh1J = await WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintL6r3bUx, {from: accounts[1]});
		await WolfStakingRewardskulP2xV.onlyRewardsDistribution.call({from: accounts[0]});
		const stringiCZErp9 = await WolfStakingRewardskulP2xV.symbol.call({from: accounts[5]});

		assert.equal(uint256puqtWZ3, BigInt("0"))
		await expect(WolfStakingRewardskulP2xV.stake.call(uintW3MPxW7, uintCpplsAK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressaMKrAo = accounts[5]
		const addressXLOxzSV = accounts[2]
		const addressBO40Lis = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(addressaMKrAo, addressXLOxzSV, addressBO40Lis, {from: accounts[0]});
		const uintx35wMf3 = BigInt("847")
		const uintCCTiASf = BigInt("1058")
		const uintdQ12bJp = BigInt("1648")
		const uintr40A2T = BigInt("944")
		const uintYE5lKoU = BigInt("1455")
		const uinta93PCxj = BigInt("533")
		const uint31YJDz = BigInt("1794")
		const uint256W22d4ue = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintx35wMf3, {from: accounts[2]});
		const uint256WWDBsNC = await WolfStakingRewardskulP2xV.withdrawRemainingBalance.call(uintdQ12bJp, uintCCTiASf, {from: accounts[3]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintr40A2T, {from: accounts[1]});
		const uint256jq1akOO = await WolfStakingRewardskulP2xV.exit.call(uintYE5lKoU, {from: accounts[1]});
		await WolfStakingRewardskulP2xV.nonReentrant.call({from: accounts[3]});
		await WolfStakingRewardskulP2xV.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256F9pNCPM = await WolfStakingRewardskulP2xV.stake.call(uint31YJDz, uinta93PCxj, {from: accounts[1]});

		assert.equal(uint256W22d4ue, BigInt("0"))
		await expect(WolfStakingRewardskulP2xV.withdrawRemainingBalance.call(uintdQ12bJp, uintCCTiASf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringXiczDDK = "1FUEwsZrbnq6F2yJfwlGRUR4G9UtRAvbChkJ"
		const stringihVAT7q = "odtelBaiFt6JTQua4oJnsKD"
		const uintKi6K10Y = BigInt("169")
		const WolfStakingRewardscWKRDK = await WolfStakingRewards.new(stringXiczDDK, stringihVAT7q, uintKi6K10Y, {from: accounts[4]});
		const uintKtUqfL4 = BigInt("152")
		const addresshGDXDkq = accounts[3]
		const uintK3tTXH3 = BigInt("689")
		const uintjdaqdKY = BigInt("1740")
		await WolfStakingRewardscWKRDK.onlyOwner.call({from: accounts[2]});
		const addressPOI77Mo = await WolfStakingRewardscWKRDK.updateReward.call(addresshGDXDkq, uintKtUqfL4, {from: accounts[4]});
		await WolfStakingRewardscWKRDK.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256uHbsTh = await WolfStakingRewardscWKRDK.withdraw.call(uintjdaqdKY, uintK3tTXH3, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressb75EvhO = accounts[5]
		const addressmC8j1q = accounts[2]
		const addressIbyjAlL = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(addressb75EvhO, addressmC8j1q, addressIbyjAlL, {from: accounts[0]});
		const uintsr0RBE = BigInt("847")
		const uintcZDilGv = BigInt("1199")
		const uintW7fWWko = BigInt("1483")
		const uintDCpHPhf = BigInt("1150")
		const addressZ5zFVKn = accounts[2]
		const uintONINRx5 = BigInt("928")
		const uintp1n6Tc = BigInt("563")
		const uinth2uKQ6m = BigInt("944")
		const uintpDiZeVV = BigInt("135")
		const uintDKJa7V1 = BigInt("1315")
		const uint256W22d4ue = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintsr0RBE, {from: accounts[2]});
		const uint256puqtWZ3 = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintcZDilGv, {from: accounts[1]});
		const uint7dXHdL = await WolfStakingRewardskulP2xV.getReward.call(uintW7fWWko, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KRIYb21 = await WolfStakingRewardskulP2xV.balanceOfPerPool.call(addressZ5zFVKn, uintDCpHPhf, {from: accounts[0]});
		const uint256hxuCWaM = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintONINRx5, {from: accounts[3]});
		const uint256PTfIWwF = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintp1n6Tc, {from: accounts[0]});
		const uint8RruXh1J = await WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uinth2uKQ6m, {from: accounts[1]});
		const uint256vmAjfd6 = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintpDiZeVV, {from: accounts[2]});
		const uint256jEsNAbN = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintDKJa7V1, {from: accounts[4]});

		assert.equal(uint256KRIYb21, BigInt("0"))
		assert.equal(uint256PTfIWwF, BigInt("0"))
		assert.equal(uint256W22d4ue, BigInt("0"))
		assert.equal(uint256hxuCWaM, BigInt("0"))
		assert.equal(uint256puqtWZ3, BigInt("0"))
		await expect(WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const address6kufUu = accounts[5]
		const addressXdLTzwT = accounts[2]
		const addressHTDv6KS = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(address6kufUu, addressXdLTzwT, addressHTDv6KS, {from: accounts[0]});
		const uintthYYvll = BigInt("847")
		const uintQs6hrIV = BigInt("476")
		const addressxOiSp4 = accounts[0]
		const uintqQz0i9g = BigInt("1199")
		const uintpG0EGjL = BigInt("1157")
		const addressNNjevAl = accounts[4]
		const uintwBhilSD = BigInt("1678")
		const uintTCj1HHT = BigInt("13")
		const uintntrQFgc = BigInt("928")
		const uintNPznD1O = BigInt("560")
		const uintZewDWIP = BigInt("944")
		const uintrcKFOVB = BigInt("1315")
		const uint256W22d4ue = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintthYYvll, {from: accounts[2]});
		const uint256y79MbpT = await WolfStakingRewardskulP2xV.balanceOfPerPool.call(addressxOiSp4, uintQs6hrIV, {from: accounts[3]});
		const uint256puqtWZ3 = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintqQz0i9g, {from: accounts[1]});
		const uint256KRIYb21 = await WolfStakingRewardskulP2xV.balanceOfPerPool.call(addressNNjevAl, uintpG0EGjL, {from: accounts[0]});
		const uint2564O9VE9 = await WolfStakingRewardskulP2xV.withdraw.call(uintTCj1HHT, uintwBhilSD, {from: accounts[2]});
		const stringoJgCbpC = await WolfStakingRewardskulP2xV.symbol.call({from: accounts[1]});
		const uint256hxuCWaM = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintntrQFgc, {from: accounts[3]});
		const uint256PTfIWwF = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintNPznD1O, {from: accounts[0]});
		const uint8RruXh1J = await WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintZewDWIP, {from: accounts[1]});
		const uint256jEsNAbN = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintrcKFOVB, {from: accounts[4]});

		assert.equal(uint256KRIYb21, BigInt("0"))
		assert.equal(uint256W22d4ue, BigInt("0"))
		assert.equal(uint256puqtWZ3, BigInt("0"))
		assert.equal(uint256y79MbpT, BigInt("0"))
		await expect(WolfStakingRewardskulP2xV.withdraw.call(uintTCj1HHT, uintwBhilSD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressJo3jVrf = accounts[5]
		const addressjkbmNgh = accounts[2]
		const addressaSAbi2m = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(addressJo3jVrf, addressjkbmNgh, addressaSAbi2m, {from: accounts[0]});
		const uintILo0jpD = BigInt("183")
		const uintugN94ZN = BigInt("1991")
		const uintgS5Wxd7 = BigInt("716")
		const uintyXJ6DpJ = BigInt("237")
		const uint4XPKZ0 = BigInt("847")
		const uintTQCoq6p = BigInt("944")
		const uintwOHg9VX = BigInt("1452")
		const uintjEtlq9e = BigInt("351")
		const uint256lEvBuH = await WolfStakingRewardskulP2xV.stake.call(uintugN94ZN, uintILo0jpD, {from: accounts[3]});
		const uint256FZhV32U = await WolfStakingRewardskulP2xV.stake.call(uintyXJ6DpJ, uintgS5Wxd7, {from: accounts[0]});
		const uint256W22d4ue = await WolfStakingRewardskulP2xV.rewardPerToken.call(uint4XPKZ0, {from: accounts[2]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintTQCoq6p, {from: accounts[1]});
		const uint256jq1akOO = await WolfStakingRewardskulP2xV.exit.call(uintwOHg9VX, {from: accounts[1]});
		await WolfStakingRewardskulP2xV.onlyRewardsDistribution.call({from: accounts[0]});
		const uintE0MOWzP = await WolfStakingRewardskulP2xV.getReward.call(uintjEtlq9e, {from: accounts[1]});

		await expect(WolfStakingRewardskulP2xV.stake.call(uintugN94ZN, uintILo0jpD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringsJISfEc = "a5ccDcJ33RDRcVmCF87xyF8Gday64RPb"
		const stringQWU1RFF = "4GiuPm4SzGy8V"
		const uintFJS8lKf = BigInt("181")
		const WolfStakingRewardsFcgBIfY = await WolfStakingRewards.new(stringsJISfEc, stringQWU1RFF, uintFJS8lKf, {from: accounts[3]});
		const uintjaX5XA6 = BigInt("1171")
		const uintfijrKI5 = BigInt("1818")
		const stringvS8HvP = await WolfStakingRewardsFcgBIfY.symbol.call({from: accounts[2]});
		const uint256sW1tlkg = await WolfStakingRewardsFcgBIfY.totalSupplyPerPool.call(uintjaX5XA6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayGI7S2Ha = await WolfStakingRewardsFcgBIfY.updateNotifyRewardAmount.call(uintfijrKI5, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKV3aNgo = "EvUMPhzR3meGF1WfGiB9G4Gnd7FbjRSMGM3QP2ufsvxNBkaxYqvc3PBHm7fj1BxwOPdPucjtqhElriVB6sn1h"
		const stringM9YxmtK = "nANtHIdndo"
		const uintk4gCQcK = BigInt("34")
		const WolfStakingRewardsjKdSq4 = await WolfStakingRewards.new(stringKV3aNgo, stringM9YxmtK, uintk4gCQcK, {from: accounts[5]});
		const uintqVkyyAo = BigInt("1647")
		const uintUJLaqVh = BigInt("1322")
		const uintYOi6HS = BigInt("984")
		const stringoHjlPj5 = await WolfStakingRewardsjKdSq4.name.call({from: accounts[5]});
		const uint256wLqNDLF = await WolfStakingRewardsjKdSq4.exit.call(uintqVkyyAo, {from: accounts[0]});
		const uint256h43UiOc = await WolfStakingRewardsjKdSq4.withdraw.call(uintYOi6HS, uintUJLaqVh, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdKfoJD = "50EFBUwXbAvZfaa5bVn2TuaxflGtvmIKjryLgYUErN4cvCBRvoupg3u2meT4qmdkDwQs"
		const stringfGm48yV = "5qgbFDsFAKB2VCsrVtXE7AmS1HU3B0EUD"
		const uintX5WdnQ1 = BigInt("65")
		const WolfStakingRewardsg963vYF = await WolfStakingRewards.new(stringdKfoJD, stringfGm48yV, uintX5WdnQ1, {from: accounts[2]});
		const uintMvSAPtC = BigInt("732")
		const uintXAA67ui = BigInt("1298")
		const uint256prh8G0P = await WolfStakingRewardsg963vYF.totalSupplyPerPool.call(uintMvSAPtC, {from: accounts[3]});
		const uint256Fk8bb0 = await WolfStakingRewardsg963vYF.getRewardForDuration.call(uintXAA67ui, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringx2NaxTa = "Sdigh5XyVsWOIAT6o8uCSkW0LULTI4et3UvOFHzdsjugO2SB6g6ZzWXbwYJemkUoLALBOAd739I4N2VzlgeMCjie5yguQVn"
		const stringNWlTS5J = "EtCCZlMaE0r1WFmE3OHb4hhqD9pMpYfrBHIXSdtZjSL0OVUud"
		const uintaaTvnEV = BigInt("147")
		const WolfStakingRewardssGotno = await WolfStakingRewards.new(stringx2NaxTa, stringNWlTS5J, uintaaTvnEV, {from: accounts[1]});
		const uintK4xrxik = BigInt("867")
		const uintL6K030U = BigInt("1977")
		const uintf6cAEZL = BigInt("1538")
		const uintRKbpJe = BigInt("257")
		await WolfStakingRewardssGotno.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardssGotno.nonReentrant.call({from: accounts[4]});
		await WolfStakingRewardssGotno.nonReentrant.call({from: accounts[3]});
		const uint256TH44opP = await WolfStakingRewardssGotno.withdraw.call(uintL6K030U, uintK4xrxik, {from: accounts[2]});
		const uint256RArBHOl = await WolfStakingRewardssGotno.exit.call(uintf6cAEZL, {from: accounts[4]});
		const uintGjcsYfo = await WolfStakingRewardssGotno.getReward.call(uintRKbpJe, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJsJQK04 = "xxcGmeN8PxsDCijzwjvHAaH9cOZY3u49PKPpDUAPzGQoMdN1Vr"
		const stringlnnuYzp = "2PCCAgnlax8mY14AeAB6"
		const uintw3jQdeo = BigInt("223")
		const WolfStakingRewardsIVkvOc = await WolfStakingRewards.new(stringJsJQK04, stringlnnuYzp, uintw3jQdeo, {from: accounts[0]});
		const uintGqLzjb = BigInt("600")
		const uintvQKfuav = BigInt("450")
		const uintCGd9EEA = BigInt("403")
		const addresseVYE2KJ = accounts[2]
		const uintoTGGWxL = BigInt("1607")
		const uint256h8jK1fu = await WolfStakingRewardsIVkvOc.withdraw.call(uintvQKfuav, uintGqLzjb, {from: accounts[2]});
		const uint256tiAuxSx = await WolfStakingRewardsIVkvOc.earned.call(addresseVYE2KJ, uintCGd9EEA, {from: accounts[1]});
		const uint256arrayx2mf7of = await WolfStakingRewardsIVkvOc.updateNotifyRewardAmount.call(uintoTGGWxL, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringp15ji0m = "rQKOI4Qja2HxPfChK4d8dJfwx1EDqwKEowQzM9Vv0Qj1C5geuUIPvYdJepmrdtwzyV3G8PgKwEK"
		const string6VIpUf = "fjJX1rjpp4AcvVfEF0m9"
		const uintTMpIJT = BigInt("186")
		const WolfStakingRewardsFAQF103 = await WolfStakingRewards.new(stringp15ji0m, string6VIpUf, uintTMpIJT, {from: accounts[4]});
		const uintWxjOSy = BigInt("1044")
		const uintFbP1iu8 = BigInt("1475")
		const uintv71axp4 = BigInt("1728")
		const uintdXStNd = BigInt("41")
		await WolfStakingRewardsFAQF103.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256gFyjryr = await WolfStakingRewardsFAQF103.getRewardForDuration.call(uintWxjOSy, {from: accounts[1]});
		const uint256L28a7VT = await WolfStakingRewardsFAQF103.lastTimeRewardApplicable.call(uintFbP1iu8, {from: accounts[4]});
		const uint256ufu3zC0 = await WolfStakingRewardsFAQF103.getRewardForDuration.call(uintv71axp4, {from: accounts[2]});
		const uint256YSvYkqF = await WolfStakingRewardsFAQF103.getRewardForDuration.call(uintdXStNd, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringD7FlzmZ = "z8fLcNHFzFzVXRMDykGYI3vgdmBxKyinTzqaRV7f9ziYbzwzLKSngmJzgG7R1vGMP3CjSYM"
		const stringIti1DAy = "Wb1kMPTMqBN5RUKR85LSzT393TLPDqJWgf5xZyvY5B5bI1v4menDrCoksCMjUs"
		const uintivyVci = BigInt("5")
		const WolfStakingRewardssY6XJLD = await WolfStakingRewards.new(stringD7FlzmZ, stringIti1DAy, uintivyVci, {from: accounts[0]});
		const uintfoBuJI = BigInt("257")
		const uint256ZjRxNHr = await WolfStakingRewardssY6XJLD.getRewardForDuration.call(uintfoBuJI, {from: accounts[1]});
		await WolfStakingRewardssY6XJLD.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjT7uH5c = "waNIvhNJrDLmOIKyTcaxNHRb44LGDe3L6vCxyhLngyBa29XPpLUqH3JO2RewqDogabU5F4m5"
		const stringudPtnW6 = "TIeQ1kDAeLiKt0P2zEsOWqCOc09eN"
		const uintXZKDNgQ = BigInt("186")
		const WolfStakingRewardsc9neiAb = await WolfStakingRewards.new(stringjT7uH5c, stringudPtnW6, uintXZKDNgQ, {from: accounts[4]});
		const uintBlgrbcg = BigInt("1828")
		const uintY1RfIHy = BigInt("1746")
		const uintj6p3lI3 = BigInt("163")
		const uintnYPMC5W = BigInt("502")
		const addressLSo72QS = accounts[4]
		const uintIQPxYlC = BigInt("596")
		const addressnb7cCIv = accounts[4]
		const uint256arrayRvEHAwH = await WolfStakingRewardsc9neiAb.updateNotifyRewardAmount.call(uintBlgrbcg, {from: accounts[3]});
		const uint256iVicMiG = await WolfStakingRewardsc9neiAb.stake.call(uintj6p3lI3, uintY1RfIHy, {from: accounts[4]});
		const uint256OjtkVbC = await WolfStakingRewardsc9neiAb.balanceOfPerPool.call(addressLSo72QS, uintnYPMC5W, {from: accounts[3]});
		const addressVO5I4jQ = await WolfStakingRewardsc9neiAb.updateReward.call(addressnb7cCIv, uintIQPxYlC, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRyjtq1O = "xA0rV5LWQ5S52CwOqSAHtMhD8ObdWBzjem9R2iLRkKM9ggz7SROm85z2N2sbKtccUlicv3WXqwgWsmA6ccOt8bp4Qr8365okO7"
		const stringgEletTm = "jt3p2SeNCI2Bf9NyzioYolejf55cuwNSFDkGuYMMKCLytnwi"
		const uintjEeob00 = BigInt("80")
		const WolfStakingRewards3Eyq0J = await WolfStakingRewards.new(stringRyjtq1O, stringgEletTm, uintjEeob00, {from: accounts[0]});
		const uintKB5nSNV = BigInt("1696")
		const addressvMFls7l = "0x0000000000000000000000000000000000000001"
		const uintnanjVQg = BigInt("1095")
		const addressQJ0Yc67 = accounts[0]
		const uintgonedTl = BigInt("1468")
		const uinte746xJh = BigInt("91")
		const uint256fW7MSUV = await WolfStakingRewards3Eyq0J.balanceOfPerPool.call(addressvMFls7l, uintKB5nSNV, {from: accounts[2]});
		const uint256ijRVZQO = await WolfStakingRewards3Eyq0J.balanceOfPerPool.call(addressQJ0Yc67, uintnanjVQg, {from: accounts[1]});
		const uint256FrwKyP = await WolfStakingRewards3Eyq0J.exit.call(uintgonedTl, {from: accounts[4]});
		await WolfStakingRewards3Eyq0J.onlyOwner.call({from: accounts[2]});
		const uint256arrayhSmEi3N = await WolfStakingRewards3Eyq0J.updateNotifyRewardAmount.call(uinte746xJh, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoht2e1p = "5uFSxbb"
		const stringZeNBuae = "I7EmgubWqio1zbaU8wSptss"
		const uintiiyuFlh = BigInt("47")
		const WolfStakingRewards9CZIjp = await WolfStakingRewards.new(stringoht2e1p, stringZeNBuae, uintiiyuFlh, {from: accounts[4]});
		const uintGVz3W2 = BigInt("892")
		const uint256QZwMh3J = await WolfStakingRewards9CZIjp.rewardPerToken.call(uintGVz3W2, {from: accounts[4]});
		await WolfStakingRewards9CZIjp.nonReentrant.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQzQXy04 = "NCNqchHtYApIgPMcxxiYFXYSt2Pzq6IbL9UNAhRf6RyRT"
		const stringR1iUNiG = "1dydc4kSO4If4whD65XoH"
		const uintoApw6HX = BigInt("239")
		const WolfStakingRewardsJQzZGj1 = await WolfStakingRewards.new(stringQzQXy04, stringR1iUNiG, uintoApw6HX, {from: accounts[2]});
		const uintVc3Dku4 = BigInt("1768")
		const addressEFr70Xo = accounts[3]
		const uintCetGm91 = BigInt("1136")
		const addresswS8qegL = accounts[2]
		const uintysrI0n3 = BigInt("1819")
		const addressZrEDa3n = await WolfStakingRewardsJQzZGj1.updateReward.call(addressEFr70Xo, uintVc3Dku4, {from: accounts[4]});
		const uint256hfi9spn = await WolfStakingRewardsJQzZGj1.earned.call(addresswS8qegL, uintCetGm91, {from: accounts[5]});
		const uint256arrayelqQSFu = await WolfStakingRewardsJQzZGj1.updateNotifyRewardAmount.call(uintysrI0n3, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringOSes10Z = "lVLEpBbdTKdKiY5QsV7cL"
		const stringCrZ9Usc = "Z3SzSQLMWEFGscPwe1VXik7TTxDhSEgtpo3PcgIrvq9aBVrFxxW7nKv"
		const uintZM0kkN = BigInt("154")
		const WolfStakingRewardsYI6tBLj = await WolfStakingRewards.new(stringOSes10Z, stringCrZ9Usc, uintZM0kkN, {from: accounts[3]});
		const uintCurdRtE = BigInt("1870")
		const uintLbPuwD = BigInt("1435")
		const uintIrd8lxy = BigInt("57")
		const uintRBHTWwT = BigInt("1015")
		const uintAsoqkkf = BigInt("1980")
		const addresspWysEGH = accounts[2]
		const uint256HrDwAU = await WolfStakingRewardsYI6tBLj.totalSupplyPerPool.call(uintCurdRtE, {from: accounts[2]});
		const uint256KdYyQac = await WolfStakingRewardsYI6tBLj.getRewardForDuration.call(uintLbPuwD, {from: accounts[4]});
		const uint256xMhKwfx = await WolfStakingRewardsYI6tBLj.exit.call(uintIrd8lxy, {from: accounts[5]});
		await WolfStakingRewardsYI6tBLj.nonReentrant.call({from: accounts[2]});
		const uintGfuhyEU = await WolfStakingRewardsYI6tBLj.getReward.call(uintRBHTWwT, {from: accounts[1]});
		const addresss6yrGnB = await WolfStakingRewardsYI6tBLj.updateReward.call(addresspWysEGH, uintAsoqkkf, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrY6HNe4 = "sQzvv9XYswE2uU7giSy1XnLgl7GWbdC987CPk9xgtBg9PFMP20rxjsluSO3Tex2Es"
		const stringTYG3xYl = "N4wDeFPVI6EUv1ui9vTuUT4AdUbwNtCtb5dehS0BQ5yrBkx8FyOv9HauQskuNH2M9jfURNh"
		const uintDo6176m = BigInt("225")
		const WolfStakingRewardsBF8xBY3 = await WolfStakingRewards.new(stringrY6HNe4, stringTYG3xYl, uintDo6176m, {from: accounts[1]});
		const uint6VZNiQ = BigInt("1764")
		const uintmKRM8yU = BigInt("716")
		const uint00s1qL = BigInt("970")
		const addressbf1pPNQ = accounts[3]
		const uint8Nj7j9J3 = await WolfStakingRewardsBF8xBY3.decimals.call({from: accounts[0]});
		const uint256oqmxviM = await WolfStakingRewardsBF8xBY3.withdraw.call(uintmKRM8yU, uint6VZNiQ, {from: accounts[1]});
		const addressX4mMRiw = await WolfStakingRewardsBF8xBY3.updateReward.call(addressbf1pPNQ, uint00s1qL, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAaCjQf9 = "45hlfC5AIH8jxAbzVCuFvShBdmMgEXTxN9kv2iMRZkEzWM17fWIGI1NUulpEw"
		const stringrsvMk9o = "uYwhPP0x3j6VymzmSdbPsdkHbTddSXrPnftT6NBizWkL51"
		const uintm6GSjgg = BigInt("16")
		const WolfStakingRewardsQeMEbpS = await WolfStakingRewards.new(stringAaCjQf9, stringrsvMk9o, uintm6GSjgg, {from: accounts[1]});
		const uinthNwwldZ = BigInt("1887")
		const uintu4wtKjm = BigInt("706")
		const uintQdUhiEt = BigInt("1785")
		const uintmlZEV9R = BigInt("2012")
		const uintMIJcvCD = BigInt("1863")
		const addressPGOnIXf = accounts[1]
		const uint256cZPT8ah = await WolfStakingRewardsQeMEbpS.lastTimeRewardApplicable.call(uinthNwwldZ, {from: accounts[4]});
		const uint256KB9gy5r = await WolfStakingRewardsQeMEbpS.exit.call(uintu4wtKjm, {from: accounts[2]});
		const uint256arrayGRghQXq = await WolfStakingRewardsQeMEbpS.updateNotifyRewardAmount.call(uintQdUhiEt, {from: accounts[0]});
		const uint256GK7AA0D = await WolfStakingRewardsQeMEbpS.getRewardForDuration.call(uintmlZEV9R, {from: "0x0000000000000000000000000000000000000001"});
		const stringMFCdMdi = await WolfStakingRewardsQeMEbpS.symbol.call({from: accounts[3]});
		const uint256BZJ2iY = await WolfStakingRewardsQeMEbpS.balanceOfPerPool.call(addressPGOnIXf, uintMIJcvCD, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxzuTgVq = "DbN6913okkkS4iGuxb3n1FJRSFNsQGfLprjl8siS1Boati5anlYjsM6JXE3opRo9hqenk"
		const stringiLwmVTL = "pf8dqfK1MDMzNeIahH6lDyG9pbOGqzg4cRrqMRXAhGrzPm699xDuK3cw6sAb9152ygolg0cig4A82ycLy"
		const uintudQYMMd = BigInt("37")
		const WolfStakingRewards1DiW5v = await WolfStakingRewards.new(stringxzuTgVq, stringiLwmVTL, uintudQYMMd, {from: accounts[3]});
		const uintnWL2tm3 = BigInt("923")
		const addressEfSYdT = accounts[5]
		const uintosRqQwU = BigInt("394")
		const uint3rHJkp = BigInt("497")
		const uintoZORrsI = BigInt("615")
		const uintZeTizHH = BigInt("1127")
		const uintoX7mhj = BigInt("65")
		const uintaJKCDi = BigInt("712")
		const addressmF6pvRF = await WolfStakingRewards1DiW5v.updateReward.call(addressEfSYdT, uintnWL2tm3, {from: accounts[3]});
		const uint25699ZoVm = await WolfStakingRewards1DiW5v.getRewardForDuration.call(uintosRqQwU, {from: accounts[2]});
		const uintekmOma = await WolfStakingRewards1DiW5v.getReward.call(uint3rHJkp, {from: accounts[1]});
		const uint256tpCPVYu = await WolfStakingRewards1DiW5v.withdraw.call(uintZeTizHH, uintoZORrsI, {from: accounts[1]});
		const uint256aedIDhB = await WolfStakingRewards1DiW5v.stake.call(uintaJKCDi, uintoX7mhj, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxQDBux7 = "qOhu4bSb7NvRqt9NdzGqKgz0VnC0YDpeSBuOuQdnA8QwlJDZFh6fIBvSvJ25oi65zY3vgj1S"
		const stringOA1mgNP = "t52TLz9mekbwwXH99lcPvyzogRaJISklnh5FFen4mULtJ2p6"
		const uintBYMEq08 = BigInt("74")
		const WolfStakingRewardsK1TiGCN = await WolfStakingRewards.new(stringxQDBux7, stringOA1mgNP, uintBYMEq08, {from: accounts[2]});
		const uintT5T6mPR = BigInt("1538")
		const addressGhA1D1Z = accounts[1]
		const uintVy7t8z4 = BigInt("1389")
		const uinty8874GD = BigInt("1374")
		const addressKdoSgYm = accounts[0]
		const uintryiMKG = BigInt("42")
		const uint256LZ6O0A = await WolfStakingRewardsK1TiGCN.earned.call(addressGhA1D1Z, uintT5T6mPR, {from: accounts[5]});
		const uint256tZhrX7N = await WolfStakingRewardsK1TiGCN.rewardPerToken.call(uintVy7t8z4, {from: accounts[3]});
		const uint256xT8kj1I = await WolfStakingRewardsK1TiGCN.balanceOfPerPool.call(addressKdoSgYm, uinty8874GD, {from: accounts[3]});
		const uint256YAkGd6b = await WolfStakingRewardsK1TiGCN.lastTimeRewardApplicable.call(uintryiMKG, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJoUcTfU = "PFFnyN6I49OI7Qpi8EaaMXd7npD0S"
		const stringf5gWx3L = "Lzag5f6JpVC1A7XxeVkOece1GIpldUHmVrJo3eklAviS5pkKIaTiLftJm2b2r9uKB43SM8VIdURFF"
		const uintqsOekD = BigInt("75")
		const WolfStakingRewardsSEsJEJ7 = await WolfStakingRewards.new(stringJoUcTfU, stringf5gWx3L, uintqsOekD, {from: accounts[3]});
		const uintRCyBvha = BigInt("141")
		const addressqPSW6CH = accounts[1]
		const uintxecZFLI = BigInt("795")
		const uintq2lU1z = BigInt("1319")
		const addressETYtVDr = accounts[3]
		await WolfStakingRewardsSEsJEJ7.onlyOwner.call({from: accounts[4]});
		const stringcJsrYFD = await WolfStakingRewardsSEsJEJ7.symbol.call({from: accounts[3]});
		const uint256uJwmOfj = await WolfStakingRewardsSEsJEJ7.balanceOfPerPool.call(addressqPSW6CH, uintRCyBvha, {from: accounts[3]});
		const uint256SWi9hTm = await WolfStakingRewardsSEsJEJ7.lastTimeRewardApplicable.call(uintxecZFLI, {from: "0x0000000000000000000000000000000000000001"});
		const addressqBhOWCV = await WolfStakingRewardsSEsJEJ7.updateReward.call(addressETYtVDr, uintq2lU1z, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresskUJbxdr = accounts[5]
		const addressdUxneqS = accounts[2]
		const addressOKeRWiZ = accounts[5]
		const WolfStakingRewardskulP2xV = await WolfStakingRewards.new(addresskUJbxdr, addressdUxneqS, addressOKeRWiZ, {from: accounts[0]});
		const uintSN7P4te = BigInt("847")
		const uintCugvSrw = BigInt("692")
		const uintKS4eL9R = BigInt("1199")
		const uintVyw1vFe = BigInt("1485")
		const uintJoze8nH = BigInt("523")
		const uintpwVSbmM = BigInt("554")
		const uintM8lZtd = BigInt("680")
		const uintx5N92y = BigInt("1797")
		const uintgNDnPqw = BigInt("563")
		const uintIwhAteU = BigInt("1907")
		const uintiK6EYo = BigInt("944")
		const uintPps6D93 = BigInt("869")
		const uintRAbRzC9 = BigInt("975")
		const addressuwtMLJr = accounts[5]
		const uint256W22d4ue = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintSN7P4te, {from: accounts[2]});
		const uint256iT7Kib = await WolfStakingRewardskulP2xV.lastTimeRewardApplicable.call(uintCugvSrw, {from: accounts[5]});
		const uint256puqtWZ3 = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintKS4eL9R, {from: accounts[1]});
		const uint7dXHdL = await WolfStakingRewardskulP2xV.getReward.call(uintVyw1vFe, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iCqTfd = await WolfStakingRewardskulP2xV.withdrawRemainingBalance.call(uintpwVSbmM, uintJoze8nH, {from: accounts[0]});
		const uint256hxuCWaM = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintM8lZtd, {from: accounts[3]});
		const uint256EByHsn = await WolfStakingRewardskulP2xV.exit.call(uintx5N92y, {from: accounts[0]});
		const uint256PTfIWwF = await WolfStakingRewardskulP2xV.rewardPerToken.call(uintgNDnPqw, {from: accounts[0]});
		const uint256jmzKDeb = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintIwhAteU, {from: accounts[2]});
		const uint8RruXh1J = await WolfStakingRewardskulP2xV.decimals.call({from: accounts[3]});
		const uint256WyVgQSV = await WolfStakingRewardskulP2xV.totalSupplyPerPool.call(uintiK6EYo, {from: accounts[1]});
		const uint256SlhrV0r = await WolfStakingRewardskulP2xV.lastTimeRewardApplicable.call(uintPps6D93, {from: accounts[4]});
		const addressKDQDhct = await WolfStakingRewardskulP2xV.updateReward.call(addressuwtMLJr, uintRAbRzC9, {from: accounts[4]});

		assert.equal(uint256W22d4ue, BigInt("0"))
		assert.equal(uint256iT7Kib, BigInt("0"))
		assert.equal(uint256puqtWZ3, BigInt("0"))
		await expect(WolfStakingRewardskulP2xV.withdrawRemainingBalance.call(uintpwVSbmM, uintJoze8nH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringgZIAowK = "BoFTQe1OpduQvrf3SAQAWMC2ASONCIgoEGmxEkkVzOY1G"
		const stringdLJp0eX = "5WALnktigf2O5TRfcANIncsyhB9G5X6Z92fm"
		const uintR8Nsj2A = BigInt("148")
		const WolfStakingRewardspWyc9tS = await WolfStakingRewards.new(stringgZIAowK, stringdLJp0eX, uintR8Nsj2A, {from: accounts[2]});
		const uintNW4IYLM = BigInt("211")
		const addresstHwBaum = accounts[0]
		const uintpKFTp0s = BigInt("8")
		const uintT2WloFa = BigInt("907")
		const uint256DonPhk6 = await WolfStakingRewardspWyc9tS.balanceOfPerPool.call(addresstHwBaum, uintNW4IYLM, {from: accounts[1]});
		const uint256PB7FEet = await WolfStakingRewardspWyc9tS.exit.call(uintpKFTp0s, {from: accounts[3]});
		const uint256RZaAqo = await WolfStakingRewardspWyc9tS.totalSupplyPerPool.call(uintT2WloFa, {from: accounts[3]});
		const stringhpRsc6P = await WolfStakingRewardspWyc9tS.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardspWyc9tS.nonReentrant.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkV7kOXH = "dynSo2ufU8uqzdEXySSjccMILQwzbVnx6uP7F6igw0cF27"
		const stringWT8iTGB = "8Fg9OJNbNgRNOMMARq7kVtVsFPLRKqoDBkoAm4iw6poCs6UGWDcSrTqikQxpKNKGeoFSBXQ2PmT88d"
		const uintV6pJsM4 = BigInt("93")
		const WolfStakingRewardsFJ1mOPH = await WolfStakingRewards.new(stringkV7kOXH, stringWT8iTGB, uintV6pJsM4, {from: accounts[4]});
		const uintHJVqC9G = BigInt("1097")
		const uintIOj0DaZ = BigInt("265")
		const uintUaayBZ = BigInt("442")
		await WolfStakingRewardsFJ1mOPH.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256BntzJu2 = await WolfStakingRewardsFJ1mOPH.getRewardForDuration.call(uintHJVqC9G, {from: accounts[0]});
		const uint256k4OkF3f = await WolfStakingRewardsFJ1mOPH.totalSupplyPerPool.call(uintIOj0DaZ, {from: accounts[4]});
		await WolfStakingRewardsFJ1mOPH.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zOVaYkO = await WolfStakingRewardsFJ1mOPH.totalSupplyPerPool.call(uintUaayBZ, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZ74lDQj = "nkMtxzT2tokLHJBn8qjg17q325H9qfUfVMNDOVkf4PEF7CkuWwwIMhLlPVC1u52DSg9EnDlbhtO6y"
		const stringKPFbRP3 = "wfxZRLIA9iKjEFij4i5pzCMEx5BQTNGP"
		const uintyWJTe3G = BigInt("117")
		const WolfStakingRewardsDw2CIgR = await WolfStakingRewards.new(stringZ74lDQj, stringKPFbRP3, uintyWJTe3G, {from: accounts[0]});
		const uintQqw3Wgh = BigInt("608")
		const uintFrCnagI = BigInt("1894")
		const uintnmWqVlF = BigInt("1374")
		const uintUvezBtD = BigInt("1136")
		const addressByB1AVR = accounts[2]
		const uintVlLNYWN = BigInt("915")
		const uint256yYGxacH = await WolfStakingRewardsDw2CIgR.stake.call(uintFrCnagI, uintQqw3Wgh, {from: accounts[3]});
		const uint256Vj6n6zj = await WolfStakingRewardsDw2CIgR.lastTimeRewardApplicable.call(uintnmWqVlF, {from: accounts[2]});
		const stringG7uloek = await WolfStakingRewardsDw2CIgR.symbol.call({from: accounts[2]});
		const addressteNmcZX = await WolfStakingRewardsDw2CIgR.updateReward.call(addressByB1AVR, uintUvezBtD, {from: accounts[0]});
		const uintxnb82P6 = await WolfStakingRewardsDw2CIgR.getReward.call(uintVlLNYWN, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringitDB3ky = "7eKHWe1Th8GBnEu1wWrTjYv9hcfDfbCAx1HeVTAN3IwIHylJJBZ8DSGWtaI"
		const stringHIiWkpe = "C3jYrUURiWS8"
		const uintvMc0vgj = BigInt("249")
		const WolfStakingRewardsEnErkT = await WolfStakingRewards.new(stringitDB3ky, stringHIiWkpe, uintvMc0vgj, {from: accounts[3]});
		const uintoaUDrjn = BigInt("1715")
		const uintJLd4iq8 = BigInt("468")
		const addressG5cP7K = accounts[4]
		const uintkFCYBk = BigInt("1306")
		const uintjr0wFhI = BigInt("1185")
		await WolfStakingRewardsEnErkT.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256arrayqAw7TXe = await WolfStakingRewardsEnErkT.updateNotifyRewardAmount.call(uintoaUDrjn, {from: accounts[2]});
		const uint256M2oyBP6 = await WolfStakingRewardsEnErkT.earned.call(addressG5cP7K, uintJLd4iq8, {from: accounts[4]});
		const uintKJd9rM = await WolfStakingRewardsEnErkT.getReward.call(uintkFCYBk, {from: accounts[0]});
		const uint256arrayCE1iIr7 = await WolfStakingRewardsEnErkT.updateNotifyRewardAmount.call(uintjr0wFhI, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringk8nYbhb = "YxAs5MdJRgO64jJ1QBrUQrNjMNOuYeSs"
		const stringzhWdg7N = "wEh2rHFoR1zBbe8HTqUxc5HU0YQZg7uEess4oEwmvQJuIaSPVMdvafLzSwg"
		const uintrB5egk = BigInt("36")
		const WolfStakingRewardsmYBfr65 = await WolfStakingRewards.new(stringk8nYbhb, stringzhWdg7N, uintrB5egk, {from: accounts[3]});
		const uintsObyj2J = BigInt("897")
		const uintFJYXzz = BigInt("521")
		const uintNvu2Km3 = BigInt("924")
		const uint256GCVlDdk = await WolfStakingRewardsmYBfr65.lastTimeRewardApplicable.call(uintsObyj2J, {from: accounts[1]});
		await WolfStakingRewardsmYBfr65.nonReentrant.call({from: accounts[3]});
		const uint256wR3c8OT = await WolfStakingRewardsmYBfr65.stake.call(uintNvu2Km3, uintFJYXzz, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpO8IBxZ = "xbfnJ27QUOGZUacKUXFElK0vp"
		const stringY6RopG6 = "ljm1OHQaQVcKc9ldgNlh6RMcUlxSXEx45aHDHk7YrGs89xPmsB"
		const uintwxmWdDK = BigInt("106")
		const WolfStakingRewardsOugKLx5 = await WolfStakingRewards.new(stringpO8IBxZ, stringY6RopG6, uintwxmWdDK, {from: accounts[4]});
		const uintR7SqQC = BigInt("701")
		const uintCn5lLY = BigInt("1303")
		const uintienahKM = BigInt("801")
		const uintKNGyT1E = BigInt("1849")
		const uintrfYzjK = BigInt("1661")
		const uint256xXdgYvX = await WolfStakingRewardsOugKLx5.lastTimeRewardApplicable.call(uintR7SqQC, {from: accounts[2]});
		const uint256pUdwJmu = await WolfStakingRewardsOugKLx5.stake.call(uintienahKM, uintCn5lLY, {from: accounts[2]});
		const uint256BuMatbi = await WolfStakingRewardsOugKLx5.getRewardForDuration.call(uintKNGyT1E, {from: accounts[4]});
		const uint256azq42kE = await WolfStakingRewardsOugKLx5.exit.call(uintrfYzjK, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnqSsjnq = "1"
		const stringE5FWl8 = "eMq7Ahuh4SsfkKxG2DXch3OzsUjjCPeJDeDfah"
		const uintrgb27W1 = BigInt("67")
		const WolfStakingRewardsYLD01Hv = await WolfStakingRewards.new(stringnqSsjnq, stringE5FWl8, uintrgb27W1, {from: accounts[1]});
		const uintmBIOgzl = BigInt("151")
		const uintlr71zxX = BigInt("859")
		const uintuoFq36Q = BigInt("513")
		const address04jUQE = accounts[3]
		const uinteC3yTgO = BigInt("460")
		const uint256ttTPlba = await WolfStakingRewardsYLD01Hv.withdrawRemainingBalance.call(uintlr71zxX, uintmBIOgzl, {from: accounts[2]});
		const addressvGNvHTi = await WolfStakingRewardsYLD01Hv.updateReward.call(address04jUQE, uintuoFq36Q, {from: accounts[2]});
		const uint8j29Oj1f = await WolfStakingRewardsYLD01Hv.decimals.call({from: accounts[4]});
		const stringywlR50s = await WolfStakingRewardsYLD01Hv.symbol.call({from: accounts[1]});
		const uint256VgURcl = await WolfStakingRewardsYLD01Hv.lastTimeRewardApplicable.call(uinteC3yTgO, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKV2FgRv = "DSxpvOjjM698vo"
		const stringuUWmz66 = ""
		const uintV04PdIl = BigInt("77")
		const WolfStakingRewardsI9f73ws = await WolfStakingRewards.new(stringKV2FgRv, stringuUWmz66, uintV04PdIl, {from: accounts[2]});
		const uintmZtgEfo = BigInt("1522")
		const addressu73MgD7 = accounts[4]
		const uintfEH0aCT = BigInt("1323")
		const uintgJXZC67 = BigInt("1070")
		const addresscfNXRLh = await WolfStakingRewardsI9f73ws.updateReward.call(addressu73MgD7, uintmZtgEfo, {from: accounts[3]});
		const uint256HWVtgTo = await WolfStakingRewardsI9f73ws.totalSupplyPerPool.call(uintfEH0aCT, {from: accounts[0]});
		const uint256AQPrif = await WolfStakingRewardsI9f73ws.exit.call(uintgJXZC67, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDu48iP = "Ntw9XnHg4tNjMRxxwi7i2czmdK7w"
		const stringpwFZ4gP = "uE6NrWZBhtRH42Td98Rv9skwfhQkAUPnd2Pjm7Ue5eW4kiVBNV6MybNVMYfDcGJ2wcD0DYeuc1OWPY3ddB5uMxAGLeY"
		const uintgSD54qj = BigInt("34")
		const WolfStakingRewardshL3pYPK = await WolfStakingRewards.new(stringDu48iP, stringpwFZ4gP, uintgSD54qj, {from: accounts[1]});
		const uintWzqy1up = BigInt("869")
		const addressZdBYvu2 = "0x0000000000000000000000000000000000000001"
		const uintuRkUJW7 = BigInt("1976")
		const uintA5j7Xof = BigInt("283")
		const addressynxi0AJ = accounts[1]
		const uint256c00Vjlk = await WolfStakingRewardshL3pYPK.balanceOfPerPool.call(addressZdBYvu2, uintWzqy1up, {from: "0x0000000000000000000000000000000000000001"});
		const uint256lKXDbY = await WolfStakingRewardshL3pYPK.lastTimeRewardApplicable.call(uintuRkUJW7, {from: accounts[3]});
		const uint256a5azTgJ = await WolfStakingRewardshL3pYPK.earned.call(addressynxi0AJ, uintA5j7Xof, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDcLAfak = "zKNMKJz87AkXIg1JP9mQDdpY41JWGgyaC5ACKLIU8sRKW2eaaGmu9Vw8JETAFEdNDcobfy26"
		const stringsSKrWKT = "7OJ"
		const uintrSt91rP = BigInt("24")
		const WolfStakingRewardsZILj3aG = await WolfStakingRewards.new(stringDcLAfak, stringsSKrWKT, uintrSt91rP, {from: accounts[5]});
		const uintAOn8oTT = BigInt("396")
		const uintbp3GTw5 = BigInt("1977")
		const uintMKgtvN6 = BigInt("23")
		const uintmHWAfoC = BigInt("1472")
		const uintXdPXHon = BigInt("836")
		const addressPzVR3qM = accounts[1]
		const uintNX319L4 = BigInt("1063")
		const uint256M4oozYw = await WolfStakingRewardsZILj3aG.withdrawRemainingBalance.call(uintbp3GTw5, uintAOn8oTT, {from: accounts[4]});
		const uint256s6C0WrV = await WolfStakingRewardsZILj3aG.withdrawRemainingBalance.call(uintmHWAfoC, uintMKgtvN6, {from: accounts[3]});
		const uint256AdTodLh = await WolfStakingRewardsZILj3aG.balanceOfPerPool.call(addressPzVR3qM, uintXdPXHon, {from: accounts[5]});
		const uint256Nwv9r9 = await WolfStakingRewardsZILj3aG.getRewardForDuration.call(uintNX319L4, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringT27C2TC = "PthUoVpTilcUYrNUrk7cDixK1npgkPadORrMjTnVoctnFYtomSAhutd7NuYgiPnaz2Yna"
		const stringulS7sy3 = "U9g7NCPbpusM2wAwM"
		const uintSfmnoGA = BigInt("223")
		const WolfStakingRewardsEtIiFP9 = await WolfStakingRewards.new(stringT27C2TC, stringulS7sy3, uintSfmnoGA, {from: accounts[4]});
		const uintK38k7ph = BigInt("1839")
		const uintomd8s4r = BigInt("1721")
		const uint8M2hSbNS = await WolfStakingRewardsEtIiFP9.decimals.call({from: accounts[3]});
		const uintH5OzW7A = await WolfStakingRewardsEtIiFP9.getReward.call(uintK38k7ph, {from: accounts[3]});
		const uintGWqsUn0 = await WolfStakingRewardsEtIiFP9.getReward.call(uintomd8s4r, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrYplRdp = "r5iU4ZPrsKVVLgi65nxxxgOKJcBJ6oN6klDE0J2CA2F6naHNg989eFyNKMyarYrDO5eiCuiZSRNufyxho44P"
		const stringuOAuW42 = "Ukd5gMCqd72fLspfxhqSH19zrVJ1DTS9effCRSRGG1wHgpu38lJQS9qoD6pZ1iou2UKe5w2YabM4MJ6qWqS"
		const uinthm4pEGK = BigInt("231")
		const WolfStakingRewardsaewtbz4 = await WolfStakingRewards.new(stringrYplRdp, stringuOAuW42, uinthm4pEGK, {from: "0x0000000000000000000000000000000000000001"});
		const uintypbHDW3 = BigInt("2019")
		const uintftsOSaa = BigInt("446")
		const uinttCPHEfJ = BigInt("1813")
		const addressgwNIa1x = accounts[0]
		const uint5M3u5Y = BigInt("843")
		const uintGP1J6Ec = BigInt("1982")
		const uint256Isn7ka7 = await WolfStakingRewardsaewtbz4.lastTimeRewardApplicable.call(uintypbHDW3, {from: accounts[1]});
		await WolfStakingRewardsaewtbz4.nonReentrant.call({from: accounts[3]});
		const uint256JsIGsUW = await WolfStakingRewardsaewtbz4.lastTimeRewardApplicable.call(uintftsOSaa, {from: accounts[3]});
		const addressXZFyw0j = await WolfStakingRewardsaewtbz4.updateReward.call(addressgwNIa1x, uinttCPHEfJ, {from: accounts[0]});
		const uint256qMzlWgm = await WolfStakingRewardsaewtbz4.stake.call(uintGP1J6Ec, uint5M3u5Y, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringl08hlQ9 = "ojl6ZKaQ6VrpOoWsL04BxBoVFaA572TOGsz96YA2zR9lW6hD7SKpNNhwTPkvVnd75v3jpdrCUlLho8DtwpSz"
		const stringvobJO4h = "tU2ywlFL66LduUYF74yf3EPKI21csX0GS7goEo6DU"
		const uintO8ZQw28 = BigInt("232")
		const WolfStakingRewardsbDHEPYI = await WolfStakingRewards.new(stringl08hlQ9, stringvobJO4h, uintO8ZQw28, {from: accounts[1]});
		const uintbtvHgmZ = BigInt("2008")
		const uintpm5wbX = BigInt("1696")
		const uintfoAOSb9 = BigInt("1124")
		const uintURnu3na = await WolfStakingRewardsbDHEPYI.getReward.call(uintbtvHgmZ, {from: accounts[4]});
		const uint256RfDKMst = await WolfStakingRewardsbDHEPYI.getRewardForDuration.call(uintpm5wbX, {from: accounts[1]});
		const uint2561a6ycN = await WolfStakingRewardsbDHEPYI.rewardPerToken.call(uintfoAOSb9, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringURy9ENt = "7tPrxS3Jen0eTwPeXcAEiHdjQihHCmVRTzha6vJ6jq2d5qcZi4cGTXwkYdDOop4bREReZ2SDGxbReEpJh"
		const stringX5rI2FK = "oh9ILrN8OyCqME7K8oQNB2VX7EpwWx8U9QcSN1x3Y27XpeusYEfWjUV53"
		const uintypKvTJ = BigInt("120")
		const WolfStakingRewardsf6LfkMN = await WolfStakingRewards.new(stringURy9ENt, stringX5rI2FK, uintypKvTJ, {from: accounts[4]});
		const uintWa6pMcY = BigInt("81")
		const uint8CQUizab = await WolfStakingRewardsf6LfkMN.decimals.call({from: accounts[4]});
		const uint256BA8nyz = await WolfStakingRewardsf6LfkMN.totalSupplyPerPool.call(uintWa6pMcY, {from: accounts[1]});
		const uint8eD6tESM = await WolfStakingRewardsf6LfkMN.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTvomJzF = "1M3Kvap8P5qz17imIgf3xJrgdqWt01e6XkBfYEtwxv5GRX2q8oTMKJMvDVpdCyHr6bGKe7AyVQ14pR"
		const stringnRmRqVn = "GKEtEKeU9rxo6dQY5hzyJNqYE2W0vIK6HCKFg7CQ6kNZUbUZRiQkFMTGZlwCREA49QIft0uqcMEq193G4T"
		const uintiuuWY5a = BigInt("52")
		const WolfStakingRewardsFm2mHzH = await WolfStakingRewards.new(stringTvomJzF, stringnRmRqVn, uintiuuWY5a, {from: accounts[4]});
		const uintwNaNj9O = BigInt("1201")
		const stringlX86JnE = await WolfStakingRewardsFm2mHzH.symbol.call({from: accounts[3]});
		await WolfStakingRewardsFm2mHzH.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256P1ethk = await WolfStakingRewardsFm2mHzH.lastTimeRewardApplicable.call(uintwNaNj9O, {from: accounts[1]});
		await WolfStakingRewardsFm2mHzH.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzi1csp = "zRBYJEMM72o8KYyqn9MhU"
		const stringoJU096q = "fcSkc6mFxRyHHCDUzkV6IsCidJaq24PH4ZcHPxdsq0uOEhDW"
		const uinttOM4se6 = BigInt("215")
		const WolfStakingRewardsA9L88Ru = await WolfStakingRewards.new(stringzi1csp, stringoJU096q, uinttOM4se6, {from: accounts[2]});
		const uintDfEX5eu = BigInt("1123")
		const uint256rQ6BgPK = await WolfStakingRewardsA9L88Ru.lastTimeRewardApplicable.call(uintDfEX5eu, {from: accounts[1]});
		const stringOwnA6vB = await WolfStakingRewardsA9L88Ru.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpMH9AS6 = "v6tjGJYEYTHlqX1X1mHVll9r4frvh54XBU4qrPOpuyVqdlkqsSdWvl"
		const stringStXrDyp = "kkpYpnLwFQlcczVGCxt7LbtBnxuWP4griAShtMH"
		const uintLMBKAjD = BigInt("18")
		const WolfStakingRewardsGXEZ5hT = await WolfStakingRewards.new(stringpMH9AS6, stringStXrDyp, uintLMBKAjD, {from: accounts[5]});
		const uintTgaJMgo = BigInt("850")
		const uintvd5Tz1W = BigInt("241")
		const uintVOnbJF9 = BigInt("1869")
		const addressNIC9w3L = accounts[4]
		await WolfStakingRewardsGXEZ5hT.nonReentrant.call({from: accounts[5]});
		const uint256IrNhc1u = await WolfStakingRewardsGXEZ5hT.withdraw.call(uintvd5Tz1W, uintTgaJMgo, {from: accounts[0]});
		const uint8M59RhhX = await WolfStakingRewardsGXEZ5hT.decimals.call({from: accounts[4]});
		const uint256qCzdCEh = await WolfStakingRewardsGXEZ5hT.earned.call(addressNIC9w3L, uintVOnbJF9, {from: accounts[4]});
		await WolfStakingRewardsGXEZ5hT.nonReentrant.call({from: accounts[3]});
		const stringECRPB7A = await WolfStakingRewardsGXEZ5hT.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringOVhB5oz = "xuO1CmxsburIKV1LX6qD6zGKD8UuhqUS2hOb8Ranogop89EsyUAqMPuPApUJ3b3Lex3GA9gmHiRZBG1vsaTSWpvs"
		const string0ZBhmW = "8SLi5Rj82l3BGwitdWpiYT8dkHye8lp"
		const uintkB06tc2 = BigInt("38")
		const WolfStakingRewardsrAhVoL1 = await WolfStakingRewards.new(stringOVhB5oz, string0ZBhmW, uintkB06tc2, {from: accounts[5]});
		const uintOTed9f = BigInt("1153")
		const uintGIXPyGh = BigInt("968")
		const addressF8Yw1hB = accounts[0]
		const uintkNFYuhF = BigInt("1335")
		const uint256UgMIynR = await WolfStakingRewardsrAhVoL1.totalSupplyPerPool.call(uintOTed9f, {from: "0x0000000000000000000000000000000000000001"});
		const addressX9JAIys = await WolfStakingRewardsrAhVoL1.updateReward.call(addressF8Yw1hB, uintGIXPyGh, {from: accounts[4]});
		const uint256PUo9E4H = await WolfStakingRewardsrAhVoL1.rewardPerToken.call(uintkNFYuhF, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnNHMTCp = "laRhIG5dzjRN8631XvLAUsVqdgRTwnevfuMIeEuYpUkaJ5gdYqEHpCu5SmqqOyStFGSfNEWDjphmrmrUrmjX6CJiVHSo"
		const stringyealvvz = "75xNfxxctzEVcI1pIe23bg5cbe99aX4kl"
		const uintEaEZkJ = BigInt("93")
		const WolfStakingRewardsEDo5PFH = await WolfStakingRewards.new(stringnNHMTCp, stringyealvvz, uintEaEZkJ, {from: accounts[5]});
		const uintsTF9wJ = BigInt("1841")
		const uintL3yKD6 = BigInt("1420")
		const addressYk0cgb6 = accounts[4]
		const stringvH74uF = await WolfStakingRewardsEDo5PFH.name.call({from: accounts[4]});
		const uint256Bww1JSz = await WolfStakingRewardsEDo5PFH.rewardPerToken.call(uintsTF9wJ, {from: accounts[1]});
		const uint256PlM7HuM = await WolfStakingRewardsEDo5PFH.balanceOfPerPool.call(addressYk0cgb6, uintL3yKD6, {from: accounts[0]});
	});
})