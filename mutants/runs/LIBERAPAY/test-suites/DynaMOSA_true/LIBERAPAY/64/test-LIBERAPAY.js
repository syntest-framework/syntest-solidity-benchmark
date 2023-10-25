const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYxU8yHK0 = await LIBERAPAY.new({from: accounts[4]});
		const uintMgn0cfZ = BigInt("1531")
		const addressKNQWwVz = accounts[1]
		const addressELfiXH = accounts[0]
		const boolEYThma7 = await LIBERAPAYxU8yHK0.approve.call(addressKNQWwVz, uintMgn0cfZ, {from: accounts[1]});
		const boolmt56Bqz = await LIBERAPAYxU8yHK0.freezeAccount.call(addressELfiXH, {from: accounts[1]});

		assert.equal(boolEYThma7, true)
		await expect(LIBERAPAYxU8yHK0.freezeAccount.call(addressELfiXH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGmsiHI = await LIBERAPAY.new({from: accounts[3]});
		const addressJqk7SSs = accounts[0]
		const addressPj2kEBx = accounts[3]
		const addressWL2Db3Z = accounts[1]
		const uint3otrF1 = BigInt("1471")
		const uintsFeqTbQ = BigInt("1495")
		const addresslggQJay = accounts[4]
		const uint256Qu15eU = await LIBERAPAYGmsiHI.balanceOf.call(addressJqk7SSs, {from: accounts[5]});
		await LIBERAPAYGmsiHI.pause.call({from: accounts[0]});
		const addressiUuAuDd = await LIBERAPAYGmsiHI.upgradeTo.call(addressPj2kEBx, {from: accounts[5]});
		const uint256PUMKNxi = await LIBERAPAYGmsiHI.balanceOf.call(addressWL2Db3Z, {from: accounts[4]});
		const booltqRCXxb = await LIBERAPAYGmsiHI.lock.call(addresslggQJay, uintsFeqTbQ, uint3otrF1, {from: accounts[3]});

		assert.equal(uint256Qu15eU, BigInt("0"))
		await expect(LIBERAPAYGmsiHI.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYLvHPcZQ = await LIBERAPAY.new({from: accounts[1]});
		const uintBLwpTXc = BigInt("1113")
		const addressaSnmRAJ = accounts[0]
		const uintJrL82ad = BigInt("875")
		const addresslh5U2J = accounts[3]
		const addressIf4Aduh = accounts[5]
		await LIBERAPAYLvHPcZQ.f.call({from: accounts[4]});
		const boolhaJSGgu = await LIBERAPAYLvHPcZQ.transfer.call(addressaSnmRAJ, uintBLwpTXc, {from: accounts[1]});
		const boolQUnA59q = await LIBERAPAYLvHPcZQ.transferFrom.call(addressIf4Aduh, addresslh5U2J, uintJrL82ad, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYLvHPcZQ.whenNotPaused.call({from: accounts[2]});
		await LIBERAPAYLvHPcZQ.unpause.call({from: accounts[2]});

		await expect(LIBERAPAYLvHPcZQ.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYL57di8 = await LIBERAPAY.new({from: accounts[1]});
		const uintR6MXFog = BigInt("521")
		const addressjwIj4za = accounts[5]
		const addressmyjz0QE = accounts[0]
		const uintzb4D0Cc = BigInt("234")
		const uintiegSVuv = BigInt("108")
		const addressFzdBjEK = accounts[4]
		const uint256Us45VfY = await LIBERAPAYL57di8.getNowTime.call({from: accounts[2]});
		await LIBERAPAYL57di8.unpause.call({from: accounts[4]});
		await LIBERAPAYL57di8.onlyOwner.call({from: accounts[2]});
		const boolziVNN5i = await LIBERAPAYL57di8.unlock.call(addressjwIj4za, uintR6MXFog, {from: accounts[4]});
		const boolumOqRhc = await LIBERAPAYL57di8.unfreezeAccount.call(addressmyjz0QE, {from: accounts[2]});
		const boolQnVo23X = await LIBERAPAYL57di8.lock.call(addressFzdBjEK, uintiegSVuv, uintzb4D0Cc, {from: accounts[2]});

		assert.equal(uint256Us45VfY, BigInt("1630231083"))
		await expect(LIBERAPAYL57di8.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYazjcXOa = await LIBERAPAY.new({from: accounts[4]});
		const uintDdUuz8T = BigInt("454")
		const addressJ97LJA = accounts[4]
		const uinttS6EoEx = BigInt("1120")
		const addresst9o0V2D = accounts[2]
		const addressFFwcijJ = accounts[5]
		const addresslJ5wcWd = accounts[4]
		const boolNBStMXa = await LIBERAPAYazjcXOa.transfer.call(addressJ97LJA, uintDdUuz8T, {from: accounts[0]});
		const boolItqQz2X = await LIBERAPAYazjcXOa.mint.call(addresst9o0V2D, uinttS6EoEx, {from: accounts[2]});
		const uint256JvoQT84 = await LIBERAPAYazjcXOa.allowance.call(addresslJ5wcWd, addressFFwcijJ, {from: accounts[0]});

		await expect(LIBERAPAYazjcXOa.transfer.call(addressJ97LJA, uintDdUuz8T, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYn1YPdz = await LIBERAPAY.new({from: accounts[1]});
		const uintQadX1cn = BigInt("688")
		const addressp1TkbXl = accounts[1]
		const addressJEYtGF3 = accounts[4]
		const uint256wFofRVt = await LIBERAPAYn1YPdz.getNowTime.call({from: accounts[0]});
		const boolFpGFHH = await LIBERAPAYn1YPdz.transfer.call(addressp1TkbXl, uintQadX1cn, {from: accounts[1]});
		const uint256rjiZJ1D = await LIBERAPAYn1YPdz.getNowTime.call({from: accounts[1]});
		const addresseF0wobO = await LIBERAPAYn1YPdz.upgradeTo.call(addressJEYtGF3, {from: accounts[5]});

		assert.equal(boolFpGFHH, true)
		assert.equal(uint256rjiZJ1D, BigInt("1630231092"))
		assert.equal(uint256wFofRVt, BigInt("1630231092"))
		await expect(LIBERAPAYn1YPdz.upgradeTo.call(addressJEYtGF3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYxU8yHK0 = await LIBERAPAY.new({from: accounts[4]});
		const addressxJiiDGK = accounts[0]
		const addressdvKelX6 = accounts[4]
		const uint03vdQo = BigInt("1531")
		const addressV3O62o = accounts[1]
		const uint256IplAkvT = await LIBERAPAYxU8yHK0.allowance.call(addressdvKelX6, addressxJiiDGK, {from: accounts[1]});
		const boolEYThma7 = await LIBERAPAYxU8yHK0.approve.call(addressV3O62o, uint03vdQo, {from: accounts[1]});

		assert.equal(boolEYThma7, true)
		assert.equal(uint256IplAkvT, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYn1YPdz = await LIBERAPAY.new({from: accounts[1]});
		const uintHU0XsAS = BigInt("726")
		const addresssscoirT = accounts[1]
		const uintcl3uIrx = BigInt("863")
		const addressU1kAfSN = accounts[3]
		const addressvEW0DnS = accounts[4]
		const uint256wFofRVt = await LIBERAPAYn1YPdz.getNowTime.call({from: accounts[0]});
		const boolFpGFHH = await LIBERAPAYn1YPdz.transfer.call(addresssscoirT, uintHU0XsAS, {from: accounts[1]});
		const boolgZcPTG = await LIBERAPAYn1YPdz.decreaseAllowance.call(addressU1kAfSN, uintcl3uIrx, {from: accounts[2]});
		const uint256rjiZJ1D = await LIBERAPAYn1YPdz.getNowTime.call({from: accounts[1]});
		const addresseF0wobO = await LIBERAPAYn1YPdz.upgradeTo.call(addressvEW0DnS, {from: accounts[5]});

		assert.equal(boolFpGFHH, true)
		assert.equal(uint256wFofRVt, BigInt("1630231087"))
		await expect(LIBERAPAYn1YPdz.decreaseAllowance.call(addressU1kAfSN, uintcl3uIrx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYD4PXkki = await LIBERAPAY.new({from: accounts[0]});
		const addressTXWVIGq = accounts[3]
		const addresswPsPBa0 = accounts[5]
		const addressWiF7IWR = await LIBERAPAYD4PXkki.notFrozen.call(addressTXWVIGq, {from: "0x0000000000000000000000000000000000000001"});
		const addressj01YGtj = await LIBERAPAYD4PXkki.upgradeTo.call(addresswPsPBa0, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYD4PXkki.unpause.call({from: accounts[0]});

		await expect(LIBERAPAYD4PXkki.notFrozen.call(addressTXWVIGq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYn1YPdz = await LIBERAPAY.new({from: accounts[1]});
		const uintrdKwBD1 = BigInt("688")
		const addressyBNK2C3 = accounts[1]
		const addressgHJEqnv = accounts[1]
		const addressxT6MZDu = accounts[5]
		const uint256wFofRVt = await LIBERAPAYn1YPdz.getNowTime.call({from: accounts[0]});
		const boolFpGFHH = await LIBERAPAYn1YPdz.transfer.call(addressyBNK2C3, uintrdKwBD1, {from: accounts[1]});
		const uint256rjiZJ1D = await LIBERAPAYn1YPdz.getNowTime.call({from: accounts[1]});
		const addresskj5FEgu = await LIBERAPAYn1YPdz.transferOwnership.call(addressgHJEqnv, {from: accounts[1]});
		const addresseF0wobO = await LIBERAPAYn1YPdz.upgradeTo.call(addressxT6MZDu, {from: accounts[5]});

		assert.equal(boolFpGFHH, true)
		assert.equal(uint256rjiZJ1D, BigInt("1630231101"))
		assert.equal(uint256wFofRVt, BigInt("1630231101"))
		await expect(LIBERAPAYn1YPdz.upgradeTo.call(addressxT6MZDu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGmsiHI = await LIBERAPAY.new({from: accounts[3]});
		const addressOTmqin3 = accounts[0]
		const addressZ6Uo25V = accounts[3]
		const addressVpBZiU = accounts[1]
		const uintMwu2fIw = BigInt("1471")
		const uintbV3qKR = BigInt("1495")
		const addressn8ekoUn = accounts[4]
		const uint256Qu15eU = await LIBERAPAYGmsiHI.balanceOf.call(addressOTmqin3, {from: accounts[5]});
		const uint256CyqJBM = await LIBERAPAYGmsiHI.totalSupply.call({from: accounts[3]});
		const addressiUuAuDd = await LIBERAPAYGmsiHI.upgradeTo.call(addressZ6Uo25V, {from: accounts[5]});
		const uint256PUMKNxi = await LIBERAPAYGmsiHI.balanceOf.call(addressVpBZiU, {from: accounts[4]});
		const booltqRCXxb = await LIBERAPAYGmsiHI.lock.call(addressn8ekoUn, uintbV3qKR, uintMwu2fIw, {from: accounts[3]});

		assert.equal(uint256CyqJBM, BigInt("3000000000000000000000000000"))
		assert.equal(uint256Qu15eU, BigInt("0"))
		await expect(LIBERAPAYGmsiHI.upgradeTo.call(addressZ6Uo25V, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYxcwJkjt = await LIBERAPAY.new({from: accounts[3]});
		const addressLTJ7El3 = accounts[5]
		const uinthlRhRv = BigInt("922")
		const addressGQa5ayB = accounts[3]
		const addressPbEMb7V = accounts[3]
		const addressiBS04Ig = accounts[3]
		const uintrelhlU9 = BigInt("1751")
		const addresstEbqTx = accounts[4]
		const boolIh4cnib = await LIBERAPAYxcwJkjt.unfreezeAccount.call(addressLTJ7El3, {from: accounts[3]});
		const boolpbwmeIc = await LIBERAPAYxcwJkjt.distribute.call(addressGQa5ayB, uinthlRhRv, {from: accounts[2]});
		const uint256qTlnNau = await LIBERAPAYxcwJkjt.allowance.call(addressiBS04Ig, addressPbEMb7V, {from: accounts[2]});
		const boolR4sp8zA = await LIBERAPAYxcwJkjt.unlock.call(addresstEbqTx, uintrelhlU9, {from: accounts[5]});
		await LIBERAPAYxcwJkjt.whenPaused.call({from: accounts[2]});

		await expect(LIBERAPAYxcwJkjt.unfreezeAccount.call(addressLTJ7El3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGmsiHI = await LIBERAPAY.new({from: accounts[3]});
		const addressTkClmK = accounts[0]
		const uintwKkLeNc = BigInt("311")
		const addressEIp3v5H = accounts[1]
		const addressZPAjP5w = accounts[4]
		const addressvLa8kMh = accounts[1]
		const uintSgmgwtv = BigInt("1471")
		const uintjGLrHnY = BigInt("1495")
		const addressbzEkGM0 = accounts[4]
		const uint256Qu15eU = await LIBERAPAYGmsiHI.balanceOf.call(addressTkClmK, {from: accounts[5]});
		const boolUOTCKU = await LIBERAPAYGmsiHI.increaseAllowance.call(addressEIp3v5H, uintwKkLeNc, {from: accounts[1]});
		await LIBERAPAYGmsiHI.pause.call({from: accounts[0]});
		const addressiUuAuDd = await LIBERAPAYGmsiHI.upgradeTo.call(addressZPAjP5w, {from: accounts[5]});
		const uint256PUMKNxi = await LIBERAPAYGmsiHI.balanceOf.call(addressvLa8kMh, {from: accounts[4]});
		const uint256jLJIFCh = await LIBERAPAYGmsiHI.totalSupply.call({from: accounts[4]});
		const booltqRCXxb = await LIBERAPAYGmsiHI.lock.call(addressbzEkGM0, uintjGLrHnY, uintSgmgwtv, {from: accounts[3]});

		assert.equal(boolUOTCKU, true)
		assert.equal(uint256Qu15eU, BigInt("0"))
		await expect(LIBERAPAYGmsiHI.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGmsiHI = await LIBERAPAY.new({from: accounts[3]});
		const addressU9Y5sAo = accounts[0]
		const uintPoBU7gt = BigInt("1605")
		const addressk0PrTr3 = accounts[0]
		const addressR0LhTEJ = accounts[0]
		const uintQgq1RDC = BigInt("664")
		const addressLqEhgo = accounts[5]
		const uintTo7Ec8s = BigInt("1202")
		const addressqw4fg7 = accounts[1]
		const uintouIsob = BigInt("531")
		const uintxFusP8j = BigInt("1990")
		const addressazX7d6M = accounts[5]
		const uintalVotFU = BigInt("338")
		const addressthaduo5 = accounts[2]
		const addressn2gQlcn = accounts[3]
		const uintWqg3C5h = BigInt("1471")
		const uintK1SIsQD = BigInt("1495")
		const addresszGxz26 = accounts[4]
		const uintIIY9j0W = BigInt("1878")
		const uintztj7RxJ = BigInt("1581")
		const addressjOccIwO = accounts[3]
		const uint256Qu15eU = await LIBERAPAYGmsiHI.balanceOf.call(addressU9Y5sAo, {from: accounts[5]});
		const boolkIjC16Y = await LIBERAPAYGmsiHI.transferFrom.call(addressR0LhTEJ, addressk0PrTr3, uintPoBU7gt, {from: "0x0000000000000000000000000000000000000001"});
		const boolWzQYfqX = await LIBERAPAYGmsiHI.unlock.call(addressLqEhgo, uintQgq1RDC, {from: accounts[0]});
		const boolxb5i9Pj = await LIBERAPAYGmsiHI.approve.call(addressqw4fg7, uintTo7Ec8s, {from: accounts[1]});
		await LIBERAPAYGmsiHI.pause.call({from: accounts[0]});
		const booli1tDU7X = await LIBERAPAYGmsiHI.lock.call(addressazX7d6M, uintxFusP8j, uintouIsob, {from: accounts[3]});
		const boolr5EeWX = await LIBERAPAYGmsiHI.distribute.call(addressthaduo5, uintalVotFU, {from: accounts[4]});
		const addressiUuAuDd = await LIBERAPAYGmsiHI.upgradeTo.call(addressn2gQlcn, {from: accounts[5]});
		const booltqRCXxb = await LIBERAPAYGmsiHI.lock.call(addresszGxz26, uintK1SIsQD, uintWqg3C5h, {from: accounts[3]});
		const boolJqKgP2m = await LIBERAPAYGmsiHI.lock.call(addressjOccIwO, uintztj7RxJ, uintIIY9j0W, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Qu15eU, BigInt("0"))
		await expect(LIBERAPAYGmsiHI.transferFrom.call(addressR0LhTEJ, addressk0PrTr3, uintPoBU7gt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYA8Xb2FV = await LIBERAPAY.new({from: accounts[1]});
		const uintIY5pLUE = BigInt("700")
		const addressPMexZIS = accounts[2]
		const addressstu0wlK = "0x0000000000000000000000000000000000000001"
		const uintY0ItS2 = BigInt("1893")
		const addressNrvRo3O = accounts[1]
		const addresskCLg7SK = accounts[2]
		const boolE5APcFp = await LIBERAPAYA8Xb2FV.increaseAllowance.call(addressPMexZIS, uintIY5pLUE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zaCJQri = await LIBERAPAYA8Xb2FV.getNowTime.call({from: accounts[2]});
		const boolV27QALn = await LIBERAPAYA8Xb2FV.freezeAccount.call(addressstu0wlK, {from: accounts[1]});
		await LIBERAPAYA8Xb2FV.unpause.call({from: accounts[1]});
		const boolo67CAUx = await LIBERAPAYA8Xb2FV.transferFrom.call(addresskCLg7SK, addressNrvRo3O, uintY0ItS2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolE5APcFp, true)
		assert.equal(boolV27QALn, true)
		assert.equal(uint256zaCJQri, BigInt("1630231090"))
		await expect(LIBERAPAYA8Xb2FV.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYazjcXOa = await LIBERAPAY.new({from: accounts[4]});
		const addressC3vEhOB = accounts[1]
		const addresslZX1PEL = accounts[4]
		const addressYkO5wl = accounts[0]
		const uintILIAItB = BigInt("454")
		const addressgjScLgp = accounts[4]
		const uintMrtsGAW = BigInt("1120")
		const addressoFzznE1 = accounts[2]
		const addressOBnx7D4 = accounts[5]
		const addressurTHsjN = accounts[4]
		const uint256vxmfMUA = await LIBERAPAYazjcXOa.allowance.call(addresslZX1PEL, addressC3vEhOB, {from: accounts[5]});
		const uint256fpnnz9t = await LIBERAPAYazjcXOa.currentBalanceOf.call(addressYkO5wl, {from: accounts[0]});
		const boolNBStMXa = await LIBERAPAYazjcXOa.transfer.call(addressgjScLgp, uintILIAItB, {from: accounts[0]});
		const boolItqQz2X = await LIBERAPAYazjcXOa.mint.call(addressoFzznE1, uintMrtsGAW, {from: accounts[2]});
		const uint256JvoQT84 = await LIBERAPAYazjcXOa.allowance.call(addressurTHsjN, addressOBnx7D4, {from: accounts[0]});

		assert.equal(uint256fpnnz9t, BigInt("0"))
		assert.equal(uint256vxmfMUA, BigInt("0"))
		await expect(LIBERAPAYazjcXOa.transfer.call(addressgjScLgp, uintILIAItB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYxU8yHK0 = await LIBERAPAY.new({from: accounts[4]});
		const addressOYSsnS8 = accounts[2]
		const addressodclTK5 = accounts[2]
		const addressqLIIXv = await LIBERAPAYxU8yHK0.upgradeTo.call(addressOYSsnS8, {from: accounts[4]});
		const boolmt56Bqz = await LIBERAPAYxU8yHK0.freezeAccount.call(addressodclTK5, {from: accounts[1]});

		await expect(LIBERAPAYxU8yHK0.freezeAccount.call(addressodclTK5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYxU8yHK0 = await LIBERAPAY.new({from: accounts[4]});
		const uintnbMSxx = BigInt("1676")
		const address07GiUv = accounts[1]
		const addressmBNFKeO = accounts[4]
		const addressyakNtyM = accounts[2]
		const boolHDavPK0 = await LIBERAPAYxU8yHK0.burnFrom.call(address07GiUv, uintnbMSxx, {from: accounts[3]});
		const uint256CxEzM1x = await LIBERAPAYxU8yHK0.currentBalanceOf.call(addressmBNFKeO, {from: accounts[5]});
		const boolmt56Bqz = await LIBERAPAYxU8yHK0.freezeAccount.call(addressyakNtyM, {from: accounts[1]});

		await expect(LIBERAPAYxU8yHK0.burnFrom.call(address07GiUv, uintnbMSxx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYA8Xb2FV = await LIBERAPAY.new({from: accounts[1]});
		const uintU7eL4Js = BigInt("686")
		const addressnk6iaaR = accounts[2]
		const uintelKEwq = BigInt("1083")
		const addressNOuGxVC = accounts[1]
		const uintHpE5cF = BigInt("1305")
		const addressFFvwOZd = accounts[3]
		const addressPzMHRXg = "0x0000000000000000000000000000000000000001"
		const uintZnju4nc = BigInt("1893")
		const addressOdXC1DB = accounts[1]
		const addressL8lGCnP = accounts[2]
		const boolE5APcFp = await LIBERAPAYA8Xb2FV.increaseAllowance.call(addressnk6iaaR, uintU7eL4Js, {from: "0x0000000000000000000000000000000000000001"});
		const boolVDwD0q3 = await LIBERAPAYA8Xb2FV.mint.call(addressNOuGxVC, uintelKEwq, {from: accounts[1]});
		const boolPWUaSAg = await LIBERAPAYA8Xb2FV.transferFrom.call(addressPzMHRXg, addressFFvwOZd, uintHpE5cF, {from: accounts[3]});
		const boolo67CAUx = await LIBERAPAYA8Xb2FV.transferFrom.call(addressL8lGCnP, addressOdXC1DB, uintZnju4nc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolE5APcFp, true)
		await expect(LIBERAPAYA8Xb2FV.mint.call(addressNOuGxVC, uintelKEwq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYxU8yHK0 = await LIBERAPAY.new({from: accounts[4]});
		const uintqOGmHgx = BigInt("1911")
		const addressbJhGDel = accounts[0]
		const addresst9Celu = accounts[2]
		await LIBERAPAYxU8yHK0.showLockState.call(addressbJhGDel, uintqOGmHgx, {from: accounts[4]});
		const boolmt56Bqz = await LIBERAPAYxU8yHK0.freezeAccount.call(addresst9Celu, {from: accounts[1]});
		await LIBERAPAYxU8yHK0.whenPaused.call({from: accounts[3]});

		await expect(LIBERAPAYxU8yHK0.showLockState.call(addressbJhGDel, uintqOGmHgx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYxU8yHK0 = await LIBERAPAY.new({from: accounts[4]});
		const uintpg4bBBz = BigInt("1866")
		const uintIrGp8Ip = BigInt("1813")
		const addressjyBiml = accounts[1]
		const uintz3UGaOs = BigInt("1911")
		const addressOENV29c = accounts[0]
		const addresso02KNdC = accounts[3]
		const boolMmpAkd = await LIBERAPAYxU8yHK0.lock.call(addressjyBiml, uintIrGp8Ip, uintpg4bBBz, {from: accounts[4]});
		await LIBERAPAYxU8yHK0.showLockState.call(addressOENV29c, uintz3UGaOs, {from: accounts[4]});
		const boolmt56Bqz = await LIBERAPAYxU8yHK0.freezeAccount.call(addresso02KNdC, {from: accounts[1]});
		const boolbn7Pnvh = await LIBERAPAYxU8yHK0.acceptOwnership.call({from: accounts[5]});
		await LIBERAPAYxU8yHK0.whenPaused.call({from: accounts[3]});

		await expect(LIBERAPAYxU8yHK0.lock.call(addressjyBiml, uintIrGp8Ip, uintpg4bBBz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGqFw4N = await LIBERAPAY.new({from: accounts[1]});
		const uintFxTcY4e = BigInt("1662")
		const addressUKJeMDJ = accounts[0]
		const uinthVKJkF3 = BigInt("692")
		const uintzRLXCBD = BigInt("908")
		const addresskiz5S1x = accounts[4]
		const boolpjpc42z = await LIBERAPAYGqFw4N.unlock.call(addressUKJeMDJ, uintFxTcY4e, {from: accounts[1]});
		const boolWIVIlf7 = await LIBERAPAYGqFw4N.burn.call(uinthVKJkF3, {from: accounts[1]});
		const boolulew9W = await LIBERAPAYGqFw4N.increaseAllowance.call(addresskiz5S1x, uintzRLXCBD, {from: accounts[3]});

		await expect(LIBERAPAYGqFw4N.unlock.call(addressUKJeMDJ, uintFxTcY4e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGqFw4N = await LIBERAPAY.new({from: accounts[1]});
		const uintCwqD8JB = BigInt("705")
		const uintNZeDfCz = BigInt("908")
		const addressSBgiFDs = accounts[4]
		const boolWIVIlf7 = await LIBERAPAYGqFw4N.burn.call(uintCwqD8JB, {from: accounts[1]});
		const boolulew9W = await LIBERAPAYGqFw4N.increaseAllowance.call(addressSBgiFDs, uintNZeDfCz, {from: accounts[3]});

		assert.equal(boolWIVIlf7, true)
		assert.equal(boolulew9W, true)
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSLlBwsV = await LIBERAPAY.new({from: accounts[4]});
		const uintfEg3VA6 = BigInt("1867")
		const addressVgnh1Ny = "0x0000000000000000000000000000000000000001"
		const addressJYKCMFi = accounts[4]
		const uintsaw9dlx = BigInt("1380")
		const uintxBez3y4 = BigInt("922")
		const addressgrtd3Jk = accounts[0]
		const uintipVX5YY = BigInt("753")
		const address9QTeIa = "0x0000000000000000000000000000000000000001"
		const boolpWatsls = await LIBERAPAYSLlBwsV.transferFrom.call(addressJYKCMFi, addressVgnh1Ny, uintfEg3VA6, {from: accounts[2]});
		const uint256N8CSKol = await LIBERAPAYSLlBwsV.getNowTime.call({from: accounts[0]});
		const boolFM2Oyxn = await LIBERAPAYSLlBwsV.lock.call(addressgrtd3Jk, uintxBez3y4, uintsaw9dlx, {from: accounts[1]});
		const boolSizx0iM = await LIBERAPAYSLlBwsV.distribute.call(address9QTeIa, uintipVX5YY, {from: accounts[0]});

		await expect(LIBERAPAYSLlBwsV.transferFrom.call(addressJYKCMFi, addressVgnh1Ny, uintfEg3VA6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYu6v2B6i = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcIVXOKT = BigInt("2042")
		const addresstdsHnIw = accounts[1]
		const addressEFp8lrg = accounts[4]
		const addresspOXf3yZ = accounts[3]
		const boolTVLHnWe = await LIBERAPAYu6v2B6i.burnFrom.call(addresstdsHnIw, uintcIVXOKT, {from: accounts[0]});
		await LIBERAPAYu6v2B6i.f.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256LIbo9Rv = await LIBERAPAYu6v2B6i.balanceOf.call(addressEFp8lrg, {from: accounts[4]});
		const uint256c893wkJ = await LIBERAPAYu6v2B6i.balanceOf.call(addresspOXf3yZ, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYxU8yHK0 = await LIBERAPAY.new({from: accounts[4]});
		const uintjOjVd5f = BigInt("1911")
		const addressJGkJp02 = accounts[0]
		await LIBERAPAYxU8yHK0.pause.call({from: accounts[4]});
		await LIBERAPAYxU8yHK0.onlyOwner.call({from: accounts[1]});
		await LIBERAPAYxU8yHK0.showLockState.call(addressJGkJp02, uintjOjVd5f, {from: accounts[4]});
		await LIBERAPAYxU8yHK0.unpause.call({from: accounts[1]});
		await LIBERAPAYxU8yHK0.whenPaused.call({from: accounts[3]});

		await expect(LIBERAPAYxU8yHK0.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAPPfwp2 = await LIBERAPAY.new({from: accounts[0]});
		const addressaBeJZt = accounts[3]
		const uintJ9SKHsM = BigInt("996")
		const addressE6QQ8Vh = accounts[5]
		const addressyhmJjwA = "0x0000000000000000000000000000000000000001"
		const addressFPmY7kH = accounts[3]
		const uintA2DHEEU = BigInt("1662")
		const addressbaJIMrl = accounts[1]
		const uint256L6DNWdd = await LIBERAPAYAPPfwp2.currentBalanceOf.call(addressaBeJZt, {from: accounts[1]});
		await LIBERAPAYAPPfwp2.showLockState.call(addressE6QQ8Vh, uintJ9SKHsM, {from: accounts[0]});
		const uint256jUw0ROb = await LIBERAPAYAPPfwp2.currentBalanceOf.call(addressyhmJjwA, {from: accounts[0]});
		const uint256DugeLVm = await LIBERAPAYAPPfwp2.currentBalanceOf.call(addressFPmY7kH, {from: accounts[4]});
		const boolxmSIKfu = await LIBERAPAYAPPfwp2.distribute.call(addressbaJIMrl, uintA2DHEEU, {from: accounts[0]});

		assert.equal(uint256L6DNWdd, BigInt("0"))
		await expect(LIBERAPAYAPPfwp2.showLockState.call(addressE6QQ8Vh, uintJ9SKHsM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAPPfwp2 = await LIBERAPAY.new({from: accounts[0]});
		const addressxgfTp3s = accounts[3]
		const addresswdG8wks = accounts[0]
		const uintf5zFWfY = BigInt("1566")
		const addressq1H8L4a = accounts[1]
		const addressD9QkNn = "0x00000000000000000000000000000000000000-2"
		const uintacjvTZm = BigInt("1662")
		const addressyEQX7pL = accounts[1]
		const uint256L6DNWdd = await LIBERAPAYAPPfwp2.currentBalanceOf.call(addressxgfTp3s, {from: accounts[1]});
		const uint256svnLU5w = await LIBERAPAYAPPfwp2.currentBalanceOf.call(addresswdG8wks, {from: accounts[3]});
		await LIBERAPAYAPPfwp2.showLockState.call(addressq1H8L4a, uintf5zFWfY, {from: accounts[4]});
		const uint256jUw0ROb = await LIBERAPAYAPPfwp2.currentBalanceOf.call(addressD9QkNn, {from: accounts[0]});
		const boolxmSIKfu = await LIBERAPAYAPPfwp2.distribute.call(addressyEQX7pL, uintacjvTZm, {from: accounts[0]});

		assert.equal(uint256L6DNWdd, BigInt("0"))
		assert.equal(uint256svnLU5w, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYAPPfwp2.showLockState.call(addressq1H8L4a, uintf5zFWfY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAPPfwp2 = await LIBERAPAY.new({from: accounts[0]});
		const addressceVUZ85 = accounts[3]
		const addressBxzsNaX = "0x00000000000000000000000000000000000000-1"
		const uintej2prff = BigInt("1662")
		const addressvFPC5Td = accounts[1]
		const uint256L6DNWdd = await LIBERAPAYAPPfwp2.currentBalanceOf.call(addressceVUZ85, {from: accounts[1]});
		const uint256jUw0ROb = await LIBERAPAYAPPfwp2.currentBalanceOf.call(addressBxzsNaX, {from: accounts[0]});
		const boolxmSIKfu = await LIBERAPAYAPPfwp2.distribute.call(addressvFPC5Td, uintej2prff, {from: accounts[0]});

		assert.equal(uint256L6DNWdd, BigInt("0"))
		await expect(LIBERAPAYAPPfwp2.currentBalanceOf.call(addressBxzsNaX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})