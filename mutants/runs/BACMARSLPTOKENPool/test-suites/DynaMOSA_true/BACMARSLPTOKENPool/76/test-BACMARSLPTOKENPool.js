const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressC4hl6PS = accounts[3]
		const addressVEANzYy = "0x0000000000000000000000000000000000000001"
		const addresscBUZ1y6 = accounts[5]
		const BACMARSLPTOKENPoolcB2vd2b = await BACMARSLPTOKENPool.new(addressC4hl6PS, addressVEANzYy, addresscBUZ1y6, {from: accounts[4]});
		const uintzdbfQL = BigInt("1945")
		await BACMARSLPTOKENPoolcB2vd2b.exit.call({from: accounts[2]});
		const uint256F4693Zr = await BACMARSLPTOKENPoolcB2vd2b.stake.call(uintzdbfQL, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoolcB2vd2b.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUOtWVi4 = "1ic3VwU"
		const stringG1kzgtP = "o6Lxi2dVxz"
		const uintjfK0AVT = BigInt("208")
		const BACMARSLPTOKENPoolm4iwUmQ = await BACMARSLPTOKENPool.new(stringUOtWVi4, stringG1kzgtP, uintjfK0AVT, {from: "0x0000000000000000000000000000000000000001"});
		const uinti2vQr2 = BigInt("41")
		const addresszzDMMt = accounts[5]
		const uint2560z7xTy = await BACMARSLPTOKENPoolm4iwUmQ.notifyRewardAmount.call(uinti2vQr2, {from: accounts[0]});
		const uint256OImm2nb = await BACMARSLPTOKENPoolm4iwUmQ.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256LJviMgD = await BACMARSLPTOKENPoolm4iwUmQ.rewardPerToken.call({from: accounts[3]});
		const uint256mJ2TCV = await BACMARSLPTOKENPoolm4iwUmQ.balanceOf.call(addresszzDMMt, {from: accounts[1]});
		const uint256FdSdphu = await BACMARSLPTOKENPoolm4iwUmQ.totalSupply.call({from: accounts[5]});
		const uint256wsonK3L = await BACMARSLPTOKENPoolm4iwUmQ.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string0dJjVD = "JoL1bD936lVxSOgqoOiDPZndMF1QH7ogNvEun4bsPiFUmi39T6E36X"
		const stringf2t69l = "2sl3V0tHpNfjFCP8jnPcIHoPtK"
		const uintm54wMo6 = BigInt("110")
		const BACMARSLPTOKENPool1f8GWk = await BACMARSLPTOKENPool.new(string0dJjVD, stringf2t69l, uintm54wMo6, {from: accounts[4]});
		await BACMARSLPTOKENPool1f8GWk.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPool1f8GWk.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressfkWlgqE = accounts[4]
		const addresslKaQw7 = accounts[1]
		const addressqrX37KI = accounts[1]
		const BACMARSLPTOKENPoolBvLTzW = await BACMARSLPTOKENPool.new(addressfkWlgqE, addresslKaQw7, addressqrX37KI, {from: accounts[4]});
		const byteBS6Cunr = "0x0e0f16151d1d171e091b0e0a170618080119130a100b031d0f0a1e01010d141f"
		const byteGTn1bxH = "0x18060415051819131305110104100b001908071a1d17091c140c121f171b111b"
		const uintsPeSLeE = BigInt("39")
		const uintmhQdpg4 = BigInt("921")
		const uintSoFwsoX = BigInt("1229")
		const addressKSUT7YI = accounts[5]
		const uint256qLzE9Ar = await BACMARSLPTOKENPoolBvLTzW.rewardPerToken.call({from: accounts[4]});
		const uint256sKVofxe = await BACMARSLPTOKENPoolBvLTzW.getRewardForDuration.call({from: accounts[3]});
		const uint256SVSnFOV = await BACMARSLPTOKENPoolBvLTzW.rewardPerToken.call({from: accounts[3]});
		const uint256OGnX6Lp = await BACMARSLPTOKENPoolBvLTzW.stakeWithPermit.call(uintSoFwsoX, uintmhQdpg4, uintsPeSLeE, byteGTn1bxH, byteBS6Cunr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OAqBs1P = await BACMARSLPTOKENPoolBvLTzW.earned.call(addressKSUT7YI, {from: accounts[3]});

		assert.equal(uint256SVSnFOV, BigInt("0"))
		assert.equal(uint256qLzE9Ar, BigInt("0"))
		assert.equal(uint256sKVofxe, BigInt("0"))
		await expect(BACMARSLPTOKENPoolBvLTzW.stakeWithPermit.call(uintSoFwsoX, uintmhQdpg4, uintsPeSLeE, byteGTn1bxH, byteBS6Cunr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressAxhUM7 = accounts[3]
		const addressVTGUa7j = accounts[1]
		const addressk6f20hs = accounts[1]
		const BACMARSLPTOKENPooljyk1gFb = await BACMARSLPTOKENPool.new(addressAxhUM7, addressVTGUa7j, addressk6f20hs, {from: accounts[2]});
		const addressUbneajb = accounts[4]
		const uintC447ta = BigInt("1550")
		const addressiCXPyyq = await BACMARSLPTOKENPooljyk1gFb.updateReward.call(addressUbneajb, {from: accounts[5]});
		await BACMARSLPTOKENPooljyk1gFb.nonReentrant.call({from: accounts[2]});
		const uint8HBEfUKV = await BACMARSLPTOKENPooljyk1gFb.decimals.call({from: accounts[1]});
		const uint256sSpLqKI = await BACMARSLPTOKENPooljyk1gFb.notifyRewardAmount.call(uintC447ta, {from: accounts[4]});

		await expect(BACMARSLPTOKENPooljyk1gFb.updateReward.call(addressUbneajb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressZyxUS5 = "0x0000000000000000000000000000000000000001"
		const addresssvBa9yz = accounts[4]
		const addressrnbiTIV = accounts[0]
		const BACMARSLPTOKENPooliOQZQOr = await BACMARSLPTOKENPool.new(addressZyxUS5, addresssvBa9yz, addressrnbiTIV, {from: accounts[2]});
		const uintTwzspk = BigInt("1810")
		const addressejqNbT = accounts[5]
		const uintLBhbMyL = BigInt("713")
		const uintSCmkqox = BigInt("1182")
		const uint256zxUvJLZ = await BACMARSLPTOKENPooliOQZQOr.withdraw.call(uintTwzspk, {from: accounts[5]});
		const uint256ZXntIzV = await BACMARSLPTOKENPooliOQZQOr.balanceOf.call(addressejqNbT, {from: accounts[0]});
		const uint256tOjavhP = await BACMARSLPTOKENPooliOQZQOr.notifyRewardAmount.call(uintLBhbMyL, {from: accounts[3]});
		const uint256mB9JyNc = await BACMARSLPTOKENPooliOQZQOr.notifyRewardAmount.call(uintSCmkqox, {from: accounts[3]});

		await expect(BACMARSLPTOKENPooliOQZQOr.withdraw.call(uintTwzspk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsg0IVgf = "RRv73ojJwqNDRhlDpMiuMBICnA3kwGOUnOzzB6kucjbY06z4NgwDK6ENNaExyz6ybsnw3XuqHN4ehsxfx34gQ2O1hWvV"
		const stringiJ12ad = "MgIxrFDqm3HVUvAu1yRsf92TKuQdvXwW93UhhTSMbN6OHuMi9KMEJVC"
		const uinteFBYBu6 = BigInt("5")
		const BACMARSLPTOKENPoolw89yAGD = await BACMARSLPTOKENPool.new(stringsg0IVgf, stringiJ12ad, uinteFBYBu6, {from: "0x0000000000000000000000000000000000000001"});
		const uintyveqere = BigInt("665")
		const uintamvfw8v = BigInt("912")
		const uint256hcT4DU = await BACMARSLPTOKENPoolw89yAGD.stake.call(uintyveqere, {from: accounts[5]});
		const uint256lo8b7dn = await BACMARSLPTOKENPoolw89yAGD.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolw89yAGD.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256SpKcrOm = await BACMARSLPTOKENPoolw89yAGD.stake.call(uintamvfw8v, {from: accounts[3]});
		const uint256UEA8YfV = await BACMARSLPTOKENPoolw89yAGD.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJnzNcYA = "5WBGMbcrT9w1Vl2994xbbdo4yCsLinR2ON28HANc6ksMigsIVtqXhqQbxiOCyBhIsTl"
		const stringALmt6Z9 = "O7FA9HRz3vI0ohNGB3PuCxUPPZq13zVOwGaFi2nosmOCeF7spgj3wXWR6sYijXNcK0FXLxqrauIYM1a"
		const uintHLFgLd0 = BigInt("187")
		const BACMARSLPTOKENPooliVkeHmb = await BACMARSLPTOKENPool.new(stringJnzNcYA, stringALmt6Z9, uintHLFgLd0, {from: accounts[4]});
		const addressVXQ5AL = accounts[2]
		const byteRldSie = "0x111709111310050301200003161b1d120e04010c13120e100413101203180d03"
		const bytenn2iRix = "0x011f0d0f1a0516060e011c1214140d1d121d1c04101b02101d1e17011d1b151c"
		const uintjxDCe4z = BigInt("55")
		const uintgUOqjXP = BigInt("323")
		const uintZ164GCO = BigInt("1495")
		const uint256AesreR = await BACMARSLPTOKENPooliVkeHmb.earned.call(addressVXQ5AL, {from: "0x0000000000000000000000000000000000000001"});
		const uint8eF798MV = await BACMARSLPTOKENPooliVkeHmb.decimals.call({from: accounts[1]});
		const uint256M4FShSk = await BACMARSLPTOKENPooliVkeHmb.stakeWithPermit.call(uintZ164GCO, uintgUOqjXP, uintjxDCe4z, bytenn2iRix, byteRldSie, {from: accounts[4]});
		const stringydgK0EQ = await BACMARSLPTOKENPooliVkeHmb.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressU2egAnh = accounts[2]
		const addresspEQf3xk = accounts[0]
		const addressic3iDY1 = accounts[3]
		const BACMARSLPTOKENPoolImx3CA = await BACMARSLPTOKENPool.new(addressU2egAnh, addresspEQf3xk, addressic3iDY1, {from: accounts[5]});
		const uintkmOZj7h = BigInt("1725")
		const uintsB3IARJ = BigInt("1291")
		const uintMoIjXPC = BigInt("947")
		const uint256NTX8gyZ = await BACMARSLPTOKENPoolImx3CA.stake.call(uintkmOZj7h, {from: accounts[3]});
		const uint256yGoNSr8 = await BACMARSLPTOKENPoolImx3CA.stake.call(uintsB3IARJ, {from: accounts[4]});
		await BACMARSLPTOKENPoolImx3CA.onlyRewardsDistribution.call({from: accounts[4]});
		const uint25666sfKC = await BACMARSLPTOKENPoolImx3CA.stake.call(uintMoIjXPC, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolImx3CA.stake.call(uintkmOZj7h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresseBGUsfp = accounts[2]
		const addressdpYJ9fz = accounts[3]
		const addresshF8CdlZ = accounts[2]
		const BACMARSLPTOKENPoolvTRv16e = await BACMARSLPTOKENPool.new(addresseBGUsfp, addressdpYJ9fz, addresshF8CdlZ, {from: accounts[3]});
		const addressc3JmOMy = accounts[2]
		const bytex7n17P = "0x0f1e1c0f1c181a1105031a12161402140213090e0d15121f1b150717151b130b"
		const bytec0t7TO7 = "0x0702190114171101131c01071d1913161a0f0e1e1018021f0f20161b05200317"
		const uintyDSzKOe = BigInt("108")
		const uintL4C3wnq = BigInt("1382")
		const uintvGgnYBi = BigInt("317")
		const address92GHBt = accounts[5]
		await BACMARSLPTOKENPoolvTRv16e.getReward.call({from: accounts[3]});
		const uint256XZhPXbh = await BACMARSLPTOKENPoolvTRv16e.balanceOf.call(addressc3JmOMy, {from: accounts[0]});
		const uint256nXwOJoe = await BACMARSLPTOKENPoolvTRv16e.stakeWithPermit.call(uintvGgnYBi, uintL4C3wnq, uintyDSzKOe, bytec0t7TO7, bytex7n17P, {from: accounts[3]});
		const uint256mYXW1it = await BACMARSLPTOKENPoolvTRv16e.earned.call(address92GHBt, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolvTRv16e.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressS3NWji = accounts[3]
		const addressC2wBYLU = "0x0000000000000000000000000000000000000001"
		const addressTdKxgii = accounts[5]
		const BACMARSLPTOKENPoolcB2vd2b = await BACMARSLPTOKENPool.new(addressS3NWji, addressC2wBYLU, addressTdKxgii, {from: accounts[4]});
		const uintCgnmNMf = BigInt("1943")
		const byteNYR3wgq = "0x071a18161f150a020f060b1a121e040c1c1c161705050d090b1c051700170d1a"
		const byteRtgSNF = "0x1b1e170419080b030615081007151f15090116070d051810181c1a090a14001d"
		const uintBxLMq7P = BigInt("89")
		const uintCkpbb7R = BigInt("271")
		const uinttaPmQDI = BigInt("1629")
		await BACMARSLPTOKENPoolcB2vd2b.exit.call({from: accounts[2]});
		const uint256F4693Zr = await BACMARSLPTOKENPoolcB2vd2b.stake.call(uintCgnmNMf, {from: accounts[3]});
		const uint256nB0AQmT = await BACMARSLPTOKENPoolcB2vd2b.stakeWithPermit.call(uinttaPmQDI, uintCkpbb7R, uintBxLMq7P, byteRtgSNF, byteNYR3wgq, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolcB2vd2b.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressQ5avMrP = accounts[2]
		const addressRACKwbb = accounts[0]
		const addressyhIQov1 = accounts[3]
		const BACMARSLPTOKENPoolImx3CA = await BACMARSLPTOKENPool.new(addressQ5avMrP, addressRACKwbb, addressyhIQov1, {from: accounts[5]});
		const uintecVbDg3 = BigInt("1725")
		const uintlWmIqjY = BigInt("1291")
		const uintm85N4GU = BigInt("944")
		const uint256NTX8gyZ = await BACMARSLPTOKENPoolImx3CA.stake.call(uintecVbDg3, {from: accounts[3]});
		const uint256cuSwTK = await BACMARSLPTOKENPoolImx3CA.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256yGoNSr8 = await BACMARSLPTOKENPoolImx3CA.stake.call(uintlWmIqjY, {from: accounts[4]});
		await BACMARSLPTOKENPoolImx3CA.onlyRewardsDistribution.call({from: accounts[4]});
		const uint25666sfKC = await BACMARSLPTOKENPoolImx3CA.stake.call(uintm85N4GU, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolImx3CA.stake.call(uintecVbDg3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressJB4snrh = "0x0000000000000000000000000000000000000001"
		const addressRiy71SG = accounts[4]
		const addresslIOYyT = accounts[0]
		const BACMARSLPTOKENPooliOQZQOr = await BACMARSLPTOKENPool.new(addressJB4snrh, addressRiy71SG, addresslIOYyT, {from: accounts[2]});
		const uintLVRZDFm = BigInt("1810")
		const addresslzzP03f = accounts[3]
		const uintTScrBBS = BigInt("1838")
		const uintg0EGLFD = BigInt("698")
		const uintebMQXxh = BigInt("1182")
		const uint256zxUvJLZ = await BACMARSLPTOKENPooliOQZQOr.withdraw.call(uintLVRZDFm, {from: accounts[5]});
		const uint256ZXntIzV = await BACMARSLPTOKENPooliOQZQOr.balanceOf.call(addresslzzP03f, {from: accounts[0]});
		const stringEkMMrP = await BACMARSLPTOKENPooliOQZQOr.symbol.call({from: accounts[1]});
		const uint256lfnEmYr = await BACMARSLPTOKENPooliOQZQOr.withdraw.call(uintTScrBBS, {from: accounts[4]});
		const uint256tOjavhP = await BACMARSLPTOKENPooliOQZQOr.notifyRewardAmount.call(uintg0EGLFD, {from: accounts[3]});
		const uint256mB9JyNc = await BACMARSLPTOKENPooliOQZQOr.notifyRewardAmount.call(uintebMQXxh, {from: accounts[3]});

		await expect(BACMARSLPTOKENPooliOQZQOr.withdraw.call(uintLVRZDFm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnqLZkmb = "W7HApgXROaCfaEi4ADycqKsuXjAvB7JPDKy2xTvWic42SKl8G01SxQl56BlVYy3JCiOO7litKrR14OMaexsjgmcbFg7mJJ"
		const stringjwXy6LO = "rBAL"
		const uintPVDNNow = BigInt("42")
		const BACMARSLPTOKENPoolmfrQCl = await BACMARSLPTOKENPool.new(stringnqLZkmb, stringjwXy6LO, uintPVDNNow, {from: "0x0000000000000000000000000000000000000001"});
		const uint8uq2TSrE = await BACMARSLPTOKENPoolmfrQCl.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolmfrQCl.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQHKJ6po = "BRQgTSFqiZAuSvjcxywB7o1O5EBvXgTPEF4BxVpi4TtgvNzCwSe"
		const stringPuby3uw = "gsxCOEu37tQNaaTzuDomW8M4KvBnHyW9kTmbt8iuytGSAQxe335"
		const uintAwYHZVE = BigInt("211")
		const BACMARSLPTOKENPool9IleXR = await BACMARSLPTOKENPool.new(stringQHKJ6po, stringPuby3uw, uintAwYHZVE, {from: accounts[3]});
		const uinthryaQe = BigInt("1919")
		await BACMARSLPTOKENPool9IleXR.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Qs60Clf = await BACMARSLPTOKENPool9IleXR.stake.call(uinthryaQe, {from: accounts[4]});
		const uint256tTjkyaD = await BACMARSLPTOKENPool9IleXR.getRewardForDuration.call({from: accounts[4]});
		const stringMJmqhq3 = await BACMARSLPTOKENPool9IleXR.name.call({from: accounts[3]});
		const stringKz0VDso = await BACMARSLPTOKENPool9IleXR.name.call({from: accounts[3]});
		const uint256LSRAaHM = await BACMARSLPTOKENPool9IleXR.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressRq08thU = accounts[0]
		const addressrS3gLmk = accounts[4]
		const addressLTWPCx8 = accounts[3]
		const BACMARSLPTOKENPoolsjZ9WX6 = await BACMARSLPTOKENPool.new(addressRq08thU, addressrS3gLmk, addressLTWPCx8, {from: "0x0000000000000000000000000000000000000001"});
		const byterJYYhcN = "0x1e0516140b070c0613061607170c180116181c0502160d17130a160d13161616"
		const byteLGoh8rj = "0x1505051a110604061c10180e041b1007120e15030708091a190a1a161f04121d"
		const uintsUyWShs = BigInt("233")
		const uinttTuexc4 = BigInt("1334")
		const uintuRBX5Hg = BigInt("1865")
		const uint256fIYnv05 = await BACMARSLPTOKENPoolsjZ9WX6.rewardPerToken.call({from: accounts[3]});
		const uint256hEXNqDW = await BACMARSLPTOKENPoolsjZ9WX6.totalSupply.call({from: accounts[0]});
		const uint8pyxHXL6 = await BACMARSLPTOKENPoolsjZ9WX6.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPoolsjZ9WX6.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256HlMsQH = await BACMARSLPTOKENPoolsjZ9WX6.stakeWithPermit.call(uintuRBX5Hg, uinttTuexc4, uintsUyWShs, byteLGoh8rj, byterJYYhcN, {from: accounts[2]});
		await BACMARSLPTOKENPoolsjZ9WX6.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressjLelO8q = accounts[2]
		const address2ilO11 = accounts[0]
		const addressv6Dusjx = accounts[3]
		const BACMARSLPTOKENPoolImx3CA = await BACMARSLPTOKENPool.new(addressjLelO8q, address2ilO11, addressv6Dusjx, {from: accounts[5]});
		const uintD63UHyF = BigInt("1593")
		const uint6HcNBO = BigInt("1288")
		const uintRZ78RGo = BigInt("947")
		const uint256hRGRmMt = await BACMARSLPTOKENPoolImx3CA.notifyRewardAmount.call(uintD63UHyF, {from: accounts[3]});
		const uint256PjXc9nS = await BACMARSLPTOKENPoolImx3CA.rewardPerToken.call({from: accounts[5]});
		const uint256yGoNSr8 = await BACMARSLPTOKENPoolImx3CA.stake.call(uint6HcNBO, {from: accounts[4]});
		await BACMARSLPTOKENPoolImx3CA.onlyRewardsDistribution.call({from: accounts[4]});
		const uint25666sfKC = await BACMARSLPTOKENPoolImx3CA.stake.call(uintRZ78RGo, {from: accounts[0]});
		await BACMARSLPTOKENPoolImx3CA.nonReentrant.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolImx3CA.notifyRewardAmount.call(uintD63UHyF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWUYOzcH = "PJm4UrmUcOySwUsjgMQt4eak6cERyqULxLYMlVXKxYjLssqqGZQDhrQJCswzlJ5yUjGNHZ1zc11TlC6UeBD"
		const stringLLeFUhU = "4xonJbNXfBHxE2ws76"
		const uintM65rjsm = BigInt("84")
		const BACMARSLPTOKENPooljt2jjTU = await BACMARSLPTOKENPool.new(stringWUYOzcH, stringLLeFUhU, uintM65rjsm, {from: accounts[4]});
		const addressY7gp4oT = accounts[4]
		const uint256YKppKuu = await BACMARSLPTOKENPooljt2jjTU.earned.call(addressY7gp4oT, {from: accounts[4]});
		const uint256gzKhZTD = await BACMARSLPTOKENPooljt2jjTU.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDqNCczO = "15RLwIyHUwuatLpMeMmKx5oFrTB4U8mYQIQdZvBX"
		const stringWU5TfeI = "QYzLUnajMMuK5Hly2RRaIkP3idOPFUuWkAfacNvHOBfIdjXeMr9N27Z1R6o3GNf4scy060UPIzA7PWzQXTFdXeYS"
		const uint9N7Qjy = BigInt("31")
		const BACMARSLPTOKENPoolkg83Ijl = await BACMARSLPTOKENPool.new(stringDqNCczO, stringWU5TfeI, uint9N7Qjy, {from: accounts[1]});
		const byteekczHGR = "0x0f121c1c191203020f0e11031b0b110c0719150605020e03041b080304061e0a"
		const byteo6xaaoU = "0x0709011e1e0d171e030a12061620110b1e0b081201130c1f17190c0515050d09"
		const uintEyc3C2 = BigInt("42")
		const uintnqmFVdf = BigInt("1810")
		const uinttHxMPJO = BigInt("1043")
		await BACMARSLPTOKENPoolkg83Ijl.onlyRewardsDistribution.call({from: accounts[4]});
		const stringHZefqN6 = await BACMARSLPTOKENPoolkg83Ijl.symbol.call({from: accounts[3]});
		const uint256dF2f5Wl = await BACMARSLPTOKENPoolkg83Ijl.stakeWithPermit.call(uinttHxMPJO, uintnqmFVdf, uintEyc3C2, byteo6xaaoU, byteekczHGR, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressQrUd8w = accounts[2]
		const addressBCFV3Fi = accounts[3]
		const addressfruxRQW = accounts[2]
		const BACMARSLPTOKENPoolvTRv16e = await BACMARSLPTOKENPool.new(addressQrUd8w, addressBCFV3Fi, addressfruxRQW, {from: accounts[3]});
		const uint256VW5jxn = await BACMARSLPTOKENPoolvTRv16e.totalSupply.call({from: accounts[0]});
		const uint256xbLngiD = await BACMARSLPTOKENPoolvTRv16e.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolvTRv16e.getReward.call({from: accounts[3]});

		assert.equal(uint256VW5jxn, BigInt("0"))
		assert.equal(uint256xbLngiD, BigInt("0"))
		await expect(BACMARSLPTOKENPoolvTRv16e.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuONYlwm = "6iDKyIok9MwNctfQBLRqLS3huaQqFEoSHNSv9OoVZN3VNJPjP8kH5vYdfajqtDLqTTMW9JEIpU0Yd"
		const stringYN0hzHQ = "yNk6OVy6NubGcnS"
		const uintcuYJzFu = BigInt("106")
		const BACMARSLPTOKENPooliFpDPOF = await BACMARSLPTOKENPool.new(stringuONYlwm, stringYN0hzHQ, uintcuYJzFu, {from: accounts[1]});
		const uint256X76n3jm = await BACMARSLPTOKENPooliFpDPOF.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPooliFpDPOF.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSiaUhHR = "i6J3oSkK92Hl6N8"
		const stringgTNgz2O = "uqlNCUMypphcxIHnsfA9e6yJFJ4FPFCxKcCgbAU1HUZjvtnD2HcUJvUYGuowfW4NAGvHMs86bfX2ksa"
		const uintDI1NLzq = BigInt("49")
		const BACMARSLPTOKENPoolqCqnqA = await BACMARSLPTOKENPool.new(stringSiaUhHR, stringgTNgz2O, uintDI1NLzq, {from: accounts[4]});
		const uintzyMwfN9 = BigInt("405")
		const byterinFw6G = "0x1c1c0f1e090e161a0c15021f171815130c09181d111d14161118200412080213"
		const byteknqPaRG = "0x01161e04140a1313011115020b1e0a03080001050717130e1d0f09030216121d"
		const uintVZvpmXi = BigInt("175")
		const uintfrZJBmX = BigInt("1156")
		const uintFE7dE6P = BigInt("94")
		const uint256sky9bRX = await BACMARSLPTOKENPoolqCqnqA.withdraw.call(uintzyMwfN9, {from: accounts[4]});
		const uint256mMTL52m = await BACMARSLPTOKENPoolqCqnqA.stakeWithPermit.call(uintFE7dE6P, uintfrZJBmX, uintVZvpmXi, byteknqPaRG, byterinFw6G, {from: accounts[1]});
		await BACMARSLPTOKENPoolqCqnqA.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvvxjJVM = "kwCWbEaJOEKPrUJ3O0lGYt8qlIYwD3nN70JzAH7nzofiomwW5tSfWV5dgDQ"
		const stringNIxXaN2 = "uPIIMTl5JUGOonOc4024yZYwbizhUS7peozCYxDJC1hFK2spDfIfIrHeeG3RUIMmkchLKLNDAaIMvmBhlMkaCcUK"
		const uintD4LYciI = BigInt("248")
		const BACMARSLPTOKENPoolb80MZgw = await BACMARSLPTOKENPool.new(stringvvxjJVM, stringNIxXaN2, uintD4LYciI, {from: accounts[1]});
		const addressjcQqoj1 = accounts[0]
		const uintQDtmZ6d = BigInt("1548")
		const stringWdC0cX = await BACMARSLPTOKENPoolb80MZgw.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolb80MZgw.getReward.call({from: accounts[5]});
		const uint256LbkXJFQ = await BACMARSLPTOKENPoolb80MZgw.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256QKfltdn = await BACMARSLPTOKENPoolb80MZgw.balanceOf.call(addressjcQqoj1, {from: accounts[4]});
		const uint256MWSYBJL = await BACMARSLPTOKENPoolb80MZgw.withdraw.call(uintQDtmZ6d, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKEOSCgG = accounts[2]
		const addressHMPokbM = accounts[3]
		const addressYFEATtA = accounts[2]
		const BACMARSLPTOKENPoolvTRv16e = await BACMARSLPTOKENPool.new(addressKEOSCgG, addressHMPokbM, addressYFEATtA, {from: accounts[3]});
		const uinte91QQxc = BigInt("1307")
		const addressZecsOuB = accounts[3]
		const addressJGAYDTS = accounts[4]
		const addresscJjTTb0 = accounts[6]
		const uintbC4fMpy = BigInt("521")
		const uintgZ6ih8J = BigInt("497")
		await BACMARSLPTOKENPoolvTRv16e.getReward.call({from: accounts[3]});
		const uint256bB73Ntf = await BACMARSLPTOKENPoolvTRv16e.notifyRewardAmount.call(uinte91QQxc, {from: accounts[2]});
		const uint256XZhPXbh = await BACMARSLPTOKENPoolvTRv16e.balanceOf.call(addressZecsOuB, {from: accounts[0]});
		const addressXYPv2VU = await BACMARSLPTOKENPoolvTRv16e.updateReward.call(addressJGAYDTS, {from: accounts[5]});
		const uint256mYXW1it = await BACMARSLPTOKENPoolvTRv16e.earned.call(addresscJjTTb0, {from: accounts[2]});
		const uint256G2pNL7H = await BACMARSLPTOKENPoolvTRv16e.withdraw.call(uintbC4fMpy, {from: "0x0000000000000000000000000000000000000001"});
		const uint8gy7EkoT = await BACMARSLPTOKENPoolvTRv16e.decimals.call({from: accounts[2]});
		const uint256Y4n2pmu = await BACMARSLPTOKENPoolvTRv16e.stake.call(uintgZ6ih8J, {from: accounts[4]});

		await expect(BACMARSLPTOKENPoolvTRv16e.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvRX4sRm = "7AMJ4pEp77CroFrbDAAYscsjVznrvA9"
		const stringUsAyZqL = "dRNg83SXEh79VQ3Hlx4Ph2pClSh4syegWqFX3wIhRo0ifV3lD6oTgGI9xin"
		const uintNxAXe0J = BigInt("158")
		const BACMARSLPTOKENPoolXrYStra = await BACMARSLPTOKENPool.new(stringvRX4sRm, stringUsAyZqL, uintNxAXe0J, {from: accounts[3]});
		const uintb6HH3U = BigInt("1298")
		const uinte4i4RRl = BigInt("1299")
		const uint256GHLUbG = await BACMARSLPTOKENPoolXrYStra.notifyRewardAmount.call(uintb6HH3U, {from: accounts[3]});
		const uint256QBwTK2l = await BACMARSLPTOKENPoolXrYStra.totalSupply.call({from: accounts[2]});
		const uint8tBQHdN8 = await BACMARSLPTOKENPoolXrYStra.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2568SuIzh = await BACMARSLPTOKENPoolXrYStra.withdraw.call(uinte4i4RRl, {from: accounts[3]});
		await BACMARSLPTOKENPoolXrYStra.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringc91Idlg = "v4GDdfShNfLy"
		const stringcdBD4GZ = "uZCwGzGCvgQs1TON5DLEGXclp5S1ejBdTVeISg"
		const uintU5k7WG = BigInt("185")
		const BACMARSLPTOKENPoolBqXiqyI = await BACMARSLPTOKENPool.new(stringc91Idlg, stringcdBD4GZ, uintU5k7WG, {from: accounts[1]});
		const uint256GE0oF0Y = await BACMARSLPTOKENPoolBqXiqyI.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256qvBXyv0 = await BACMARSLPTOKENPoolBqXiqyI.getRewardForDuration.call({from: accounts[4]});
		const uint256bBPayEc = await BACMARSLPTOKENPoolBqXiqyI.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtr0nxw9 = "MNHtCR9WP9C4KJTreT4rj28nYa8Ck0y2L8zH0LRQ4bx"
		const stringdkdzQwp = "oGvINkoUkGJ5jnoTncxEjtJgw1LohkvyeVYUIP5h74yRuxq"
		const uintPOZUaXC = BigInt("143")
		const BACMARSLPTOKENPoolqWotvgz = await BACMARSLPTOKENPool.new(stringtr0nxw9, stringdkdzQwp, uintPOZUaXC, {from: accounts[0]});
		const addressZ3HmOOI = accounts[0]
		const uint256XyZz5lO = await BACMARSLPTOKENPoolqWotvgz.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256F0f7fST = await BACMARSLPTOKENPoolqWotvgz.rewardPerToken.call({from: accounts[2]});
		const addressCqmzlKG = await BACMARSLPTOKENPoolqWotvgz.updateReward.call(addressZ3HmOOI, {from: accounts[4]});
		const uint256I3YyTwE = await BACMARSLPTOKENPoolqWotvgz.totalSupply.call({from: accounts[1]});
		const stringEHn60TQ = await BACMARSLPTOKENPoolqWotvgz.name.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTnSLW8I = "XWNTCq8R"
		const stringmY9KIvD = "E6zB92mmMURrtpNWoMKbMWPhPQ3K25BEVUhzqhd49CRmK31nwblocbKbEDUDPUkm5Y0mMgTvYqS6f"
		const uintdHub74r = BigInt("170")
		const BACMARSLPTOKENPoolL6zyqLq = await BACMARSLPTOKENPool.new(stringTnSLW8I, stringmY9KIvD, uintdHub74r, {from: accounts[0]});
		const uintnVyU6Ac = BigInt("52")
		await BACMARSLPTOKENPoolL6zyqLq.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256hEmhJCM = await BACMARSLPTOKENPoolL6zyqLq.stake.call(uintnVyU6Ac, {from: accounts[3]});
		const uint256YyAQ0m8 = await BACMARSLPTOKENPoolL6zyqLq.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringim0eAm = "XqG8qmh69aUMgp2rWBClf8oW986G77217mgjYbrtc1WQ7n3k74Ko4wL1kXSG8edOCemW0pnwoJJ8QsDEA7P9StdGBAG41ZAp4Py"
		const stringPRkihuH = "yjsLtlKosgIkOwp9k7qepy5xlXXDlPE5DUYsDALBAGab8xOCSWvz82LhRyhAPa8i"
		const uintb2g0QW = BigInt("123")
		const BACMARSLPTOKENPoolJOZy4A3 = await BACMARSLPTOKENPool.new(stringim0eAm, stringPRkihuH, uintb2g0QW, {from: accounts[0]});
		const addressjx4phVY = accounts[3]
		const uint256BqN6y1j = await BACMARSLPTOKENPoolJOZy4A3.earned.call(addressjx4phVY, {from: accounts[5]});
		const uint256oJqjMVN = await BACMARSLPTOKENPoolJOZy4A3.getRewardForDuration.call({from: accounts[3]});
		const uint256QnMuNqc = await BACMARSLPTOKENPoolJOZy4A3.lastTimeRewardApplicable.call({from: accounts[2]});
		await BACMARSLPTOKENPoolJOZy4A3.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOFBTfSt = "F4WWR"
		const stringeWc1LWy = "zBy8g2LoXeDJYaxGiWykgB3o5lPLnozdfyIRQhP7dVQjyctOVrdyKaim5m5rOsmxc"
		const uintnuB3fjY = BigInt("249")
		const BACMARSLPTOKENPoolSMqpD6H = await BACMARSLPTOKENPool.new(stringOFBTfSt, stringeWc1LWy, uintnuB3fjY, {from: accounts[4]});
		const addressp503jDY = accounts[4]
		const addressahbvEm = "0x0000000000000000000000000000000000000001"
		const uint256uNJ0Wu2 = await BACMARSLPTOKENPoolSMqpD6H.earned.call(addressp503jDY, {from: accounts[3]});
		const addressFqFhue = await BACMARSLPTOKENPoolSMqpD6H.updateReward.call(addressahbvEm, {from: accounts[0]});
		const uint256xz9vKjp = await BACMARSLPTOKENPoolSMqpD6H.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGFpTZWJ = "hINwJBSLGjpbT5o7jH38zIvoDwXv5UHzCTfT9bRsFV6rbYXqQE7d8tFvXKlVqJ8cPMlYMpCXuXDhGIj1dKuVO"
		const stringWuWvO5S = "hqigMar5jVcpUusF8b3bhdPiebJD7IYefCNMUf1OJtLIlzAivY84Ou9"
		const uintQwq3T0X = BigInt("191")
		const BACMARSLPTOKENPoolllhr4wS = await BACMARSLPTOKENPool.new(stringGFpTZWJ, stringWuWvO5S, uintQwq3T0X, {from: accounts[0]});
		const uint256qF6GO7s = await BACMARSLPTOKENPoolllhr4wS.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPoolllhr4wS.getReward.call({from: accounts[0]});
		const stringjd3xUc = await BACMARSLPTOKENPoolllhr4wS.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolllhr4wS.exit.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhXAIneK = "MqBf6FaFoTCYGTcVUvLVf"
		const stringstbaOLP = "pWonXOX971RCqs8HOa3AXmedld34NrJ2Hj9a1THD3kHFm2eYlIc3UC6gZJfCqYVP2NaKRQzorZfk5SNAEt7htEqVADzOfDMpKq"
		const uintFjtnf7J = BigInt("185")
		const BACMARSLPTOKENPoolvhF4rfg = await BACMARSLPTOKENPool.new(stringhXAIneK, stringstbaOLP, uintFjtnf7J, {from: accounts[3]});
		const stringgzxv8NQ = await BACMARSLPTOKENPoolvhF4rfg.name.call({from: accounts[3]});
		await BACMARSLPTOKENPoolvhF4rfg.getReward.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbyMfM6W = "wJNrP2uNobnYf6XiQsqgney1od7Dwqb3B4fepKG7fd"
		const stringW1neQxJ = "eTONPQSoupd8h6Jovh9snL2fcwXDLhJxYUgD5vBrMx5OezKtF12rL8R"
		const uintISImvoj = BigInt("88")
		const BACMARSLPTOKENPoolZ5116Y = await BACMARSLPTOKENPool.new(stringbyMfM6W, stringW1neQxJ, uintISImvoj, {from: accounts[1]});
		const uinttIAnWu6 = BigInt("1502")
		const uint256odz5NH = await BACMARSLPTOKENPoolZ5116Y.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256h36FCfT = await BACMARSLPTOKENPoolZ5116Y.withdraw.call(uinttIAnWu6, {from: accounts[4]});
		const stringsepaQtd = await BACMARSLPTOKENPoolZ5116Y.name.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQB4e6l6 = "WUGYbW6e9DrjFFS3oUBIXf2aQETybUVBwnHJ2b5fiEpOzp77ECeOBCs97owJPjqSdYIRNHpmFgmStx7k6KGn"
		const stringxiKzRZQ = "P8qDODuL9GotsGGlp6ANK70PbqeyXQ9FGcTCIt8qrptXQtYsrYVb1yrtxOyna8uGGN"
		const uintS52WDD9 = BigInt("92")
		const BACMARSLPTOKENPoolNytJkJc = await BACMARSLPTOKENPool.new(stringQB4e6l6, stringxiKzRZQ, uintS52WDD9, {from: accounts[1]});
		const uintuJdtIBC = BigInt("1392")
		const uint8JfA3lm9 = await BACMARSLPTOKENPoolNytJkJc.decimals.call({from: accounts[3]});
		const uint256qsOlt6p = await BACMARSLPTOKENPoolNytJkJc.stake.call(uintuJdtIBC, {from: accounts[1]});
		const uint256cc9fEmZ = await BACMARSLPTOKENPoolNytJkJc.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256GOCSMoz = await BACMARSLPTOKENPoolNytJkJc.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdmDrYOW = "mmtNVipUt1tjc40DUyQQS5wgoI3I9xvcpGeiLxCnHZgI8p"
		const stringwVEuJ39 = "1BgT4z4KDqdXNJ7dHvmr"
		const uintJstxkFI = BigInt("116")
		const BACMARSLPTOKENPoolCRujFi = await BACMARSLPTOKENPool.new(stringdmDrYOW, stringwVEuJ39, uintJstxkFI, {from: accounts[0]});
		const uintPBkEe2R = BigInt("626")
		const uint2561iR5Sr = await BACMARSLPTOKENPoolCRujFi.rewardPerToken.call({from: accounts[1]});
		const uint256Ryg0cNJ = await BACMARSLPTOKENPoolCRujFi.stake.call(uintPBkEe2R, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMnNplX = "nfWuHNrnrgyjhv3qQV9BtdEUPjB1Hqw1Bu"
		const stringrK4oPLw = "FKfb42ScXUX7OxVFzhZSBmqKvzaaDrmdOulgTaVJSIfULL"
		const uinte6ve7QG = BigInt("116")
		const BACMARSLPTOKENPoolEITxy3f = await BACMARSLPTOKENPool.new(stringMnNplX, stringrK4oPLw, uinte6ve7QG, {from: accounts[3]});
		const uintBBF2HWK = BigInt("1579")
		const uintAmTeMil = BigInt("994")
		const uint256H78UcKN = await BACMARSLPTOKENPoolEITxy3f.getRewardForDuration.call({from: accounts[0]});
		const uint256awKDjNI = await BACMARSLPTOKENPoolEITxy3f.notifyRewardAmount.call(uintBBF2HWK, {from: accounts[3]});
		await BACMARSLPTOKENPoolEITxy3f.exit.call({from: accounts[3]});
		const uint256FqOXBcd = await BACMARSLPTOKENPoolEITxy3f.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256CkAfOf = await BACMARSLPTOKENPoolEITxy3f.stake.call(uintAmTeMil, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringexxjU9s = "hN8QfHjOHrdt3DuARybp8VEV9bQFYhGhMv21XM5yTQL7oFAEmM1x2rgkWWRSZay7N9iJ87GOP7EUZD94aYBn3"
		const stringYFac5ip = "8V8KtNraoVahrYnXIKPOUu"
		const uintScYE4jt = BigInt("101")
		const BACMARSLPTOKENPooltFmMde = await BACMARSLPTOKENPool.new(stringexxjU9s, stringYFac5ip, uintScYE4jt, {from: accounts[0]});
		const uintVdgcGhR = BigInt("2005")
		const addresserUpxoc = accounts[2]
		const uint256qZzEVPI = await BACMARSLPTOKENPooltFmMde.notifyRewardAmount.call(uintVdgcGhR, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPooltFmMde.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256Z9ywUYS = await BACMARSLPTOKENPooltFmMde.earned.call(addresserUpxoc, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTGGJbIl = "4PCdgjR4BUdKPgiY6elifcXudgW8ISsAq6FFzYC7uMHLnMzYPcJpLH2SQUxL5xswd5N7pC87cNQ4HcHyodfuy1nlMm0"
		const stringLQXZEvF = "XK86i6UGJdCbpFC9v4jX1y3SR2o1fByJdgKTKWhkwaPNZfhHI9CoCkIshMSH4Gox3JcyH9hAfnadtLM"
		const uintIhseTUF = BigInt("57")
		const BACMARSLPTOKENPoolRvocomM = await BACMARSLPTOKENPool.new(stringTGGJbIl, stringLQXZEvF, uintIhseTUF, {from: accounts[0]});
		const uintEZfhLzy = BigInt("1540")
		const addressHy4ouTH = accounts[4]
		const byteT9WwDF7 = "0x12060b1c190f1917190b12161d160701051c090d0a0d05101a0501201f1a1213"
		const bytenIy9SpJ = "0x0a1e0e18101402200f121a1c03160b1c040d0a0913060c11130b0b0d030c1110"
		const uintLCae66D = BigInt("143")
		const uintjmUxqS5 = BigInt("288")
		const uintK8srfi9 = BigInt("1254")
		const uint256QBX8BPV = await BACMARSLPTOKENPoolRvocomM.stake.call(uintEZfhLzy, {from: accounts[1]});
		await BACMARSLPTOKENPoolRvocomM.getReward.call({from: accounts[1]});
		const uint256OHzOL75 = await BACMARSLPTOKENPoolRvocomM.balanceOf.call(addressHy4ouTH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hLLrM0 = await BACMARSLPTOKENPoolRvocomM.stakeWithPermit.call(uintK8srfi9, uintjmUxqS5, uintLCae66D, bytenIy9SpJ, byteT9WwDF7, {from: accounts[0]});
		const uint256QF8NLyN = await BACMARSLPTOKENPoolRvocomM.getRewardForDuration.call({from: accounts[4]});
		const uint256YQe4eKK = await BACMARSLPTOKENPoolRvocomM.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbkkOjdC = "RieNPI57S7Xwz76htrnMBL1cgfypACY4vdsZnHcHHsKHq6mPp4qWrB9CqNK"
		const stringdPdJj3Q = "wNefwiye5Xz9T7AFbQXgTLSMlysontdk9TMw7RjDRdVqnS52VzjyQkQVCA81tg7"
		const uintGCtVmgp = BigInt("156")
		const BACMARSLPTOKENPoolIjiOQQE = await BACMARSLPTOKENPool.new(stringbkkOjdC, stringdPdJj3Q, uintGCtVmgp, {from: "0x0000000000000000000000000000000000000001"});
		const addresshXYmOEr = accounts[2]
		const uint256aIgtrbl = await BACMARSLPTOKENPoolIjiOQQE.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolIjiOQQE.onlyRewardsDistribution.call({from: accounts[3]});
		const addressyN5PHf1 = await BACMARSLPTOKENPoolIjiOQQE.updateReward.call(addresshXYmOEr, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVxstFR = "sja2kuQMO3EcrPs9CHnkTbL4YjptMzS1UHppqNk8Z2sexeGTUopHPyRFOzVNOrNCewCdWjt148ispHb"
		const stringKGPwsGF = "KvdhTJywTxKhfrvzsGBwL4aHpJYUC57FsRhCnZRB1caiFa4hMwhGhhrbLxjt8w6V3kEH1Cod8dCSC83YOz"
		const uintIBZmLRN = BigInt("45")
		const BACMARSLPTOKENPoolEwz1joy = await BACMARSLPTOKENPool.new(stringVxstFR, stringKGPwsGF, uintIBZmLRN, {from: accounts[2]});
		const addressjY5ryVK = accounts[2]
		const uint256ELdY0ja = await BACMARSLPTOKENPoolEwz1joy.earned.call(addressjY5ryVK, {from: accounts[3]});
		const uint256EWZYUJY = await BACMARSLPTOKENPoolEwz1joy.rewardPerToken.call({from: accounts[4]});
		const uint256kWaBH4 = await BACMARSLPTOKENPoolEwz1joy.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYeCyHx = "3mYPrzJK14"
		const string1BE5nk = "1gvE7IGAnTPXIiibEfIjVerHDU3BYIGjsjcLreRtqyt9TwmSh8XkBHDjrqw24oc0PgO2UasPrfTwPwOoMoHUGRXx"
		const uintTncvdp = BigInt("217")
		const BACMARSLPTOKENPoolAszF6WL = await BACMARSLPTOKENPool.new(stringYeCyHx, string1BE5nk, uintTncvdp, {from: accounts[3]});
		const address3SCsLi = "0x0000000000000000000000000000000000000001"
		const uint256kzgq3nQ = await BACMARSLPTOKENPoolAszF6WL.balanceOf.call(address3SCsLi, {from: accounts[1]});
		const uint256ccJY8je = await BACMARSLPTOKENPoolAszF6WL.getRewardForDuration.call({from: accounts[0]});
		const uint8OmkrpXf = await BACMARSLPTOKENPoolAszF6WL.decimals.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDj6x2U7 = "pnSfCvmHLTVY8b01i8WdCqB7WMRp2ElQKV5UYiMUFhUQP"
		const stringKG41bcb = "BjPBZuM3xA3YcGjibG3AoY8g7CpdPT2OY3ENJmBjYmYvsl83lnL46Jul2GNprV9"
		const uintYUpYPoL = BigInt("52")
		const BACMARSLPTOKENPoolW5YjtEq = await BACMARSLPTOKENPool.new(stringDj6x2U7, stringKG41bcb, uintYUpYPoL, {from: accounts[2]});
		const addressytUcNJj = accounts[3]
		const byteoeC9VJ = "0x0b130a01111f151f080a1b0e0e0015181716120d0e1d1503040a1812080c0213"
		const bytecXF0p7i = "0x0c0d0814020c080619190b02160e02030a15061b0f101a0b1f0e15050b0a070b"
		const uintp7K4upW = BigInt("187")
		const uintsJ4KnwF = BigInt("49")
		const uintLkpMD5c = BigInt("913")
		const uint256y5G1PgJ = await BACMARSLPTOKENPoolW5YjtEq.balanceOf.call(addressytUcNJj, {from: accounts[3]});
		const uint256Qweu3JE = await BACMARSLPTOKENPoolW5YjtEq.stakeWithPermit.call(uintLkpMD5c, uintsJ4KnwF, uintp7K4upW, bytecXF0p7i, byteoeC9VJ, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPcITEBv = "9KkrMF6GV0XxLqctTQyi9Arxs5Ap77pHlqa2kghiaXwSfOXG4zujEEpCksfqvOGf0R1Ucan0AKBCcO7gf6ksJ"
		const stringlHUl1k0 = "SFKtOPSGul4PQBFHfBCdMVLcqLOkESgOFAaexlHnssBYekdPdMqw6kbaqNlRwtbmVjVxlcWxPGecH1PbuP5WBdbiMd3JHe1lnT"
		const uintdvkbiJc = BigInt("38")
		const BACMARSLPTOKENPoolcQDocEJ = await BACMARSLPTOKENPool.new(stringPcITEBv, stringlHUl1k0, uintdvkbiJc, {from: accounts[2]});
		const uintzQ7ABJ = BigInt("1264")
		const bytemvpD0Fu = "0x030e111a1e1d13091f01091d1b050b1819190406060f14110e151801200d0a01"
		const byteqe0TLyL = "0x061d06011b1d010d0a040201170c030b0a131d1d1b10130d0b161d08171d0c01"
		const uintUgZTv0Y = BigInt("8")
		const uintTNOnjee = BigInt("1694")
		const uintCbxodgZ = BigInt("910")
		const uintxuJQzkN = BigInt("1257")
		const uint256wDjL1OU = await BACMARSLPTOKENPoolcQDocEJ.notifyRewardAmount.call(uintzQ7ABJ, {from: accounts[2]});
		const uint256RRuTAlF = await BACMARSLPTOKENPoolcQDocEJ.stakeWithPermit.call(uintCbxodgZ, uintTNOnjee, uintUgZTv0Y, byteqe0TLyL, bytemvpD0Fu, {from: accounts[4]});
		const uint256O8exqp = await BACMARSLPTOKENPoolcQDocEJ.stake.call(uintxuJQzkN, {from: accounts[4]});
		const uint256VSqfmHG = await BACMARSLPTOKENPoolcQDocEJ.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHCWXlO9 = "Kb6F35IiTVeHIcXYn1lpY5lzPtewYguqCTUlIhYAiqCsp4csI2C3GWIG4Qp9KaioCJYaW4WiMwZ"
		const stringgXx3BVT = "4K9bqVFictT9AxJljDPK9zBXRunJ7qvyckCyxFRJ974tNfFYOtWZJ"
		const uintwg5YpsI = BigInt("211")
		const BACMARSLPTOKENPoolpsTs0Mq = await BACMARSLPTOKENPool.new(stringHCWXlO9, stringgXx3BVT, uintwg5YpsI, {from: accounts[1]});
		const uintEqKPE0s = BigInt("1883")
		const uint8Rswr8IR = await BACMARSLPTOKENPoolpsTs0Mq.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolpsTs0Mq.nonReentrant.call({from: accounts[4]});
		const uint256qhPwE40 = await BACMARSLPTOKENPoolpsTs0Mq.withdraw.call(uintEqKPE0s, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFxz97Mu = "uZyHUe8nEY5GwfWOlyy4slowqeAS4WEUB14qer8ocdu8fH6v1tSy"
		const string9dv8UC = ""
		const uintGFnW6iS = BigInt("9")
		const BACMARSLPTOKENPoolj4COBzu = await BACMARSLPTOKENPool.new(stringFxz97Mu, string9dv8UC, uintGFnW6iS, {from: accounts[3]});
		const uintuqFrXOO = BigInt("757")
		const uintKZMlrmA = BigInt("1605")
		const stringGoDqFvg = await BACMARSLPTOKENPoolj4COBzu.name.call({from: accounts[4]});
		const uint256hKiSNxw = await BACMARSLPTOKENPoolj4COBzu.stake.call(uintuqFrXOO, {from: accounts[0]});
		const uint256AHF8cC8 = await BACMARSLPTOKENPoolj4COBzu.notifyRewardAmount.call(uintKZMlrmA, {from: accounts[1]});
		await BACMARSLPTOKENPoolj4COBzu.nonReentrant.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtxYE3gA = "DOhj4iVTQYoCRJ5BxNkbEiX8GpPt3dfiWcQPhnld6SxXND5EeCt0BpcxaTSUs6R64cavOhz7lQNbCgKS1vQtB8zLrWCsSVX5"
		const stringnjCRia1 = "krAdHxSdpFf8MaTCfiTFlS58uVni8Dx9c4jpSaq7e3WcF6VxPWQoQBshfAaXTtgCsY"
		const uinthlDk4Uw = BigInt("78")
		const BACMARSLPTOKENPoolhTD1ODR = await BACMARSLPTOKENPool.new(stringtxYE3gA, stringnjCRia1, uinthlDk4Uw, {from: accounts[1]});
		const uintZcRvn8 = BigInt("251")
		const byteQcsCoWo = "0x08051c1e06050c1d0712110a201d120e040c0c13080b151203171c0c1607060d"
		const bytewBmAtc4 = "0x091f1317070203141f00021a06061b100f191d040b0c0611010104061f1e0317"
		const uintJiQDsS8 = BigInt("110")
		const uintBD2GeHR = BigInt("767")
		const uintAx1nU06 = BigInt("296")
		const uintohBLpHc = BigInt("755")
		const uint256dr61L2y = await BACMARSLPTOKENPoolhTD1ODR.notifyRewardAmount.call(uintZcRvn8, {from: accounts[4]});
		const uint256Op6gAc = await BACMARSLPTOKENPoolhTD1ODR.stakeWithPermit.call(uintAx1nU06, uintBD2GeHR, uintJiQDsS8, bytewBmAtc4, byteQcsCoWo, {from: accounts[0]});
		await BACMARSLPTOKENPoolhTD1ODR.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256fh0wfw = await BACMARSLPTOKENPoolhTD1ODR.notifyRewardAmount.call(uintohBLpHc, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpleJ1oN = "NDpLQbMkSPO7pgcEP7flWTvwqpWbuQABk7NtJarfeBDLn6TnhK"
		const stringtoa1lcz = "lnfm3xJliXq41PMOoXIwKYmymR5ilmIyL31MoGiErAjh1ol5yoXVmEw4n5"
		const uintkRvW4KR = BigInt("246")
		const BACMARSLPTOKENPoolZTa1Je = await BACMARSLPTOKENPool.new(stringpleJ1oN, stringtoa1lcz, uintkRvW4KR, {from: accounts[0]});
		const addressfc2Mx25 = accounts[2]
		const uintp5sk1N = BigInt("1863")
		const byteiZjEE8 = "0x070f06191b0900121d131c021e1305040c201900141a0b010a1a0d1d17050e0c"
		const byteyOpeff = "0x03090b0c17171c011f040f10050103080f0c1b190b0d1d0a0f0f19070d1f081e"
		const uint8mi9R2 = BigInt("33")
		const uinteCphois = BigInt("1751")
		const uintjwBqwSQ = BigInt("239")
		const addressfCYSuTb = accounts[0]
		const uint256pKDZlr = await BACMARSLPTOKENPoolZTa1Je.balanceOf.call(addressfc2Mx25, {from: accounts[0]});
		const uint256yQv3G2o = await BACMARSLPTOKENPoolZTa1Je.notifyRewardAmount.call(uintp5sk1N, {from: accounts[2]});
		const uint256EXIbXsw = await BACMARSLPTOKENPoolZTa1Je.stakeWithPermit.call(uintjwBqwSQ, uinteCphois, uint8mi9R2, byteyOpeff, byteiZjEE8, {from: accounts[4]});
		const uint256h3Uh9Rf = await BACMARSLPTOKENPoolZTa1Je.balanceOf.call(addressfCYSuTb, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNlNfLlf = "hNkuLPKSswjEW2f4cpAkcWprl"
		const stringPMnIHIL = "bePDUD9apUeQDaT6NqWVwiqUVSwAilH3sMVoUpV96qLKNeJWuudUsnho1ONNYAhbfowIFoc9L6UIx"
		const uinttEAlKx = BigInt("249")
		const BACMARSLPTOKENPoolEChplYL = await BACMARSLPTOKENPool.new(stringNlNfLlf, stringPMnIHIL, uinttEAlKx, {from: accounts[2]});
		const addressAgIDcTm = accounts[0]
		const bytemE5ivPK = "0x07060c2016021d0e06120c150e1919010b1c1e200411090d1a1d14110a011d09"
		const byteQds8QiD = "0x0b10170b0d0000050808191e001a01131316091d1a1a100f20010a07060a0515"
		const uintQ747m1V = BigInt("153")
		const uintMXgd5gx = BigInt("102")
		const uintsqtafzq = BigInt("1676")
		const stringuCqwZk4 = await BACMARSLPTOKENPoolEChplYL.symbol.call({from: accounts[2]});
		const addressRXPYEl = await BACMARSLPTOKENPoolEChplYL.updateReward.call(addressAgIDcTm, {from: accounts[1]});
		const uint256F1BhtF = await BACMARSLPTOKENPoolEChplYL.stakeWithPermit.call(uintsqtafzq, uintMXgd5gx, uintQ747m1V, byteQds8QiD, bytemE5ivPK, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmwRvLNl = "0EWe1SDo2b79B3Z9fY6XyHP"
		const stringd4WgAMF = "mlDCxqQiQUkmGQT0IxvGjx9zc8WmDrFCeZ18gkv47XRiX"
		const uintarqeHdO = BigInt("224")
		const BACMARSLPTOKENPoolnIJBz8 = await BACMARSLPTOKENPool.new(stringmwRvLNl, stringd4WgAMF, uintarqeHdO, {from: accounts[3]});
		const addressDcC5ty5 = accounts[4]
		const uintLiTdfDM = BigInt("862")
		const addresslks5zKi = accounts[4]
		const uint2569x3pbc = await BACMARSLPTOKENPoolnIJBz8.balanceOf.call(addressDcC5ty5, {from: accounts[0]});
		const uint256pX1Ok1x = await BACMARSLPTOKENPoolnIJBz8.stake.call(uintLiTdfDM, {from: accounts[0]});
		const uint256xnlD2VS = await BACMARSLPTOKENPoolnIJBz8.balanceOf.call(addresslks5zKi, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPiVnQaO = "gLUTKu2"
		const stringFtGES7 = "nYbnJz658IuxKy84Dj4MgRW3GloTsENhXCoAttJPLoQPrcfEpVt0OZMIZa1klGro87xGjLivmBnXWLXdnQpwGTp3iAKaVu"
		const uintsS2gsX3 = BigInt("13")
		const BACMARSLPTOKENPoolc6i3HPJ = await BACMARSLPTOKENPool.new(stringPiVnQaO, stringFtGES7, uintsS2gsX3, {from: "0x0000000000000000000000000000000000000001"});
		const uint9YjJZr = BigInt("331")
		const bytelEU0bwN = "0x1f0b191f1a040c190e0e0e0914120b05111e0611201e01101e1d0c0a0d1b0615"
		const bytesiZbhOl = "0x1f1c1a160b0707021b011110010d0c0b0a1f050e1d09130e1d1d0c0d14180003"
		const uintZceBPWU = BigInt("252")
		const uintYf7hK8h = BigInt("1874")
		const uintjhZDQwb = BigInt("381")
		const uint256W4I8IJY = await BACMARSLPTOKENPoolc6i3HPJ.stake.call(uint9YjJZr, {from: accounts[3]});
		const stringaTiLyxF = await BACMARSLPTOKENPoolc6i3HPJ.symbol.call({from: accounts[4]});
		const uint256y1gBi78 = await BACMARSLPTOKENPoolc6i3HPJ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vtUclNN = await BACMARSLPTOKENPoolc6i3HPJ.totalSupply.call({from: accounts[1]});
		const uint256fLbnqAf = await BACMARSLPTOKENPoolc6i3HPJ.stakeWithPermit.call(uintjhZDQwb, uintYf7hK8h, uintZceBPWU, bytesiZbhOl, bytelEU0bwN, {from: accounts[4]});
	});
})