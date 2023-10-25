const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressFm0bFAO = accounts[4]
		const addressSDILLEf = accounts[5]
		const addressGh9FAVp = accounts[4]
		const BACMARSLPTOKENPoolbVnxPg = await BACMARSLPTOKENPool.new(addressFm0bFAO, addressSDILLEf, addressGh9FAVp, {from: accounts[1]});
		await BACMARSLPTOKENPoolbVnxPg.getReward.call({from: accounts[1]});
		const uint8uvmhR8y = await BACMARSLPTOKENPoolbVnxPg.decimals.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolbVnxPg.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdeupvIS = "UnBUeBqrlTVx8hj83NXiJ7hua8ea"
		const stringBHKR8EJ = "Mgwc5r"
		const uintOAixwCU = BigInt("91")
		const BACMARSLPTOKENPoolIabNSlC = await BACMARSLPTOKENPool.new(stringdeupvIS, stringBHKR8EJ, uintOAixwCU, {from: accounts[3]});
		const addressP5UPcx = "0x0000000000000000000000000000000000000001"
		await BACMARSLPTOKENPoolIabNSlC.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const stringJFaep0k = await BACMARSLPTOKENPoolIabNSlC.symbol.call({from: accounts[1]});
		const uint256TpXNryk = await BACMARSLPTOKENPoolIabNSlC.balanceOf.call(addressP5UPcx, {from: accounts[3]});
		const uint8naiz6YI = await BACMARSLPTOKENPoolIabNSlC.decimals.call({from: accounts[5]});
		await BACMARSLPTOKENPoolIabNSlC.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuVSEfZ = "umfJtDzOaCoWKTJp"
		const stringSqBkxEu = "noSB4uCqGqH8D9iPm4wuIrR"
		const uintf84XjwR = BigInt("163")
		const BACMARSLPTOKENPoolP2Oxf3s = await BACMARSLPTOKENPool.new(stringuVSEfZ, stringSqBkxEu, uintf84XjwR, {from: accounts[3]});
		const bytecjMT31B = "0x02141016150e02011703170d1a12140c051d121b2002140b1012050e1b0e1819"
		const byteLGOkWQ = "0x09010416081d090314150f0b091f050a0d08060f070d1f03060120070d1b1003"
		const uintjBBmCzY = BigInt("72")
		const uintNud8nxv = BigInt("710")
		const uint1YwxFi = BigInt("786")
		const addressU492Xm = accounts[4]
		const addressesDhIu6 = accounts[0]
		await BACMARSLPTOKENPoolP2Oxf3s.exit.call({from: accounts[3]});
		const uint256YCvWDv = await BACMARSLPTOKENPoolP2Oxf3s.stakeWithPermit.call(uint1YwxFi, uintNud8nxv, uintjBBmCzY, byteLGOkWQ, bytecjMT31B, {from: accounts[3]});
		const uint256R0cyEm = await BACMARSLPTOKENPoolP2Oxf3s.balanceOf.call(addressU492Xm, {from: accounts[3]});
		const uint256LJ58aEA = await BACMARSLPTOKENPoolP2Oxf3s.balanceOf.call(addressesDhIu6, {from: accounts[1]});
		await BACMARSLPTOKENPoolP2Oxf3s.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMPdpbw8 = "HEkH73wlQmT7u6Ex2eKS4N8Jo0CozoDSnRY5fKAuNWitO6EGaw3IExt7GKO0OvlrqjwVHDKBPuORZY8iSuJoi9n"
		const stringkwfIaj8 = "zxaMqzCHr6cfJFeTxyLXRAxvtgdXn06hAuAjpbiyNmY7qfxwH4qk6BDDcLHaPlyQ1i"
		const uintDyLDYk = BigInt("234")
		const BACMARSLPTOKENPoolaA96hP = await BACMARSLPTOKENPool.new(stringMPdpbw8, stringkwfIaj8, uintDyLDYk, {from: accounts[4]});
		const addresslG4EFKC = accounts[3]
		await BACMARSLPTOKENPoolaA96hP.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolaA96hP.nonReentrant.call({from: accounts[5]});
		const uint2568SsR6P = await BACMARSLPTOKENPoolaA96hP.balanceOf.call(addresslG4EFKC, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressEg4ehMy = accounts[3]
		const addressVOXAV1M = accounts[1]
		const addressPq7RwDJ = accounts[2]
		const BACMARSLPTOKENPoolPWyhnWz = await BACMARSLPTOKENPool.new(addressEg4ehMy, addressVOXAV1M, addressPq7RwDJ, {from: accounts[0]});
		const uintuoZqZ1r = BigInt("265")
		const uintFoICGEo = BigInt("1491")
		const uintb4iehCj = BigInt("512")
		const uint256DjGEMYW = await BACMARSLPTOKENPoolPWyhnWz.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256u8kKbFz = await BACMARSLPTOKENPoolPWyhnWz.notifyRewardAmount.call(uintuoZqZ1r, {from: accounts[3]});
		const uint256iecHUdY = await BACMARSLPTOKENPoolPWyhnWz.notifyRewardAmount.call(uintFoICGEo, {from: accounts[2]});
		const uint256KBZuUT0 = await BACMARSLPTOKENPoolPWyhnWz.withdraw.call(uintb4iehCj, {from: accounts[5]});

		assert.equal(uint256DjGEMYW, BigInt("0"))
		await expect(BACMARSLPTOKENPoolPWyhnWz.notifyRewardAmount.call(uintuoZqZ1r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressQjFzLJc = accounts[5]
		const addressOCz5a7i = accounts[3]
		const addresstmKpnFc = accounts[2]
		const BACMARSLPTOKENPoolwEdc5PW = await BACMARSLPTOKENPool.new(addressQjFzLJc, addressOCz5a7i, addresstmKpnFc, {from: accounts[0]});
		const addressZ4EahbV = accounts[5]
		const uintpDKoF5 = BigInt("285")
		const uint256hoc00Do = await BACMARSLPTOKENPoolwEdc5PW.balanceOf.call(addressZ4EahbV, {from: accounts[0]});
		const uint256fJlKYFl = await BACMARSLPTOKENPoolwEdc5PW.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256idIetYa = await BACMARSLPTOKENPoolwEdc5PW.getRewardForDuration.call({from: accounts[1]});
		const uint256XBDzQbd = await BACMARSLPTOKENPoolwEdc5PW.stake.call(uintpDKoF5, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolwEdc5PW.onlyRewardsDistribution.call({from: accounts[3]});

		assert.equal(uint256fJlKYFl, BigInt("0"))
		assert.equal(uint256hoc00Do, BigInt("0"))
		assert.equal(uint256idIetYa, BigInt("0"))
		await expect(BACMARSLPTOKENPoolwEdc5PW.stake.call(uintpDKoF5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZkM7cT7 = "LtGSaw7N6H7tEHZshJ9mRN27MNryWxKaiMtXjwoCQewFDUrRpXqUw3"
		const string29qOMG = "RmS6il4Tiig57SWrZZdwURmud9IfmTiyD3P"
		const uintON0cbcz = BigInt("178")
		const BACMARSLPTOKENPoolsSDFtBn = await BACMARSLPTOKENPool.new(stringZkM7cT7, string29qOMG, uintON0cbcz, {from: accounts[2]});
		const addressll2LFs = accounts[3]
		const stringB1Zqyf3 = await BACMARSLPTOKENPoolsSDFtBn.symbol.call({from: accounts[1]});
		const uint256IW3NAf = await BACMARSLPTOKENPoolsSDFtBn.balanceOf.call(addressll2LFs, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfaw8FpY = "tPCHGyrn9F1Tu11smv4XfYAyYOKEg3PuhSlLwJWYcpELfNaUf"
		const stringJR16tN = "latBO0oU3aPV5vd1ttpOG9U1jmmjAf1LHjlB3oZHKiqW3eTswIctVgbFJjVRME4"
		const uintsC50r0 = BigInt("201")
		const BACMARSLPTOKENPoolmGyQeJ = await BACMARSLPTOKENPool.new(stringfaw8FpY, stringJR16tN, uintsC50r0, {from: accounts[4]});
		const addressL2K28B = accounts[0]
		const uintEA9GmU = BigInt("466")
		const uint256e1LY4q = await BACMARSLPTOKENPoolmGyQeJ.getRewardForDuration.call({from: accounts[4]});
		const stringaARwfeg = await BACMARSLPTOKENPoolmGyQeJ.symbol.call({from: accounts[1]});
		const uint256yXOLg8d = await BACMARSLPTOKENPoolmGyQeJ.earned.call(addressL2K28B, {from: accounts[1]});
		const uint256vpe4HvB = await BACMARSLPTOKENPoolmGyQeJ.getRewardForDuration.call({from: accounts[2]});
		const uint2563XQa4d = await BACMARSLPTOKENPoolmGyQeJ.withdraw.call(uintEA9GmU, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdd758ZG = accounts[4]
		const addressu616MkP = accounts[5]
		const addressejyMpXZ = accounts[4]
		const BACMARSLPTOKENPoolbVnxPg = await BACMARSLPTOKENPool.new(addressdd758ZG, addressu616MkP, addressejyMpXZ, {from: accounts[1]});
		await BACMARSLPTOKENPoolbVnxPg.getReward.call({from: accounts[1]});
		const uint8uvmhR8y = await BACMARSLPTOKENPoolbVnxPg.decimals.call({from: accounts[3]});
		const uint256o2A8AhX = await BACMARSLPTOKENPoolbVnxPg.totalSupply.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolbVnxPg.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressTDuUutf = accounts[4]
		const addressScDAK7C = accounts[5]
		const addresst6VydXi = accounts[4]
		const BACMARSLPTOKENPoolbVnxPg = await BACMARSLPTOKENPool.new(addressTDuUutf, addressScDAK7C, addresst6VydXi, {from: accounts[1]});
		const byteln5jm6d = "0x20170e0d01190e1d02130b1e050b0a07071401131c161602120207080a081e1e"
		const byteFr4wl7T = "0x10040d181f1e0f1718051c1203181815100d04071d06120b08070219140d0718"
		const uintOftvPIX = BigInt("175")
		const uintX2aGYX = BigInt("1668")
		const uintThlkAuh = BigInt("673")
		await BACMARSLPTOKENPoolbVnxPg.getReward.call({from: accounts[1]});
		await BACMARSLPTOKENPoolbVnxPg.exit.call({from: accounts[2]});
		const uint8uvmhR8y = await BACMARSLPTOKENPoolbVnxPg.decimals.call({from: accounts[3]});
		const uint256xvvVXv5 = await BACMARSLPTOKENPoolbVnxPg.stakeWithPermit.call(uintThlkAuh, uintX2aGYX, uintOftvPIX, byteFr4wl7T, byteln5jm6d, {from: accounts[0]});
		const uint2561g027Z = await BACMARSLPTOKENPoolbVnxPg.totalSupply.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolbVnxPg.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLfRSXmQ = "LYauOk3lQO1HwMSB4upDMiQL2jb9UYpALnyTGkjMaRhUJ7VWhsUpmy4fHU3u4xxGqh"
		const stringLXX58K = "xVXdfI6BH2E7rUtxHAYMFMQaqj4"
		const uintQP60Fbm = BigInt("255")
		const BACMARSLPTOKENPoolk3eDNNN = await BACMARSLPTOKENPool.new(stringLfRSXmQ, stringLXX58K, uintQP60Fbm, {from: "0x0000000000000000000000000000000000000001"});
		const uintuvV1N7h = BigInt("783")
		await BACMARSLPTOKENPoolk3eDNNN.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256D4Ahg5R = await BACMARSLPTOKENPoolk3eDNNN.notifyRewardAmount.call(uintuvV1N7h, {from: accounts[2]});
		const uint256d8O2ngT = await BACMARSLPTOKENPoolk3eDNNN.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pD7mcWy = await BACMARSLPTOKENPoolk3eDNNN.rewardPerToken.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressJr35O1 = accounts[5]
		const addressAYPRcfT = accounts[3]
		const addressbWxSsgD = accounts[2]
		const BACMARSLPTOKENPoolwEdc5PW = await BACMARSLPTOKENPool.new(addressJr35O1, addressAYPRcfT, addressbWxSsgD, {from: accounts[0]});
		const addressRTHCfXB = accounts[5]
		const uintH6DxvcC = BigInt("275")
		const uint256hoc00Do = await BACMARSLPTOKENPoolwEdc5PW.balanceOf.call(addressRTHCfXB, {from: accounts[0]});
		const uint256fJlKYFl = await BACMARSLPTOKENPoolwEdc5PW.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256idIetYa = await BACMARSLPTOKENPoolwEdc5PW.getRewardForDuration.call({from: accounts[1]});
		const uint256XBDzQbd = await BACMARSLPTOKENPoolwEdc5PW.stake.call(uintH6DxvcC, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolwEdc5PW.onlyRewardsDistribution.call({from: accounts[3]});

		assert.equal(uint256fJlKYFl, BigInt("0"))
		assert.equal(uint256hoc00Do, BigInt("0"))
		assert.equal(uint256idIetYa, BigInt("0"))
		await expect(BACMARSLPTOKENPoolwEdc5PW.stake.call(uintH6DxvcC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZmIdUtz = ""
		const stringSoMIpUp = "wEhlHch2lba7x4W5KQOo3idruo8e77dAZa8wSI9ozqJdSaXY9JjS"
		const uintbNy3glx = BigInt("242")
		const BACMARSLPTOKENPoolVI9h60W = await BACMARSLPTOKENPool.new(stringZmIdUtz, stringSoMIpUp, uintbNy3glx, {from: accounts[3]});
		const uintDeTkXBo = BigInt("1310")
		const uintz5a68TK = BigInt("861")
		const uint256EY6JJJu = await BACMARSLPTOKENPoolVI9h60W.notifyRewardAmount.call(uintDeTkXBo, {from: accounts[2]});
		const uint8GG1JCCF = await BACMARSLPTOKENPoolVI9h60W.decimals.call({from: accounts[3]});
		const uint256gnauJfz = await BACMARSLPTOKENPoolVI9h60W.withdraw.call(uintz5a68TK, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresskrL7pz = accounts[5]
		const address2cuhji = accounts[3]
		const addressYkdQ7C = accounts[2]
		const BACMARSLPTOKENPoolwEdc5PW = await BACMARSLPTOKENPool.new(addresskrL7pz, address2cuhji, addressYkdQ7C, {from: accounts[0]});
		const addressCIVoELF = accounts[5]
		const uintqim34Il = BigInt("164")
		const uintwRON4cV = BigInt("285")
		const uint256hoc00Do = await BACMARSLPTOKENPoolwEdc5PW.balanceOf.call(addressCIVoELF, {from: accounts[0]});
		const uint256JfTxpI = await BACMARSLPTOKENPoolwEdc5PW.notifyRewardAmount.call(uintqim34Il, {from: accounts[4]});
		const uint256fJlKYFl = await BACMARSLPTOKENPoolwEdc5PW.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolwEdc5PW.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256idIetYa = await BACMARSLPTOKENPoolwEdc5PW.getRewardForDuration.call({from: accounts[1]});
		const uint256XBDzQbd = await BACMARSLPTOKENPoolwEdc5PW.stake.call(uintwRON4cV, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolwEdc5PW.onlyRewardsDistribution.call({from: accounts[3]});

		assert.equal(uint256hoc00Do, BigInt("0"))
		await expect(BACMARSLPTOKENPoolwEdc5PW.notifyRewardAmount.call(uintqim34Il, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhw9wWGq = "LcElVQy1eyg747yBPNc4uKrcro6utqUPFUOIy0mH"
		const stringVieVyg0 = ""
		const uintJk9IP9Q = BigInt("183")
		const BACMARSLPTOKENPoolOXme9XL = await BACMARSLPTOKENPool.new(stringhw9wWGq, stringVieVyg0, uintJk9IP9Q, {from: accounts[4]});
		const uintJbxIhcM = BigInt("939")
		const uint256C3muRjb = await BACMARSLPTOKENPoolOXme9XL.withdraw.call(uintJbxIhcM, {from: accounts[4]});
		await BACMARSLPTOKENPoolOXme9XL.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVRVA0Pk = "ndj6SR1piw3WR5dK"
		const stringGppJZAR = "6"
		const uintYRIT4An = BigInt("37")
		const BACMARSLPTOKENPoolCDq5lQ = await BACMARSLPTOKENPool.new(stringVRVA0Pk, stringGppJZAR, uintYRIT4An, {from: accounts[1]});
		const stringLoPMlA6 = await BACMARSLPTOKENPoolCDq5lQ.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPoolCDq5lQ.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresswW7DLhC = accounts[5]
		const addressvMrRnv1 = accounts[3]
		const addressDX2kyH = accounts[2]
		const BACMARSLPTOKENPoolwEdc5PW = await BACMARSLPTOKENPool.new(addresswW7DLhC, addressvMrRnv1, addressDX2kyH, {from: accounts[0]});
		const addressX1pq4uR = accounts[5]
		const uintt6owgMm = BigInt("276")
		const uint256hoc00Do = await BACMARSLPTOKENPoolwEdc5PW.balanceOf.call(addressX1pq4uR, {from: accounts[0]});
		const uint256fJlKYFl = await BACMARSLPTOKENPoolwEdc5PW.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256idIetYa = await BACMARSLPTOKENPoolwEdc5PW.getRewardForDuration.call({from: accounts[1]});
		const uint256SGJP2t3 = await BACMARSLPTOKENPoolwEdc5PW.totalSupply.call({from: accounts[1]});
		const uint256XBDzQbd = await BACMARSLPTOKENPoolwEdc5PW.stake.call(uintt6owgMm, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolwEdc5PW.onlyRewardsDistribution.call({from: accounts[3]});

		assert.equal(uint256SGJP2t3, BigInt("0"))
		assert.equal(uint256fJlKYFl, BigInt("0"))
		assert.equal(uint256hoc00Do, BigInt("0"))
		assert.equal(uint256idIetYa, BigInt("0"))
		await expect(BACMARSLPTOKENPoolwEdc5PW.stake.call(uintt6owgMm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoegeJr = "qB6pyOexxNScXktfts8ulKM25kosncYeR9UGQmGllUfZZH1GUBHCqkSm"
		const stringhZoG5Kr = "4qmi5sdn6ezSDmno4PxsgEeVrvRUggLku8uQD7Xqf7p5oAlRApfuMvDhIDPMJeVHZdxi5Zmhl3M1O1HcU"
		const uintFlV44Rt = BigInt("59")
		const BACMARSLPTOKENPoolyrnkErT = await BACMARSLPTOKENPool.new(stringoegeJr, stringhZoG5Kr, uintFlV44Rt, {from: accounts[2]});
		const uintUG8xDRs = BigInt("1590")
		const addressgjJlgbz = accounts[3]
		const uint256ij3anos = await BACMARSLPTOKENPoolyrnkErT.stake.call(uintUG8xDRs, {from: accounts[4]});
		const uint256wIg8Gk4 = await BACMARSLPTOKENPoolyrnkErT.rewardPerToken.call({from: accounts[4]});
		const uint256ci8oVBZ = await BACMARSLPTOKENPoolyrnkErT.earned.call(addressgjJlgbz, {from: accounts[1]});
		await BACMARSLPTOKENPoolyrnkErT.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIsKPWPb = "Vy1hiekK5lXGUMm57DWzLXy6CgAegcWWTAxCF8LfaGY5GcSzWlp2TRJiGA"
		const stringaruvbmu = "gjUQA1dx5hAJHSkrIcNb5yslygAE7ekYvfoS5U5lkq8WYi1rqeuTQH61vovO58GHseXWDjNIYytNuUwXJM"
		const uintEYFYsHS = BigInt("55")
		const BACMARSLPTOKENPoola1x9Vnt = await BACMARSLPTOKENPool.new(stringIsKPWPb, stringaruvbmu, uintEYFYsHS, {from: accounts[2]});
		const uint256pcwMQo = await BACMARSLPTOKENPoola1x9Vnt.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoola1x9Vnt.nonReentrant.call({from: accounts[5]});
		await BACMARSLPTOKENPoola1x9Vnt.getReward.call({from: accounts[4]});
		const uint256xFm7l4 = await BACMARSLPTOKENPoola1x9Vnt.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoola1x9Vnt.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressCWgz9IE = accounts[4]
		const addressJjOT5w9 = accounts[5]
		const addresslAuxUm = accounts[4]
		const BACMARSLPTOKENPoolbVnxPg = await BACMARSLPTOKENPool.new(addressCWgz9IE, addressJjOT5w9, addresslAuxUm, {from: accounts[1]});
		const byteFPA1eg5 = "0x080a1d0d1b1020170d201c1103071b131514111a1d06160620190906180c1113"
		const byteXTskeBW = "0x061b031213091c010c09130a1805110e010303080f14050d031502151c020a0c"
		const uintomGO9Un = BigInt("206")
		const uintsxWVBgE = BigInt("973")
		const uinthZHYVFT = BigInt("1765")
		const uint1QDveu = BigInt("782")
		const uint256tjEXLG6 = await BACMARSLPTOKENPoolbVnxPg.stakeWithPermit.call(uinthZHYVFT, uintsxWVBgE, uintomGO9Un, byteXTskeBW, byteFPA1eg5, {from: accounts[2]});
		const uint256v4ZPxNr = await BACMARSLPTOKENPoolbVnxPg.stake.call(uint1QDveu, {from: accounts[5]});

		await expect(BACMARSLPTOKENPoolbVnxPg.stakeWithPermit.call(uinthZHYVFT, uintsxWVBgE, uintomGO9Un, byteXTskeBW, byteFPA1eg5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressYRgapwl = accounts[4]
		const addressupcwpzL = accounts[5]
		const addressqllryHU = accounts[4]
		const BACMARSLPTOKENPoolbVnxPg = await BACMARSLPTOKENPool.new(addressYRgapwl, addressupcwpzL, addressqllryHU, {from: accounts[1]});
		await BACMARSLPTOKENPoolbVnxPg.getReward.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolbVnxPg.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresshdjsECG = accounts[4]
		const addressN2Re4t = accounts[5]
		const addressDYcylYJ = accounts[4]
		const BACMARSLPTOKENPoolbVnxPg = await BACMARSLPTOKENPool.new(addresshdjsECG, addressN2Re4t, addressDYcylYJ, {from: accounts[1]});
		const uintXLRb5fm = BigInt("55")
		const uint256NLJcfDE = await BACMARSLPTOKENPoolbVnxPg.withdraw.call(uintXLRb5fm, {from: accounts[0]});
		await BACMARSLPTOKENPoolbVnxPg.exit.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolbVnxPg.withdraw.call(uintXLRb5fm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmgFJujY = "hhsIAkqAToCxojldWK3ZM"
		const stringSFRC1GU = "ifnbsUCnkpBZbOLZJ1k27FduNch2AhogTGxXSbDRNd45r3DksWzKIi6T36aRPDrSxwNFlW"
		const uintSTtl0c3 = BigInt("78")
		const BACMARSLPTOKENPoolqHGpfU = await BACMARSLPTOKENPool.new(stringmgFJujY, stringSFRC1GU, uintSTtl0c3, {from: accounts[4]});
		const addressL1eTyI = accounts[2]
		const uint256f5V4qG7 = await BACMARSLPTOKENPoolqHGpfU.balanceOf.call(addressL1eTyI, {from: accounts[2]});
		const uint2560yckAP = await BACMARSLPTOKENPoolqHGpfU.getRewardForDuration.call({from: accounts[4]});
		await BACMARSLPTOKENPoolqHGpfU.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressJr5kJzd = accounts[4]
		const addressMx2TFAG = accounts[5]
		const addressUezYxyO = accounts[4]
		const BACMARSLPTOKENPoolbVnxPg = await BACMARSLPTOKENPool.new(addressJr5kJzd, addressMx2TFAG, addressUezYxyO, {from: accounts[1]});
		const byteegpGXvM = "0x0d20030a16040e050e1102040b061d121c15060e0b1b05031b02160e1b0d0d0c"
		const byteOJ5AX25 = "0x02081505030f090919190a0f17170707091b140c0e1c1d1b1b0316180804091d"
		const uintIWE6PrP = BigInt("254")
		const uintEDfHNjj = BigInt("934")
		const uintRWsmnEc = BigInt("1730")
		const uintXCaObRA = BigInt("782")
		const uint256bLJDw3M = await BACMARSLPTOKENPoolbVnxPg.stakeWithPermit.call(uintRWsmnEc, uintEDfHNjj, uintIWE6PrP, byteOJ5AX25, byteegpGXvM, {from: accounts[2]});
		const uint256v4ZPxNr = await BACMARSLPTOKENPoolbVnxPg.stake.call(uintXCaObRA, {from: accounts[5]});

		await expect(BACMARSLPTOKENPoolbVnxPg.stakeWithPermit.call(uintRWsmnEc, uintEDfHNjj, uintIWE6PrP, byteOJ5AX25, byteegpGXvM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXEksrW0 = "SIrKt1SPR"
		const stringSFaKWrb = "o3bAAYnSEYDIHgomiTB7pck51wKqnC2TC5"
		const uintkFTnCVZ = BigInt("75")
		const BACMARSLPTOKENPoolM4vx3rV = await BACMARSLPTOKENPool.new(stringXEksrW0, stringSFaKWrb, uintkFTnCVZ, {from: accounts[1]});
		const byte7vAIRI = "0x0a1d120c1d200c1a040d1f0811121e0e1a04071b0b060a170a04060614161a15"
		const byteBFHp9K = "0x060c1e1c16201f1209110a0600000116061a18081f14120710011b0d1b030914"
		const uintsu8JzMj = BigInt("1")
		const uintOmcTRWI = BigInt("229")
		const uintZcfBVop = BigInt("416")
		const bytekCnMZp = "0x151f0c1e100f0d19150904160f040a1203050c0b1f121c1f0e1b1002131f091b"
		const bytehHJWcB2 = "0x171107091a17031e17161f0b141a080f11191c06161f0e0d0420160312070b09"
		const uintvKGKb4B = BigInt("241")
		const uintzogydQw = BigInt("203")
		const uintILMElnT = BigInt("510")
		const uint256aLre7kJ = await BACMARSLPTOKENPoolM4vx3rV.stakeWithPermit.call(uintZcfBVop, uintOmcTRWI, uintsu8JzMj, byteBFHp9K, byte7vAIRI, {from: accounts[0]});
		const uint256KwhfaU8 = await BACMARSLPTOKENPoolM4vx3rV.stakeWithPermit.call(uintILMElnT, uintzogydQw, uintvKGKb4B, bytehHJWcB2, bytekCnMZp, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyBUDQP5 = "B3Ee6tlExQRJKWrTjNF7fiJenZY05JLujUHiS5EZKLvmoUW8QyxDG7HUkhTCGE4csQ8R"
		const stringGAnAe5P = "ZXN2IHRmMhJkGPG2C4lEXLxBpaijH1GrUXenPdPRHLHWsSqqE53ZdxQKymC"
		const uintHTc36ek = BigInt("165")
		const BACMARSLPTOKENPoolSpP5U7V = await BACMARSLPTOKENPool.new(stringyBUDQP5, stringGAnAe5P, uintHTc36ek, {from: accounts[3]});
		const byteKV36jiS = "0x01140708061c07031816130f1b1519111f2018021d0601071a181d131b0f0c07"
		const byteWUjAjma = "0x030e0b0116150419120b13000c1006180510041a0a1c031e1e0513051c1f161a"
		const uintN7uoSUd = BigInt("172")
		const uintQhVxe2 = BigInt("1108")
		const uintWtzhMn = BigInt("756")
		await BACMARSLPTOKENPoolSpP5U7V.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256GCHoNH = await BACMARSLPTOKENPoolSpP5U7V.stakeWithPermit.call(uintWtzhMn, uintQhVxe2, uintN7uoSUd, byteWUjAjma, byteKV36jiS, {from: accounts[3]});
		const stringemIbJ1L = await BACMARSLPTOKENPoolSpP5U7V.name.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringd0jew6i = "2tcl3rCvJHXyhs8iSm7RgRU1PcG6Qlx4SjajJFAAJ0dX6khhQDlAf"
		const stringNFgS0Uq = "GI87mSWZCjfwWibMxoc3WikEyBZdcyJdvNq6xxQQagGqxM1Ryg2SWH9tYhULO7Cok79mwP9KfRXSIKPbDTOyOY"
		const uintE2e48K6 = BigInt("23")
		const BACMARSLPTOKENPooli5iqi08 = await BACMARSLPTOKENPool.new(stringd0jew6i, stringNFgS0Uq, uintE2e48K6, {from: accounts[5]});
		const bytevFJXejA = "0x1e1c11061204100a0a0801160a1a12200b050309080c1c1e0d1c171d0e191703"
		const bytea3wy9aL = "0x1519081f1b1a110818181a071e1f1819170e1e1b111a121617071d100102170d"
		const uintBfmGIUV = BigInt("172")
		const uintbdu3Mom = BigInt("495")
		const uintkuzZBk2 = BigInt("499")
		const uintVp5IfKk = BigInt("276")
		await BACMARSLPTOKENPooli5iqi08.getReward.call({from: accounts[2]});
		const stringxYgNjv = await BACMARSLPTOKENPooli5iqi08.name.call({from: accounts[1]});
		const stringp7D3BN = await BACMARSLPTOKENPooli5iqi08.symbol.call({from: accounts[1]});
		const uint256iSnZBFt = await BACMARSLPTOKENPooli5iqi08.getRewardForDuration.call({from: accounts[3]});
		const uint256DqPdSk3 = await BACMARSLPTOKENPooli5iqi08.stakeWithPermit.call(uintkuzZBk2, uintbdu3Mom, uintBfmGIUV, bytea3wy9aL, bytevFJXejA, {from: accounts[3]});
		const uint256vbOV1r = await BACMARSLPTOKENPooli5iqi08.notifyRewardAmount.call(uintVp5IfKk, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZ6Okykp = "7SaLyVvcKYTHpVEx4yvktUiqCST8Y6OoC0dBFz"
		const stringt4514Uc = "GpLPjZ5aeehxAfUi5c6OMTLzPxBDf4ITaioQ316rMszWbSYzEteJ2X79KQZlur19Xpl77i2H5ngnyVtOgQlq77GTAANPy1MD"
		const uintdHzGHux = BigInt("221")
		const BACMARSLPTOKENPoolgL1T4da = await BACMARSLPTOKENPool.new(stringZ6Okykp, stringt4514Uc, uintdHzGHux, {from: accounts[3]});
		const uintfBkQ2rY = BigInt("1767")
		const uintx5cUzJr = BigInt("260")
		const uint256q0ILgrR = await BACMARSLPTOKENPoolgL1T4da.stake.call(uintfBkQ2rY, {from: accounts[2]});
		const uint256HLNveE = await BACMARSLPTOKENPoolgL1T4da.getRewardForDuration.call({from: accounts[0]});
		const uint8pGioK6M = await BACMARSLPTOKENPoolgL1T4da.decimals.call({from: accounts[3]});
		const uint256EOwMadD = await BACMARSLPTOKENPoolgL1T4da.notifyRewardAmount.call(uintx5cUzJr, {from: accounts[3]});
		const uint256j4fWupN = await BACMARSLPTOKENPoolgL1T4da.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringT3zU8PE = "Bd74EQ8VROu9LyMORePuMx6BFAndI9ecbamIA"
		const stringJOGyeqA = "99nfODMxaAJMlHkpMX1qe36tVI6"
		const uintMz3zpb = BigInt("230")
		const BACMARSLPTOKENPooluwQ5BZJ = await BACMARSLPTOKENPool.new(stringT3zU8PE, stringJOGyeqA, uintMz3zpb, {from: accounts[1]});
		const addressWAcg91k = accounts[2]
		const addressPlSt72t = await BACMARSLPTOKENPooluwQ5BZJ.updateReward.call(addressWAcg91k, {from: accounts[5]});
		await BACMARSLPTOKENPooluwQ5BZJ.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const stringP5JrNR1 = await BACMARSLPTOKENPooluwQ5BZJ.symbol.call({from: accounts[5]});
		await BACMARSLPTOKENPooluwQ5BZJ.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringH5zUyeH = "uyZo4dAIul26U7s9lPWdJecvAscs4sOUnnvCgiAXOOQx3sWtHFnx4pO56Ggii7fftNDhzB9eBILr6xWaBUX"
		const stringeTwn0Is = "5cvQwp920ovb86r"
		const uintW4QrXyT = BigInt("236")
		const BACMARSLPTOKENPoolbbisHgL = await BACMARSLPTOKENPool.new(stringH5zUyeH, stringeTwn0Is, uintW4QrXyT, {from: accounts[5]});
		const addressUjQ935f = accounts[4]
		await BACMARSLPTOKENPoolbbisHgL.exit.call({from: accounts[0]});
		const uint256GqJENIA = await BACMARSLPTOKENPoolbbisHgL.earned.call(addressUjQ935f, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolbbisHgL.getReward.call({from: accounts[1]});
		const uint256ihmIMiA = await BACMARSLPTOKENPoolbbisHgL.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringR1OXCtQ = "pYCqhr2hqp85M70X24WntsVBxIHCHVi4qxVQ"
		const stringCICJeVP = "itmDN8HeCOFj1x2JCxoFoYStzusuph7i"
		const uinta8Q8AYQ = BigInt("138")
		const BACMARSLPTOKENPoolrpxfuBu = await BACMARSLPTOKENPool.new(stringR1OXCtQ, stringCICJeVP, uinta8Q8AYQ, {from: accounts[4]});
		const uintY0sqD37 = BigInt("328")
		const uintx8fRra = BigInt("222")
		const addresshk5H68N = accounts[0]
		const uint256RUmz8Ku = await BACMARSLPTOKENPoolrpxfuBu.notifyRewardAmount.call(uintY0sqD37, {from: accounts[1]});
		const uint256kJ3Q0c8 = await BACMARSLPTOKENPoolrpxfuBu.withdraw.call(uintx8fRra, {from: accounts[1]});
		const addressLXuir6z = await BACMARSLPTOKENPoolrpxfuBu.updateReward.call(addresshk5H68N, {from: accounts[5]});
		await BACMARSLPTOKENPoolrpxfuBu.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolrpxfuBu.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVPdSmv = "YT4zYm4"
		const stringErEEd0K = "Ku11"
		const uintoxMDo3P = BigInt("246")
		const BACMARSLPTOKENPoolBXxCih = await BACMARSLPTOKENPool.new(stringVPdSmv, stringErEEd0K, uintoxMDo3P, {from: accounts[1]});
		const uintjRK9adi = BigInt("1399")
		const uintLiSPpDh = BigInt("611")
		const uint256wf0e2u8 = await BACMARSLPTOKENPoolBXxCih.stake.call(uintjRK9adi, {from: accounts[2]});
		await BACMARSLPTOKENPoolBXxCih.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPoolBXxCih.getReward.call({from: accounts[0]});
		const uint256JQummvw = await BACMARSLPTOKENPoolBXxCih.withdraw.call(uintLiSPpDh, {from: accounts[2]});
		await BACMARSLPTOKENPoolBXxCih.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcULdXYB = "39TqwCOcbMXEIU7co5n36Ns8wJyUGxnyr"
		const stringMFapi3A = ""
		const uintK8PtZS = BigInt("224")
		const BACMARSLPTOKENPoolLzxTwJY = await BACMARSLPTOKENPool.new(stringcULdXYB, stringMFapi3A, uintK8PtZS, {from: accounts[1]});
		const uintxijySn0 = BigInt("176")
		const stringtVxT7tL = await BACMARSLPTOKENPoolLzxTwJY.symbol.call({from: accounts[2]});
		const uint256Armruz = await BACMARSLPTOKENPoolLzxTwJY.totalSupply.call({from: accounts[2]});
		const uint256hgOIc6I = await BACMARSLPTOKENPoolLzxTwJY.totalSupply.call({from: accounts[4]});
		const uint256bp7iwYO = await BACMARSLPTOKENPoolLzxTwJY.rewardPerToken.call({from: accounts[5]});
		const uint256jnzB39f = await BACMARSLPTOKENPoolLzxTwJY.notifyRewardAmount.call(uintxijySn0, {from: accounts[0]});
		await BACMARSLPTOKENPoolLzxTwJY.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoig7hX4 = "dzc4dSS1UZ6UZdrorXFn"
		const stringNEi9Kcb = "5qUEW3sAP5tX9fsaGvhopwYgTuHapwVcsjR7sCmaleXGDh02dgMkP9FEeTmje2SubPsQpLYS6hIYRgE5jIOwhUs"
		const uintnj71Dq1 = BigInt("57")
		const BACMARSLPTOKENPoolFUzSvL = await BACMARSLPTOKENPool.new(stringoig7hX4, stringNEi9Kcb, uintnj71Dq1, {from: accounts[4]});
		const addressyVeX5bY = "0x0000000000000000000000000000000000000001"
		const stringXKGuCi = await BACMARSLPTOKENPoolFUzSvL.symbol.call({from: accounts[2]});
		const stringn9sRxz = await BACMARSLPTOKENPoolFUzSvL.name.call({from: accounts[4]});
		const uint256z4l2U3J = await BACMARSLPTOKENPoolFUzSvL.balanceOf.call(addressyVeX5bY, {from: accounts[3]});
		const uint256vmfyLS = await BACMARSLPTOKENPoolFUzSvL.getRewardForDuration.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtuBZmfF = "nZWVSXeMcAuqpyq5jv9NAVnptBAz3Xn4LR1y5YiNMz7Svhp"
		const stringVqw9bK = "A2lN9obx7Nua5xH"
		const uintNauaUuG = BigInt("110")
		const BACMARSLPTOKENPoolTiFHi8M = await BACMARSLPTOKENPool.new(stringtuBZmfF, stringVqw9bK, uintNauaUuG, {from: accounts[3]});
		const uintb0eATug = BigInt("368")
		const uint256k0exDVs = await BACMARSLPTOKENPoolTiFHi8M.stake.call(uintb0eATug, {from: accounts[3]});
		const uint8S76pPQ = await BACMARSLPTOKENPoolTiFHi8M.decimals.call({from: accounts[4]});
		const uint256waJlfUg = await BACMARSLPTOKENPoolTiFHi8M.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringY0Y7WYE = "MSJz4ZvmKowugu1j7sTseapWzxLDQNvYfdPSVhNaJB58xAxH8nYnVFDF1QPXb78GwABgu1mJZ617ksrOeRV4IKK"
		const string2IkJVJ = "PI8B1vXG854uEGJzth5zapjc7XGEjp8yQ97HdqCp8sAd9YIfT9XN4H35EPUxB2k"
		const uintSvNIgb9 = BigInt("217")
		const BACMARSLPTOKENPoolME0eCJG = await BACMARSLPTOKENPool.new(stringY0Y7WYE, string2IkJVJ, uintSvNIgb9, {from: accounts[2]});
		const addressbuea1B = accounts[0]
		const uint256PSxmO0C = await BACMARSLPTOKENPoolME0eCJG.balanceOf.call(addressbuea1B, {from: accounts[2]});
		const uint256QfSxcHk = await BACMARSLPTOKENPoolME0eCJG.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolME0eCJG.exit.call({from: accounts[3]});
		const uint256PU5zon3 = await BACMARSLPTOKENPoolME0eCJG.totalSupply.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGjO0z7z = "9mIpIFBQGO2gDe2jYnzxYaxwvwTzJX9axNI3Wm6KlxG7DDWEjZRa0lBMvLBHwaAXR47wG8sCEcUxBBDlQrl1VfLX5DKRQssJUC"
		const stringO4keG4m = "nJ2NWQR1e6x8flw8jPkBOpEKr"
		const uintYqyZvJZ = BigInt("252")
		const BACMARSLPTOKENPooldoAEXu = await BACMARSLPTOKENPool.new(stringGjO0z7z, stringO4keG4m, uintYqyZvJZ, {from: accounts[4]});
		const uintBSYmty9 = BigInt("1100")
		const uint256Az65UTf = await BACMARSLPTOKENPooldoAEXu.getRewardForDuration.call({from: accounts[3]});
		const uint256oUKuVdE = await BACMARSLPTOKENPooldoAEXu.withdraw.call(uintBSYmty9, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwE0pA7 = "RxGFn37RY"
		const stringmZvVKSK = "PiMPaLjpmrpEKjtFfAKMX4bCA6mcl1EW09L78Hly3Tlmer1UHrqNniZzmOFazOoJclYuKu7DnQXN8YU3CJqu2go86v"
		const uintJ2qU2o = BigInt("161")
		const BACMARSLPTOKENPoolOXRw0CC = await BACMARSLPTOKENPool.new(stringwE0pA7, stringmZvVKSK, uintJ2qU2o, {from: accounts[3]});
		const addressnqcq9eT = accounts[3]
		const addressxH3Q8oB = accounts[2]
		const addressNqLoXDD = await BACMARSLPTOKENPoolOXRw0CC.updateReward.call(addressnqcq9eT, {from: accounts[3]});
		const uint256EZoqxRq = await BACMARSLPTOKENPoolOXRw0CC.earned.call(addressxH3Q8oB, {from: accounts[3]});
		const stringBOh05WF = await BACMARSLPTOKENPoolOXRw0CC.symbol.call({from: accounts[1]});
		const uint256ssB0LY2 = await BACMARSLPTOKENPoolOXRw0CC.getRewardForDuration.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressik4Y4NS = accounts[0]
		const addresstn0wqQ = accounts[1]
		const addressxqLVJkq = accounts[3]
		const BACMARSLPTOKENPoolDroaibI = await BACMARSLPTOKENPool.new(addressik4Y4NS, addresstn0wqQ, addressxqLVJkq, {from: "0x0000000000000000000000000000000000000001"});
		const byteSm8CsOe = "0x0f010d04090a20081807080d1b0d19051002070509131012131d0a18031a1306"
		const byteLFGwZm7 = "0x041b0a1f120b15020d1f1d0917050a20110f0d0a090b0119130f1a110b17131c"
		const uintON4itqD = BigInt("23")
		const uintCXGSbYy = BigInt("880")
		const uintafAlr7 = BigInt("420")
		const addressRqe04p2 = accounts[2]
		const addressDWpoyqj = accounts[4]
		const uint256I6FsnZ = await BACMARSLPTOKENPoolDroaibI.stakeWithPermit.call(uintafAlr7, uintCXGSbYy, uintON4itqD, byteLFGwZm7, byteSm8CsOe, {from: accounts[2]});
		await BACMARSLPTOKENPoolDroaibI.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256szNiHhq = await BACMARSLPTOKENPoolDroaibI.earned.call(addressRqe04p2, {from: accounts[0]});
		const uint256bW8SG06 = await BACMARSLPTOKENPoolDroaibI.balanceOf.call(addressDWpoyqj, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoYd8apL = "Ys7gYYeVpCNva"
		const stringtnvs3l6 = "amtLR5j5e9uLRNvFpxuJCIB23ha7OxPIPzmG8xiYzBi"
		const uintU0Qe4Dh = BigInt("51")
		const BACMARSLPTOKENPooljGvIPxr = await BACMARSLPTOKENPool.new(stringoYd8apL, stringtnvs3l6, uintU0Qe4Dh, {from: accounts[2]});
		const uintjixBTVJ = BigInt("1360")
		const uintpnXiAaS = BigInt("1546")
		const uintR9pKcYT = BigInt("1060")
		const uint256pp839hI = await BACMARSLPTOKENPooljGvIPxr.stake.call(uintjixBTVJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CZDvwZ = await BACMARSLPTOKENPooljGvIPxr.stake.call(uintpnXiAaS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256z4jXPt = await BACMARSLPTOKENPooljGvIPxr.notifyRewardAmount.call(uintR9pKcYT, {from: accounts[4]});
		const uint256g7Mk6wY = await BACMARSLPTOKENPooljGvIPxr.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPooljGvIPxr.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringN38hVdQ = "KcWttF08kLgfIocRBsfSm7Q7nHOXQqx7jG2fZ8r3sT"
		const string51kvEA = "AN22O18q1C1uvW5QSa251nOkf73RJTUyDYRH2oPlCnd3h"
		const uintAgU78g = BigInt("15")
		const BACMARSLPTOKENPoolrzmNQDA = await BACMARSLPTOKENPool.new(stringN38hVdQ, string51kvEA, uintAgU78g, {from: accounts[2]});
		const bytepCIiAFj = "0x010c1b1f130f1210170913090c0f1f0b1b1207181911130e0309101609110d10"
		const byteLzbURZg = "0x180d071818151c0a151a1b13190e1c1f17110911051316000a010d0109080602"
		const uintP1ZC6a = BigInt("21")
		const uintSnLhF9R = BigInt("927")
		const uinty5Kh4sV = BigInt("1795")
		const uint256e6MbEuU = await BACMARSLPTOKENPoolrzmNQDA.stakeWithPermit.call(uinty5Kh4sV, uintSnLhF9R, uintP1ZC6a, byteLzbURZg, bytepCIiAFj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256aCdMkR = await BACMARSLPTOKENPoolrzmNQDA.getRewardForDuration.call({from: accounts[5]});
		const uint256rJsjbCK = await BACMARSLPTOKENPoolrzmNQDA.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXSt7AX = "mwz6PENjMCL1nLzTV3yt2kmIzunJKYu6AIta2O61GHYGlOtkTw6V2No"
		const stringPQj7FeR = "6kZ1tacOExuaGokjbnte2nqqXKo9BboCKM312jdT3MWOIlnwyKzr8UW5puUhop"
		const uintYv6uF1n = BigInt("72")
		const BACMARSLPTOKENPoolXlH9nbm = await BACMARSLPTOKENPool.new(stringXSt7AX, stringPQj7FeR, uintYv6uF1n, {from: accounts[4]});
		const stringWSKeZtz = await BACMARSLPTOKENPoolXlH9nbm.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringG5QvapH = await BACMARSLPTOKENPoolXlH9nbm.name.call({from: accounts[0]});
		const uint8Fp6qyVZ = await BACMARSLPTOKENPoolXlH9nbm.decimals.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbZpuOWi = "JTTF44uI7jUtnaThU2ep7iwkMbaALaQW3INQ5v"
		const stringHzKe2sQ = "VYmHPrUH1WIFQLIJN3L3A2Ja2xAW9jjojcIQUCroLqhTGMV5Xg27BTHC14OalC"
		const uintEGbZeT = BigInt("245")
		const BACMARSLPTOKENPoolOsBebpF = await BACMARSLPTOKENPool.new(stringbZpuOWi, stringHzKe2sQ, uintEGbZeT, {from: accounts[0]});
		await BACMARSLPTOKENPoolOsBebpF.getReward.call({from: accounts[2]});
		await BACMARSLPTOKENPoolOsBebpF.nonReentrant.call({from: accounts[5]});
		await BACMARSLPTOKENPoolOsBebpF.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolOsBebpF.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHGiHaCv = "njV6Mkv9UHhZMvGye1sH2hRVqQZRomGqWW72qBc7pJ3r4jL5Ec3dCEs"
		const stringJrriX2O = "VyqOMvC7NIhWMyqPzlctSozjvCN8fOa"
		const uintthlZIQG = BigInt("11")
		const BACMARSLPTOKENPoolsZEb5r0 = await BACMARSLPTOKENPool.new(stringHGiHaCv, stringJrriX2O, uintthlZIQG, {from: accounts[1]});
		const addressFPjzc28 = accounts[0]
		const stringxJubaOH = await BACMARSLPTOKENPoolsZEb5r0.name.call({from: accounts[4]});
		const stringUQS8pDU = await BACMARSLPTOKENPoolsZEb5r0.name.call({from: accounts[2]});
		const uint2569nKaHq = await BACMARSLPTOKENPoolsZEb5r0.balanceOf.call(addressFPjzc28, {from: accounts[5]});
		await BACMARSLPTOKENPoolsZEb5r0.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string13slnE = "UEEV9O6VqNNTFW"
		const stringjsprz6g = "AasJovNfrUZiCE4wml8jzesX5kVJGmaLvXaeSH4pyqhOfIPPeOaiguQxvdogxNcfnylc7ZOWHOhBtMd8s"
		const uintT8AAwfi = BigInt("132")
		const BACMARSLPTOKENPoolaOGlcqn = await BACMARSLPTOKENPool.new(string13slnE, stringjsprz6g, uintT8AAwfi, {from: accounts[1]});
		const addressX0QBrur = accounts[1]
		const address50xtHF = accounts[0]
		const uint256reRtywP = await BACMARSLPTOKENPoolaOGlcqn.getRewardForDuration.call({from: accounts[3]});
		const uint256DfhOgau = await BACMARSLPTOKENPoolaOGlcqn.balanceOf.call(addressX0QBrur, {from: accounts[1]});
		const uint256cu2k3M6 = await BACMARSLPTOKENPoolaOGlcqn.balanceOf.call(address50xtHF, {from: accounts[5]});
		await BACMARSLPTOKENPoolaOGlcqn.exit.call({from: accounts[3]});
		const uint256GVLSZMe = await BACMARSLPTOKENPoolaOGlcqn.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlOHb34 = "axks"
		const stringtQWaUN = "kvYahgrXM88eI5qRnA72aJNK6XvbOnKUfupyaNGOFFMRpX3JhxYNbVxDyXiCSgGwfRfX7TEj5gOwD38gDz"
		const uintwozowDR = BigInt("18")
		const BACMARSLPTOKENPoolNiA2gz6 = await BACMARSLPTOKENPool.new(stringlOHb34, stringtQWaUN, uintwozowDR, {from: accounts[2]});
		const uintVwp6uqn = BigInt("392")
		await BACMARSLPTOKENPoolNiA2gz6.exit.call({from: accounts[3]});
		const stringZWiG8R = await BACMARSLPTOKENPoolNiA2gz6.name.call({from: accounts[4]});
		const uint256dRgfelb = await BACMARSLPTOKENPoolNiA2gz6.stake.call(uintVwp6uqn, {from: accounts[1]});
		const stringp0xVZS9 = await BACMARSLPTOKENPoolNiA2gz6.symbol.call({from: accounts[1]});
		await BACMARSLPTOKENPoolNiA2gz6.nonReentrant.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdXydATI = "netXtkpSUlPdkNz2Kj4x0byXTidQy6"
		const stringxsCwxnT = "sbhP1z1ZJsRLl5uglG0U8klgFILJTNwZLO63XtIWm9xbu4dYjtjaLv7fh"
		const uintj4ngcjh = BigInt("156")
		const BACMARSLPTOKENPoolvYh8ayO = await BACMARSLPTOKENPool.new(stringdXydATI, stringxsCwxnT, uintj4ngcjh, {from: accounts[1]});
		const byteZhlNXCn = "0x1b0b05021c121f1d070a1e0e0d191d0e1609080b09181b1e0313071b04031e1d"
		const byteerjr9Ft = "0x0e14181710070a0d20110c07151d06050a091c1a0b1c12081c0915061c1e0a03"
		const uintvdcDp4g = BigInt("147")
		const uintPlSuKdx = BigInt("1444")
		const uintc4hAbp = BigInt("1726")
		await BACMARSLPTOKENPoolvYh8ayO.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolvYh8ayO.getReward.call({from: accounts[4]});
		const uint256fX2gVN = await BACMARSLPTOKENPoolvYh8ayO.stakeWithPermit.call(uintc4hAbp, uintPlSuKdx, uintvdcDp4g, byteerjr9Ft, byteZhlNXCn, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringw8522Kg = "gWMwoOo9CghOwI7jnMoCcG0Nj5r4D9jaRkDKXAIrQ2Q3dmLR5lNSWALy6c6Xyx7ND9paWgL6"
		const stringQveMoD0 = "dCVYhmtGkBX2gHrnRhBNtHbU7l54TfOCVhS"
		const uintpfcS8R0 = BigInt("68")
		const BACMARSLPTOKENPoolZx73IsA = await BACMARSLPTOKENPool.new(stringw8522Kg, stringQveMoD0, uintpfcS8R0, {from: accounts[0]});
		const address8B2qsH = accounts[4]
		const addressuMBHFgJ = accounts[1]
		const uint8Ua3wFGS = await BACMARSLPTOKENPoolZx73IsA.decimals.call({from: accounts[3]});
		const uint256dhrsf3a = await BACMARSLPTOKENPoolZx73IsA.rewardPerToken.call({from: accounts[0]});
		const uint256l4ERrzq = await BACMARSLPTOKENPoolZx73IsA.balanceOf.call(address8B2qsH, {from: accounts[2]});
		const uint256tegKyHw = await BACMARSLPTOKENPoolZx73IsA.balanceOf.call(addressuMBHFgJ, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringm6Qu6DD = "COCq"
		const stringZyIuqWP = "tSXkLp0l5"
		const uintctnhN94 = BigInt("169")
		const BACMARSLPTOKENPoolHHkz7uV = await BACMARSLPTOKENPool.new(stringm6Qu6DD, stringZyIuqWP, uintctnhN94, {from: accounts[4]});
		const byteqRUiRU = "0x1b1f0d1a09080e011e0b001a0a0c1e200f09180e19110d120e0e051f1e09011f"
		const byteqgbsikA = "0x0b1e1301181019051801051308201c051c081a12061d052014060b100d0d0a15"
		const uintYm7fRjm = BigInt("20")
		const uintSKl4YKE = BigInt("102")
		const uintkPfNJsG = BigInt("1467")
		const addresssShfdz = accounts[1]
		const uintAZWkrRT = BigInt("950")
		const uint2561n9hR3 = await BACMARSLPTOKENPoolHHkz7uV.stakeWithPermit.call(uintkPfNJsG, uintSKl4YKE, uintYm7fRjm, byteqgbsikA, byteqRUiRU, {from: accounts[4]});
		const uint256fRTL3fF = await BACMARSLPTOKENPoolHHkz7uV.earned.call(addresssShfdz, {from: accounts[4]});
		const uint256ZAB0joH = await BACMARSLPTOKENPoolHHkz7uV.stake.call(uintAZWkrRT, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringI8oH2C8 = "fBhtth3H5nSfxVmKwrtd4"
		const stringkXvxBxE = "I5iQ1uPnpr4bSo7er2hh6U36S2aY5G6PClcjXt1JOhBjMRwTQmmbv4YpU33EbnTQDDrLYek0nEfjDFmeRvDScg1"
		const uintrJTCrB2 = BigInt("148")
		const BACMARSLPTOKENPoolmw6D5hT = await BACMARSLPTOKENPool.new(stringI8oH2C8, stringkXvxBxE, uintrJTCrB2, {from: accounts[3]});
		const uintqh35Z9D = BigInt("1994")
		const uint8DUmxmMm = await BACMARSLPTOKENPoolmw6D5hT.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPoolmw6D5hT.nonReentrant.call({from: accounts[0]});
		const uint256CUQJFiF = await BACMARSLPTOKENPoolmw6D5hT.withdraw.call(uintqh35Z9D, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlaVpe4 = "I59FPf263DERZsuiCpb"
		const stringaom1DS8 = "hi0OIFvSXicmmeavjmflLq48zMPqNBxVyWhqurTYv7t2fgDecREABtWQaYHnOENDUIvdmWqsJfkT5pHKJp4G4NNoLMUDWOW4Y8"
		const uintXmf2dG = BigInt("173")
		const BACMARSLPTOKENPoolfaQIOhN = await BACMARSLPTOKENPool.new(stringlaVpe4, stringaom1DS8, uintXmf2dG, {from: accounts[5]});
		const addressFUYrwGX = accounts[2]
		const byteQZsudbR = "0x120d07141b130b0d111c10160304150c1d04041e130c1204021e07140d020e05"
		const bytedsBXU8e = "0x0401081f141d0003141c160e07160717020b1a1e1518011d1008101510170d12"
		const uintrsL8RT4 = BigInt("237")
		const uintG4reyPW = BigInt("139")
		const uinti5x8xBL = BigInt("643")
		const address1YxHcC = accounts[4]
		const uint256i9B8URb = await BACMARSLPTOKENPoolfaQIOhN.earned.call(addressFUYrwGX, {from: accounts[4]});
		const uint256kXGAspA = await BACMARSLPTOKENPoolfaQIOhN.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256YunjN4N = await BACMARSLPTOKENPoolfaQIOhN.stakeWithPermit.call(uinti5x8xBL, uintG4reyPW, uintrsL8RT4, bytedsBXU8e, byteQZsudbR, {from: accounts[4]});
		const uint256qMIcM0P = await BACMARSLPTOKENPoolfaQIOhN.balanceOf.call(address1YxHcC, {from: accounts[4]});
		const uint256RCoFv4w = await BACMARSLPTOKENPoolfaQIOhN.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint8Y4hqeb8 = await BACMARSLPTOKENPoolfaQIOhN.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCO2U7Dt = "BtFL4BnFQP4UfY6DJzRWsS8ABHmbanToRB9fskBPpuRKYcNDxlGcLZtNM8pzdWs1MNPjhyWm5cLmc31TMaP5o9I4bkn"
		const stringnsvtPwj = "dxA1Im8eITrV6VLXcFrRILZun58HQNYsfDDSqCkqhPJHWebZ"
		const uintGi41fqR = BigInt("4")
		const BACMARSLPTOKENPoolpAUllyF = await BACMARSLPTOKENPool.new(stringCO2U7Dt, stringnsvtPwj, uintGi41fqR, {from: accounts[3]});
		const addresswBp2rXu = accounts[1]
		await BACMARSLPTOKENPoolpAUllyF.getReward.call({from: accounts[0]});
		const uint256bwOaRKr = await BACMARSLPTOKENPoolpAUllyF.earned.call(addresswBp2rXu, {from: accounts[1]});
		const uint8Us7bY4s = await BACMARSLPTOKENPoolpAUllyF.decimals.call({from: accounts[3]});
		const uint256OPKMPNm = await BACMARSLPTOKENPoolpAUllyF.rewardPerToken.call({from: accounts[3]});
		const stringj4NYa2n = await BACMARSLPTOKENPoolpAUllyF.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolpAUllyF.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVk6K9dd = "W4zsSUiDe0dTiGlualiWjWqOW0ltNWAUytm"
		const stringyR0eyPA = "EWdtu4DvOld6gerx2TECW"
		const uints7OCNo = BigInt("218")
		const BACMARSLPTOKENPoolichuYXk = await BACMARSLPTOKENPool.new(stringVk6K9dd, stringyR0eyPA, uints7OCNo, {from: accounts[4]});
		const uint256Tcnscr9 = await BACMARSLPTOKENPoolichuYXk.rewardPerToken.call({from: accounts[5]});
		const uint2567CoiAt = await BACMARSLPTOKENPoolichuYXk.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringG80XJLL = "aoNL4GHBfOJWrUb2c1WoWUds7rCaAcFNtabyrzWu4owPP8RDrtxryjUzUT3pGGezfFQTTK7G5opwF0MOdCU1O"
		const stringScshFHU = "FS8pA7DvgUAfJAOw2"
		const uintxaccKKI = BigInt("9")
		const BACMARSLPTOKENPoolIjA11EF = await BACMARSLPTOKENPool.new(stringG80XJLL, stringScshFHU, uintxaccKKI, {from: accounts[5]});
		const uintwyNGCsW = BigInt("569")
		const addressVJ4c4F5 = accounts[3]
		const addressoekzV3o = accounts[1]
		const uint256s3AlGPZ = await BACMARSLPTOKENPoolIjA11EF.stake.call(uintwyNGCsW, {from: accounts[4]});
		const uint256ja8n109 = await BACMARSLPTOKENPoolIjA11EF.getRewardForDuration.call({from: accounts[1]});
		const uint256kiACiXY = await BACMARSLPTOKENPoolIjA11EF.balanceOf.call(addressVJ4c4F5, {from: accounts[2]});
		const uint256tSsHtCB = await BACMARSLPTOKENPoolIjA11EF.earned.call(addressoekzV3o, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOGiP2NX = "4LTBUlDLlo37lnPlYKc8n7y6pS9tpAjKlbcy6HPQ71o3fIEKxaeVmzg995f425"
		const stringpHiAaFo = "1vLJCbGtkAOx2PEYwoNYCK6eLsGdBeJMgsq5Ww7Jozuv4GXVwA9b8QCT1IvI"
		const uintibRaDmH = BigInt("73")
		const BACMARSLPTOKENPoolXdTFddC = await BACMARSLPTOKENPool.new(stringOGiP2NX, stringpHiAaFo, uintibRaDmH, {from: accounts[4]});
		const uintwxoVk8W = BigInt("1267")
		const uint256ndO3yLU = await BACMARSLPTOKENPoolXdTFddC.withdraw.call(uintwxoVk8W, {from: accounts[3]});
		const uint256lRHzkP = await BACMARSLPTOKENPoolXdTFddC.getRewardForDuration.call({from: accounts[1]});
		const uint256J9oShxS = await BACMARSLPTOKENPoolXdTFddC.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjlZU5ry = "2Mvcb3gsv1sPJT1s31yWMyW6yzgws25mxVLgwMsNYyZenHk6QNvZ2eY4MSAkJLSDALM7RVbfmfsy75ujeQCo"
		const stringfAMt0xA = "ejzyHxtwNOlNrutVtJQVTu9DNih7FBN8R7aRNXKUkRBd3KpgOOQUClT0wg8wNoCVXorCtnzhQpjTFYdt"
		const uinthlkdoQy = BigInt("142")
		const BACMARSLPTOKENPoolkP26gnv = await BACMARSLPTOKENPool.new(stringjlZU5ry, stringfAMt0xA, uinthlkdoQy, {from: accounts[3]});
		const addressuwy500F = accounts[5]
		await BACMARSLPTOKENPoolkP26gnv.getReward.call({from: accounts[3]});
		const uint256N3nUbHZ = await BACMARSLPTOKENPoolkP26gnv.balanceOf.call(addressuwy500F, {from: accounts[4]});
		await BACMARSLPTOKENPoolkP26gnv.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolkP26gnv.exit.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTmsi88f = "3j"
		const stringbjepSil = "75E3"
		const uintIR3B5ri = BigInt("56")
		const BACMARSLPTOKENPoolNUF65ND = await BACMARSLPTOKENPool.new(stringTmsi88f, stringbjepSil, uintIR3B5ri, {from: "0x0000000000000000000000000000000000000001"});
		const addressBObkg2U = accounts[3]
		const addressCssJl99 = accounts[3]
		await BACMARSLPTOKENPoolNUF65ND.getReward.call({from: accounts[1]});
		const uint256GgZLJTF = await BACMARSLPTOKENPoolNUF65ND.earned.call(addressBObkg2U, {from: accounts[5]});
		const uint256g3QVBSU = await BACMARSLPTOKENPoolNUF65ND.earned.call(addressCssJl99, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjNNvUur = "tKiXhiYL1cmgGCrC4T72"
		const stringOoB1L0l = "DFwFwmSJ7JsV0jDYeygmHjxKjFq829MdiPGi6OEwJb6HZGKEct"
		const uintWdl8EXP = BigInt("228")
		const BACMARSLPTOKENPoolyJFoCRA = await BACMARSLPTOKENPool.new(stringjNNvUur, stringOoB1L0l, uintWdl8EXP, {from: accounts[3]});
		await BACMARSLPTOKENPoolyJFoCRA.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256hGvwwB6 = await BACMARSLPTOKENPoolyJFoCRA.getRewardForDuration.call({from: accounts[5]});
		const uint8sJ7LSvA = await BACMARSLPTOKENPoolyJFoCRA.decimals.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiO0smZ = "kRiJZmBGLJQ1v8Po89cVV0shVEYnDrovDqkQd4JftudsErB6PnHDrXnS8"
		const stringQlaUplC = "GDFt23z8AO75IP4N9MGMDbLqBF8YP0yHmYrDsj11X9846uEksJKV1N2npPWrem6Crof19vNwNAuqek2Oxs16sc9QhP"
		const uintFMleg0h = BigInt("207")
		const BACMARSLPTOKENPoolmoGI1p9 = await BACMARSLPTOKENPool.new(stringiO0smZ, stringQlaUplC, uintFMleg0h, {from: accounts[4]});
		const stringNTBG1nN = await BACMARSLPTOKENPoolmoGI1p9.name.call({from: accounts[1]});
		const uint256oHFYglN = await BACMARSLPTOKENPoolmoGI1p9.totalSupply.call({from: accounts[4]});
		const stringnpWNpy = await BACMARSLPTOKENPoolmoGI1p9.name.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbZKE7E2 = "4eOqvUAR2dRTxkuJ78vDyRBke95u5N8ei65b5pF5xPH7kkNU8XAGYSMrvkcZFkA2f5SPwJ2HGI4mvnyf0M5hrg"
		const stringd6iYoqa = "Ga5yQR9BwhWDhE7Yn983NRqXz8MmYtmZHRLa5itpzcXMytTs8MTDqTmJFybnhBqz2anAYsmbh"
		const uintyIrunX = BigInt("107")
		const BACMARSLPTOKENPoolkk56mLr = await BACMARSLPTOKENPool.new(stringbZKE7E2, stringd6iYoqa, uintyIrunX, {from: accounts[3]});
		const addressY6O7Wqc = "0x0000000000000000000000000000000000000001"
		const uint8nVwmc70 = await BACMARSLPTOKENPoolkk56mLr.decimals.call({from: accounts[0]});
		const uint256Ifbw9Tx = await BACMARSLPTOKENPoolkk56mLr.balanceOf.call(addressY6O7Wqc, {from: accounts[1]});
		const uint8WDDtqog = await BACMARSLPTOKENPoolkk56mLr.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRBXhOyB = "9PeslzRS6Y19"
		const stringsD3iA4N = "ebxhGlAhcUcWFLzT"
		const uintTMhTz8S = BigInt("116")
		const BACMARSLPTOKENPoolzkt2ea = await BACMARSLPTOKENPool.new(stringRBXhOyB, stringsD3iA4N, uintTMhTz8S, {from: accounts[2]});
		const addressSBCAn3e = accounts[0]
		const uint256ubp7NiA = await BACMARSLPTOKENPoolzkt2ea.earned.call(addressSBCAn3e, {from: accounts[2]});
		const uint256NXPP4Tk = await BACMARSLPTOKENPoolzkt2ea.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoilvXwq = "mNcF7AAjpgPMgtt"
		const stringBPexbh4 = "m3fABoNY2t3iayFM"
		const uintaZd0HYE = BigInt("213")
		const BACMARSLPTOKENPoolaAlV3Ut = await BACMARSLPTOKENPool.new(stringoilvXwq, stringBPexbh4, uintaZd0HYE, {from: "0x0000000000000000000000000000000000000001"});
		const addressQD03DIy = "0x0000000000000000000000000000000000000001"
		const uint256x9KCe9N = await BACMARSLPTOKENPoolaAlV3Ut.rewardPerToken.call({from: accounts[3]});
		const addresskgRz5PW = await BACMARSLPTOKENPoolaAlV3Ut.updateReward.call(addressQD03DIy, {from: accounts[2]});
		await BACMARSLPTOKENPoolaAlV3Ut.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuu58wmx = "4ne3mLT"
		const stringpjrArCA = "RWO6OFyca8E1lJGNeevTJLiimc7VcLFBtq4HJNsRR5xzaJVvxVFWe5VjStOT43LsX0a9eQstP73qIlXAVteh"
		const uinty8ueJV5 = BigInt("119")
		const BACMARSLPTOKENPoolSOpb9Nk = await BACMARSLPTOKENPool.new(stringuu58wmx, stringpjrArCA, uinty8ueJV5, {from: accounts[4]});
		const addressDA9AZ7I = "0x0000000000000000000000000000000000000001"
		await BACMARSLPTOKENPoolSOpb9Nk.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256iVhyWpT = await BACMARSLPTOKENPoolSOpb9Nk.earned.call(addressDA9AZ7I, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNKKpCXy = "XjcmxrMll314XBG4lzHJ6kCMFhF7CHhQOuc5ggTKElRzLfSjcTJIdCBVNk94wzDTTt3NbjqTrhMMDOpcf2zsTSo2dFKig0V"
		const stringN8usoL3 = "IP5hZHNIHnnpHQ1"
		const uintBGVksux = BigInt("33")
		const BACMARSLPTOKENPoolA517zk1 = await BACMARSLPTOKENPool.new(stringNKKpCXy, stringN8usoL3, uintBGVksux, {from: accounts[0]});
		const uint8t2js4SD = await BACMARSLPTOKENPoolA517zk1.decimals.call({from: accounts[2]});
		await BACMARSLPTOKENPoolA517zk1.getReward.call({from: accounts[1]});
		const uint8EbL713k = await BACMARSLPTOKENPoolA517zk1.decimals.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNBTQq2f = "sQaV5IjQH6wRgidwPjM4EMEHQrReP56fB3h4EVEO0N1NkWDAIl1b64a0VyPk"
		const stringSlmEjrv = "NjWxIggO1upB9uk7FONsT6IKjQgIW3ZCoq1fmtocUkoPMzvc0NCXpXUxW1LjEF"
		const uintGqERtYu = BigInt("31")
		const BACMARSLPTOKENPoolcZwTtuR = await BACMARSLPTOKENPool.new(stringNBTQq2f, stringSlmEjrv, uintGqERtYu, {from: accounts[0]});
		const uintiiF1c2w = BigInt("1609")
		const addressFpkLdPO = accounts[3]
		const uint256cBwn4ni = await BACMARSLPTOKENPoolcZwTtuR.notifyRewardAmount.call(uintiiF1c2w, {from: accounts[2]});
		const uint256TEzQBdc = await BACMARSLPTOKENPoolcZwTtuR.earned.call(addressFpkLdPO, {from: accounts[0]});
	});
})