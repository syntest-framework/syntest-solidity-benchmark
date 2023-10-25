const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringlowbNQz = "I6jS54EGJx1xPeYDoEkMQXLm8B6db1FlO6LBgE"
		const stringtH9iWuk = "xF4QKVOG8"
		const uintD8Nmvn1 = BigInt("250")
		const BACMARSLPTOKENPooltZ2ckJ = await BACMARSLPTOKENPool.new(stringlowbNQz, stringtH9iWuk, uintD8Nmvn1, {from: accounts[0]});
		const uintfOEHcQ = BigInt("1038")
		await BACMARSLPTOKENPooltZ2ckJ.getReward.call({from: accounts[2]});
		const uint256qWDR2up = await BACMARSLPTOKENPooltZ2ckJ.totalSupply.call({from: accounts[5]});
		const uint256zZW6OHj = await BACMARSLPTOKENPooltZ2ckJ.withdraw.call(uintfOEHcQ, {from: accounts[1]});
		const uint256RhrJg08 = await BACMARSLPTOKENPooltZ2ckJ.getRewardForDuration.call({from: accounts[5]});
		const uint8s1zUf12 = await BACMARSLPTOKENPooltZ2ckJ.decimals.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressBMyYxiC = accounts[1]
		const addressoJRneMZ = accounts[5]
		const addressOdBMlVn = accounts[3]
		const BACMARSLPTOKENPool0bggaE = await BACMARSLPTOKENPool.new(addressBMyYxiC, addressoJRneMZ, addressOdBMlVn, {from: accounts[1]});
		const addressCJNtwhX = accounts[4]
		const uinth3naewH = BigInt("807")
		const addressbJpQmGI = accounts[5]
		const uint8xbd1gvt = await BACMARSLPTOKENPool0bggaE.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPool0bggaE.getReward.call({from: accounts[3]});
		const uint256pEpgjLr = await BACMARSLPTOKENPool0bggaE.earned.call(addressCJNtwhX, {from: accounts[2]});
		const uint256uyEChCQ = await BACMARSLPTOKENPool0bggaE.withdraw.call(uinth3naewH, {from: accounts[3]});
		const uint256FcHudnP = await BACMARSLPTOKENPool0bggaE.balanceOf.call(addressbJpQmGI, {from: accounts[2]});
		const uint8tr3eaWh = await BACMARSLPTOKENPool0bggaE.decimals.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPool0bggaE.decimals.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressetMejKj = accounts[3]
		const addressPj2Kx4j = accounts[0]
		const addressD7rQVoV = accounts[0]
		const BACMARSLPTOKENPoolWt59pjh = await BACMARSLPTOKENPool.new(addressetMejKj, addressPj2Kx4j, addressD7rQVoV, {from: accounts[1]});
		const uintvorfMiP = BigInt("1462")
		const addressEXjmC3R = accounts[3]
		const uint256e8fHF7q = await BACMARSLPTOKENPoolWt59pjh.getRewardForDuration.call({from: accounts[0]});
		const uint256EkYH4W6 = await BACMARSLPTOKENPoolWt59pjh.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256odiGeDk = await BACMARSLPTOKENPoolWt59pjh.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256WfpGZ6Y = await BACMARSLPTOKENPoolWt59pjh.withdraw.call(uintvorfMiP, {from: accounts[4]});
		const uint256eUuVoiR = await BACMARSLPTOKENPoolWt59pjh.balanceOf.call(addressEXjmC3R, {from: accounts[0]});

		assert.equal(uint256EkYH4W6, BigInt("0"))
		assert.equal(uint256e8fHF7q, BigInt("0"))
		assert.equal(uint256odiGeDk, BigInt("0"))
		await expect(BACMARSLPTOKENPoolWt59pjh.withdraw.call(uintvorfMiP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressUb88e8 = accounts[2]
		const addressNfZJlYe = accounts[1]
		const addresswKLS0g = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolZbhEMiq = await BACMARSLPTOKENPool.new(addressUb88e8, addressNfZJlYe, addresswKLS0g, {from: accounts[1]});
		const byteY1Fn4sb = "0x120216040d1d1c14011a200b090413041d0e0e0e1b051f0f08090609141d060c"
		const byteQ9Bqjpb = "0x0202021903121d17040600131400110a0610031c1f070c041601041e0f021310"
		const uint9uffpH = BigInt("170")
		const uintchF18mY = BigInt("392")
		const uintSPtwN2D = BigInt("1298")
		const uint256eKRUWMn = await BACMARSLPTOKENPoolZbhEMiq.stakeWithPermit.call(uintSPtwN2D, uintchF18mY, uint9uffpH, byteQ9Bqjpb, byteY1Fn4sb, {from: accounts[3]});
		await BACMARSLPTOKENPoolZbhEMiq.exit.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolZbhEMiq.stakeWithPermit.call(uintSPtwN2D, uintchF18mY, uint9uffpH, byteQ9Bqjpb, byteY1Fn4sb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsu2NDWp = "ydVhQThnb6gdYc3vJcaNWvzXwTk6uFpgqeuam8q5DyBm08B4GAgNyegQk2adSUyPYhBmO44SzfpDQYpLWEbcecdtEdx2"
		const stringcYdYkwx = "aNwjPHoyiDntGrKAf7mg4HgXtWqVfDhlvp2z5RuOhAafaFpMgefJXcwWdZjlm3CCl2Euj"
		const uintPKxNcDF = BigInt("25")
		const BACMARSLPTOKENPoolpiQRruT = await BACMARSLPTOKENPool.new(stringsu2NDWp, stringcYdYkwx, uintPKxNcDF, {from: accounts[2]});
		const byteMxa4tyK = "0x0a180d1a1c08000e181412042008090808011d01121f1d010218181b040f1e10"
		const byteewSAunw = "0x1e1f0b041f14191e1b17090d1b0a190e151b0a0d111e0e1b0802121d060b0f1c"
		const uintHxsoJ8w = BigInt("195")
		const uintPqtboGU = BigInt("1054")
		const uints4zhkph = BigInt("762")
		const addressRXwdbnR = accounts[2]
		const uint256tN7kbtj = await BACMARSLPTOKENPoolpiQRruT.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolpiQRruT.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256TJUJNRj = await BACMARSLPTOKENPoolpiQRruT.stakeWithPermit.call(uints4zhkph, uintPqtboGU, uintHxsoJ8w, byteewSAunw, byteMxa4tyK, {from: accounts[2]});
		const uint256ePuHpMo = await BACMARSLPTOKENPoolpiQRruT.balanceOf.call(addressRXwdbnR, {from: accounts[0]});
		const uint256pqpfnG9 = await BACMARSLPTOKENPoolpiQRruT.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolpiQRruT.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrChcF6x = "PK9c6QmeuDu2vgft5odV"
		const stringj0bbWp7 = "OHn3DaMtcPhqNGBtkVpYIJOE35znhcVuxPI8qpZtUj5gsphpYSpeWfCQ6eJSxcSdaqhZqpDEe5qdwvmmRI"
		const uintXhsEypC = BigInt("129")
		const BACMARSLPTOKENPoolQnK0yJL = await BACMARSLPTOKENPool.new(stringrChcF6x, stringj0bbWp7, uintXhsEypC, {from: accounts[0]});
		const uintJ6DVDS = BigInt("357")
		const uint256MyiSrS = await BACMARSLPTOKENPoolQnK0yJL.withdraw.call(uintJ6DVDS, {from: accounts[1]});
		const uint256r1tDLRF = await BACMARSLPTOKENPoolQnK0yJL.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolQnK0yJL.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressefIV4jG = "0x0000000000000000000000000000000000000001"
		const addressrnMgHkT = accounts[1]
		const addressWW6heCE = accounts[4]
		const BACMARSLPTOKENPoolsAAqd9Y = await BACMARSLPTOKENPool.new(addressefIV4jG, addressrnMgHkT, addressWW6heCE, {from: accounts[4]});
		const addressYUECM9w = accounts[4]
		const uintzYJ0qf = BigInt("1297")
		const uint256R4nZfuI = await BACMARSLPTOKENPoolsAAqd9Y.earned.call(addressYUECM9w, {from: accounts[4]});
		const uint256yD1BGS3 = await BACMARSLPTOKENPoolsAAqd9Y.getRewardForDuration.call({from: accounts[0]});
		const uint256Ajnhp0X = await BACMARSLPTOKENPoolsAAqd9Y.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolsAAqd9Y.getReward.call({from: accounts[3]});
		const uint256hsPAAH2 = await BACMARSLPTOKENPoolsAAqd9Y.stake.call(uintzYJ0qf, {from: accounts[5]});
		await BACMARSLPTOKENPoolsAAqd9Y.onlyRewardsDistribution.call({from: accounts[2]});

		assert.equal(uint256Ajnhp0X, BigInt("0"))
		assert.equal(uint256R4nZfuI, BigInt("0"))
		assert.equal(uint256yD1BGS3, BigInt("0"))
		await expect(BACMARSLPTOKENPoolsAAqd9Y.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyoV1XDn = "PiBhdvkCULrvxTEh0mfcpah6GiekK03TEdl7w"
		const stringaswdhh9 = "9isCP6E489qG904gq8RDO192EXwemOScCPRlg83F6QzTf4yvTohyWlynpHu6Icq6tKWq5x4Md8"
		const uinth684zhk = BigInt("130")
		const BACMARSLPTOKENPooliXE77Qz = await BACMARSLPTOKENPool.new(stringyoV1XDn, stringaswdhh9, uinth684zhk, {from: accounts[4]});
		await BACMARSLPTOKENPooliXE77Qz.onlyRewardsDistribution.call({from: accounts[3]});
		const uint8T7NsATu = await BACMARSLPTOKENPooliXE77Qz.decimals.call({from: accounts[2]});
		const uint256SovnvAH = await BACMARSLPTOKENPooliXE77Qz.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressTgnRni = accounts[4]
		const addressY7ObebK = accounts[3]
		const addressvYDNMZj = accounts[3]
		const BACMARSLPTOKENPoolhYz595C = await BACMARSLPTOKENPool.new(addressTgnRni, addressY7ObebK, addressvYDNMZj, {from: accounts[4]});
		const uintVzhkjg = BigInt("1699")
		const uintRgA67s = BigInt("628")
		const addressxNbxEDU = accounts[3]
		const uint256oQViXuf = await BACMARSLPTOKENPoolhYz595C.withdraw.call(uintVzhkjg, {from: accounts[3]});
		const uint256WXG4qD4 = await BACMARSLPTOKENPoolhYz595C.rewardPerToken.call({from: accounts[4]});
		const uint256U1B7tZl = await BACMARSLPTOKENPoolhYz595C.stake.call(uintRgA67s, {from: accounts[0]});
		const uint256ljLuWq = await BACMARSLPTOKENPoolhYz595C.balanceOf.call(addressxNbxEDU, {from: accounts[3]});
		const stringJSO5kXx = await BACMARSLPTOKENPoolhYz595C.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BACMARSLPTOKENPoolhYz595C.withdraw.call(uintVzhkjg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressgoLZqNY = accounts[2]
		const addressLpyvPDL = accounts[1]
		const addressEdt3l3y = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolZbhEMiq = await BACMARSLPTOKENPool.new(addressgoLZqNY, addressLpyvPDL, addressEdt3l3y, {from: accounts[1]});
		const bytemH0BkYZ = "0x120216040d1d1c14011a200b090413041d0e0e0e1b051f0f08090609141d060c"
		const bytem8zfBS = "0x0202021903121d17040600131400110a0610031c1f070c041601041e0f021310"
		const uintBjDeBct = BigInt("170")
		const uintpadHFxA = BigInt("392")
		const uintQjwM7sg = BigInt("1298")
		const uint256eKRUWMn = await BACMARSLPTOKENPoolZbhEMiq.stakeWithPermit.call(uintQjwM7sg, uintpadHFxA, uintBjDeBct, bytem8zfBS, bytemH0BkYZ, {from: accounts[3]});
		const uint256RtkB8i9 = await BACMARSLPTOKENPoolZbhEMiq.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolZbhEMiq.exit.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolZbhEMiq.stakeWithPermit.call(uintQjwM7sg, uintpadHFxA, uintBjDeBct, bytem8zfBS, bytemH0BkYZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressVB4f3Jb = accounts[2]
		const addressHjDzkna = accounts[1]
		const addressmesroug = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolZbhEMiq = await BACMARSLPTOKENPool.new(addressVB4f3Jb, addressHjDzkna, addressmesroug, {from: accounts[1]});
		await BACMARSLPTOKENPoolZbhEMiq.exit.call({from: accounts[2]});
		const uint256kIy63Qf = await BACMARSLPTOKENPoolZbhEMiq.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPoolZbhEMiq.getReward.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolZbhEMiq.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKFZX12w = "4uFX7LRf6pJkLEnaEdv"
		const stringauZzoUU = "ktZsyn9J0FrbC"
		const uintpyLrsai = BigInt("231")
		const BACMARSLPTOKENPoolF0BLBqJ = await BACMARSLPTOKENPool.new(stringKFZX12w, stringauZzoUU, uintpyLrsai, {from: "0x0000000000000000000000000000000000000001"});
		const addressEeb5a7Y = accounts[1]
		const uintEmyuOvq = BigInt("23")
		const uint256PfZFWFK = await BACMARSLPTOKENPoolF0BLBqJ.rewardPerToken.call({from: accounts[1]});
		const uint256b4rarWy = await BACMARSLPTOKENPoolF0BLBqJ.balanceOf.call(addressEeb5a7Y, {from: accounts[0]});
		const uint256UWAujDj = await BACMARSLPTOKENPoolF0BLBqJ.withdraw.call(uintEmyuOvq, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpfYnRYF = "ffrUI3ZyphxSdtfwToWYYO6DnW9ngocGI3kE6FtshLqVfKf6CVtR8acMTy"
		const stringpaRyfYq = "yTym5Nhf5IsJVG7xgifHJZzj2IIQYMWET1NNRY5nJ6SyegYAA"
		const uintfSr6DaB = BigInt("225")
		const BACMARSLPTOKENPoolQWyTivO = await BACMARSLPTOKENPool.new(stringpfYnRYF, stringpaRyfYq, uintfSr6DaB, {from: accounts[1]});
		await BACMARSLPTOKENPoolQWyTivO.nonReentrant.call({from: accounts[3]});
		const uint256XNUClFn = await BACMARSLPTOKENPoolQWyTivO.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressqrONfyZ = "0x0000000000000000000000000000000000000001"
		const addressz2VWMfp = accounts[1]
		const addressew5sGpy = accounts[4]
		const BACMARSLPTOKENPoolsAAqd9Y = await BACMARSLPTOKENPool.new(addressqrONfyZ, addressz2VWMfp, addressew5sGpy, {from: accounts[4]});
		const uintHDbxLxE = BigInt("341")
		const addressmfLexWC = accounts[1]
		const uintbObMGzl = BigInt("1291")
		const uint256SQ3B38t = await BACMARSLPTOKENPoolsAAqd9Y.rewardPerToken.call({from: accounts[3]});
		const uint256BmGVnYl = await BACMARSLPTOKENPoolsAAqd9Y.notifyRewardAmount.call(uintHDbxLxE, {from: accounts[1]});
		const uint256R4nZfuI = await BACMARSLPTOKENPoolsAAqd9Y.earned.call(addressmfLexWC, {from: accounts[4]});
		const uint256yD1BGS3 = await BACMARSLPTOKENPoolsAAqd9Y.getRewardForDuration.call({from: accounts[0]});
		const uint256Ajnhp0X = await BACMARSLPTOKENPoolsAAqd9Y.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolsAAqd9Y.getReward.call({from: accounts[3]});
		const uint256hsPAAH2 = await BACMARSLPTOKENPoolsAAqd9Y.stake.call(uintbObMGzl, {from: accounts[5]});
		await BACMARSLPTOKENPoolsAAqd9Y.onlyRewardsDistribution.call({from: accounts[2]});

		assert.equal(uint256SQ3B38t, BigInt("0"))
		await expect(BACMARSLPTOKENPoolsAAqd9Y.notifyRewardAmount.call(uintHDbxLxE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressSqjJBPY = accounts[3]
		const addressYl9Idak = accounts[0]
		const addressK3JjyAo = accounts[0]
		const BACMARSLPTOKENPoolWt59pjh = await BACMARSLPTOKENPool.new(addressSqjJBPY, addressYl9Idak, addressK3JjyAo, {from: accounts[1]});
		const byteyCHTwcm = "0x0909121104090c1c11041f1b0503100700121b14180d0417070e01200e15070a"
		const byteSQAb5jC = "0x010c1c1c18190d16140e081f0b1f111e181404000e070a181e140e18001b1416"
		const uintnJYbwRq = BigInt("196")
		const uintYDTm0Dz = BigInt("1773")
		const uintsLCl1BW = BigInt("1869")
		const uintx7hwBVb = BigInt("1462")
		const addressajrl6Z = accounts[3]
		const uint256gvb0BEm = await BACMARSLPTOKENPoolWt59pjh.rewardPerToken.call({from: accounts[1]});
		const uint256bsqOBQw = await BACMARSLPTOKENPoolWt59pjh.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256e8fHF7q = await BACMARSLPTOKENPoolWt59pjh.getRewardForDuration.call({from: accounts[0]});
		const uint256EkYH4W6 = await BACMARSLPTOKENPoolWt59pjh.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256TaRqJwp = await BACMARSLPTOKENPoolWt59pjh.stakeWithPermit.call(uintsLCl1BW, uintYDTm0Dz, uintnJYbwRq, byteSQAb5jC, byteyCHTwcm, {from: accounts[0]});
		const uint256odiGeDk = await BACMARSLPTOKENPoolWt59pjh.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolWt59pjh.getReward.call({from: accounts[0]});
		const uint256WfpGZ6Y = await BACMARSLPTOKENPoolWt59pjh.withdraw.call(uintx7hwBVb, {from: accounts[4]});
		const uint256eUuVoiR = await BACMARSLPTOKENPoolWt59pjh.balanceOf.call(addressajrl6Z, {from: accounts[0]});

		assert.equal(uint256EkYH4W6, BigInt("0"))
		assert.equal(uint256bsqOBQw, BigInt("0"))
		assert.equal(uint256e8fHF7q, BigInt("0"))
		assert.equal(uint256gvb0BEm, BigInt("0"))
		await expect(BACMARSLPTOKENPoolWt59pjh.stakeWithPermit.call(uintsLCl1BW, uintYDTm0Dz, uintnJYbwRq, byteSQAb5jC, byteyCHTwcm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressRpKs3b = "0x0000000000000000000000000000000000000001"
		const addressDlxinkR = accounts[1]
		const addressC2SgLko = accounts[4]
		const BACMARSLPTOKENPoolsAAqd9Y = await BACMARSLPTOKENPool.new(addressRpKs3b, addressDlxinkR, addressC2SgLko, {from: accounts[4]});
		const addressLtDcXYg = accounts[4]
		const addressCNxDGPk = accounts[3]
		const uintVqacyME = BigInt("1289")
		const addressLWrv1oy = accounts[4]
		const uintt5kCACk = BigInt("1517")
		const uint256R4nZfuI = await BACMARSLPTOKENPoolsAAqd9Y.earned.call(addressLtDcXYg, {from: accounts[4]});
		const uint256Ajnhp0X = await BACMARSLPTOKENPoolsAAqd9Y.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pV7UpcB = await BACMARSLPTOKENPoolsAAqd9Y.balanceOf.call(addressCNxDGPk, {from: accounts[3]});
		await BACMARSLPTOKENPoolsAAqd9Y.getReward.call({from: accounts[3]});
		const stringRMjEvgw = await BACMARSLPTOKENPoolsAAqd9Y.name.call({from: accounts[0]});
		const uint256hsPAAH2 = await BACMARSLPTOKENPoolsAAqd9Y.stake.call(uintVqacyME, {from: accounts[5]});
		const uint256XTqein0 = await BACMARSLPTOKENPoolsAAqd9Y.balanceOf.call(addressLWrv1oy, {from: accounts[1]});
		const uint256NNVDV6E = await BACMARSLPTOKENPoolsAAqd9Y.stake.call(uintt5kCACk, {from: accounts[4]});

		assert.equal(uint256Ajnhp0X, BigInt("0"))
		assert.equal(uint256R4nZfuI, BigInt("0"))
		assert.equal(uint256pV7UpcB, BigInt("0"))
		await expect(BACMARSLPTOKENPoolsAAqd9Y.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringt9sZwHS = "laixE7UnBRJ4OySVVG4wbJvtD34"
		const stringFlOBGpC = "lhoxkMosVB227lWYeFfIoRPq3hqs58V2qhiIem9qYBL9cH6PkV5AOEtsNHproT2gtrWdaZAYx2QXLQRG"
		const uintbzDvWA5 = BigInt("88")
		const BACMARSLPTOKENPoolZ2mXuU1 = await BACMARSLPTOKENPool.new(stringt9sZwHS, stringFlOBGpC, uintbzDvWA5, {from: accounts[2]});
		const uintmA1HROK = BigInt("89")
		const uintBCFnOPp = BigInt("1049")
		const byteX3NcF7L = "0x1e101d031f101c1a12081020141c1f141612021f0112031b0507100d1f081709"
		const bytebmjOPcb = "0x090417020b181b01171e14111e0206090a09180f14140f1d1b200b2009121113"
		const uintzfAOTHU = BigInt("195")
		const uintqsZ8Xhe = BigInt("610")
		const uintSFBrTfY = BigInt("589")
		const uint256VMajF38 = await BACMARSLPTOKENPoolZ2mXuU1.getRewardForDuration.call({from: accounts[4]});
		const uint256kb3FsgR = await BACMARSLPTOKENPoolZ2mXuU1.withdraw.call(uintmA1HROK, {from: accounts[3]});
		const uint256Dzk9PeN = await BACMARSLPTOKENPoolZ2mXuU1.notifyRewardAmount.call(uintBCFnOPp, {from: accounts[5]});
		await BACMARSLPTOKENPoolZ2mXuU1.nonReentrant.call({from: accounts[5]});
		const uint256dcN7sxh = await BACMARSLPTOKENPoolZ2mXuU1.stakeWithPermit.call(uintSFBrTfY, uintqsZ8Xhe, uintzfAOTHU, bytebmjOPcb, byteX3NcF7L, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSVIHK9O = "dy0quFEQsOYH3lQCEmsnQwEyOfbcqXxbu3Fe3FGcLWGxEDsled0iYw0AsV1YMijxhPTPA"
		const stringIr4x7zY = "Yw87wl4dpHqlp75nSUZSThSZvrMVgrrlvje9PW7dM85mzgeM5hWuJqwHOCpMINj"
		const uintZANVPpR = BigInt("81")
		const BACMARSLPTOKENPoolx8oGR9W = await BACMARSLPTOKENPool.new(stringSVIHK9O, stringIr4x7zY, uintZANVPpR, {from: accounts[0]});
		const uintQTjvevf = BigInt("49")
		const bytemi21Sz4 = "0x1c07090509090c060b1d0f0819101e1d1005081e021d13150917151a150f0e03"
		const bytebUz3GJ1 = "0x1f1c0b0c18140c150a1f1e1b1f1416151718080a17010c1e0e09170c10021414"
		const uintVqKSfYK = BigInt("63")
		const uintq0yi7Zk = BigInt("1894")
		const uintILrhk2C = BigInt("931")
		const uintQJBUocp = BigInt("213")
		const uint256t38eSea = await BACMARSLPTOKENPoolx8oGR9W.totalSupply.call({from: accounts[1]});
		const uint2566JjhVa = await BACMARSLPTOKENPoolx8oGR9W.withdraw.call(uintQTjvevf, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolx8oGR9W.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256fPIaLNq = await BACMARSLPTOKENPoolx8oGR9W.stakeWithPermit.call(uintILrhk2C, uintq0yi7Zk, uintVqKSfYK, bytebUz3GJ1, bytemi21Sz4, {from: accounts[2]});
		const uint256fng7B47 = await BACMARSLPTOKENPoolx8oGR9W.withdraw.call(uintQJBUocp, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqaIp8Wt = "Z447Af6dWQogLWdr1l6tsUbDgpoPwI09KRCrQdBQaAABPSVKsEdkb56LHKpoNlwTBadyhUQgXMzos94e6mzGaccntY79"
		const stringfJbYMD4 = "sUAbn5i2l1hNIgSdO1flvjXmQzixopjrwdQkv9fS8Hc2Q2eFwi570xTOT9715cyX2qVaV7onSASwTbx2VRIknE"
		const uintazIbHR = BigInt("15")
		const BACMARSLPTOKENPoolgL8QLJH = await BACMARSLPTOKENPool.new(stringqaIp8Wt, stringfJbYMD4, uintazIbHR, {from: accounts[2]});
		const uintjY1xD95 = BigInt("934")
		await BACMARSLPTOKENPoolgL8QLJH.onlyRewardsDistribution.call({from: accounts[4]});
		await BACMARSLPTOKENPoolgL8QLJH.onlyRewardsDistribution.call({from: accounts[0]});
		const stringBltSpIi = await BACMARSLPTOKENPoolgL8QLJH.symbol.call({from: accounts[2]});
		const uint8gTRPppz = await BACMARSLPTOKENPoolgL8QLJH.decimals.call({from: accounts[4]});
		const uint256Ho9yrI = await BACMARSLPTOKENPoolgL8QLJH.withdraw.call(uintjY1xD95, {from: accounts[1]});
		const stringMYwB1K = await BACMARSLPTOKENPoolgL8QLJH.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHDWHSj6 = "O8kJdmt66oeKcpdECNzYNrh6yXv3HWKCqGsXkWVhWfgXsahCWmqpGO3R8bBUZ83IOZfdFvPiFKzbVw"
		const stringhb5ErNk = "nEYiON0eXW33bK25J7MvB88RLy1YcFgDS9T2N6p3BDz4qP"
		const uintwAqG36 = BigInt("105")
		const BACMARSLPTOKENPoolc973G81 = await BACMARSLPTOKENPool.new(stringHDWHSj6, stringhb5ErNk, uintwAqG36, {from: accounts[5]});
		const uintAn3HOwR = BigInt("1824")
		await BACMARSLPTOKENPoolc973G81.getReward.call({from: accounts[5]});
		const uint256Tj8qEo6 = await BACMARSLPTOKENPoolc973G81.notifyRewardAmount.call(uintAn3HOwR, {from: accounts[2]});
		await BACMARSLPTOKENPoolc973G81.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGLcoPHi = "OodIkKaWYzfdITQ"
		const stringI0mx9jc = "TUmyhDxocdCMfN3eFP3cPig8qWaE8KEtnnVd7OofyU3xMKpN5tsDCtC7PcVguRVfEh14a6Xm48x9QRwFit"
		const uintKBi6QC0 = BigInt("72")
		const BACMARSLPTOKENPoolyrFrpcR = await BACMARSLPTOKENPool.new(stringGLcoPHi, stringI0mx9jc, uintKBi6QC0, {from: accounts[0]});
		const addressxtD4IrJ = accounts[3]
		const uintqe6nTXD = BigInt("1264")
		const stringKxYOl9N = await BACMARSLPTOKENPoolyrFrpcR.symbol.call({from: accounts[1]});
		const uint256B7s3Yu = await BACMARSLPTOKENPoolyrFrpcR.balanceOf.call(addressxtD4IrJ, {from: accounts[1]});
		const uint256ki4wFJ = await BACMARSLPTOKENPoolyrFrpcR.getRewardForDuration.call({from: accounts[5]});
		const uint256O015RNj = await BACMARSLPTOKENPoolyrFrpcR.notifyRewardAmount.call(uintqe6nTXD, {from: accounts[0]});
		const stringHYYUIx = await BACMARSLPTOKENPoolyrFrpcR.name.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUprWQXq = "EVZf"
		const stringQh0Axmt = "ZNwl20DdP3Vd5M1IlAqJ3cq"
		const uintL4a8vOM = BigInt("246")
		const BACMARSLPTOKENPoolT79Yp6S = await BACMARSLPTOKENPool.new(stringUprWQXq, stringQh0Axmt, uintL4a8vOM, {from: "0x0000000000000000000000000000000000000001"});
		const uint8TWVDDHs = await BACMARSLPTOKENPoolT79Yp6S.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolT79Yp6S.nonReentrant.call({from: accounts[3]});
		const uint256fODwpUw = await BACMARSLPTOKENPoolT79Yp6S.getRewardForDuration.call({from: accounts[4]});
		const uint256j9dVNAv = await BACMARSLPTOKENPoolT79Yp6S.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuoRCk5l = "86ciM96ggRdiKYaXFwDqRmTqWY"
		const stringtzTmGtW = "Gjr4vI8j"
		const uintOmho9Bf = BigInt("46")
		const BACMARSLPTOKENPoolG65R58T = await BACMARSLPTOKENPool.new(stringuoRCk5l, stringtzTmGtW, uintOmho9Bf, {from: accounts[0]});
		const uintixOzraS = BigInt("556")
		const uint256YLv3uE7 = await BACMARSLPTOKENPoolG65R58T.totalSupply.call({from: accounts[4]});
		const uint256G2Rge2V = await BACMARSLPTOKENPoolG65R58T.stake.call(uintixOzraS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jPwSO2U = await BACMARSLPTOKENPoolG65R58T.totalSupply.call({from: accounts[0]});
		const stringMhRTP6 = await BACMARSLPTOKENPoolG65R58T.name.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNUydfuT = "eRNTQP5O"
		const stringD2Grl5x = "A3DdhzU2YjLo3wtutMbAo2UX0pE8DpGjFQfBusx2R2O1AhyDPnnghW9qAHFWzC"
		const uintKTW22Hy = BigInt("161")
		const BACMARSLPTOKENPoolPdZFbUs = await BACMARSLPTOKENPool.new(stringNUydfuT, stringD2Grl5x, uintKTW22Hy, {from: accounts[1]});
		const uintiYA4tjQ = BigInt("61")
		const uint256Zhv0C9u = await BACMARSLPTOKENPoolPdZFbUs.stake.call(uintiYA4tjQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint8y3YEeO = await BACMARSLPTOKENPoolPdZFbUs.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBROZonF = "ywha1ffKg4pV6dzaPkaFOH5RTwijbHDSUDsWw6upbSOXaSaw1EloqgEmkRemmsMXVcRjVtCl3dY6gOPhXtMYQcWEMnuBfce"
		const stringORhqh5 = "zMmNP6fLEbffM7jcahAUPqAYhqp"
		const uintfy7rMAe = BigInt("31")
		const BACMARSLPTOKENPoolnXNYkH8 = await BACMARSLPTOKENPool.new(stringBROZonF, stringORhqh5, uintfy7rMAe, {from: accounts[5]});
		await BACMARSLPTOKENPoolnXNYkH8.exit.call({from: accounts[0]});
		const stringGKs3ATV = await BACMARSLPTOKENPoolnXNYkH8.symbol.call({from: accounts[5]});
		await BACMARSLPTOKENPoolnXNYkH8.nonReentrant.call({from: accounts[2]});
		const uint256mjtIfZT = await BACMARSLPTOKENPoolnXNYkH8.rewardPerToken.call({from: accounts[2]});
		const uint8bPQFyrL = await BACMARSLPTOKENPoolnXNYkH8.decimals.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDASyrYs = "EwWK6EWgfO8xIFERBrWaQ9v2SQanH6UErDSYYn2Se97MN4TFwuQFowDRdrBN4y5bFRjuCLRodElkCEEPKyRhIf2fh8TOpUpOn"
		const string6jIwzx = "DuZDsOpugmhXcPvKRbQiPtZ7bxJHu2fKSq5vxLsuojN36eAYYnuGPS8xiK7jeXwWwAL5sYgMbhNWWPa4Mm3kt53gN"
		const uintrGK9OyR = BigInt("142")
		const BACMARSLPTOKENPooljzgDJ5 = await BACMARSLPTOKENPool.new(stringDASyrYs, string6jIwzx, uintrGK9OyR, {from: accounts[0]});
		const byteSf72dFV = "0x091e04090e140b1110030c071a101a051816010f090f1a150518111f170c161d"
		const byte1z6gt3 = "0x111117040108131b04040b110c02191d1308140c1205081f0a07050d011f1414"
		const uintr5ppEae = BigInt("48")
		const uintxYxggrY = BigInt("1304")
		const uintvKumdZI = BigInt("1266")
		const bytebLPqCt = "0x0017031d0d190214051f1409021102090c18030a0a0d1d0f1f171c1c161a010a"
		const bytetyiTNg = "0x1d1e1d05061c0908071c151c0909131318050d050b04180c101a18100314170a"
		const uintSwcLqy = BigInt("174")
		const uintKCZP9lt = BigInt("1913")
		const uintePPyh2W = BigInt("586")
		const uint256yrUkRax = await BACMARSLPTOKENPooljzgDJ5.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256nKkFzqa = await BACMARSLPTOKENPooljzgDJ5.stakeWithPermit.call(uintvKumdZI, uintxYxggrY, uintr5ppEae, byte1z6gt3, byteSf72dFV, {from: accounts[2]});
		const stringTRcAqiy = await BACMARSLPTOKENPooljzgDJ5.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPooljzgDJ5.exit.call({from: accounts[0]});
		const uint256OcRxeyD = await BACMARSLPTOKENPooljzgDJ5.stakeWithPermit.call(uintePPyh2W, uintKCZP9lt, uintSwcLqy, bytetyiTNg, bytebLPqCt, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbR4sju4 = "w5"
		const stringPOIUA5I = "ykUycEhpC3nG9fDBOjj6c1JZMOw0K5eLHrcoYmSGVQ4CwHe"
		const uintZ5QLTCp = BigInt("152")
		const BACMARSLPTOKENPoolCw3f9L0 = await BACMARSLPTOKENPool.new(stringbR4sju4, stringPOIUA5I, uintZ5QLTCp, {from: accounts[5]});
		await BACMARSLPTOKENPoolCw3f9L0.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolCw3f9L0.exit.call({from: accounts[1]});
		const uint256aVUm0mA = await BACMARSLPTOKENPoolCw3f9L0.totalSupply.call({from: accounts[0]});
		const uint256X7o2a93 = await BACMARSLPTOKENPoolCw3f9L0.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWm0iNy0 = "nFtB1KbRkS8ObmwoF0aCGPasqzpH2E61Nr1ivn2aTto7iRM4GgmdPpe9PAC7nGHJLPEnOMUtUnTjz7"
		const stringpeaKOrD = "n3FEruE6P5cppSN8vEyrNeWQNF0l8AqRClXaokG7i7eUXNlORtkw4qi39rDTyT0OTOY0o8"
		const uintawOuhU = BigInt("248")
		const BACMARSLPTOKENPoolAAwFYbh = await BACMARSLPTOKENPool.new(stringWm0iNy0, stringpeaKOrD, uintawOuhU, {from: accounts[2]});
		const addressocmPrW = accounts[2]
		const bytewtf3aO1 = "0x181c03131f12000e1d1d110d1e0f1618031704041b1b1a17081c10151e1a150d"
		const byteDJ1Po37 = "0x091c150700051e1a050608191f18091108051c07010c0414031e191f131a1811"
		const uintmHSncY2 = BigInt("133")
		const uintXVI0HPn = BigInt("1435")
		const uintrEeAgYr = BigInt("1696")
		const addressEw7DsNo = accounts[5]
		const uintD5lV1v2 = BigInt("655")
		const bytetwl7WA = "0x1f1c130a1d121f181a1d060a000a120519191a0a1e1420121106071a0c201618"
		const byteA6fQHjH = "0x0e081c010a1a15051b17191108101c0e040e1e0d13000d03150109090118130b"
		const uintwCmiWyO = BigInt("38")
		const uintvV4XBNZ = BigInt("427")
		const uinthzdhQHr = BigInt("885")
		const addressPo1Vobz = await BACMARSLPTOKENPoolAAwFYbh.updateReward.call(addressocmPrW, {from: accounts[0]});
		const uint256IrAvMru = await BACMARSLPTOKENPoolAAwFYbh.stakeWithPermit.call(uintrEeAgYr, uintXVI0HPn, uintmHSncY2, byteDJ1Po37, bytewtf3aO1, {from: accounts[4]});
		await BACMARSLPTOKENPoolAAwFYbh.exit.call({from: accounts[5]});
		const uint256ta0MdB = await BACMARSLPTOKENPoolAAwFYbh.balanceOf.call(addressEw7DsNo, {from: accounts[1]});
		const uint256StTL2sX = await BACMARSLPTOKENPoolAAwFYbh.notifyRewardAmount.call(uintD5lV1v2, {from: accounts[2]});
		const uint256IoWX9tY = await BACMARSLPTOKENPoolAAwFYbh.stakeWithPermit.call(uinthzdhQHr, uintvV4XBNZ, uintwCmiWyO, byteA6fQHjH, bytetwl7WA, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlQ9vCjY = "BPdOMwzomK8XDzXCTNHswmcMkvxuN444ANJibm7d5Q7Kala22QVWtGzZWutuMWHPSBRUQaCVBlWVhr0AFXg7zvPSLzPkOrmD8D"
		const stringWViBi5i = "cmhgm7nr9PfPI3E4pSenPk5LnNDVrfespWg1xC70Qm4xDuoHIfkWYSTeV4nN8EKoj4bQRPz1h3JpBXGnKQpb"
		const uintGUI8uip = BigInt("142")
		const BACMARSLPTOKENPoolCunoks = await BACMARSLPTOKENPool.new(stringlQ9vCjY, stringWViBi5i, uintGUI8uip, {from: accounts[4]});
		const addresscAXSDDK = accounts[1]
		const uintmWjHp5b = BigInt("760")
		const bytemv4XwR6 = "0x120a0b151405110500010b150406160d1d122009151b1c070d0b0e02120d0611"
		const bytekOfY539 = "0x151e0f17041a150c0d1a1f181118200915031e0601180d1a100e031b0e1e0e0a"
		const uintu0B5OQu = BigInt("133")
		const uintywxImu2 = BigInt("1661")
		const uintiUnuapV = BigInt("904")
		const uint256ojlnv9X = await BACMARSLPTOKENPoolCunoks.totalSupply.call({from: accounts[0]});
		await BACMARSLPTOKENPoolCunoks.exit.call({from: accounts[3]});
		const uint256L1lGOC3 = await BACMARSLPTOKENPoolCunoks.earned.call(addresscAXSDDK, {from: accounts[1]});
		const uint256vMXEYr1 = await BACMARSLPTOKENPoolCunoks.notifyRewardAmount.call(uintmWjHp5b, {from: accounts[2]});
		const uint256G49yi35 = await BACMARSLPTOKENPoolCunoks.totalSupply.call({from: accounts[3]});
		const uint256Y3Cdu82 = await BACMARSLPTOKENPoolCunoks.stakeWithPermit.call(uintiUnuapV, uintywxImu2, uintu0B5OQu, bytekOfY539, bytemv4XwR6, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZFrNyQ5 = "XslSt2BKYjJ7PYpSw"
		const stringq3aAhH = "HztYBvUye7oXwpLxPRQhoZUbGTYQOlypucN"
		const uintUu2SHR = BigInt("232")
		const BACMARSLPTOKENPoolUfJgTrM = await BACMARSLPTOKENPool.new(stringZFrNyQ5, stringq3aAhH, uintUu2SHR, {from: accounts[3]});
		const addressws1RRSm = accounts[1]
		const uint256mbdew5B = await BACMARSLPTOKENPoolUfJgTrM.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256EzjSmHD = await BACMARSLPTOKENPoolUfJgTrM.balanceOf.call(addressws1RRSm, {from: accounts[1]});
		const uint256W5ISb7H = await BACMARSLPTOKENPoolUfJgTrM.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolUfJgTrM.nonReentrant.call({from: accounts[2]});
		const uint256QUTJFTh = await BACMARSLPTOKENPoolUfJgTrM.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkBSE5xr = "SJaEQpcNTpIUUB9aF"
		const stringIurSEUJ = "G1GX7CTQrcQPdAW21FcD1rdubVUuTMWAVxgrPGcYHLOMzFLF5kw1mEoQ28"
		const uintuhiRmr7 = BigInt("5")
		const BACMARSLPTOKENPoolGYVivaQ = await BACMARSLPTOKENPool.new(stringkBSE5xr, stringIurSEUJ, uintuhiRmr7, {from: accounts[0]});
		const addressjCcUKdp = accounts[2]
		const addressk207whV = accounts[5]
		const addressSVwvjRd = accounts[1]
		const uint256spb0Hkg = await BACMARSLPTOKENPoolGYVivaQ.balanceOf.call(addressjCcUKdp, {from: accounts[3]});
		const uint8MAtE9Dq = await BACMARSLPTOKENPoolGYVivaQ.decimals.call({from: accounts[4]});
		const uint256jX77lVH = await BACMARSLPTOKENPoolGYVivaQ.earned.call(addressk207whV, {from: accounts[4]});
		const addressrdOEZlr = await BACMARSLPTOKENPoolGYVivaQ.updateReward.call(addressSVwvjRd, {from: accounts[2]});
		await BACMARSLPTOKENPoolGYVivaQ.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressxrS8hzu = "0x0000000000000000000000000000000000000001"
		const addressM408OUZ = accounts[1]
		const addressIXd48Pa = accounts[4]
		const BACMARSLPTOKENPoolsAAqd9Y = await BACMARSLPTOKENPool.new(addressxrS8hzu, addressM408OUZ, addressIXd48Pa, {from: accounts[4]});
		const addressQ7sCPzQ = accounts[4]
		const uintAjxT6cs = BigInt("1682")
		const uintm3iQX5 = BigInt("1297")
		const addressmnduLjX = accounts[4]
		const uintKEaziWh = BigInt("1719")
		const uint256R4nZfuI = await BACMARSLPTOKENPoolsAAqd9Y.earned.call(addressQ7sCPzQ, {from: accounts[4]});
		const uint256P4jnXNE = await BACMARSLPTOKENPoolsAAqd9Y.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256HVGPA2U = await BACMARSLPTOKENPoolsAAqd9Y.notifyRewardAmount.call(uintAjxT6cs, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yD1BGS3 = await BACMARSLPTOKENPoolsAAqd9Y.getRewardForDuration.call({from: accounts[0]});
		const uint256Ajnhp0X = await BACMARSLPTOKENPoolsAAqd9Y.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolsAAqd9Y.getReward.call({from: accounts[3]});
		const uint256hsPAAH2 = await BACMARSLPTOKENPoolsAAqd9Y.stake.call(uintm3iQX5, {from: accounts[5]});
		const uint256BaZZu1Z = await BACMARSLPTOKENPoolsAAqd9Y.balanceOf.call(addressmnduLjX, {from: accounts[5]});
		const stringPE7C8q5 = await BACMARSLPTOKENPoolsAAqd9Y.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolsAAqd9Y.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256dYgOomY = await BACMARSLPTOKENPoolsAAqd9Y.withdraw.call(uintKEaziWh, {from: accounts[2]});

		assert.equal(uint256P4jnXNE, BigInt("0"))
		assert.equal(uint256R4nZfuI, BigInt("0"))
		await expect(BACMARSLPTOKENPoolsAAqd9Y.notifyRewardAmount.call(uintAjxT6cs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlo713lf = "eFVL2TmjMNhTUvIKagbe7fpPvQIeBMw0dgusxaqBqX9bHpVfHYEv8L26MDPNcdsdcNkRvvDiMnnuAN4Pp4cdrQ6iBBjRQZ0p"
		const stringC18qjqI = "xio3om2kmrsr"
		const uintmir0NeK = BigInt("19")
		const BACMARSLPTOKENPoolxp6CNpN = await BACMARSLPTOKENPool.new(stringlo713lf, stringC18qjqI, uintmir0NeK, {from: accounts[5]});
		const uintDQRfMUv = BigInt("1728")
		const stringKde3gh7 = await BACMARSLPTOKENPoolxp6CNpN.name.call({from: accounts[5]});
		const uint256PY2wCoS = await BACMARSLPTOKENPoolxp6CNpN.withdraw.call(uintDQRfMUv, {from: accounts[3]});
		const uint8OZG7p2v = await BACMARSLPTOKENPoolxp6CNpN.decimals.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHYoazME = "roYTaUYEoP4544eEotuhT1xcJvdnKMR61aQA2bcGaHTe1wWvCBbqsvfugfMcUMKRqY8RpPBVn3s4oX01VR"
		const stringuUZ1RZG = "yRxkT6VIav4iO6Jc9T6kbIk9NFRuIt244W3p2EXXC3vBuWRntrrCzMJZFVASb1fxK2GM1upq4vzFCxsuSY9soTaYfH9wb01P"
		const uintnmGRGHa = BigInt("125")
		const BACMARSLPTOKENPoolW0gaiGK = await BACMARSLPTOKENPool.new(stringHYoazME, stringuUZ1RZG, uintnmGRGHa, {from: accounts[3]});
		const uintkENsiEa = BigInt("1894")
		const uint256m67pOwq = await BACMARSLPTOKENPoolW0gaiGK.withdraw.call(uintkENsiEa, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolW0gaiGK.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrK5Z9xo = "y7lfCYW3CArHpt7eVWONLISLAb4hUl4Ig"
		const stringW7kjunI = "VI7K3zL9Yj9MwqhmBeF3GWfSJwFimFI0YDnNrCLkBhclKD2kxM8quNFN5cLvPR7M20UcWMtebxFDE6eBKEb"
		const uintvmJuRRX = BigInt("219")
		const BACMARSLPTOKENPoolmwR2MG9 = await BACMARSLPTOKENPool.new(stringrK5Z9xo, stringW7kjunI, uintvmJuRRX, {from: accounts[0]});
		const uintNU3dGRt = BigInt("1099")
		const addresshUZhWHh = accounts[4]
		const uintuFbJkSZ = BigInt("1650")
		const uintdCkIRaV = BigInt("1936")
		const uint256qO0QOvU = await BACMARSLPTOKENPoolmwR2MG9.stake.call(uintNU3dGRt, {from: accounts[4]});
		const uint256ugZ8XJ6 = await BACMARSLPTOKENPoolmwR2MG9.balanceOf.call(addresshUZhWHh, {from: accounts[4]});
		const uint256zCEtlEQ = await BACMARSLPTOKENPoolmwR2MG9.stake.call(uintuFbJkSZ, {from: accounts[0]});
		await BACMARSLPTOKENPoolmwR2MG9.getReward.call({from: accounts[5]});
		const uint2560LRQmQ = await BACMARSLPTOKENPoolmwR2MG9.stake.call(uintdCkIRaV, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxNiVW6P = "mqudoFhpVswDJEwpOyEx9"
		const string9cTRtY = "xj3okHqHPBpipCf"
		const uintLlNLyJI = BigInt("111")
		const BACMARSLPTOKENPoolxsd8UN = await BACMARSLPTOKENPool.new(stringxNiVW6P, string9cTRtY, uintLlNLyJI, {from: "0x0000000000000000000000000000000000000001"});
		const addressVrFjLmE = accounts[0]
		const byteM3asMUo = "0x07080510111a030311041b1819010516111c01181d1b0b0b1f1d1a060d091608"
		const byteuC0vweP = "0x1200181110051c0a0c1a051d18190f160f1919101c0f141202191a15131b1b1e"
		const uintqfBM368 = BigInt("29")
		const uinteEpreV2 = BigInt("1555")
		const uintEF59FQk = BigInt("493")
		const bytecgalpn = "0x0d0e10051d181a110e130b140f1104180e04091c130f0f0a150b061f0a15201b"
		const bytembEZXEv = "0x0d001403070514030c0410011a0a0c0e120c07090d000e1714051f03091b151b"
		const uinttLjE3c2 = BigInt("119")
		const uintBjlChsp = BigInt("1063")
		const uintlD60RVE = BigInt("1109")
		const addressj6q2K86 = "0x0000000000000000000000000000000000000001"
		const uint256oByjRzj = await BACMARSLPTOKENPoolxsd8UN.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256wDBycOX = await BACMARSLPTOKENPoolxsd8UN.earned.call(addressVrFjLmE, {from: accounts[3]});
		const uint256HYnpr6L = await BACMARSLPTOKENPoolxsd8UN.stakeWithPermit.call(uintEF59FQk, uinteEpreV2, uintqfBM368, byteuC0vweP, byteM3asMUo, {from: accounts[4]});
		const uint256luCv7AE = await BACMARSLPTOKENPoolxsd8UN.stakeWithPermit.call(uintlD60RVE, uintBjlChsp, uinttLjE3c2, bytembEZXEv, bytecgalpn, {from: accounts[1]});
		const uint256BJ9Ld3 = await BACMARSLPTOKENPoolxsd8UN.balanceOf.call(addressj6q2K86, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringy0GWO0T = "xJzwUVA43RtS0RilgKCJRsAp9SllkGk9bAlEXWRioe0OQ92OfwD4aeDWFdTReDLGzcb4DJylaio2LEcPO"
		const stringeIK5gp = "KPBvxR5cbziylpQmRylSB9PomEB1pAxQpdZ26GTxt7bdXfTn"
		const uintW5tF8n = BigInt("139")
		const BACMARSLPTOKENPoolK7RCCB5 = await BACMARSLPTOKENPool.new(stringy0GWO0T, stringeIK5gp, uintW5tF8n, {from: accounts[4]});
		const byteEGgVKI = "0x0b1e20120f0505151b011713201920020319061910180c0c1d150e091709060d"
		const byteymkVnUw = "0x12140600010e1412121c0a0d18010e091c0a0c081c0b0d140c091505181d1612"
		const uintLiUwnEH = BigInt("148")
		const uinthIj0C6M = BigInt("483")
		const uinttAJhQS5 = BigInt("929")
		await BACMARSLPTOKENPoolK7RCCB5.exit.call({from: accounts[1]});
		const uint256Ws7BbS3 = await BACMARSLPTOKENPoolK7RCCB5.stakeWithPermit.call(uinttAJhQS5, uinthIj0C6M, uintLiUwnEH, byteymkVnUw, byteEGgVKI, {from: accounts[3]});
		const stringkLDOF21 = await BACMARSLPTOKENPoolK7RCCB5.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKEiKNpC = "O9FyZMqGYZ5wnNDSfHnzUejxR"
		const stringBIR9IGd = "7lpU"
		const uintKNr8Abb = BigInt("216")
		const BACMARSLPTOKENPoolp30Eo0b = await BACMARSLPTOKENPool.new(stringKEiKNpC, stringBIR9IGd, uintKNr8Abb, {from: accounts[0]});
		const stringEduOky3 = await BACMARSLPTOKENPoolp30Eo0b.name.call({from: accounts[0]});
		const uint256nwkbIEs = await BACMARSLPTOKENPoolp30Eo0b.totalSupply.call({from: accounts[3]});
		const uint256E1xmnvJ = await BACMARSLPTOKENPoolp30Eo0b.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmxVpUm = "pwDbpLIfDV5Snjh6YvXfjF7KjYgN1trzsBzHzDtaItMRw6nfxkO41tEzxstRgrVi0LDkbY2j"
		const stringUcpm8sM = "MRr7UMsIdR9Z8ctVDr0vrUudS63mPlsf3FZWcbnNeJd2KtVI5"
		const uintRvzdYWJ = BigInt("126")
		const BACMARSLPTOKENPoolQOqn2cy = await BACMARSLPTOKENPool.new(stringmxVpUm, stringUcpm8sM, uintRvzdYWJ, {from: accounts[2]});
		const addressgSSUEXt = accounts[2]
		const uint256Xb9aNFe = await BACMARSLPTOKENPoolQOqn2cy.getRewardForDuration.call({from: accounts[3]});
		const stringRftgReV = await BACMARSLPTOKENPoolQOqn2cy.symbol.call({from: accounts[2]});
		const uint256IhRWkJB = await BACMARSLPTOKENPoolQOqn2cy.totalSupply.call({from: accounts[4]});
		const uint256l0c2vo = await BACMARSLPTOKENPoolQOqn2cy.earned.call(addressgSSUEXt, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKWug2jV = "abdm92mA1gbDfZiDDQYgGTe4XLfg4LIHtsbRFPRQ4K9miSHg2aloI81iU"
		const stringXJx9Tmz = "3z4dYC4VGJkfeEKMaawB1yyFQGe7sv0byxycvwjekwQfmUhgQqmjRacffQzFmSpjjJKolNOJZJsDPksxXw2IifUPzKVd"
		const uintHHPgvS = BigInt("209")
		const BACMARSLPTOKENPoolUXBDaDp = await BACMARSLPTOKENPool.new(stringKWug2jV, stringXJx9Tmz, uintHHPgvS, {from: accounts[0]});
		const uintGCS3P05 = BigInt("361")
		const byteQ9EpcOc = "0x200b201d13012001011b1f020308011c0a0b0710141a13200f17131d091c1b12"
		const byteQDBSYJZ = "0x160c0d0708031c1f0405141e0e0a130406141410031a020c171d0d1704120618"
		const uinthdjAXli = BigInt("217")
		const uintiSaTmNO = BigInt("287")
		const uintlOKN3zK = BigInt("1236")
		const uint256fu2yx0c = await BACMARSLPTOKENPoolUXBDaDp.withdraw.call(uintGCS3P05, {from: accounts[1]});
		await BACMARSLPTOKENPoolUXBDaDp.getReward.call({from: accounts[5]});
		const uint256uIkHYsA = await BACMARSLPTOKENPoolUXBDaDp.stakeWithPermit.call(uintlOKN3zK, uintiSaTmNO, uinthdjAXli, byteQDBSYJZ, byteQ9EpcOc, {from: accounts[1]});
		const uint8yS3gb5v = await BACMARSLPTOKENPoolUXBDaDp.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjBzbVq3 = "SbRm1pVtJNJycWxoTch6qm947hF4cjXzJfchpqKJ9BQemzBl8znW3bwthpjz0eg3DVNJxQH18zghC2MKnNVA331o2AZBDdSn"
		const stringDDEwZOQ = "qX98rSz5IhegLoUBVdq9Ah8FyAwzreBTW1KjwMB"
		const uintmo7pco6 = BigInt("51")
		const BACMARSLPTOKENPoolefvkTuH = await BACMARSLPTOKENPool.new(stringjBzbVq3, stringDDEwZOQ, uintmo7pco6, {from: accounts[2]});
		const uintw7VbFwC = BigInt("1264")
		const uint8FFkP0Q4 = await BACMARSLPTOKENPoolefvkTuH.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolefvkTuH.nonReentrant.call({from: accounts[0]});
		const uint8piHE7l2 = await BACMARSLPTOKENPoolefvkTuH.decimals.call({from: accounts[1]});
		const uint256153Gzg = await BACMARSLPTOKENPoolefvkTuH.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256GrRFzDT = await BACMARSLPTOKENPoolefvkTuH.stake.call(uintw7VbFwC, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string07uRhG = "PZkgMuE4VIH"
		const stringw541Li = "hr5C5sHadMZyBgnWVnSIYBLbWGJ1wkVd4HONaCVh0h0fDUG7Qn21JGKyBdIwCeoKBdm2"
		const uintrIMVVWu = BigInt("202")
		const BACMARSLPTOKENPoolZCX4syB = await BACMARSLPTOKENPool.new(string07uRhG, stringw541Li, uintrIMVVWu, {from: accounts[4]});
		const addressXOYUBrH = accounts[4]
		const byteiFVhMsE = "0x200216021d1c18160718010112081b171606130e1708021b101110200f130608"
		const byteeP0CcsW = "0x0e02091714041d200d1c081d061f131b0c1817051e1e14031f021e1e1319171c"
		const uintEadDVGp = BigInt("146")
		const uintZH4zbO = BigInt("292")
		const uintIoqo5CC = BigInt("1891")
		const addressDVV0k2H = accounts[1]
		const uintI5bO5ZW = BigInt("1756")
		const uint256opotT2d = await BACMARSLPTOKENPoolZCX4syB.balanceOf.call(addressXOYUBrH, {from: accounts[1]});
		const uint256iqWu4Do = await BACMARSLPTOKENPoolZCX4syB.stakeWithPermit.call(uintIoqo5CC, uintZH4zbO, uintEadDVGp, byteeP0CcsW, byteiFVhMsE, {from: accounts[4]});
		const uint8By5bjK = await BACMARSLPTOKENPoolZCX4syB.decimals.call({from: accounts[0]});
		const uint256jljZvIS = await BACMARSLPTOKENPoolZCX4syB.earned.call(addressDVV0k2H, {from: accounts[3]});
		const uint256tNZ8rLG = await BACMARSLPTOKENPoolZCX4syB.notifyRewardAmount.call(uintI5bO5ZW, {from: accounts[0]});
		const uint256UqVO70K = await BACMARSLPTOKENPoolZCX4syB.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtX7tjdX = "sHsjHbTB2XdgDEaYKa5OHMwWNHLzS8CBS8YqLRHtDJ0Ghy1jmEA7iqFnMFGiXsYO"
		const stringq1FW1m1 = "2xuxUDF"
		const uintb5cpcU = BigInt("9")
		const BACMARSLPTOKENPoolRxCwkzL = await BACMARSLPTOKENPool.new(stringtX7tjdX, stringq1FW1m1, uintb5cpcU, {from: accounts[2]});
		const uintI6lfw8B = BigInt("391")
		const uint256vmqGjQ = await BACMARSLPTOKENPoolRxCwkzL.rewardPerToken.call({from: accounts[1]});
		const uint256yjzi07 = await BACMARSLPTOKENPoolRxCwkzL.notifyRewardAmount.call(uintI6lfw8B, {from: accounts[0]});
		await BACMARSLPTOKENPoolRxCwkzL.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTSDsyN6 = "uFq4z"
		const stringHTf860J = "xE8MxGFMhwf1Y7mmFdncWgOH5UZQcDnJMo5MzJSQF96x"
		const uintGhdhZyD = BigInt("227")
		const BACMARSLPTOKENPoolZo0On2 = await BACMARSLPTOKENPool.new(stringTSDsyN6, stringHTf860J, uintGhdhZyD, {from: accounts[4]});
		const stringbMCPh3S = await BACMARSLPTOKENPoolZo0On2.symbol.call({from: accounts[4]});
		const uint256FLXGIB4 = await BACMARSLPTOKENPoolZo0On2.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256w5p7XRm = await BACMARSLPTOKENPoolZo0On2.lastTimeRewardApplicable.call({from: accounts[2]});
		const stringQr0bdFR = await BACMARSLPTOKENPoolZo0On2.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnQeT1Sg = "Q99v32tOSQN"
		const stringAdFNjZP = "USIHTJxeqdIP3sPLe93T575eX3Cgw3cdxls14px441gtUC7c8lK"
		const uintEfte84R = BigInt("22")
		const BACMARSLPTOKENPoolnfoKBmS = await BACMARSLPTOKENPool.new(stringnQeT1Sg, stringAdFNjZP, uintEfte84R, {from: accounts[1]});
		const uintcDdW1DW = BigInt("1511")
		await BACMARSLPTOKENPoolnfoKBmS.getReward.call({from: accounts[2]});
		const uint256NkgOD7K = await BACMARSLPTOKENPoolnfoKBmS.notifyRewardAmount.call(uintcDdW1DW, {from: accounts[4]});
		const uint256IJ3cQis = await BACMARSLPTOKENPoolnfoKBmS.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFiOPhPJ = "VQVqbRrOFhwKk9ygVqgjRt3ODkGyWnib1foGyNZLw0f9q"
		const stringaQ4WTa9 = "elodRzojY3X0KNcoEQqX0ARHsRQLpNoRVVYPWReLWb215JHJdbd9P9g"
		const uintNzXIiT = BigInt("3")
		const BACMARSLPTOKENPoolphKXs4Z = await BACMARSLPTOKENPool.new(stringFiOPhPJ, stringaQ4WTa9, uintNzXIiT, {from: accounts[0]});
		const addressKWeLLRV = accounts[2]
		const uintwNebL9 = BigInt("1915")
		const uint256Qkvmf4w = await BACMARSLPTOKENPoolphKXs4Z.earned.call(addressKWeLLRV, {from: accounts[5]});
		const uint8HodUFgD = await BACMARSLPTOKENPoolphKXs4Z.decimals.call({from: accounts[5]});
		await BACMARSLPTOKENPoolphKXs4Z.exit.call({from: accounts[0]});
		const uint256aBbK4qx = await BACMARSLPTOKENPoolphKXs4Z.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const stringrA5UbOC = await BACMARSLPTOKENPoolphKXs4Z.name.call({from: accounts[5]});
		const uint256FGEpgb3 = await BACMARSLPTOKENPoolphKXs4Z.withdraw.call(uintwNebL9, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSdIy0Hn = "Ft"
		const stringB7RsG0b = "IdXUxmDDusmN9bq7A37Iawmig97HD77FBeuLOfT5ij56OWzaFRMJXW3wt0m6yA5mmAcyRjm3f3bMWyR9N20kHXNY"
		const uintXZXhEWJ = BigInt("226")
		const BACMARSLPTOKENPoolfuJ4Y1z = await BACMARSLPTOKENPool.new(stringSdIy0Hn, stringB7RsG0b, uintXZXhEWJ, {from: accounts[0]});
		await BACMARSLPTOKENPoolfuJ4Y1z.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256ybjZN5E = await BACMARSLPTOKENPoolfuJ4Y1z.getRewardForDuration.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfc2sQgW = "H6IPeMNxZkZL533aNUDrxPNBwFOyLZvMB"
		const stringJ5UWyqH = "4Ckteb5ekMER01wvBgYHRww"
		const uintbf2i28j = BigInt("3")
		const BACMARSLPTOKENPoolShB9xAh = await BACMARSLPTOKENPool.new(stringfc2sQgW, stringJ5UWyqH, uintbf2i28j, {from: accounts[1]});
		const byteHheoJ8R = "0x160310180d1309101e011f1e1e000b0810120e0f13080b1d1104051513191210"
		const bytezBgWj1L = "0x0b0e0e1d180a090c0e161c140f1d13010d121e0b0e140d031f151d0c0c16021d"
		const uintVUDNOEj = BigInt("5")
		const uintmOMtBFf = BigInt("1350")
		const uintdsCRRd1 = BigInt("549")
		const uint256AoVXSFb = await BACMARSLPTOKENPoolShB9xAh.totalSupply.call({from: accounts[4]});
		const uint256nNXRjoe = await BACMARSLPTOKENPoolShB9xAh.stakeWithPermit.call(uintdsCRRd1, uintmOMtBFf, uintVUDNOEj, bytezBgWj1L, byteHheoJ8R, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjXai0R = "KwDrPDM9BeSiARtkDQvpnrNyAdjzWnmmafShnd1Katt2gqFlUoFtpCFvDYbn0SoLK1sTXOZbiRmQg9UCvxZF"
		const stringOkvlUfP = "SIqpnUrAElrk7vpIxnmtHr1zHmlaS6LNJNwyNrP9519IpvKL1Nqgm49b2LOd"
		const uintB8G6mPS = BigInt("115")
		const BACMARSLPTOKENPoolVRDUXpO = await BACMARSLPTOKENPool.new(stringjXai0R, stringOkvlUfP, uintB8G6mPS, {from: accounts[0]});
		const uintZXGNehr = BigInt("737")
		const addresswBUFajV = accounts[1]
		const uint256PU5yjG2 = await BACMARSLPTOKENPoolVRDUXpO.stake.call(uintZXGNehr, {from: accounts[5]});
		await BACMARSLPTOKENPoolVRDUXpO.getReward.call({from: accounts[2]});
		const uint256yreMczn = await BACMARSLPTOKENPoolVRDUXpO.balanceOf.call(addresswBUFajV, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdLJfslk = "YkBKoD3s5Vbyprig9UkJ9nFh5BObZjIi"
		const stringe5CPKW = "L3JjhakZk7uWfE6bGXsCQo9MMeRVjvI3"
		const uintjL4Wg0k = BigInt("245")
		const BACMARSLPTOKENPoolXFCjoI5 = await BACMARSLPTOKENPool.new(stringdLJfslk, stringe5CPKW, uintjL4Wg0k, {from: accounts[2]});
		const uintXIJ90TS = BigInt("1522")
		const addressEECZp1H = accounts[5]
		const uint256smLq4My = await BACMARSLPTOKENPoolXFCjoI5.notifyRewardAmount.call(uintXIJ90TS, {from: accounts[4]});
		const uint256vrzDDKP = await BACMARSLPTOKENPoolXFCjoI5.balanceOf.call(addressEECZp1H, {from: accounts[3]});
		const uint8MWtbpMu = await BACMARSLPTOKENPoolXFCjoI5.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjCepJTY = "eti"
		const stringeXjD3FV = "55GIiBIa3xwqOsPjDMTZb5jUaWAtpfIfgPstd5gRxspDu37Wd5YQh6qUDhG5J9qTWNV9WQLuhDsMj2RkeQwGUEiDqKK"
		const uintyjAEXHc = BigInt("43")
		const BACMARSLPTOKENPoolZOohwo5 = await BACMARSLPTOKENPool.new(stringjCepJTY, stringeXjD3FV, uintyjAEXHc, {from: accounts[2]});
		const byteMfIE8KT = "0x11130e0216181d0716181a0b010c10150f051520170913200202150a05050c10"
		const byteTkSmJM = "0x110c1c141e1313131b1a071f09110c120c0c180b051f1e040f0e01160d12070b"
		const uintYxitD04 = BigInt("168")
		const uintbl07EA8 = BigInt("1051")
		const uintIUY7pE9 = BigInt("708")
		const uintpcea8Y = BigInt("1545")
		await BACMARSLPTOKENPoolZOohwo5.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZJ7XPDL = await BACMARSLPTOKENPoolZOohwo5.rewardPerToken.call({from: accounts[1]});
		const uint256ZQWH5R = await BACMARSLPTOKENPoolZOohwo5.stakeWithPermit.call(uintIUY7pE9, uintbl07EA8, uintYxitD04, byteTkSmJM, byteMfIE8KT, {from: accounts[5]});
		const uint256PbFxyY = await BACMARSLPTOKENPoolZOohwo5.stake.call(uintpcea8Y, {from: accounts[1]});
		await BACMARSLPTOKENPoolZOohwo5.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeUW0bbE = "PP7YQDi6VETnm7NoLgdFAxrwueBdXPfhV95Kr"
		const stringmoT7d44 = "HVSKnmpoHOIW3UeXMVuWPqC7hQ6"
		const uintiLf2PXz = BigInt("31")
		const BACMARSLPTOKENPoolCUwqfEY = await BACMARSLPTOKENPool.new(stringeUW0bbE, stringmoT7d44, uintiLf2PXz, {from: accounts[3]});
		const uintN60SpbN = BigInt("817")
		const bytedjbWHKS = "0x07160f1a12071705031313050b091006071e0a1d1f150e071b071f1407171404"
		const bytev1eq1Lm = "0x0213020d160f0a1f0404071e05200b19131a1c0e13170204101b021d180e1609"
		const uintKKFiv0O = BigInt("121")
		const uintdQccLR = BigInt("933")
		const uintGA4oSoo = BigInt("1780")
		const uint256tzoINL = await BACMARSLPTOKENPoolCUwqfEY.rewardPerToken.call({from: accounts[1]});
		const uint256SoolLrN = await BACMARSLPTOKENPoolCUwqfEY.notifyRewardAmount.call(uintN60SpbN, {from: accounts[3]});
		const uint256X2m2g8H = await BACMARSLPTOKENPoolCUwqfEY.totalSupply.call({from: accounts[4]});
		const uint256d799vuP = await BACMARSLPTOKENPoolCUwqfEY.stakeWithPermit.call(uintGA4oSoo, uintdQccLR, uintKKFiv0O, bytev1eq1Lm, bytedjbWHKS, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLgMVsg3 = "LfOrMEuhURY6sHFltsj4N9PcJno543iGRDaEOM"
		const stringitiziT4 = "JN3KXGxlJlBJcpDT3G50oa3ksz9pOE87Ng46mehMgUOTHVBwRpoTulf8YkQfApFv"
		const uintR2E5IeH = BigInt("134")
		const BACMARSLPTOKENPoolzTcnI1k = await BACMARSLPTOKENPool.new(stringLgMVsg3, stringitiziT4, uintR2E5IeH, {from: accounts[5]});
		const addresspPFNiqv = accounts[2]
		const addressBJrFWNW = accounts[1]
		const stringBg2w1TN = await BACMARSLPTOKENPoolzTcnI1k.name.call({from: accounts[0]});
		const addressmpt3WJk = await BACMARSLPTOKENPoolzTcnI1k.updateReward.call(addresspPFNiqv, {from: accounts[2]});
		const uint256hifcYH = await BACMARSLPTOKENPoolzTcnI1k.balanceOf.call(addressBJrFWNW, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUn9EMtW = "u8b7Y"
		const stringcp68GNJ = "COt8U04huLO2i2cqnrnHckfhAe31OcmtIQM4"
		const uintPR95vn6 = BigInt("104")
		const BACMARSLPTOKENPoolAtvWbpR = await BACMARSLPTOKENPool.new(stringUn9EMtW, stringcp68GNJ, uintPR95vn6, {from: accounts[5]});
		await BACMARSLPTOKENPoolAtvWbpR.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256g3jR48L = await BACMARSLPTOKENPoolAtvWbpR.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolAtvWbpR.getReward.call({from: accounts[2]});
		const uint256oXNGqOk = await BACMARSLPTOKENPoolAtvWbpR.rewardPerToken.call({from: accounts[1]});
		const uint256PCYDjGC = await BACMARSLPTOKENPoolAtvWbpR.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHxPJ9im = "DZt9lwmuGjWYuQW0b8nlvpY7XkdJDBDXmhnOckxxmH3DGwzjmavLbTsxYliSOOuxqoS3uzPTu3xdS1w"
		const stringkbJuWwD = "Y4QqEVATQki6IPMhKhk1LzmVcpltgSPbuvCyRwcbOrMiG7frzINf2aDGoNBaqnPq7D7smvphNdjfUo8GWBe6lMdi"
		const uintDB11eVE = BigInt("56")
		const BACMARSLPTOKENPoolHefMR7I = await BACMARSLPTOKENPool.new(stringHxPJ9im, stringkbJuWwD, uintDB11eVE, {from: accounts[3]});
		const uinteTAn2xT = BigInt("475")
		const addressURhjXgJ = accounts[4]
		await BACMARSLPTOKENPoolHefMR7I.getReward.call({from: accounts[1]});
		const uint256dlbUnWQ = await BACMARSLPTOKENPoolHefMR7I.withdraw.call(uinteTAn2xT, {from: accounts[0]});
		await BACMARSLPTOKENPoolHefMR7I.exit.call({from: accounts[1]});
		const uint256afRcyTI = await BACMARSLPTOKENPoolHefMR7I.earned.call(addressURhjXgJ, {from: accounts[1]});
		const uint256ywRhG3p = await BACMARSLPTOKENPoolHefMR7I.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringc9pYMF = "9t0ciJaAtDPhlUlXqSNpoFS1MPSsblTmOOcErUds2ExmnrKcnVgjH"
		const stringK2vE9o9 = "fApdoTKU3kU3NPvcOp7YEhXtlBW0uxjaESMZCQRNezE4DMewTKSgO2JqDdIhNhO8mxnVP"
		const uintKu6m6t = BigInt("2")
		const BACMARSLPTOKENPoolJ3ho42G = await BACMARSLPTOKENPool.new(stringc9pYMF, stringK2vE9o9, uintKu6m6t, {from: accounts[5]});
		const addressoNdCfMG = accounts[3]
		const uintd0ka7VD = BigInt("1419")
		const uint256Uhej29t = await BACMARSLPTOKENPoolJ3ho42G.balanceOf.call(addressoNdCfMG, {from: accounts[5]});
		const uint256hpvIXnU = await BACMARSLPTOKENPoolJ3ho42G.getRewardForDuration.call({from: accounts[2]});
		const stringqfO3WcG = await BACMARSLPTOKENPoolJ3ho42G.name.call({from: accounts[0]});
		const uint256WeLYWe3 = await BACMARSLPTOKENPoolJ3ho42G.notifyRewardAmount.call(uintd0ka7VD, {from: accounts[1]});
	});
})