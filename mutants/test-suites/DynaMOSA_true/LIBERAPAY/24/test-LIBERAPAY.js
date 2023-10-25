const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYRs76Y8F = await LIBERAPAY.new({from: accounts[0]});
		const uintc28qqz = BigInt("910")
		const addressjhERg0I = accounts[4]
		const addressdh8iXvF = accounts[1]
//		await LIBERAPAYRs76Y8F.f.call({from: accounts[5]});
//		const boolIJJBMM = await LIBERAPAYRs76Y8F.burnFrom.call(addressjhERg0I, uintc28qqz, {from: accounts[2]});
//		const boolvBWhXh4 = await LIBERAPAYRs76Y8F.freezeAccount.call(addressdh8iXvF, {from: accounts[5]});

		await expect(LIBERAPAYRs76Y8F.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuJckVN = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMVjvUim = accounts[2]
		const addressr0E814V = accounts[3]
		const uint256bTRsgF = await LIBERAPAYuJckVN.currentBalanceOf.call(addressMVjvUim, {from: accounts[4]});
		const uint256Wu9BL0x = await LIBERAPAYuJckVN.balanceOf.call(addressr0E814V, {from: accounts[0]});
		await LIBERAPAYuJckVN.onlyNewOwner.call({from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY8lR7GL = await LIBERAPAY.new({from: accounts[2]});
		const addressuINPmmr = accounts[2]
		const addresshaCvQz = accounts[4]
		const uintEl93ThS = BigInt("1451")
		const addresssyar8CB = "0x0000000000000000000000000000000000000001"
		const addresswutTNA4 = accounts[1]
		const uint256FWmVnvU = await LIBERAPAY8lR7GL.allowance.call(addresshaCvQz, addressuINPmmr, {from: accounts[3]});
//		const boolXgupPI1 = await LIBERAPAY8lR7GL.unlock.call(addresssyar8CB, uintEl93ThS, {from: accounts[3]});
//		const addressCxuNYaG = await LIBERAPAY8lR7GL.upgradeTo.call(addresswutTNA4, {from: accounts[1]});

		assert.equal(uint256FWmVnvU, BigInt("0"))
		await expect(LIBERAPAY8lR7GL.unlock.call(addresssyar8CB, uintEl93ThS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrJHf9T = await LIBERAPAY.new({from: accounts[3]});
		const addressPloBEj = "0x0000000000000000000000000000000000000001"
		const uintQfNeeah = BigInt("962")
		const addressiZetZuE = accounts[3]
		const addressHtiiyk4 = accounts[4]
		const uintOyZuLyX = BigInt("1694")
		const addressWT8kNL4 = accounts[1]
		const uint256uIRrPfw = await LIBERAPAYrJHf9T.balanceOf.call(addressPloBEj, {from: accounts[4]});
//		const boolrKUkHOy = await LIBERAPAYrJHf9T.decreaseAllowance.call(addressiZetZuE, uintQfNeeah, {from: accounts[3]});
//		await LIBERAPAYrJHf9T.unpause.call({from: accounts[0]});
//		const addresswADOvj = await LIBERAPAYrJHf9T.upgradeTo.call(addressHtiiyk4, {from: accounts[1]});
//		await LIBERAPAYrJHf9T.showLockState.call(addressWT8kNL4, uintOyZuLyX, {from: accounts[2]});

		assert.equal(uint256uIRrPfw, BigInt("0"))
		await expect(LIBERAPAYrJHf9T.decreaseAllowance.call(addressiZetZuE, uintQfNeeah, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcjMXgWv = await LIBERAPAY.new({from: accounts[2]});
		const addresscCnMyW = accounts[3]
		const uintDp5yyxU = BigInt("1445")
		const addressUeH136e = "0x0000000000000000000000000000000000000001"
		const uint256cLdJedN = await LIBERAPAYcjMXgWv.balanceOf.call(addresscCnMyW, {from: accounts[4]});
//		const boolEoMjZan = await LIBERAPAYcjMXgWv.transfer.call(addressUeH136e, uintDp5yyxU, {from: accounts[3]});

		assert.equal(uint256cLdJedN, BigInt("0"))
		await expect(LIBERAPAYcjMXgWv.transfer.call(addressUeH136e, uintDp5yyxU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBqtd7VM = await LIBERAPAY.new({from: accounts[4]});
		const uintacMlQhh = BigInt("103")
		const addressPJ5EovE = accounts[4]
		const addressZQ1fLlX = accounts[1]
		const uintZwPf3Lc = BigInt("1659")
		const addressOeoiE1a = accounts[5]
		const uintXgMq5Ao = BigInt("1840")
		const addressKygI4Bg = accounts[3]
		const addressnlwg7Pe = accounts[4]
//		const boolphzk3I7 = await LIBERAPAYBqtd7VM.unlock.call(addressPJ5EovE, uintacMlQhh, {from: accounts[4]});
//		const addressF7wpU4w = await LIBERAPAYBqtd7VM.notFrozen.call(addressZQ1fLlX, {from: accounts[2]});
//		const boolq6lmdeE = await LIBERAPAYBqtd7VM.decreaseAllowance.call(addressOeoiE1a, uintZwPf3Lc, {from: accounts[3]});
//		await LIBERAPAYBqtd7VM.showLockState.call(addressKygI4Bg, uintXgMq5Ao, {from: accounts[4]});
//		await LIBERAPAYBqtd7VM.unpause.call({from: accounts[1]});
//		const boolcNo8g4W = await LIBERAPAYBqtd7VM.unfreezeAccount.call(addressnlwg7Pe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYBqtd7VM.unlock.call(addressPJ5EovE, uintacMlQhh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY67NTrP = await LIBERAPAY.new({from: accounts[3]});
		const uintPG8Xtft = BigInt("840")
		const addresskTj6Z5R = accounts[0]
		const uinti3Gtb4M = BigInt("911")
		const addressUwivfdm = accounts[4]
		const boolHX3rF0T = await LIBERAPAY67NTrP.approve.call(addresskTj6Z5R, uintPG8Xtft, {from: accounts[2]});
//		const boolsReyWV = await LIBERAPAY67NTrP.burnFrom.call(addressUwivfdm, uinti3Gtb4M, {from: accounts[3]});

		assert.equal(boolHX3rF0T, true)
		await expect(LIBERAPAY67NTrP.burnFrom.call(addressUwivfdm, uinti3Gtb4M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqbPlBhj = await LIBERAPAY.new({from: accounts[0]});
		const addressK4U384s = accounts[3]
		const addresszy43IiV = accounts[1]
		const uintrMpKCoX = BigInt("0")
		const addressCEymWES = accounts[1]
		const addressuPr4hlu = accounts[0]
		const uint256nPZHTB = await LIBERAPAYqbPlBhj.allowance.call(addresszy43IiV, addressK4U384s, {from: accounts[4]});
//		await LIBERAPAYqbPlBhj.showLockState.call(addressCEymWES, uintrMpKCoX, {from: accounts[2]});
//		const uint256qa3k5GP = await LIBERAPAYqbPlBhj.balanceOf.call(addressuPr4hlu, {from: accounts[2]});

		assert.equal(uint256nPZHTB, BigInt("0"))
		await expect(LIBERAPAYqbPlBhj.showLockState.call(addressCEymWES, uintrMpKCoX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcjMXgWv = await LIBERAPAY.new({from: accounts[2]});
		const addressv13gJEO = accounts[4]
		const uintAuQACY = BigInt("1820")
		const addresseKKDWwn = accounts[5]
		const addressmO46FGl = accounts[0]
		const addressacHNR9b = accounts[4]
		const addressQWNMWai = accounts[2]
		const uintMfBuiCr = BigInt("1445")
		const addressIvdu1cO = "0x0000000000000000000000000000000000000001"
		const uint256cLdJedN = await LIBERAPAYcjMXgWv.balanceOf.call(addressv13gJEO, {from: accounts[4]});
//		const boolcpnIbzX = await LIBERAPAYcjMXgWv.transferFrom.call(addressmO46FGl, addresseKKDWwn, uintAuQACY, {from: accounts[0]});
//		const uint256rXXSAM = await LIBERAPAYcjMXgWv.allowance.call(addressQWNMWai, addressacHNR9b, {from: accounts[3]});
//		await LIBERAPAYcjMXgWv.whenPaused.call({from: accounts[2]});
//		const boolEoMjZan = await LIBERAPAYcjMXgWv.transfer.call(addressIvdu1cO, uintMfBuiCr, {from: accounts[3]});

		assert.equal(uint256cLdJedN, BigInt("0"))
		await expect(LIBERAPAYcjMXgWv.transferFrom.call(addressmO46FGl, addresseKKDWwn, uintAuQACY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcjMXgWv = await LIBERAPAY.new({from: accounts[2]});
		const addressghogCpt = accounts[4]
		const uint256cLdJedN = await LIBERAPAYcjMXgWv.balanceOf.call(addressghogCpt, {from: accounts[4]});
//		await LIBERAPAYcjMXgWv.whenNotPaused.call({from: accounts[4]});
//		const boolgW8eil9 = await LIBERAPAYcjMXgWv.acceptOwnership.call({from: accounts[4]});

		assert.equal(uint256cLdJedN, BigInt("0"))
		await expect(LIBERAPAYcjMXgWv.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY67NTrP = await LIBERAPAY.new({from: accounts[3]});
		const uintMHSN8w = BigInt("1594")
		const addressKlLmp11 = "0x0000000000000000000000000000000000000001"
		const uintV4xnqrL = BigInt("835")
		const addressMjYUEBE = accounts[0]
		const uintbobRY8g = BigInt("688")
		const addresswSdJAHB = accounts[1]
		const uintUqjWVQS = BigInt("911")
		const addresszmgCBVK = accounts[4]
		const booliNd7QID = await LIBERAPAY67NTrP.increaseAllowance.call(addressKlLmp11, uintMHSN8w, {from: accounts[4]});
		const boolHX3rF0T = await LIBERAPAY67NTrP.approve.call(addressMjYUEBE, uintV4xnqrL, {from: accounts[2]});
//		const boolRgtYgCs = await LIBERAPAY67NTrP.distribute.call(addresswSdJAHB, uintbobRY8g, {from: accounts[0]});
//		const boolsReyWV = await LIBERAPAY67NTrP.burnFrom.call(addresszmgCBVK, uintUqjWVQS, {from: accounts[3]});

		assert.equal(boolHX3rF0T, true)
		assert.equal(booliNd7QID, true)
		await expect(LIBERAPAY67NTrP.distribute.call(addresswSdJAHB, uintbobRY8g, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYoOx6xdq = await LIBERAPAY.new({from: accounts[1]});
		const addressOgmgxgT = accounts[4]
		const uint256LHuY2v = await LIBERAPAYoOx6xdq.balanceOf.call(addressOgmgxgT, {from: accounts[4]});
		const uint256A74MQ2J = await LIBERAPAYoOx6xdq.totalSupply.call({from: accounts[4]});

		assert.equal(uint256A74MQ2J, BigInt("3000000000000000000000000000"))
		assert.equal(uint256LHuY2v, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcjMXgWv = await LIBERAPAY.new({from: accounts[2]});
		const addressg3TcxQ = accounts[3]
		const uint256CM0D6YR = await LIBERAPAYcjMXgWv.getNowTime.call({from: accounts[3]});
		const uint256cLdJedN = await LIBERAPAYcjMXgWv.balanceOf.call(addressg3TcxQ, {from: accounts[4]});

		assert.equal(uint256CM0D6YR, BigInt("1630231519"))
		assert.equal(uint256cLdJedN, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBqtd7VM = await LIBERAPAY.new({from: accounts[4]});
		const addresskOZ7aug = accounts[0]
		const addressl7Hs51z = accounts[4]
		const uintLGgzD3G = BigInt("103")
		const addressHujz1v1 = accounts[4]
		const addressML0JJiF = accounts[2]
		const uintJNHvmrk = BigInt("1659")
		const addressmltC2F = accounts[5]
		const uintgOYOVO = BigInt("1840")
		const addresszMQvnX4 = accounts[3]
		const addressakUb8u4 = accounts[5]
		const address0JxnQ2 = await LIBERAPAYBqtd7VM.transferOwnership.call(addresskOZ7aug, {from: accounts[4]});
		const uint256Zwvjkkp = await LIBERAPAYBqtd7VM.balanceOf.call(addressl7Hs51z, {from: accounts[3]});
//		const boolphzk3I7 = await LIBERAPAYBqtd7VM.unlock.call(addressHujz1v1, uintLGgzD3G, {from: accounts[4]});
//		const addressF7wpU4w = await LIBERAPAYBqtd7VM.notFrozen.call(addressML0JJiF, {from: accounts[2]});
//		const boolq6lmdeE = await LIBERAPAYBqtd7VM.decreaseAllowance.call(addressmltC2F, uintJNHvmrk, {from: accounts[3]});
//		await LIBERAPAYBqtd7VM.showLockState.call(addresszMQvnX4, uintgOYOVO, {from: accounts[4]});
//		const boolcNo8g4W = await LIBERAPAYBqtd7VM.unfreezeAccount.call(addressakUb8u4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Zwvjkkp, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYBqtd7VM.unlock.call(addressHujz1v1, uintLGgzD3G, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcjMXgWv = await LIBERAPAY.new({from: accounts[2]});
		const addressM8SGfxr = accounts[4]
		const uintAsc81q9 = BigInt("1519")
		const addressleqMiz7 = accounts[0]
		const uintiicegaO = BigInt("1820")
		const addressM8VwYII = accounts[5]
		const addressK2ChrQm = accounts[0]
		const addresskw7YzS7 = accounts[4]
		const addresstkqwgJT = accounts[2]
		const uint256cLdJedN = await LIBERAPAYcjMXgWv.balanceOf.call(addressM8SGfxr, {from: accounts[4]});
		const boolnoAqQqF = await LIBERAPAYcjMXgWv.transfer.call(addressleqMiz7, uintAsc81q9, {from: accounts[2]});
//		const boolcpnIbzX = await LIBERAPAYcjMXgWv.transferFrom.call(addressK2ChrQm, addressM8VwYII, uintiicegaO, {from: accounts[0]});
//		await LIBERAPAYcjMXgWv.whenNotPaused.call({from: accounts[3]});
//		const uint256rXXSAM = await LIBERAPAYcjMXgWv.allowance.call(addresstkqwgJT, addresskw7YzS7, {from: accounts[3]});
//		await LIBERAPAYcjMXgWv.whenPaused.call({from: accounts[2]});

		assert.equal(boolnoAqQqF, true)
		assert.equal(uint256cLdJedN, BigInt("0"))
		await expect(LIBERAPAYcjMXgWv.transferFrom.call(addressK2ChrQm, addressM8VwYII, uintiicegaO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYnnpYXtE = await LIBERAPAY.new({from: accounts[1]});
		const addressSkUT1gj = accounts[2]
		const uint256duzBx9s = await LIBERAPAYnnpYXtE.currentBalanceOf.call(addressSkUT1gj, {from: accounts[4]});
//		await LIBERAPAYnnpYXtE.whenNotPaused.call({from: accounts[3]});
//		await LIBERAPAYnnpYXtE.onlyNewOwner.call({from: accounts[3]});
//		const boolaT3twf = await LIBERAPAYnnpYXtE.acceptOwnership.call({from: accounts[4]});

		assert.equal(uint256duzBx9s, BigInt("0"))
		await expect(LIBERAPAYnnpYXtE.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcjMXgWv = await LIBERAPAY.new({from: accounts[2]});
		const uinthe0n1kV = BigInt("1445")
		const addresspCNPS7M = "0x00000000000000000000000000000000000000-1"
		const uint256g7EzyVU = await LIBERAPAYcjMXgWv.getNowTime.call({from: accounts[5]});
//		const boolEoMjZan = await LIBERAPAYcjMXgWv.transfer.call(addresspCNPS7M, uinthe0n1kV, {from: accounts[3]});

		assert.equal(uint256g7EzyVU, BigInt("1630231521"))
		await expect(LIBERAPAYcjMXgWv.transfer.call(addresspCNPS7M, uinthe0n1kV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcjMXgWv = await LIBERAPAY.new({from: accounts[2]});
		const addressvZUpEE = accounts[4]
		const uintvJRIi7F = BigInt("344")
		const address6VaDXB = accounts[3]
		const uintCAKyh6 = BigInt("1103")
		const addressaWMhJT5 = accounts[2]
		const uint256cLdJedN = await LIBERAPAYcjMXgWv.balanceOf.call(addressvZUpEE, {from: accounts[4]});
		const boolql6kTHC = await LIBERAPAYcjMXgWv.distribute.call(address6VaDXB, uintvJRIi7F, {from: accounts[2]});
//		await LIBERAPAYcjMXgWv.showLockState.call(addressaWMhJT5, uintCAKyh6, {from: accounts[3]});

		assert.equal(boolql6kTHC, true)
		assert.equal(uint256cLdJedN, BigInt("0"))
		await expect(LIBERAPAYcjMXgWv.showLockState.call(addressaWMhJT5, uintCAKyh6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYnnpYXtE = await LIBERAPAY.new({from: accounts[1]});
		const addressHOQhHkk = accounts[2]
		const uintYmmgfQ = BigInt("1357")
		const uintUQXEsRh = BigInt("716")
		const addresswTB9WTR = "0x0000000000000000000000000000000000000001"
		const uint256duzBx9s = await LIBERAPAYnnpYXtE.currentBalanceOf.call(addressHOQhHkk, {from: accounts[4]});
//		const booljoWmH9E = await LIBERAPAYnnpYXtE.lock.call(addresswTB9WTR, uintUQXEsRh, uintYmmgfQ, {from: accounts[1]});
//		await LIBERAPAYnnpYXtE.whenPaused.call({from: accounts[3]});
//		await LIBERAPAYnnpYXtE.onlyNewOwner.call({from: accounts[3]});
//		const boolaT3twf = await LIBERAPAYnnpYXtE.acceptOwnership.call({from: accounts[4]});

		assert.equal(uint256duzBx9s, BigInt("0"))
		await expect(LIBERAPAYnnpYXtE.lock.call(addresswTB9WTR, uintUQXEsRh, uintYmmgfQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcjMXgWv = await LIBERAPAY.new({from: accounts[2]});
		const uintoViRG0E = BigInt("195")
		const addressSSY69Ms = accounts[3]
		const addressLEs4lWA = accounts[2]
		const address8RtopX = accounts[4]
//		const boolBnzu9CS = await LIBERAPAYcjMXgWv.transferFrom.call(addressLEs4lWA, addressSSY69Ms, uintoViRG0E, {from: accounts[0]});
//		const uint256cLdJedN = await LIBERAPAYcjMXgWv.balanceOf.call(address8RtopX, {from: accounts[4]});

		await expect(LIBERAPAYcjMXgWv.transferFrom.call(addressLEs4lWA, addressSSY69Ms, uintoViRG0E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYX5FA4Ze = await LIBERAPAY.new({from: accounts[4]});
		const uintdmvsCi = BigInt("372")
		const bool62eyNL = await LIBERAPAYX5FA4Ze.burn.call(uintdmvsCi, {from: accounts[4]});
//		await LIBERAPAYX5FA4Ze.unpause.call({from: accounts[3]});
//		await LIBERAPAYX5FA4Ze.onlyNewOwner.call({from: accounts[3]});

		assert.equal(bool62eyNL, true)
		await expect(LIBERAPAYX5FA4Ze.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcjMXgWv = await LIBERAPAY.new({from: accounts[2]});
		const uintnLJscLl = BigInt("1916")
		const addressWYvqwiV = accounts[1]
		const uint7BjkCK = BigInt("898")
		const addressJaJTKmO = accounts[5]
//		await LIBERAPAYcjMXgWv.pause.call({from: accounts[2]});
//		const boolcMNq2wG = await LIBERAPAYcjMXgWv.decreaseAllowance.call(addressWYvqwiV, uintnLJscLl, {from: accounts[1]});
//		await LIBERAPAYcjMXgWv.showLockState.call(addressJaJTKmO, uint7BjkCK, {from: accounts[0]});

		await expect(LIBERAPAYcjMXgWv.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcjMXgWv = await LIBERAPAY.new({from: accounts[2]});
		const addressTmo6Wec = accounts[5]
		const uintvZG4nn = BigInt("230")
		const addressiLafcTK = "0x0000000000000000000000000000000000000000"
		const boolM6GMSKf = await LIBERAPAYcjMXgWv.freezeAccount.call(addressTmo6Wec, {from: accounts[2]});
//		const boolEoMjZan = await LIBERAPAYcjMXgWv.transfer.call(addressiLafcTK, uintvZG4nn, {from: accounts[3]});

		assert.equal(boolM6GMSKf, true)
		await expect(LIBERAPAYcjMXgWv.transfer.call(addressiLafcTK, uintvZG4nn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcjMXgWv = await LIBERAPAY.new({from: accounts[2]});
		const addressHZqi5ek = accounts[4]
		const addressbV58HEw = accounts[2]
		const uint256cLdJedN = await LIBERAPAYcjMXgWv.balanceOf.call(addressHZqi5ek, {from: accounts[4]});
//		const bool6PbtIU = await LIBERAPAYcjMXgWv.unfreezeAccount.call(addressbV58HEw, {from: accounts[2]});

		assert.equal(uint256cLdJedN, BigInt("0"))
		await expect(LIBERAPAYcjMXgWv.unfreezeAccount.call(addressbV58HEw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcjMXgWv = await LIBERAPAY.new({from: accounts[2]});
		const uintOS8Ff26 = BigInt("1557")
		const addressGRNo1dk = accounts[1]
		const uintXgnSjk = BigInt("1372")
		const addresswe9rX6P = accounts[0]
		const uintBkl2VTJ = BigInt("866")
		const addressAovrZJ3 = accounts[5]
//		await LIBERAPAYcjMXgWv.showLockState.call(addressGRNo1dk, uintOS8Ff26, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHtjTtY = await LIBERAPAYcjMXgWv.mint.call(addresswe9rX6P, uintXgnSjk, {from: accounts[2]});
//		await LIBERAPAYcjMXgWv.showLockState.call(addressAovrZJ3, uintBkl2VTJ, {from: accounts[0]});

		await expect(LIBERAPAYcjMXgWv.showLockState.call(addressGRNo1dk, uintOS8Ff26, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQzMm0xP = await LIBERAPAY.new({from: accounts[1]});
		const addressf6PpJx = accounts[1]
		const addressdAMKSj5 = accounts[1]
		const addressA5CXUbn = accounts[3]
		const addressD9B4Ksd = await LIBERAPAYQzMm0xP.upgradeTo.call(addressf6PpJx, {from: accounts[1]});
//		await LIBERAPAYQzMm0xP.f.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256AGuN70b = await LIBERAPAYQzMm0xP.currentBalanceOf.call(addressdAMKSj5, {from: accounts[3]});
//		await LIBERAPAYQzMm0xP.pause.call({from: accounts[2]});
//		const uint256TJH7X79 = await LIBERAPAYQzMm0xP.currentBalanceOf.call(addressA5CXUbn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYQzMm0xP.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})