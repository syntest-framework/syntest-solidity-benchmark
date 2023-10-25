const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveRxjyRlC = await Revive.new({from: accounts[4]});
		const uinto2S3hoq = BigInt("1674")
		const bytesuN1dpo = "0x0f04090502111f060f1d1f1118090d07020c0e020a081606031c1008060b1819"
		const bytednogMBt = "0x190b0713110f00091a040b1103021c0e18091b0409072003131f081220191f1d"
		const addressO1RIEFE = accounts[2]
		const addressu4WAKrl = accounts[0]
		const addressOsWCc9e = accounts[4]
		const addressJIjj2V2 = accounts[5]
		const addressRD38P3p = accounts[3]
		const boolL0uPftj = await ReviveRxjyRlC.extendLock.call(bytesuN1dpo, uinto2S3hoq, {from: accounts[2]});
		const uint2565l4Dzx = await ReviveRxjyRlC.tokensUnlockable.call(addressO1RIEFE, bytednogMBt, {from: accounts[2]});
		const uint256MD8RuLq = await ReviveRxjyRlC.unlock.call(addressu4WAKrl, {from: accounts[4]});
		const uint256yfO7d4w = await ReviveRxjyRlC.totalBalanceOf.call(addressOsWCc9e, {from: accounts[5]});
		const boolGY2zeS2 = await ReviveRxjyRlC.isOwner.call({from: accounts[1]});
		const uint256W3pv6BH = await ReviveRxjyRlC.allowance.call(addressRD38P3p, addressJIjj2V2, {from: accounts[3]});

		await expect(ReviveRxjyRlC.extendLock.call(bytesuN1dpo, uinto2S3hoq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveklAYpc = await Revive.new({from: accounts[3]});
		const uintKlPT6Fr = BigInt("79")
		const addressZXheYwp = accounts[2]
		const boolRMPbNk5 = await ReviveklAYpc.isOwner.call({from: accounts[0]});
		const boolvicvWGN = await ReviveklAYpc.increaseAllowance.call(addressZXheYwp, uintKlPT6Fr, {from: accounts[0]});

		assert.equal(boolRMPbNk5, false)
		assert.equal(boolvicvWGN, true)
	});

	it('test for Revive', async () => {
		const ReviveweT6PeB = await Revive.new({from: accounts[0]});
		const uintiHlizrP = BigInt("435")
		const byteplHncLl = "0x110a1a0b0c1b0c08070407030b08110d1b010f13042012200f0b19171608040c"
		const addressstRGP53 = accounts[0]
		const uintHumgQdS = BigInt("238")
		const byteaYiSSAN = "0x06191801121e121a1b0911030f051b15041b06091a1a051d03151b1203081f13"
		const addressf5GDOlM = accounts[3]
		const uintSJc9YHb = BigInt("282")
		const addressfAm2VNl = accounts[0]
		const uint25655f7mJ = await ReviveweT6PeB.tokensLockedAtTime.call(addressstRGP53, byteplHncLl, uintiHlizrP, {from: accounts[5]});
		await ReviveweT6PeB.onlyOwner.call({from: accounts[3]});
		const bool67ydZ7 = await ReviveweT6PeB.extendLock.call(byteaYiSSAN, uintHumgQdS, {from: accounts[5]});
		const addressZUPzy3 = await ReviveweT6PeB.transferOwnership.call(addressf5GDOlM, {from: accounts[1]});
		const boolE4lwckJ = await ReviveweT6PeB.transfer.call(addressfAm2VNl, uintSJc9YHb, {from: accounts[2]});
		const boolWJ5lXM6 = await ReviveweT6PeB.isOwner.call({from: accounts[0]});

		assert.equal(uint25655f7mJ, BigInt("0"))
		await expect(ReviveweT6PeB.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveajXhDCw = await Revive.new({from: accounts[5]});
		const uintp7Qc9FM = BigInt("207")
		const addressVM6Lsy4 = accounts[3]
		const uintwoRBWk = BigInt("142")
		const byteYLpprPe = "0x0714041f1606161a0c0302131807070213151c030f0c03160e02040a10010f1a"
		const addressESyrbG = accounts[2]
		const addressg7Vmm0S = accounts[1]
		const boolLyypOVB = await ReviveajXhDCw.decreaseAllowance.call(addressVM6Lsy4, uintp7Qc9FM, {from: accounts[4]});
		const uint256WURXw8n = await ReviveajXhDCw.tokensLockedAtTime.call(addressESyrbG, byteYLpprPe, uintwoRBWk, {from: accounts[3]});
		const uint256Dns3kOd = await ReviveajXhDCw.getUnlockableTokens.call(addressg7Vmm0S, {from: accounts[0]});

		await expect(ReviveajXhDCw.decreaseAllowance.call(addressVM6Lsy4, uintp7Qc9FM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTQVP6eR = await Revive.new({from: accounts[4]});
		const uintxxGVOUB = BigInt("813")
		const addressL5APrcy = accounts[1]
		const addressSnMUJ3w = "0x0000000000000000000000000000000000000001"
		const addressd02wq5 = accounts[0]
		const boolTy1HSO = await ReviveTQVP6eR.transfer.call(addressL5APrcy, uintxxGVOUB, {from: accounts[5]});
		const addressajwXXv = await ReviveTQVP6eR.transferOwnership.call(addressSnMUJ3w, {from: accounts[1]});
		const uint256jeyV4Pb = await ReviveTQVP6eR.totalBalanceOf.call(addressd02wq5, {from: accounts[5]});

		await expect(ReviveTQVP6eR.transfer.call(addressL5APrcy, uintxxGVOUB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVGrDRrH = await Revive.new({from: accounts[4]});
		const uintfbkvwdz = BigInt("1267")
		const addresspW10Axe = "0x0000000000000000000000000000000000000001"
		const addressQ9IkknK = await ReviveVGrDRrH.owner.call({from: accounts[2]});
		const boolzr4Z2qV = await ReviveVGrDRrH.transfer.call(addresspW10Axe, uintfbkvwdz, {from: accounts[3]});
		await ReviveVGrDRrH.renounceOwnership.call({from: accounts[1]});
		await ReviveVGrDRrH.renounceOwnership.call({from: accounts[2]});
		const addressLawolpH = await ReviveVGrDRrH.owner.call({from: accounts[2]});

		assert.equal(addressQ9IkknK, 0x4511f3493544327A493f28A07F4d84DbE4F20539)
		await expect(ReviveVGrDRrH.transfer.call(addresspW10Axe, uintfbkvwdz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivewm8Qh87 = await Revive.new({from: accounts[1]});
		const uintKRUSDfR = BigInt("1879")
		const addressVZFEeWT = accounts[1]
		const uintyt7E58o = BigInt("122")
		const addressRVgi8Re = accounts[2]
		const uintiRVacAM = BigInt("1555")
		const addressm6g1u6G = accounts[3]
		const bool2wKzdw = await Revivewm8Qh87.increaseAllowance.call(addressVZFEeWT, uintKRUSDfR, {from: accounts[1]});
		const boolT85PGY5 = await Revivewm8Qh87.approve.call(addressRVgi8Re, uintyt7E58o, {from: accounts[3]});
		const boolwrtw1mF = await Revivewm8Qh87.decreaseAllowance.call(addressm6g1u6G, uintiRVacAM, {from: accounts[0]});

		assert.equal(bool2wKzdw, true)
		assert.equal(boolT85PGY5, true)
		await expect(Revivewm8Qh87.decreaseAllowance.call(addressm6g1u6G, uintiRVacAM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveajXhDCw = await Revive.new({from: accounts[5]});
		const uintfi8UByW = BigInt("146")
		const byteJaHhMLu = "0x0714041f1606161a0c0302131807070213151c030f0c03160e02040a10010f1a"
		const addresspo7dedW = accounts[2]
		const addressgMNYq5N = accounts[1]
		const uint256WURXw8n = await ReviveajXhDCw.tokensLockedAtTime.call(addresspo7dedW, byteJaHhMLu, uintfi8UByW, {from: accounts[3]});
		const uint256ou70pzU = await ReviveajXhDCw.totalSupply.call({from: accounts[2]});
		const uint256Dns3kOd = await ReviveajXhDCw.getUnlockableTokens.call(addressgMNYq5N, {from: accounts[0]});

		assert.equal(uint256Dns3kOd, BigInt("0"))
		assert.equal(uint256WURXw8n, BigInt("0"))
		assert.equal(uint256ou70pzU, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const ReviveklAYpc = await Revive.new({from: accounts[3]});
		const uintSvWQLdI = BigInt("544")
		const uintp8Hu3HI = BigInt("421")
		const byteigWnJOQ = "0x0a03190618021608181c0b170d150d01090c050308120514130a011b09051404"
		const addressItyFEz8 = accounts[1]
		const uintmQgr65 = BigInt("79")
		const addresswVrS4S = accounts[3]
		const boolP1S6r65 = await ReviveklAYpc.transferWithLock.call(addressItyFEz8, byteigWnJOQ, uintp8Hu3HI, uintSvWQLdI, {from: accounts[1]});
		await ReviveklAYpc.renounceOwnership.call({from: accounts[0]});
		const boolvicvWGN = await ReviveklAYpc.increaseAllowance.call(addresswVrS4S, uintmQgr65, {from: accounts[0]});

		await expect(ReviveklAYpc.transferWithLock.call(addressItyFEz8, byteigWnJOQ, uintp8Hu3HI, uintSvWQLdI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFSSkvZB = await Revive.new({from: accounts[3]});
		const uintjKgb9N = BigInt("545")
		const byteT9pX5IR = "0x1f0311110d13070f0e0d1f040a0d1b1f1f1e1a130d151a15091a110f1f0f1a10"
		const addressUOd6UDB = accounts[4]
		const addressjT07Tx = accounts[0]
		const uinttnXlMO = BigInt("1106")
		const bytevouQcEO = "0x10040d080c09101c09191702130b0607090c171711110c1115061c0c05100e13"
		const uint256KDfFC1e = await ReviveFSSkvZB.tokensLockedAtTime.call(addressUOd6UDB, byteT9pX5IR, uintjKgb9N, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KG55N3 = await ReviveFSSkvZB.unlock.call(addressjT07Tx, {from: accounts[3]});
		const booldXtihMy = await ReviveFSSkvZB.increaseLockAmount.call(bytevouQcEO, uinttnXlMO, {from: accounts[4]});

		assert.equal(uint256KDfFC1e, BigInt("0"))
		assert.equal(uint256KG55N3, BigInt("0"))
		await expect(ReviveFSSkvZB.increaseLockAmount.call(bytevouQcEO, uinttnXlMO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveweT6PeB = await Revive.new({from: accounts[0]});
		const addresscEJEARt = accounts[1]
		const uintbQ6Qgy = BigInt("435")
		const byte0XU08P = "0x110a1a0b0c1b0c08070407030b08110d1b010f13042012200f0b19171608040c"
		const addressdRDkXG7 = accounts[0]
		const uintkL6U9Nm = BigInt("888")
		const addressEToc0ox = "0x0000000000000000000000000000000000000001"
		const addressNvxQDd = accounts[3]
		const uintxZXyaE = BigInt("1104")
		const bytejckwV1F = "0x06191801121e121a1b0911030f051b15041b06091a1a051d03151b1203081f13"
		const addresssD8WJw1 = accounts[3]
		const uintj2VpsVO = BigInt("282")
		const addresskRQGgsD = accounts[0]
		const uint256Avcp6k = await ReviveweT6PeB.balanceOf.call(addresscEJEARt, {from: accounts[0]});
		const uint25655f7mJ = await ReviveweT6PeB.tokensLockedAtTime.call(addressdRDkXG7, byte0XU08P, uintbQ6Qgy, {from: accounts[5]});
		const boolEOPYMuC = await ReviveweT6PeB.increaseAllowance.call(addressEToc0ox, uintkL6U9Nm, {from: accounts[3]});
		const uint256oAfdPC = await ReviveweT6PeB.getUnlockableTokens.call(addressNvxQDd, {from: accounts[4]});
		const bool67ydZ7 = await ReviveweT6PeB.extendLock.call(bytejckwV1F, uintxZXyaE, {from: accounts[5]});
		const addressZUPzy3 = await ReviveweT6PeB.transferOwnership.call(addresssD8WJw1, {from: accounts[1]});
		const boolE4lwckJ = await ReviveweT6PeB.transfer.call(addresskRQGgsD, uintj2VpsVO, {from: accounts[2]});
		const boolWJ5lXM6 = await ReviveweT6PeB.isOwner.call({from: accounts[0]});

		assert.equal(boolEOPYMuC, true)
		assert.equal(uint25655f7mJ, BigInt("0"))
		assert.equal(uint256Avcp6k, BigInt("0"))
		assert.equal(uint256oAfdPC, BigInt("0"))
		await expect(ReviveweT6PeB.extendLock.call(bytejckwV1F, uintxZXyaE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveweT6PeB = await Revive.new({from: accounts[0]});
		const uintqqEDx8 = BigInt("213")
		const uint2LgWH5 = BigInt("1147")
		const bytekZxe4QM = "0x0f05150b141501181a0614121f1f1d030016000a111d0a0e070a0f1418051417"
		const addressqRnTpXt = accounts[1]
		const uintfgobLom = BigInt("435")
		const byteNalWo0W = "0x110a1a0b0c1b0c08070407030b08110d1b010f13042012200f0b19171608040c"
		const addressdGIoVWb = accounts[0]
		const uintNqwXrvk = BigInt("888")
		const addressQAoQYQ = "0x0000000000000000000000000000000000000001"
		const addressG4kEFYy = accounts[3]
		const uint8VRd24 = BigInt("1104")
		const byteWSmInwH = "0x06191801121e121a1b0911030f051b15041b06091a1a051d03151b1203081f13"
		const addresshZUB8ym = accounts[3]
		const uintGafgGcf = BigInt("282")
		const addressaAjsEX = accounts[0]
		const boolA8AsdPA = await ReviveweT6PeB.lock.call(bytekZxe4QM, uint2LgWH5, uintqqEDx8, {from: accounts[1]});
		const uint256Avcp6k = await ReviveweT6PeB.balanceOf.call(addressqRnTpXt, {from: accounts[0]});
		const uint25655f7mJ = await ReviveweT6PeB.tokensLockedAtTime.call(addressdGIoVWb, byteNalWo0W, uintfgobLom, {from: accounts[5]});
		const boolEOPYMuC = await ReviveweT6PeB.increaseAllowance.call(addressQAoQYQ, uintNqwXrvk, {from: accounts[3]});
		const uint256oAfdPC = await ReviveweT6PeB.getUnlockableTokens.call(addressG4kEFYy, {from: accounts[4]});
		const bool67ydZ7 = await ReviveweT6PeB.extendLock.call(byteWSmInwH, uint8VRd24, {from: accounts[5]});
		const addressZUPzy3 = await ReviveweT6PeB.transferOwnership.call(addresshZUB8ym, {from: accounts[1]});
		const boolE4lwckJ = await ReviveweT6PeB.transfer.call(addressaAjsEX, uintGafgGcf, {from: accounts[2]});
		const boolWJ5lXM6 = await ReviveweT6PeB.isOwner.call({from: accounts[0]});

		await expect(ReviveweT6PeB.lock.call(bytekZxe4QM, uint2LgWH5, uintqqEDx8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveklAYpc = await Revive.new({from: accounts[3]});
		const addressis9z7Ws = accounts[2]
		const uintyXOEZvT = BigInt("544")
		const uintCsfzwXz = BigInt("421")
		const byteVPyVNLD = "0x0a03190618021608181c0b170d150d01090c050308120514130a011b09051404"
		const addressCdpl3y = accounts[1]
		const uintydTbLK = BigInt("79")
		const addressdHiJnZ9 = accounts[3]
		const uint256s2YQxi8 = await ReviveklAYpc.totalBalanceOf.call(addressis9z7Ws, {from: accounts[4]});
		const boolP1S6r65 = await ReviveklAYpc.transferWithLock.call(addressCdpl3y, byteVPyVNLD, uintCsfzwXz, uintyXOEZvT, {from: accounts[1]});
		await ReviveklAYpc.renounceOwnership.call({from: accounts[0]});
		const boolvicvWGN = await ReviveklAYpc.increaseAllowance.call(addressdHiJnZ9, uintydTbLK, {from: accounts[0]});

		assert.equal(uint256s2YQxi8, BigInt("0"))
		await expect(ReviveklAYpc.transferWithLock.call(addressCdpl3y, byteVPyVNLD, uintCsfzwXz, uintyXOEZvT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM19tDPc = await Revive.new({from: accounts[1]});
		const uintk8SiG1p = BigInt("171")
		const addressLO8wZhe = accounts[4]
		const addresswUxxEP9 = accounts[1]
		const uintx5do2w0 = BigInt("790")
		const addressqK9TLeT = "0x0000000000000000000000000000000000000001"
		const boolVC4XRth = await ReviveM19tDPc.transferFrom.call(addresswUxxEP9, addressLO8wZhe, uintk8SiG1p, {from: "0x0000000000000000000000000000000000000001"});
		const boolwVOfHq9 = await ReviveM19tDPc.decreaseAllowance.call(addressqK9TLeT, uintx5do2w0, {from: accounts[0]});

		await expect(ReviveM19tDPc.transferFrom.call(addresswUxxEP9, addressLO8wZhe, uintk8SiG1p, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveajXhDCw = await Revive.new({from: accounts[5]});
		const uintr4K4dN6 = BigInt("146")
		const byten7CmK3 = "0x0714041f1606161a0c0302131807070213151c030f0c03160e02040a10010f1a"
		const addressyV3bMni = accounts[2]
		const addressbriu969 = accounts[4]
		const addressRYBRxiX = accounts[0]
		const byteyM5cqig = "0x0a1e0c0d1f00100810070c0d050708020e0712031313161c1f040f0c111a0608"
		const addressCHSQKUS = accounts[3]
		const uint256WURXw8n = await ReviveajXhDCw.tokensLockedAtTime.call(addressyV3bMni, byten7CmK3, uintr4K4dN6, {from: accounts[3]});
		const uint256SsudHMh = await ReviveajXhDCw.allowance.call(addressRYBRxiX, addressbriu969, {from: accounts[5]});
		const uint256ou70pzU = await ReviveajXhDCw.totalSupply.call({from: accounts[2]});
		const uint256nkLy1Wn = await ReviveajXhDCw.tokensUnlockable.call(addressCHSQKUS, byteyM5cqig, {from: accounts[3]});

		assert.equal(uint256SsudHMh, BigInt("0"))
		assert.equal(uint256WURXw8n, BigInt("0"))
		assert.equal(uint256nkLy1Wn, BigInt("0"))
		assert.equal(uint256ou70pzU, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const ReviveR8wFptC = await Revive.new({from: accounts[3]});
		const uintmclZvXU = BigInt("1806")
		const addressUK8gX5U = accounts[1]
		const uintUWfhaJu = BigInt("1987")
		const addressRzVvj8B = accounts[1]
		const boolwOnT45i = await ReviveR8wFptC.approve.call(addressUK8gX5U, uintmclZvXU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oRmEoDl = await ReviveR8wFptC.recoverERC20.call(uintUWfhaJu, {from: accounts[3]});
		const uint2561xPyUP = await ReviveR8wFptC.balanceOf.call(addressRzVvj8B, {from: "0x0000000000000000000000000000000000000001"});
		await ReviveR8wFptC.renounceOwnership.call({from: accounts[4]});

		assert.equal(boolwOnT45i, true)
		await expect(ReviveR8wFptC.recoverERC20.call(uintUWfhaJu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezYuNANR = await Revive.new({from: accounts[3]});
		const uintzVA5doi = BigInt("1965")
		const addressARyuhS1 = accounts[0]
		const uintEoAtihI = BigInt("658")
		const addressLqRRPa = "0x0000000000000000000000000000000000000001"
		const uintge9DKkt = BigInt("1267")
		const uintcXl2V6o = BigInt("889")
		const byteanZixeJ = "0x191b120c0418050809041a1b080912191e10030704160b0f181b071702110602"
		const uint256SyavinN = await RevivezYuNANR.recoverERC20.call(uintzVA5doi, {from: accounts[0]});
		const uint256x57tnXB = await RevivezYuNANR.totalBalanceOf.call(addressARyuhS1, {from: accounts[2]});
		const boolbwezqsy = await RevivezYuNANR.increaseAllowance.call(addressLqRRPa, uintEoAtihI, {from: accounts[4]});
		const boolP2FSiSs = await RevivezYuNANR.lock.call(byteanZixeJ, uintcXl2V6o, uintge9DKkt, {from: accounts[5]});

		await expect(RevivezYuNANR.recoverERC20.call(uintzVA5doi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveoymfJwh = await Revive.new({from: accounts[0]});
		const uintFroWPl = BigInt("1948")
		const byteFByZ6RN = "0x1c0a090418030f031f0e08040b050f0d03191c031b0c010902030d0c0e190009"
		await ReviveoymfJwh.renounceOwnership.call({from: accounts[0]});
		const boolkWdrAEb = await ReviveoymfJwh.extendLock.call(byteFByZ6RN, uintFroWPl, {from: accounts[0]});

		await expect(ReviveoymfJwh.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFSSkvZB = await Revive.new({from: accounts[3]});
		const uintrt70icb = BigInt("291")
		const addresscrPFBs1 = accounts[1]
		const uinthcyJLUQ = BigInt("1106")
		const byten6WenYN = "0x10040d080c0c101c09191702130b0607090c171711110c1115061c0c05100e13"
		const uint2566Vinqs = await ReviveFSSkvZB.recoverERC20.call(uintrt70icb, {from: accounts[3]});
		const uint256KG55N3 = await ReviveFSSkvZB.unlock.call(addresscrPFBs1, {from: accounts[3]});
		const booldXtihMy = await ReviveFSSkvZB.increaseLockAmount.call(byten6WenYN, uinthcyJLUQ, {from: accounts[4]});

		await expect(ReviveFSSkvZB.recoverERC20.call(uintrt70icb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezYuNANR = await Revive.new({from: accounts[3]});
		const addressaxOxwuO = accounts[1]
		const uintKEuOCsy = BigInt("985")
		const addressgWe1qbK = accounts[3]
		const uintzvl6OLg = BigInt("1245")
		const uintb5oMBH7 = BigInt("889")
		const bytedcP9JOK = "0x191b120c0418050809041a1b080912191e10030704160b0f181b071702110602"
		const uint256x57tnXB = await RevivezYuNANR.totalBalanceOf.call(addressaxOxwuO, {from: accounts[2]});
		const uint256JJodzX5 = await RevivezYuNANR.recoverERC20.call(uintKEuOCsy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jsNskmC = await RevivezYuNANR.unlock.call(addressgWe1qbK, {from: accounts[4]});
		const boolP2FSiSs = await RevivezYuNANR.lock.call(bytedcP9JOK, uintb5oMBH7, uintzvl6OLg, {from: accounts[5]});

		assert.equal(uint256x57tnXB, BigInt("0"))
		await expect(RevivezYuNANR.recoverERC20.call(uintKEuOCsy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLI1YPmC = await Revive.new({from: accounts[0]});
		const addressbUCCD67 = accounts[0]
		const addresswd9r0fg = accounts[3]
		const addressu7fbAEU = accounts[1]
		const uintvZUUb9w = BigInt("1278")
		const addressfB4QGqh = accounts[1]
		const bytewVBodg = "0x010619170f1d02030810021b1d1d18000e1f02001a1b0401080f041f1116150f"
		const addressDDwvP1I = accounts[5]
		const addressdxNAEkW = accounts[4]
		const byteLuFw6St = "0x1e0f0d0e131516081709080216051d00121f05181e101a1303010f1507051800"
		const addressee5D3kS = accounts[5]
		const uint256DZXWclt = await ReviveLI1YPmC.unlock.call(addressbUCCD67, {from: accounts[2]});
		const addressRIs4DS = await ReviveLI1YPmC.owner.call({from: accounts[3]});
		const uint256hhsQvLn = await ReviveLI1YPmC.balanceOf.call(addresswd9r0fg, {from: accounts[1]});
		const addressdrFQYN6 = await ReviveLI1YPmC.transferOwnership.call(addressu7fbAEU, {from: accounts[0]});
		const boolNIIgpW1 = await ReviveLI1YPmC.increaseAllowance.call(addressfB4QGqh, uintvZUUb9w, {from: accounts[3]});
		const uint256mwmme0m = await ReviveLI1YPmC.tokensUnlockable.call(addressDDwvP1I, bytewVBodg, {from: accounts[3]});
		const uint256Ku5tHeI = await ReviveLI1YPmC.totalBalanceOf.call(addressdxNAEkW, {from: accounts[1]});
		const addressnoYcQVP = await ReviveLI1YPmC.owner.call({from: accounts[1]});
		const uint256KmrwCo = await ReviveLI1YPmC.tokensUnlockable.call(addressee5D3kS, byteLuFw6St, {from: accounts[5]});

		assert.equal(addressRIs4DS, 0xB56599eA41b7A8dF9dF6b2E26CFe00f50A5F4963)
		assert.equal(addressnoYcQVP, 0xB56599eA41b7A8dF9dF6b2E26CFe00f50A5F4963)
		assert.equal(boolNIIgpW1, true)
		assert.equal(uint256DZXWclt, BigInt("0"))
		assert.equal(uint256KmrwCo, BigInt("0"))
		assert.equal(uint256Ku5tHeI, BigInt("0"))
		assert.equal(uint256hhsQvLn, BigInt("0"))
		assert.equal(uint256mwmme0m, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveajXhDCw = await Revive.new({from: accounts[5]});
		const uintqtHKpzx = BigInt("1106")
		const addressK9kXcwz = accounts[2]
		const uintlsfkpi9 = BigInt("76")
		const uintiIP5nWp = BigInt("2014")
		const byteHe62h9l = "0x0f1d0c05150c08060e1c03041f0e1e1a010520131809031c050e03141d1d1b0d"
		const uintB8A5apB = BigInt("1855")
		const addressrPhMtpV = accounts[4]
		const uintvO9ICJZ = BigInt("4")
		const addressylHxqdi = accounts[3]
		const addressyZMdZSd = accounts[2]
		const addressSyKyAuF = await ReviveajXhDCw.recoverERC20.call(addressK9kXcwz, uintqtHKpzx, {from: accounts[5]});
		const boolaROSFwx = await ReviveajXhDCw.lock.call(byteHe62h9l, uintiIP5nWp, uintlsfkpi9, {from: accounts[1]});
		const boolXSXkdst = await ReviveajXhDCw.increaseAllowance.call(addressrPhMtpV, uintB8A5apB, {from: accounts[5]});
		const addressOHdguD9 = await ReviveajXhDCw.recoverERC20.call(addressylHxqdi, uintvO9ICJZ, {from: accounts[5]});
		const uint256Dns3kOd = await ReviveajXhDCw.getUnlockableTokens.call(addressyZMdZSd, {from: accounts[0]});

		await expect(ReviveajXhDCw.recoverERC20.call(addressK9kXcwz, uintqtHKpzx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGfX5PY8 = await Revive.new({from: accounts[3]});
		const uintKuUpgL4 = BigInt("907")
		const uintVObt8Vs = BigInt("1823")
		const addressi6C5Xnp = accounts[1]
		const uintRDQ0KvZ = BigInt("1255")
		const bytekhUE1WH = "0x1c0d171910131f1d171912190b080104150703001f0a0f171904021a1a0d0716"
		const addressATu7EoV = accounts[0]
		const uint256SpSuDih = await ReviveGfX5PY8.recoverERC20.call(uintKuUpgL4, {from: accounts[3]});
		const boolj8LBkA = await ReviveGfX5PY8.increaseAllowance.call(addressi6C5Xnp, uintVObt8Vs, {from: accounts[2]});
		const boolVbhdHu = await ReviveGfX5PY8.extendLock.call(bytekhUE1WH, uintRDQ0KvZ, {from: accounts[1]});
		const addressOCaxoX = await ReviveGfX5PY8.transferOwnership.call(addressATu7EoV, {from: accounts[0]});

		await expect(ReviveGfX5PY8.recoverERC20.call(uintKuUpgL4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFSSkvZB = await Revive.new({from: accounts[3]});
		const uintcxQTH3P = BigInt("572")
		const uintXZVR24j = BigInt("459")
		const byteyg6uzeM = "0x1f0410041c0c151b01200801131a0e171f08160211111c12080e00140b011914"
		const uintaGig9Yi = BigInt("859")
		const uintpJXxl5 = BigInt("1106")
		const bytedxiMHiy = "0x15150d1e0d0b0d190908190a031112071d0907041512020619190b080a08141c"
		const boolzpHfszg = await ReviveFSSkvZB.lock.call(byteyg6uzeM, uintXZVR24j, uintcxQTH3P, {from: accounts[3]});
		const uint256msm4N8 = await ReviveFSSkvZB.recoverERC20.call(uintaGig9Yi, {from: accounts[3]});
		const booldXtihMy = await ReviveFSSkvZB.increaseLockAmount.call(bytedxiMHiy, uintpJXxl5, {from: accounts[4]});

		assert.equal(boolzpHfszg, true)
		await expect(ReviveFSSkvZB.recoverERC20.call(uintaGig9Yi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveQperLfZ = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const addressptm4eZ6 = "0x0000000000000000000000000000000000000001"
		const uintciJTb8h = BigInt("59")
		const uintdoQ0mvk = BigInt("55")
		const addressJgfdrVh = accounts[3]
		const addressvqqmucm = accounts[2]
		const uint256H7LHusK = await ReviveQperLfZ.balanceOf.call(addressptm4eZ6, {from: accounts[3]});
		const uint256nbI1qHB = await ReviveQperLfZ.recoverERC20.call(uintciJTb8h, {from: accounts[0]});
		const boolmf12qiw = await ReviveQperLfZ.decreaseAllowance.call(addressJgfdrVh, uintdoQ0mvk, {from: accounts[1]});
		const uint256BDx56Et = await ReviveQperLfZ.getUnlockableTokens.call(addressvqqmucm, {from: accounts[1]});
	});

	it('test for Revive', async () => {
		const ReviveajXhDCw = await Revive.new({from: accounts[5]});
		const uinte9FwWjt = BigInt("146")
		const bytewxKQtvb = "0x0714041f1606161a1103ffffffff131807070213151c030f0c03160e02040a10010f1a"
		const addressXXWlH9h = accounts[2]
		const uint256WURXw8n = await ReviveajXhDCw.tokensLockedAtTime.call(addressXXWlH9h, bytewxKQtvb, uinte9FwWjt, {from: accounts[3]});

		await expect(ReviveajXhDCw.tokensLockedAtTime.call(addressXXWlH9h, bytewxKQtvb, uinte9FwWjt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFSSkvZB = await Revive.new({from: accounts[3]});
		const uintS87PF64 = BigInt("1106")
		const uintHgWBn2p = BigInt("245")
		const addresskI6SAzT = accounts[4]
		const uinto6348bK = BigInt("1106")
		const bytecbAALYm = "0x15150d1e0d0b0d190908190a031112071d0907031512020819190b080a08141c"
		const uint256zt2KSSw = await ReviveFSSkvZB.recoverERC20.call(uintS87PF64, {from: "0x0000000000000000000000000000000000000001"});
		const boolDYIkCw3 = await ReviveFSSkvZB.approve.call(addresskI6SAzT, uintHgWBn2p, {from: accounts[2]});
		const booldXtihMy = await ReviveFSSkvZB.increaseLockAmount.call(bytecbAALYm, uinto6348bK, {from: accounts[4]});

		await expect(ReviveFSSkvZB.recoverERC20.call(uintS87PF64, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFSSkvZB = await Revive.new({from: accounts[3]});
		const addressj4xtPw3 = accounts[0]
		const uintOLdXQHZ = BigInt("233")
		const uintGSf3qe = BigInt("819")
		const addressJYt94gV = accounts[4]
		const uint256KG55N3 = await ReviveFSSkvZB.unlock.call(addressj4xtPw3, {from: accounts[3]});
		const uint256sgLUmb9 = await ReviveFSSkvZB.recoverERC20.call(uintOLdXQHZ, {from: accounts[2]});
		const boolYeiKmyf = await ReviveFSSkvZB.increaseAllowance.call(addressJYt94gV, uintGSf3qe, {from: accounts[0]});

		assert.equal(uint256KG55N3, BigInt("0"))
		await expect(ReviveFSSkvZB.recoverERC20.call(uintOLdXQHZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveajXhDCw = await Revive.new({from: accounts[5]});
		const uintyjRYQvV = BigInt("531")
		const addressBeK6jr = accounts[1]
		const uint256dtRL2s = await ReviveajXhDCw.recoverERC20.call(uintyjRYQvV, {from: accounts[0]});
		const uint256Dns3kOd = await ReviveajXhDCw.getUnlockableTokens.call(addressBeK6jr, {from: accounts[0]});

		await expect(ReviveajXhDCw.recoverERC20.call(uintyjRYQvV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezYuNANR = await Revive.new({from: accounts[3]});
		const uintNwXlDrp = BigInt("1267")
		const uintPGZPGZN = BigInt("889")
		const byteMuK5Mle = "0x191b120c0418050809041a1b080912191e10ffffffff0704160b0f181b071702110602"
		const addressCULbaVI = "0x0000000000000000000000000000000000000001"
		const addresssv63NNq = accounts[1]
		const uint256iubglCq = await RevivezYuNANR.totalSupply.call({from: accounts[0]});
		const boolP2FSiSs = await RevivezYuNANR.lock.call(byteMuK5Mle, uintPGZPGZN, uintNwXlDrp, {from: accounts[5]});
		const uint256bD4Hflx = await RevivezYuNANR.allowance.call(addresssv63NNq, addressCULbaVI, {from: accounts[2]});

		assert.equal(uint256iubglCq, BigInt("3000000000000000000000000000"))
		await expect(RevivezYuNANR.lock.call(byteMuK5Mle, uintPGZPGZN, uintNwXlDrp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFSSkvZB = await Revive.new({from: accounts[3]});
		const addressl2akkgx = accounts[0]
		const uintsdHfcwo = BigInt("703")
		const uint256KG55N3 = await ReviveFSSkvZB.unlock.call(addressl2akkgx, {from: accounts[3]});
		const uint256jGAcWCZ = await ReviveFSSkvZB.recoverERC20.call(uintsdHfcwo, {from: accounts[5]});

		assert.equal(uint256KG55N3, BigInt("0"))
		await expect(ReviveFSSkvZB.recoverERC20.call(uintsdHfcwo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveoymfJwh = await Revive.new({from: accounts[0]});
		const uinthSc1QRE = BigInt("1959")
		const bytehcMUkKM = "0x1c0a090418030f031f0e08040b050f0d03191c031b0cfffffffe0902030d0c0e190009"
		const boolkq06FW = await ReviveoymfJwh.isOwner.call({from: accounts[4]});
		const boolkWdrAEb = await ReviveoymfJwh.extendLock.call(bytehcMUkKM, uinthSc1QRE, {from: accounts[0]});

		assert.equal(boolkq06FW, false)
		await expect(ReviveoymfJwh.extendLock.call(bytehcMUkKM, uinthSc1QRE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveoymfJwh = await Revive.new({from: accounts[0]});
		const uintTNmEPIq = BigInt("26")
		const addressWc6AOVA = accounts[1]
		const uintoQZsyLK = BigInt("1979")
		const byteUnkwYnr = "0x1c0a090418030f031f0e08040b050f0d03191c031b0c010902030d0c0e190009"
		const uint256E0TB9v8 = await ReviveoymfJwh.recoverERC20.call(uintTNmEPIq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JcTrcmj = await ReviveoymfJwh.unlock.call(addressWc6AOVA, {from: accounts[4]});
		const boolkWdrAEb = await ReviveoymfJwh.extendLock.call(byteUnkwYnr, uintoQZsyLK, {from: accounts[0]});

		await expect(ReviveoymfJwh.recoverERC20.call(uintTNmEPIq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveajXhDCw = await Revive.new({from: accounts[5]});
		const uintca6Zn1C = BigInt("527")
		const uinthJqV4JN = BigInt("1223")
		const uintBi9X2Tg = BigInt("355")
		const byternNusEc = "0x010a1c0c161d16120b17201c100a1a0a08101f0815020e0c1419180b1c0e051c"
		const address0W2ccQ = accounts[0]
		const addressvf5C7qH = accounts[2]
		const uint256HMLlX9K = await ReviveajXhDCw.recoverERC20.call(uintca6Zn1C, {from: accounts[3]});
		const boolGko5TT = await ReviveajXhDCw.lock.call(byternNusEc, uintBi9X2Tg, uinthJqV4JN, {from: accounts[2]});
		const uint256NIF9HuO = await ReviveajXhDCw.balanceOf.call(address0W2ccQ, {from: accounts[4]});
		const uint256Dns3kOd = await ReviveajXhDCw.getUnlockableTokens.call(addressvf5C7qH, {from: accounts[0]});

		await expect(ReviveajXhDCw.recoverERC20.call(uintca6Zn1C, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezYuNANR = await Revive.new({from: accounts[3]});
		const addresseiADQQb = accounts[2]
		const uintluSkss = BigInt("1009")
		const uint256x57tnXB = await RevivezYuNANR.totalBalanceOf.call(addresseiADQQb, {from: accounts[2]});
		const uint256NWReSLl = await RevivezYuNANR.recoverERC20.call(uintluSkss, {from: accounts[4]});

		assert.equal(uint256x57tnXB, BigInt("0"))
		await expect(RevivezYuNANR.recoverERC20.call(uintluSkss, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezYuNANR = await Revive.new({from: accounts[3]});
		const bytethwFsH4 = "0x1d150a1411180f1c1101131619191c041d020e13050d1d05040e17111b100815"
		const addresslZsw7HN = accounts[3]
		const addressE4DjhLT = accounts[4]
		const uintibRBBs = BigInt("1327")
		const uint256zJzdbO6 = await RevivezYuNANR.tokensLocked.call(addresslZsw7HN, bytethwFsH4, {from: accounts[2]});
		const uint256yqPitn = await RevivezYuNANR.balanceOf.call(addressE4DjhLT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ID5EZo0 = await RevivezYuNANR.recoverERC20.call(uintibRBBs, {from: accounts[3]});

		assert.equal(uint256yqPitn, BigInt("0"))
		assert.equal(uint256zJzdbO6, BigInt("0"))
		await expect(RevivezYuNANR.recoverERC20.call(uintibRBBs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveajXhDCw = await Revive.new({from: accounts[5]});
		const addresszQoBmNJ = "0x0000000000000000000000000000000000000001"
		const addressjvrsLe9 = accounts[2]
		const uintmTluoZd = BigInt("1937")
		const uint256XYuMeTb = await ReviveajXhDCw.unlock.call(addresszQoBmNJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Dns3kOd = await ReviveajXhDCw.getUnlockableTokens.call(addressjvrsLe9, {from: accounts[0]});
		const uint256Uj8KIY3 = await ReviveajXhDCw.recoverERC20.call(uintmTluoZd, {from: accounts[4]});

		assert.equal(uint256Dns3kOd, BigInt("0"))
		assert.equal(uint256XYuMeTb, BigInt("0"))
		await expect(ReviveajXhDCw.recoverERC20.call(uintmTluoZd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})