const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALwbawV7 = await NAL.new({from: accounts[3]});
		const uintzmwjoxv = BigInt("757")
		const addressL9SpPeI = accounts[0]
		const addresse3Tni2n = accounts[0]
		const uintK3uowNQ = BigInt("706")
		const uintTx2gAa5 = BigInt("1145")
		const addressHiop68t = accounts[0]
		const booluAEhJd = await NALwbawV7.approve.call(addressL9SpPeI, uintzmwjoxv, {from: accounts[3]});
//		await NALwbawV7.renounceAdmin.call({from: accounts[3]});
//		const uint2560l70Sk = await NALwbawV7.balanceOf.call(addresse3Tni2n, {from: accounts[4]});
//		const boolGXmfHqB = await NALwbawV7.lock.call(addressHiop68t, uintTx2gAa5, uintK3uowNQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booluAEhJd, true)
		await expect(NALwbawV7.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringrCjJEBj = "oBfc9S2B1VHu9QHXUigHtOu0vT6xLCuwf2dH4ZHoIOeayQkEsMuuoAKgzhrRS9YGyo08mTumItoVCtP2hJentcTVt"
		const stringvuzEq0V = "PJ6GqajIfNkRwDOlqvAWxvckYaVaaeVQuftylcR48gYKfmf3sS6opTdGQocZhgLXX9t"
		const uintA0v8US8 = BigInt("32")
		const NALMBDxjCl = await NAL.new(stringrCjJEBj, stringvuzEq0V, uintA0v8US8, {from: accounts[3]});
		const uintG4WQAZZ = BigInt("1140")
		const addressJ3LHEGE = accounts[0]
		const addressNlsv7q7 = accounts[2]
		const uintRsGa5Ag = BigInt("396")
		const addressQjkcZdb = accounts[1]
		const uintTUsWlO = BigInt("277")
		const uintjZjSJHD = BigInt("315")
		const addresshqOpVi = accounts[1]
		const boolP4aeJUU = await NALMBDxjCl.decreaseAllowance.call(addressJ3LHEGE, uintG4WQAZZ, {from: accounts[1]});
		const addressmQxqpNu = await NALMBDxjCl.removeAdmin.call(addressNlsv7q7, {from: accounts[4]});
		await NALMBDxjCl.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const booldaozaC8 = await NALMBDxjCl.unlock.call(addressQjkcZdb, uintRsGa5Ag, {from: accounts[3]});
		const boolmoNr1Xx = await NALMBDxjCl.transferWithLock.call(addresshqOpVi, uintjZjSJHD, uintTUsWlO, {from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NALB3I1952 = await NAL.new({from: accounts[0]});
		const uintJEjNV1E = BigInt("1918")
		const addressyxK16W = accounts[0]
		const addressHb7sdez = accounts[4]
		const uintJXGjUNu = BigInt("1986")
		const addressjeIEkYP = accounts[0]
//		const boolZOYn7VE = await NALB3I1952.transferFrom.call(addressHb7sdez, addressyxK16W, uintJEjNV1E, {from: accounts[2]});
//		const addressWil2Xt3 = await NALB3I1952.burnFrom.call(addressjeIEkYP, uintJXGjUNu, {from: accounts[2]});

		await expect(NALB3I1952.transferFrom.call(addressHb7sdez, addressyxK16W, uintJEjNV1E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpgVUnIT = await NAL.new({from: accounts[0]});
		const addresse1BbCPq = accounts[0]
		const uintISXqAU5 = BigInt("1219")
		const addressXLImi98 = accounts[1]
		const addressYgmLEj2 = accounts[0]
		const uint256ET5oyYv = await NALpgVUnIT.totalSupply.call({from: accounts[3]});
		const uint256lNfJjpk = await NALpgVUnIT.balanceOf.call(addresse1BbCPq, {from: accounts[5]});
//		const boolSiv1BkP = await NALpgVUnIT.decreaseAllowance.call(addressXLImi98, uintISXqAU5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256luKzUlu = await NALpgVUnIT.balanceOf.call(addressYgmLEj2, {from: accounts[1]});

		assert.equal(uint256ET5oyYv, BigInt("2000000000000000000000000000"))
		assert.equal(uint256lNfJjpk, BigInt("2000000000000000000000000000"))
		await expect(NALpgVUnIT.decreaseAllowance.call(addressXLImi98, uintISXqAU5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtwdYL8R = await NAL.new({from: accounts[3]});
		const uintRDTBUkV = BigInt("1712")
		const addressTKY9hgX = accounts[4]
		const addressgNVufmU = accounts[4]
		const boolVKnrKEp = await NALtwdYL8R.approve.call(addressTKY9hgX, uintRDTBUkV, {from: accounts[0]});
//		const addressFQVkxw3 = await NALtwdYL8R.notFrozen.call(addressgNVufmU, {from: accounts[1]});

		assert.equal(boolVKnrKEp, true)
		await expect(NALtwdYL8R.notFrozen.call(addressgNVufmU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALV9StuZy = await NAL.new({from: accounts[4]});
		const addresseJEwz6q = accounts[2]
		const addressslUC43q = accounts[2]
		const uintYG7SxJx = BigInt("1583")
		const addressLxICCbN = accounts[2]
		const uintXEa0ZH = BigInt("1439")
		const addressDTgKkF = accounts[2]
		const addressegBoi95 = accounts[0]
		const addressSeC5lXX = accounts[2]
		const uint256XFkCmLp = await NALV9StuZy.allowance.call(addressslUC43q, addresseJEwz6q, {from: accounts[1]});
//		await NALV9StuZy.unpause.call({from: accounts[4]});
//		const boolYZsAJsR = await NALV9StuZy.increaseAllowance.call(addressLxICCbN, uintYG7SxJx, {from: accounts[1]});
//		const boolFPZwjHa = await NALV9StuZy.transferFrom.call(addressegBoi95, addressDTgKkF, uintXEa0ZH, {from: accounts[4]});
//		const addresshVPBRD = await NALV9StuZy.removeAdmin.call(addressSeC5lXX, {from: accounts[2]});

		assert.equal(uint256XFkCmLp, BigInt("0"))
		await expect(NALV9StuZy.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALSzaOFZc = await NAL.new({from: accounts[2]});
		const uintK83kZuR = BigInt("699")
		const addresse3wJQxO = accounts[5]
		const uintEmqeQ2M = BigInt("601")
		const uintt0wZXp = BigInt("1915")
		const addresswjgX0IW = accounts[2]
		const uintIc8r2Uo = BigInt("1052")
		const addressbbO5rKY = accounts[2]
		const uintYSsaAKy = BigInt("761")
		const addressWlaUQG = accounts[2]
		const addressYIvyovx = accounts[2]
//		const boolrw73uRW = await NALSzaOFZc.transfer.call(addresse3wJQxO, uintK83kZuR, {from: accounts[4]});
//		const boolZ791lV6 = await NALSzaOFZc.transferWithLock.call(addresswjgX0IW, uintt0wZXp, uintEmqeQ2M, {from: accounts[0]});
//		const boolUJ5cxSh = await NALSzaOFZc.approve.call(addressbbO5rKY, uintIc8r2Uo, {from: accounts[3]});
//		const boolUKI3KYx = await NALSzaOFZc.paused.call({from: accounts[0]});
//		const boolQGP66z2 = await NALSzaOFZc.transferFrom.call(addressYIvyovx, addressWlaUQG, uintYSsaAKy, {from: accounts[1]});

		await expect(NALSzaOFZc.transfer.call(addresse3wJQxO, uintK83kZuR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtwdYL8R = await NAL.new({from: accounts[3]});
		const uintYa1ZL6 = BigInt("1712")
		const addressp3ntTJ = accounts[4]
		const addressUxxsgJl = "0x0000000000000000000000000000000000000001"
		const addresshVZETjn = accounts[4]
		const boolukXiFcl = await NALtwdYL8R.paused.call({from: accounts[4]});
		const boolVKnrKEp = await NALtwdYL8R.approve.call(addressp3ntTJ, uintYa1ZL6, {from: accounts[0]});
		const addressl1E1WPx = await NALtwdYL8R.upgradeTo.call(addressUxxsgJl, {from: accounts[3]});
//		const addressFQVkxw3 = await NALtwdYL8R.notFrozen.call(addresshVZETjn, {from: accounts[1]});

		assert.equal(boolVKnrKEp, true)
		assert.equal(boolukXiFcl, false)
		await expect(NALtwdYL8R.notFrozen.call(addresshVZETjn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALB3I1952 = await NAL.new({from: accounts[0]});
		const uintnDsvJsn = BigInt("1986")
		const addressSeBbMDd = accounts[0]
//		const addressWil2Xt3 = await NALB3I1952.burnFrom.call(addressSeBbMDd, uintnDsvJsn, {from: accounts[2]});

		await expect(NALB3I1952.burnFrom.call(addressSeBbMDd, uintnDsvJsn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtwdYL8R = await NAL.new({from: accounts[3]});
		const uintcIsW6co = BigInt("1064")
		const uintpVxIv8W = BigInt("1712")
		const addressAvNnRfl = accounts[5]
//		const uint25658lkPO = await NALtwdYL8R.burn.call(uintcIsW6co, {from: accounts[2]});
//		const boolVKnrKEp = await NALtwdYL8R.approve.call(addressAvNnRfl, uintpVxIv8W, {from: accounts[0]});
//		await NALtwdYL8R.unpause.call({from: accounts[5]});

		await expect(NALtwdYL8R.burn.call(uintcIsW6co, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALB3I1952 = await NAL.new({from: accounts[0]});
		const uint5mrF7c = BigInt("657")
		const addressU5atnFF = accounts[0]
		const uinthcTQvgS = BigInt("1257")
		const addressflVd4TD = accounts[0]
		const stringvwvOOm = await NALB3I1952.name.call({from: accounts[2]});
		const boolX37zBel = await NALB3I1952.increaseAllowance.call(addressU5atnFF, uint5mrF7c, {from: accounts[5]});
//		const addressWil2Xt3 = await NALB3I1952.burnFrom.call(addressflVd4TD, uinthcTQvgS, {from: accounts[2]});

		assert.equal(boolX37zBel, true)
		assert.equal(stringvwvOOm, "Personal Token")
		await expect(NALB3I1952.burnFrom.call(addressflVd4TD, uinthcTQvgS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALwbawV7 = await NAL.new({from: accounts[3]});
		const uintUl7EJG = BigInt("757")
		const addressjfpIxZX = accounts[0]
		const addressd4DQM77 = accounts[1]
		const uintNZxbklV = BigInt("706")
		const uinteapBKEA = BigInt("1145")
		const addressU0IXuKh = accounts[0]
		const uint8mlFSu9 = await NALwbawV7.decimals.call({from: accounts[2]});
		const booluAEhJd = await NALwbawV7.approve.call(addressjfpIxZX, uintUl7EJG, {from: accounts[3]});
		const uint2560l70Sk = await NALwbawV7.balanceOf.call(addressd4DQM77, {from: accounts[4]});
//		const boolGXmfHqB = await NALwbawV7.lock.call(addressU0IXuKh, uinteapBKEA, uintNZxbklV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booluAEhJd, true)
		assert.equal(uint2560l70Sk, BigInt("0"))
		assert.equal(uint8mlFSu9, BigInt("18"))
		await expect(NALwbawV7.lock.call(addressU0IXuKh, uinteapBKEA, uintNZxbklV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALwbawV7 = await NAL.new({from: accounts[3]});
		const addressfCtKRSz = accounts[0]
		const addressCtlyRVe = accounts[5]
		const addressM3F6Cq0 = accounts[4]
		const uintotYzIer = BigInt("706")
		const uintGGlVlrw = BigInt("1145")
		const addressSiXly6X = accounts[0]
		const uint2560l70Sk = await NALwbawV7.balanceOf.call(addressfCtKRSz, {from: accounts[4]});
//		const addresslVaBoSs = await NALwbawV7.removeAdmin.call(addressCtlyRVe, {from: accounts[3]});
//		const addresse1DFRoh = await NALwbawV7.addAdmin.call(addressM3F6Cq0, {from: accounts[2]});
//		const boolGXmfHqB = await NALwbawV7.lock.call(addressSiXly6X, uintGGlVlrw, uintotYzIer, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2560l70Sk, BigInt("0"))
		await expect(NALwbawV7.removeAdmin.call(addressCtlyRVe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALwbawV7 = await NAL.new({from: accounts[3]});
		const uintweaIgOO = BigInt("1953")
		const addressknXGgOT = accounts[0]
		const uint1clAlR = BigInt("626")
		const addressup0m0tX = accounts[0]
		const addressfBK7NSV = accounts[4]
		const uintQ3H4iPV = BigInt("1099")
		const addressMzm1z1n = accounts[0]
		const uinti3Ae1O = BigInt("12")
		const addressN7vLUdr = accounts[3]
		const addressnEeOdU = accounts[0]
		const uintivKK1Mi = BigInt("723")
		const addressIJEXbsf = accounts[5]
		const addressifO4xGa = accounts[2]
		const uintD9n8bwt = BigInt("706")
		const uintrU1mlJs = BigInt("1137")
		const addresszQsFEgd = accounts[0]
		const boola9BoXki = await NALwbawV7.approve.call(addressknXGgOT, uintweaIgOO, {from: accounts[3]});
		const boolOaymQeT = await NALwbawV7.increaseAllowance.call(addressup0m0tX, uint1clAlR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256SGS2RuB = await NALwbawV7.balanceOf.call(addressfBK7NSV, {from: accounts[3]});
		const boolIFChlqB = await NALwbawV7.increaseAllowance.call(addressMzm1z1n, uintQ3H4iPV, {from: accounts[4]});
		const boold4QWpI1 = await NALwbawV7.transfer.call(addressN7vLUdr, uinti3Ae1O, {from: accounts[3]});
		const uint2560l70Sk = await NALwbawV7.balanceOf.call(addressnEeOdU, {from: accounts[4]});
		const stringaT0EZc = await NALwbawV7.symbol.call({from: accounts[4]});
//		const boolOy8QWG6 = await NALwbawV7.transferFrom.call(addressifO4xGa, addressIJEXbsf, uintivKK1Mi, {from: accounts[1]});
//		const boolGXmfHqB = await NALwbawV7.lock.call(addresszQsFEgd, uintrU1mlJs, uintD9n8bwt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIFChlqB, true)
		assert.equal(boolOaymQeT, true)
		assert.equal(boola9BoXki, true)
		assert.equal(boold4QWpI1, true)
		assert.equal(stringaT0EZc, "NAL")
		assert.equal(uint2560l70Sk, BigInt("0"))
		assert.equal(uint256SGS2RuB, BigInt("0"))
		await expect(NALwbawV7.transferFrom.call(addressifO4xGa, addressIJEXbsf, uintivKK1Mi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALwbawV7 = await NAL.new({from: accounts[3]});
		const addressU75HKhP = accounts[4]
		const uintl8ZqDsh = BigInt("1953")
		const addressacEXrB = accounts[0]
		const uintXH73bu = BigInt("1099")
		const addressuNyA2Ej = accounts[1]
		const uintxJCf9G = BigInt("12")
		const addressr9Kkk6b = accounts[3]
		const addressLfHXttO = accounts[0]
		const uintKUKTis7 = BigInt("723")
		const addressG0KsJQ7 = accounts[5]
		const addressMenLmEP = accounts[2]
		const uint27XTy6 = BigInt("706")
		const uintbcE5hu7 = BigInt("1137")
		const addressJmKDIKM = accounts[0]
		const boolWzHzWTN = await NALwbawV7.freezeAccount.call(addressU75HKhP, {from: accounts[3]});
		const boola9BoXki = await NALwbawV7.approve.call(addressacEXrB, uintl8ZqDsh, {from: accounts[3]});
		const boolIFChlqB = await NALwbawV7.increaseAllowance.call(addressuNyA2Ej, uintXH73bu, {from: accounts[4]});
		const boold4QWpI1 = await NALwbawV7.transfer.call(addressr9Kkk6b, uintxJCf9G, {from: accounts[3]});
		const uint2560l70Sk = await NALwbawV7.balanceOf.call(addressLfHXttO, {from: accounts[4]});
//		const boolOy8QWG6 = await NALwbawV7.transferFrom.call(addressMenLmEP, addressG0KsJQ7, uintKUKTis7, {from: accounts[1]});
//		const boolGXmfHqB = await NALwbawV7.lock.call(addressJmKDIKM, uintbcE5hu7, uint27XTy6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIFChlqB, true)
		assert.equal(boolWzHzWTN, true)
		assert.equal(boola9BoXki, true)
		assert.equal(boold4QWpI1, true)
		assert.equal(uint2560l70Sk, BigInt("0"))
		await expect(NALwbawV7.transferFrom.call(addressMenLmEP, addressG0KsJQ7, uintKUKTis7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALB3I1952 = await NAL.new({from: accounts[0]});
		const uintRXc80Xl = BigInt("1918")
		const addressdxX9o2s = accounts[1]
		const addressv9Vyohq = accounts[4]
		const uintaLhSv7Y = BigInt("1986")
		const addressxcJb8QU = accounts[0]
		const uintK5zrsgW = BigInt("222")
		const addressV5hoyIi = accounts[1]
		const addresseYmFXjO = accounts[5]
//		await NALB3I1952.pause.call({from: accounts[0]});
//		const boolZOYn7VE = await NALB3I1952.transferFrom.call(addressv9Vyohq, addressdxX9o2s, uintRXc80Xl, {from: accounts[2]});
//		const addressWil2Xt3 = await NALB3I1952.burnFrom.call(addressxcJb8QU, uintaLhSv7Y, {from: accounts[2]});
//		await NALB3I1952.whenPaused.call({from: accounts[0]});
//		const boolcXwXGam = await NALB3I1952.transferFrom.call(addresseYmFXjO, addressV5hoyIi, uintK5zrsgW, {from: accounts[4]});

		await expect(NALB3I1952.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALwbawV7 = await NAL.new({from: accounts[3]});
		const addresscs0Hpwc = accounts[1]
		const uintje9vtG5 = BigInt("740")
		const uintzid2VKa = BigInt("783")
		const addressMhfxcBM = "0x0000000000000000000000000000000000000001"
		const uint2560l70Sk = await NALwbawV7.balanceOf.call(addresscs0Hpwc, {from: accounts[4]});
//		const boolJ3fLAXX = await NALwbawV7.lock.call(addressMhfxcBM, uintzid2VKa, uintje9vtG5, {from: accounts[3]});
//		await NALwbawV7.whenPaused.call({from: accounts[1]});

		assert.equal(uint2560l70Sk, BigInt("0"))
		await expect(NALwbawV7.lock.call(addressMhfxcBM, uintzid2VKa, uintje9vtG5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALwbawV7 = await NAL.new({from: accounts[3]});
		const addressVcw8wDj = accounts[2]
		const uintSS39UGV = BigInt("1953")
		const addresshwuXz3k = accounts[0]
		const uint50txX6 = BigInt("1099")
		const addressYtCg9Gz = accounts[0]
		const uintPdlhE4Q = BigInt("35")
		const addressKOEmcxn = accounts[3]
		const addressQriFRb8 = accounts[0]
		const uintEDe5Sz = BigInt("835")
		const addressRUAxuaj = accounts[0]
		const uintlWe0iNF = BigInt("723")
		const addressgJskZ6l = accounts[5]
		const addressSC7Fsl = accounts[2]
//		const boolFWVHIo = await NALwbawV7.unfreezeAccount.call(addressVcw8wDj, {from: accounts[3]});
//		const boola9BoXki = await NALwbawV7.approve.call(addresshwuXz3k, uintSS39UGV, {from: accounts[3]});
//		const boolIFChlqB = await NALwbawV7.increaseAllowance.call(addressYtCg9Gz, uint50txX6, {from: accounts[4]});
//		const boold4QWpI1 = await NALwbawV7.transfer.call(addressKOEmcxn, uintPdlhE4Q, {from: accounts[3]});
//		const uint2560l70Sk = await NALwbawV7.balanceOf.call(addressQriFRb8, {from: accounts[4]});
//		const boolsVX4KOy = await NALwbawV7.approve.call(addressRUAxuaj, uintEDe5Sz, {from: accounts[3]});
//		const boolOy8QWG6 = await NALwbawV7.transferFrom.call(addressSC7Fsl, addressgJskZ6l, uintlWe0iNF, {from: accounts[1]});

		await expect(NALwbawV7.unfreezeAccount.call(addressVcw8wDj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALwbawV7 = await NAL.new({from: accounts[3]});
		const uintxguTE5S = BigInt("344")
		const addressT2zOgDl = accounts[5]
		const addressChYkUDu = accounts[2]
//		const boolD1LA7Cb = await NALwbawV7.unlock.call(addressT2zOgDl, uintxguTE5S, {from: accounts[3]});
//		const uint2560l70Sk = await NALwbawV7.balanceOf.call(addressChYkUDu, {from: accounts[4]});

		await expect(NALwbawV7.unlock.call(addressT2zOgDl, uintxguTE5S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALwbawV7 = await NAL.new({from: accounts[3]});
		const uintn1j7K3 = BigInt("1911")
		const uintY6GWsqX = BigInt("1172")
		const addressx4PTwmU = accounts[0]
		const addressHKye0gg = accounts[1]
		const stringmKI96ly = await NALwbawV7.name.call({from: accounts[1]});
		const boolMCxSKG9 = await NALwbawV7.transferWithLock.call(addressx4PTwmU, uintY6GWsqX, uintn1j7K3, {from: accounts[3]});
		const stringf3nvfOQ = await NALwbawV7.name.call({from: accounts[2]});
		const uint2560l70Sk = await NALwbawV7.balanceOf.call(addressHKye0gg, {from: accounts[4]});

		assert.equal(boolMCxSKG9, true)
		assert.equal(stringf3nvfOQ, "Personal Token")
		assert.equal(stringmKI96ly, "Personal Token")
		assert.equal(uint2560l70Sk, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALB3I1952 = await NAL.new({from: accounts[0]});
		const addressKC4GjjW = "0x0000000000000000000000000000000000000001"
		const addressJVeIBZZ = accounts[4]
		const uintFGgESZP = BigInt("1890")
		const addressqrUYF0L = accounts[0]
		const addressuSRaLlh = accounts[4]
		const uint256s4YnTog = await NALB3I1952.balanceOf.call(addressKC4GjjW, {from: accounts[3]});
		const addressmuKYMi = await NALB3I1952.addAdmin.call(addressJVeIBZZ, {from: accounts[0]});
//		const boolZOYn7VE = await NALB3I1952.transferFrom.call(addressuSRaLlh, addressqrUYF0L, uintFGgESZP, {from: accounts[2]});
//		await NALB3I1952.renounceAdmin.call({from: accounts[3]});

		assert.equal(uint256s4YnTog, BigInt("0"))
		await expect(NALB3I1952.transferFrom.call(addressuSRaLlh, addressqrUYF0L, uintFGgESZP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALr6dCRC6 = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskbFshbY = accounts[3]
		const uintjtaedgS = BigInt("1244")
		const address0QRvtM = "0x0000000000000000000000000000000000000001"
		const addressw21a225 = accounts[1]
		const uintQKQKHJ = BigInt("798")
		const addressJxB9mhW = accounts[3]
		const uint8jw7z5Yj = await NALr6dCRC6.decimals.call({from: accounts[4]});
		const addressgdD5s4J = await NALr6dCRC6.notFrozen.call(addresskbFshbY, {from: accounts[4]});
		const boolKkcPMP9 = await NALr6dCRC6.transferFrom.call(addressw21a225, address0QRvtM, uintjtaedgS, {from: accounts[3]});
		const addresshRRjvX = await NALr6dCRC6.burnFrom.call(addressJxB9mhW, uintQKQKHJ, {from: accounts[0]});
	});
})