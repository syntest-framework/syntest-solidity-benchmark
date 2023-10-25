const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYH8M1KSy = await KPLAY.new({from: accounts[5]});
		const uinthIwLsmp = BigInt("1615")
		const addresselivCG1 = accounts[1]
		const uintLUz5NTa = BigInt("503")
		const addressTTyoXsH = accounts[1]
		const uinttaD1NIE = BigInt("637")
		const uintfuKHBg3 = BigInt("1326")
		const addressg9khPpg = accounts[1]
		await KPLAYH8M1KSy.whenPaused.call({from: accounts[1]});
		const boolCO24Lk2 = await KPLAYH8M1KSy.approve.call(addresselivCG1, uinthIwLsmp, {from: accounts[2]});
		const address1VblIb = await KPLAYH8M1KSy.unlock.call(addressTTyoXsH, uintLUz5NTa, {from: accounts[4]});
		const boolaSYKQYn = await KPLAYH8M1KSy.transferWithLockAfter.call(addressg9khPpg, uintfuKHBg3, uinttaD1NIE, {from: accounts[1]});

		await expect(KPLAYH8M1KSy.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYycFYflg = await KPLAY.new({from: accounts[2]});
		const uintjaeNobe = BigInt("629")
		const address5A02At = "0x0000000000000000000000000000000000000001"
		const addresstJlH4CP = accounts[4]
		const uintuBNL7ol = BigInt("1845")
		const addressKCs2zCD = accounts[2]
		const addressQbmLlRY = accounts[5]
		const addressCIPboxT = accounts[4]
		const boolkgToPPV = await KPLAYycFYflg.approve.call(address5A02At, uintjaeNobe, {from: accounts[4]});
		const addressEOKOWdk = await KPLAYycFYflg.freeze.call(addresstJlH4CP, {from: accounts[3]});
		const boolBMp4WP = await KPLAYycFYflg.approve.call(addressKCs2zCD, uintuBNL7ol, {from: accounts[0]});
		const addressTcK70oT = await KPLAYycFYflg.freeze.call(addressQbmLlRY, {from: accounts[3]});
		const addressdfT3zus = await KPLAYycFYflg.unfreeze.call(addressCIPboxT, {from: accounts[4]});

		assert.equal(boolkgToPPV, true)
		await expect(KPLAYycFYflg.freeze.call(addresstJlH4CP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjWvqUEo = await KPLAY.new({from: accounts[0]});
		const uintqJn2fv2 = BigInt("223")
		const addressbwdTzyj = accounts[2]
		const addressUlloLzs = accounts[3]
		const addressv03btyK = accounts[2]
		const uintSljq9j = BigInt("330")
		const addresspP78EM = accounts[1]
		const boolD2godTF = await KPLAYjWvqUEo.transferFrom.call(addressUlloLzs, addressbwdTzyj, uintqJn2fv2, {from: accounts[4]});
		const uint256xT7PCzL = await KPLAYjWvqUEo.balanceOf.call(addressv03btyK, {from: accounts[1]});
		const addresseONzfWl = await KPLAYjWvqUEo.unlock.call(addresspP78EM, uintSljq9j, {from: accounts[0]});
		await KPLAYjWvqUEo.unpause.call({from: accounts[0]});

		await expect(KPLAYjWvqUEo.transferFrom.call(addressUlloLzs, addressbwdTzyj, uintqJn2fv2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwXWz5X0 = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTpvZxhq = BigInt("109")
		const uintq9xVpOF = BigInt("1372")
		const addressSIPsDnh = accounts[0]
		const uintOJAGcgW = BigInt("1302")
		const uintBMjX5K9 = BigInt("1328")
		const addressMTDOIr8 = accounts[2]
		const uinti8q97YY = BigInt("225")
		const addressxYxGfH4 = accounts[2]
		const addressAPcZRcT = await KPLAYwXWz5X0.lockAfter.call(addressSIPsDnh, uintq9xVpOF, uintTpvZxhq, {from: accounts[2]});
		await KPLAYwXWz5X0.renounceOwnership.call({from: accounts[4]});
		const addresszvxU1qv = await KPLAYwXWz5X0.lockAfter.call(addressMTDOIr8, uintBMjX5K9, uintOJAGcgW, {from: accounts[4]});
		const boolYvAl53Q = await KPLAYwXWz5X0.transfer.call(addressxYxGfH4, uinti8q97YY, {from: accounts[2]});
	});

	it('test for KPLAY', async () => {
		const KPLAYGBOPLPn = await KPLAY.new({from: accounts[3]});
		const uintG9Y5WS0 = BigInt("458")
		const addressEV9ZPW = accounts[4]
		const addressZ80bOYA = accounts[2]
		const addresszUXrPb = accounts[0]
		const addresssOvZXT2 = accounts[0]
		const addressrUxlPh = accounts[5]
		const addressW8XimfP = accounts[2]
		const boolwGyfBRf = await KPLAYGBOPLPn.increaseAllowance.call(addressEV9ZPW, uintG9Y5WS0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pXezQNo = await KPLAYGBOPLPn.lockCount.call(addressZ80bOYA, {from: accounts[4]});
		await KPLAYGBOPLPn.onlyOwner.call({from: accounts[3]});
		const uint256jcT7mBS = await KPLAYGBOPLPn.balanceOf.call(addresszUXrPb, {from: accounts[3]});
		const uint256DiLWDti = await KPLAYGBOPLPn.allowance.call(addressrUxlPh, addresssOvZXT2, {from: accounts[4]});
		const addressjucxcVJ = await KPLAYGBOPLPn.unfreeze.call(addressW8XimfP, {from: accounts[2]});

		assert.equal(boolwGyfBRf, true)
		assert.equal(uint256pXezQNo, BigInt("0"))
		await expect(KPLAYGBOPLPn.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUjJQpmz = await KPLAY.new({from: accounts[4]});
		const uintOKgSENY = BigInt("127")
		const addressEb5sj9 = accounts[3]
		const uinthJ7U2EY = BigInt("1500")
		const addresssqCLVvy = accounts[4]
		const addressc6Se6QR = accounts[4]
		const uint6XUfne = BigInt("1725")
		const addressXq5sYDY = accounts[4]
		const addressTfWCCKG = accounts[6]
		const uintzqBMuBu = BigInt("1311")
		const addressf5lrKQ5 = accounts[5]
		const addressAM8Yig8 = accounts[2]
		const uintjXhOahU = BigInt("1150")
		const uint2NfPa5 = BigInt("1965")
		const addressZROaZVj = accounts[2]
		const uintZYHZim0 = BigInt("426")
		const addressTmKtHLh = accounts[1]
		const addressMMMx96Z = await KPLAYUjJQpmz.unlock.call(addressEb5sj9, uintOKgSENY, {from: accounts[4]});
		const boolfJL2snP = await KPLAYUjJQpmz.transferFrom.call(addressc6Se6QR, addresssqCLVvy, uinthJ7U2EY, {from: accounts[4]});
		const boolLBT1f1w = await KPLAYUjJQpmz.transferFrom.call(addressTfWCCKG, addressXq5sYDY, uint6XUfne, {from: accounts[2]});
		const uint256Xxe0oaC = await KPLAYUjJQpmz.afterTime.call(uintzqBMuBu, {from: accounts[4]});
		const uint256aQpUfyj = await KPLAYUjJQpmz.allowance.call(addressAM8Yig8, addressf5lrKQ5, {from: "0x0000000000000000000000000000000000000001"});
		const addressuoIYHDc = await KPLAYUjJQpmz.lockAfter.call(addressZROaZVj, uint2NfPa5, uintjXhOahU, {from: accounts[4]});
		const addressgbwS1YL = await KPLAYUjJQpmz.burn.call(addressTmKtHLh, uintZYHZim0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uqdsPlI = await KPLAYUjJQpmz.totalSupply.call({from: accounts[0]});

		await expect(KPLAYUjJQpmz.unlock.call(addressEb5sj9, uintOKgSENY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYWiMUqfl = await KPLAY.new({from: accounts[2]});
		const addressiIzfROd = accounts[3]
		const uintu98ik1E = BigInt("1231")
		const addressDSsHob3 = accounts[4]
		const uintd92ISnM = BigInt("2028")
		const addressvmjS4BB = accounts[3]
		const uint256lRAdt26 = await KPLAYWiMUqfl.balanceOf.call(addressiIzfROd, {from: accounts[4]});
		await KPLAYWiMUqfl.lockState.call(addressDSsHob3, uintu98ik1E, {from: accounts[3]});
		const booly18Ou0B = await KPLAYWiMUqfl.approve.call(addressvmjS4BB, uintd92ISnM, {from: accounts[3]});

		assert.equal(uint256lRAdt26, BigInt("0"))
		await expect(KPLAYWiMUqfl.lockState.call(addressDSsHob3, uintu98ik1E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYopjbUeD = await KPLAY.new({from: accounts[5]});
		const addressvcekOji = accounts[5]
		const uinttbbGJqC = BigInt("997")
		const addressh3tszSR = accounts[0]
		const uinth0wjqPh = BigInt("579")
		const addressPM2rPcw = accounts[0]
		const addresscddadko = accounts[5]
		const boolynZMqhk = await KPLAYopjbUeD.isFrozen.call(addressvcekOji, {from: accounts[2]});
		const boolj5MAlB2 = await KPLAYopjbUeD.mint.call(addressh3tszSR, uinttbbGJqC, {from: accounts[5]});
		await KPLAYopjbUeD.whenNotFrozen.call({from: accounts[4]});
		const uint256WZ6tOv8 = await KPLAYopjbUeD.currentTime.call({from: accounts[0]});
		const booldDTORMv = await KPLAYopjbUeD.transfer.call(addressPM2rPcw, uinth0wjqPh, {from: accounts[3]});
		const uint256QpGUPBA = await KPLAYopjbUeD.lockCount.call(addresscddadko, {from: accounts[2]});

		assert.equal(boolj5MAlB2, true)
		assert.equal(boolynZMqhk, false)
		await expect(KPLAYopjbUeD.whenNotFrozen.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYWiMUqfl = await KPLAY.new({from: accounts[2]});
		const addressInAe53y = accounts[4]
		const uinttfEmZbn = BigInt("816")
		const addressOwUC07j = accounts[3]
		const uintdaJ5b9X = BigInt("1231")
		const address5vzV1y = accounts[4]
		const uintVLyfKGd = BigInt("1320")
		const uintjYVYF98 = BigInt("428")
		const addressqjrGGqB = "0x0000000000000000000000000000000000000001"
		const uintReZpMxF = BigInt("2028")
		const addressHK0Kkuw = accounts[3]
		const uint256lRAdt26 = await KPLAYWiMUqfl.balanceOf.call(addressInAe53y, {from: accounts[4]});
		const boolIVkIVDb = await KPLAYWiMUqfl.decreaseAllowance.call(addressOwUC07j, uinttfEmZbn, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYWiMUqfl.lockState.call(address5vzV1y, uintdaJ5b9X, {from: accounts[3]});
		const boolEeLPhiC = await KPLAYWiMUqfl.transferWithLockAfter.call(addressqjrGGqB, uintjYVYF98, uintVLyfKGd, {from: accounts[5]});
		const booly18Ou0B = await KPLAYWiMUqfl.approve.call(addressHK0Kkuw, uintReZpMxF, {from: accounts[3]});

		assert.equal(uint256lRAdt26, BigInt("0"))
		await expect(KPLAYWiMUqfl.decreaseAllowance.call(addressOwUC07j, uinttfEmZbn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUjJQpmz = await KPLAY.new({from: accounts[4]});
		const uintxhqgZOf = BigInt("1578")
		const addressOsWXJjo = accounts[2]
		const uintlPaCwVa = BigInt("1358")
		const addressS5SnWCu = accounts[4]
		const addressRGRba9J = accounts[6]
		const boolo0Gts27 = await KPLAYUjJQpmz.transfer.call(addressOsWXJjo, uintxhqgZOf, {from: accounts[1]});
		const boolLBT1f1w = await KPLAYUjJQpmz.transferFrom.call(addressRGRba9J, addressS5SnWCu, uintlPaCwVa, {from: accounts[2]});

		await expect(KPLAYUjJQpmz.transfer.call(addressOsWXJjo, uintxhqgZOf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYWiMUqfl = await KPLAY.new({from: accounts[2]});
		const addressVuWkuhl = accounts[3]
		const uint256lRAdt26 = await KPLAYWiMUqfl.balanceOf.call(addressVuWkuhl, {from: accounts[4]});
		const uint256HjZpp9D = await KPLAYWiMUqfl.currentTime.call({from: accounts[4]});

		assert.equal(uint256HjZpp9D, BigInt("1630229126"))
		assert.equal(uint256lRAdt26, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYAWWGXPM = await KPLAY.new({from: accounts[2]});
		const addressiVkbSLg = accounts[4]
		const addressAI6GBcs = accounts[3]
		const addressDwviv8g = "0x0000000000000000000000000000000000000001"
		const uint256L6Bdvrv = await KPLAYAWWGXPM.allowance.call(addressAI6GBcs, addressiVkbSLg, {from: accounts[4]});
		const addressQnmavAR = await KPLAYAWWGXPM.transferOwnership.call(addressDwviv8g, {from: accounts[1]});
		await KPLAYAWWGXPM.whenNotPaused.call({from: accounts[0]});
		await KPLAYAWWGXPM.unpause.call({from: accounts[3]});

		assert.equal(uint256L6Bdvrv, BigInt("0"))
		await expect(KPLAYAWWGXPM.transferOwnership.call(addressDwviv8g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvnf0kkb = await KPLAY.new({from: accounts[4]});
		const addresslbT8oX = accounts[2]
		const uintfPTxRbc = BigInt("1764")
		const uint1JMuL5 = BigInt("1262")
		const addressVvBMzMe = accounts[2]
		const uintpgwb7Z = BigInt("14")
		const addressgOPGYET = accounts[4]
		const addressrnx0kjM = accounts[0]
		await KPLAYvnf0kkb.renounceOwnership.call({from: accounts[4]});
		const addresszyG2MQg = await KPLAYvnf0kkb.transferOwnership.call(addresslbT8oX, {from: accounts[1]});
		const boolEWTsqm6 = await KPLAYvnf0kkb.transferWithLock.call(addressVvBMzMe, uint1JMuL5, uintfPTxRbc, {from: accounts[0]});
		const boolxl3eaVy = await KPLAYvnf0kkb.transfer.call(addressgOPGYET, uintpgwb7Z, {from: accounts[0]});
		await KPLAYvnf0kkb.renounceOwnership.call({from: accounts[1]});
		const uint256RCZplpn = await KPLAYvnf0kkb.lockCount.call(addressrnx0kjM, {from: accounts[3]});

		await expect(KPLAYvnf0kkb.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUjJQpmz = await KPLAY.new({from: accounts[4]});
		const addresswSPgLiP = accounts[3]
		const uintIKREPqE = BigInt("2")
		const uintJT2ysdn = BigInt("774")
		const addressHycPbuQ = accounts[0]
		const uinttG7Gju2 = BigInt("725")
		const addressflLm3n = accounts[4]
		const uintYiJ7R1B = BigInt("426")
		const addressenM5L7K = accounts[2]
		const uint256hiTipRT = await KPLAYUjJQpmz.balanceOf.call(addresswSPgLiP, {from: accounts[3]});
		const addresscoGmKv8 = await KPLAYUjJQpmz.lockAfter.call(addressHycPbuQ, uintJT2ysdn, uintIKREPqE, {from: accounts[4]});
		const boolCE15G2V = await KPLAYUjJQpmz.decreaseAllowance.call(addressflLm3n, uinttG7Gju2, {from: accounts[3]});
		const addressgbwS1YL = await KPLAYUjJQpmz.burn.call(addressenM5L7K, uintYiJ7R1B, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256hiTipRT, BigInt("0"))
		await expect(KPLAYUjJQpmz.lockAfter.call(addressHycPbuQ, uintJT2ysdn, uintIKREPqE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUgkOYIf = await KPLAY.new({from: accounts[1]});
		const address8cQpZj = accounts[1]
		const uintvF9KPN = BigInt("1177")
		const uintiFCjsT6 = BigInt("296")
		const addressiOYdeMJ = "0x0000000000000000000000000000000000000001"
		const uintkh918dw = BigInt("16")
		const addressUjwST0 = accounts[4]
		const addressTlq1Tyk = accounts[4]
		const uintRL2qIa = BigInt("281")
		const addressSwWc5dG = accounts[4]
		const boolRpTqj2 = await KPLAYUgkOYIf.isFrozen.call(address8cQpZj, {from: accounts[0]});
		await KPLAYUgkOYIf.pause.call({from: accounts[1]});
		const boolgxUyhrW = await KPLAYUgkOYIf.transferWithLock.call(addressiOYdeMJ, uintiFCjsT6, uintvF9KPN, {from: "0x0000000000000000000000000000000000000001"});
		const boolXGbzl2N = await KPLAYUgkOYIf.transferFrom.call(addressTlq1Tyk, addressUjwST0, uintkh918dw, {from: accounts[5]});
		const addressXvoHwjH = await KPLAYUgkOYIf.unlock.call(addressSwWc5dG, uintRL2qIa, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYUgkOYIf.onlyOwner.call({from: accounts[1]});

		assert.equal(boolRpTqj2, false)
		await expect(KPLAYUgkOYIf.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUjJQpmz = await KPLAY.new({from: accounts[4]});
		const uintotEMOuK = BigInt("1128")
		const uintXhZ4aim = BigInt("1358")
		const addressYHHcJp = accounts[5]
		const addressb0GC081 = accounts[5]
		const uint256PD4IuX9 = await KPLAYUjJQpmz.afterTime.call(uintotEMOuK, {from: accounts[1]});
		const boolLBT1f1w = await KPLAYUjJQpmz.transferFrom.call(addressb0GC081, addressYHHcJp, uintXhZ4aim, {from: accounts[2]});

		assert.equal(uint256PD4IuX9, BigInt("1630230261"))
		await expect(KPLAYUjJQpmz.transferFrom.call(addressb0GC081, addressYHHcJp, uintXhZ4aim, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYnEWQUGf = await KPLAY.new({from: accounts[3]});
		const addressbbb7v7B = accounts[5]
		const addressj6ljt9k = accounts[3]
		const uintOcfyVDw = BigInt("1463")
		const addressbFTst1G = accounts[3]
		const addressJDtuOq9 = accounts[4]
		const uintEw4raoY = BigInt("651")
		const addressGp7DGA = accounts[5]
		const addressSoPOIWp = await KPLAYnEWQUGf.freeze.call(addressbbb7v7B, {from: accounts[3]});
		const addressPyEHXyQ = await KPLAYnEWQUGf.freeze.call(addressj6ljt9k, {from: accounts[2]});
		const boolhRH2YL = await KPLAYnEWQUGf.transferFrom.call(addressJDtuOq9, addressbFTst1G, uintOcfyVDw, {from: accounts[4]});
		const boolSbNPNKS = await KPLAYnEWQUGf.decreaseAllowance.call(addressGp7DGA, uintEw4raoY, {from: accounts[2]});

		await expect(KPLAYnEWQUGf.freeze.call(addressj6ljt9k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUjJQpmz = await KPLAY.new({from: accounts[4]});
		const uintwEDJUjH = BigInt("1592")
		const addressi0JoKVx = accounts[2]
		const uintgXwC4CS = BigInt("1409")
		const uintTb0Npgw = BigInt("1921")
		const addressF7ninD4 = accounts[3]
		const uintaaOQEZK = BigInt("841")
		const addressO9LWsLF = accounts[3]
		const uintdBT4n0 = BigInt("426")
		const addressdmPwtnc = accounts[1]
		const boolcOsgqA6 = await KPLAYUjJQpmz.mint.call(addressi0JoKVx, uintwEDJUjH, {from: accounts[4]});
		const bool7RIY1v = await KPLAYUjJQpmz.transferWithLockAfter.call(addressF7ninD4, uintTb0Npgw, uintgXwC4CS, {from: accounts[4]});
		const addressMMMx96Z = await KPLAYUjJQpmz.unlock.call(addressO9LWsLF, uintaaOQEZK, {from: accounts[4]});
		const addressgbwS1YL = await KPLAYUjJQpmz.burn.call(addressdmPwtnc, uintdBT4n0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uqdsPlI = await KPLAYUjJQpmz.totalSupply.call({from: accounts[0]});

		assert.equal(bool7RIY1v, true)
		assert.equal(boolcOsgqA6, true)
		await expect(KPLAYUjJQpmz.unlock.call(addressO9LWsLF, uintaaOQEZK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUjJQpmz = await KPLAY.new({from: accounts[4]});
		const uintIEO6niT = BigInt("1074")
		const addressl8IwDjA = accounts[0]
		const uintsxbcvn = BigInt("1358")
		const addressj5CgLy = accounts[5]
		const addresse1yRt8n = accounts[5]
		const address07yef8 = accounts[3]
		const addresswIaXo2j = accounts[3]
		const addresstR9I84i = "0x0000000000000000000000000000000000000001"
		const addressXHeckeT = await KPLAYUjJQpmz.burn.call(addressl8IwDjA, uintIEO6niT, {from: accounts[4]});
		await KPLAYUjJQpmz.whenNotFrozen.call({from: accounts[4]});
		const boolLBT1f1w = await KPLAYUjJQpmz.transferFrom.call(addresse1yRt8n, addressj5CgLy, uintsxbcvn, {from: accounts[2]});
		const uint256f7Hd3mP = await KPLAYUjJQpmz.allowance.call(addresswIaXo2j, address07yef8, {from: accounts[4]});
		const addressJLuFEkU = await KPLAYUjJQpmz.transferOwnership.call(addresstR9I84i, {from: accounts[4]});

		await expect(KPLAYUjJQpmz.burn.call(addressl8IwDjA, uintIEO6niT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUjJQpmz = await KPLAY.new({from: accounts[4]});
		const uintMbaRbfB = BigInt("1358")
		const addressCtVjEss = accounts[4]
		const addressDyWnXdy = accounts[6]
		const uint256vcQgjFo = await KPLAYUjJQpmz.totalSupply.call({from: accounts[1]});
		const boolLBT1f1w = await KPLAYUjJQpmz.transferFrom.call(addressDyWnXdy, addressCtVjEss, uintMbaRbfB, {from: accounts[2]});

		assert.equal(uint256vcQgjFo, BigInt("10000000000000000"))
		await expect(KPLAYUjJQpmz.transferFrom.call(addressDyWnXdy, addressCtVjEss, uintMbaRbfB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUjJQpmz = await KPLAY.new({from: accounts[4]});
		const uintR4ZxtfD = BigInt("1591")
		const uintjZjod4r = BigInt("1917")
		const addressAZoP6TJ = accounts[1]
		const uintxcDuQc = BigInt("870")
		const addressNYMV5wo = accounts[0]
		const uinteV7wYt5 = BigInt("1349")
		const addresspjv3yf = accounts[4]
		const addressJx4i76Z = accounts[5]
		const boolme8jCK7 = await KPLAYUjJQpmz.transferWithLock.call(addressAZoP6TJ, uintjZjod4r, uintR4ZxtfD, {from: accounts[4]});
		await KPLAYUjJQpmz.lockState.call(addressNYMV5wo, uintxcDuQc, {from: accounts[1]});
		const boolLBT1f1w = await KPLAYUjJQpmz.transferFrom.call(addressJx4i76Z, addresspjv3yf, uinteV7wYt5, {from: accounts[2]});

		assert.equal(boolme8jCK7, true)
		await expect(KPLAYUjJQpmz.lockState.call(addressNYMV5wo, uintxcDuQc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUjJQpmz = await KPLAY.new({from: accounts[4]});
		const uintVpvq60P = BigInt("426")
		const addressAEf3yCP = accounts[1]
		await KPLAYUjJQpmz.unpause.call({from: accounts[4]});
		const addressgbwS1YL = await KPLAYUjJQpmz.burn.call(addressAEf3yCP, uintVpvq60P, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uqdsPlI = await KPLAYUjJQpmz.totalSupply.call({from: accounts[0]});

		await expect(KPLAYUjJQpmz.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYWiMUqfl = await KPLAY.new({from: accounts[2]});
		const addressqlab21A = accounts[4]
		const addressLY2vEO3 = "0x0000000000000000000000000000000000000001"
		const uint256lRAdt26 = await KPLAYWiMUqfl.balanceOf.call(addressqlab21A, {from: accounts[4]});
		const addressCwQ2hxr = await KPLAYWiMUqfl.unfreeze.call(addressLY2vEO3, {from: accounts[2]});

		assert.equal(uint256lRAdt26, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYUjJQpmz = await KPLAY.new({from: accounts[4]});
		const addressyMiinbK = accounts[3]
		const uintHid1Ye6 = BigInt("908")
		const addressO4iKoD = accounts[3]
		const addressJx4Q7wc = accounts[0]
		const uintZD9gTGh = BigInt("831")
		const addressILQXs3 = accounts[4]
		const addresssx5Xujn = await KPLAYUjJQpmz.transferOwnership.call(addressyMiinbK, {from: accounts[4]});
		const boolJLYhpVa = await KPLAYUjJQpmz.transferFrom.call(addressJx4Q7wc, addressO4iKoD, uintHid1Ye6, {from: accounts[0]});
		const addressMMMx96Z = await KPLAYUjJQpmz.unlock.call(addressILQXs3, uintZD9gTGh, {from: accounts[4]});

		await expect(KPLAYUjJQpmz.transferFrom.call(addressJx4Q7wc, addressO4iKoD, uintHid1Ye6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUjJQpmz = await KPLAY.new({from: accounts[4]});
		const addressm4F0vDB = accounts[2]
		const uintzfPWVEJ = BigInt("199")
		const addressgifySKa = accounts[3]
		const addressXjNekqy = "0x00000000000000000000000000000000000000-1"
		const uintLxFNCa1 = BigInt("841")
		const addressRV5dz8X = accounts[4]
		const addressgFZ1U8P = accounts[1]
		const uint256MmmRkVm = await KPLAYUjJQpmz.balanceOf.call(addressm4F0vDB, {from: accounts[2]});
		const boolqiEW01t = await KPLAYUjJQpmz.transfer.call(addressgifySKa, uintzfPWVEJ, {from: accounts[4]});
		const uint256YjMQ2Dr = await KPLAYUjJQpmz.balanceOf.call(addressXjNekqy, {from: accounts[1]});
		const addressMMMx96Z = await KPLAYUjJQpmz.unlock.call(addressRV5dz8X, uintLxFNCa1, {from: accounts[4]});
		const addressXp3D1Lu = await KPLAYUjJQpmz.freeze.call(addressgFZ1U8P, {from: accounts[0]});

		assert.equal(boolqiEW01t, true)
		assert.equal(uint256MmmRkVm, BigInt("0"))
		await expect(KPLAYUjJQpmz.balanceOf.call(addressXjNekqy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYL3c2Mw5 = await KPLAY.new({from: accounts[2]});
		const uintxZTxuV = BigInt("29")
		const addresssC15WeG = accounts[3]
		const uintDTMwkfA = BigInt("752")
		const uintA1WHurY = BigInt("1148")
		const addresskdUaMvV = accounts[1]
		const uintKJPUDN = BigInt("580")
		const addresse8v9gcu = accounts[4]
		const addressPjM95Me = accounts[4]
		const addressFLnBGK = accounts[4]
		const uintu4fpps = BigInt("714")
		const addressT3RGI5k = accounts[2]
		const boolcTIL1h5 = await KPLAYL3c2Mw5.approve.call(addresssC15WeG, uintxZTxuV, {from: "0x0000000000000000000000000000000000000001"});
		const addressIf3FDdH = await KPLAYL3c2Mw5.lock.call(addresskdUaMvV, uintA1WHurY, uintDTMwkfA, {from: accounts[2]});
		const boolU8jHn4 = await KPLAYL3c2Mw5.transferFrom.call(addressPjM95Me, addresse8v9gcu, uintKJPUDN, {from: accounts[5]});
		const uint256APjcMcu = await KPLAYL3c2Mw5.balanceOf.call(addressFLnBGK, {from: accounts[1]});
		const boolBnUn5wk = await KPLAYL3c2Mw5.approve.call(addressT3RGI5k, uintu4fpps, {from: accounts[2]});

		assert.equal(boolcTIL1h5, true)
		await expect(KPLAYL3c2Mw5.lock.call(addresskdUaMvV, uintA1WHurY, uintDTMwkfA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})