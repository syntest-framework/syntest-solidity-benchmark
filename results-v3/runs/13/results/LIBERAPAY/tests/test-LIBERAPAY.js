const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYxCjY2tq = await LIBERAPAY.new({from: accounts[3]});
		const addresssIs5Jy8 = accounts[1]
		const addressqOSRPX = accounts[1]
		const addressYxaEZCp = accounts[3]
		const addresseoV1z6E = await LIBERAPAYxCjY2tq.notFrozen.call(addresssIs5Jy8, {from: accounts[3]});
		await LIBERAPAYxCjY2tq.onlyOwner.call({from: accounts[1]});
		const uint256k0OMpBN = await LIBERAPAYxCjY2tq.allowance.call(addressYxaEZCp, addressqOSRPX, {from: accounts[4]});

		await expect(LIBERAPAYxCjY2tq.notFrozen.call(addresssIs5Jy8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkF7SeGF = await LIBERAPAY.new({from: accounts[2]});
		const uintO06ah6e = BigInt("696")
		const addresscH5PoRc = accounts[4]
		const uint30FoQ7 = BigInt("1090")
		const addresso9OKvip = "0x0000000000000000000000000000000000000001"
		const uintqk3h4D = BigInt("25")
		const addressEMT302t = "0x0000000000000000000000000000000000000001"
		const uint256mOUJmY0 = await LIBERAPAYkF7SeGF.getNowTime.call({from: accounts[4]});
		const boolvrUlKjG = await LIBERAPAYkF7SeGF.decreaseAllowance.call(addresscH5PoRc, uintO06ah6e, {from: accounts[0]});
		await LIBERAPAYkF7SeGF.pause.call({from: accounts[4]});
		const boolf3iWMgQ = await LIBERAPAYkF7SeGF.distribute.call(addresso9OKvip, uint30FoQ7, {from: accounts[5]});
		const uint256wWCGVXh = await LIBERAPAYkF7SeGF.getNowTime.call({from: accounts[0]});
		const boolhtivg9G = await LIBERAPAYkF7SeGF.decreaseAllowance.call(addressEMT302t, uintqk3h4D, {from: accounts[0]});

		assert.equal(uint256mOUJmY0, BigInt("1630229644"))
		await expect(LIBERAPAYkF7SeGF.decreaseAllowance.call(addresscH5PoRc, uintO06ah6e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYOOZ9hy3 = await LIBERAPAY.new({from: accounts[2]});
		await LIBERAPAYOOZ9hy3.pause.call({from: accounts[1]});
		await LIBERAPAYOOZ9hy3.whenPaused.call({from: accounts[5]});
		await LIBERAPAYOOZ9hy3.whenPaused.call({from: accounts[1]});

		await expect(LIBERAPAYOOZ9hy3.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const uintUiFVjp = BigInt("776")
		const addressClQGid = "0x0000000000000000000000000000000000000001"
		const addresskDwMc2 = accounts[4]
		const boolruUtPbS = await LIBERAPAYjbdO7n.transfer.call(addressClQGid, uintUiFVjp, {from: accounts[3]});
		const boolwCtkfsU = await LIBERAPAYjbdO7n.freezeAccount.call(addresskDwMc2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYjbdO7n.transfer.call(addressClQGid, uintUiFVjp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1FdnP2 = await LIBERAPAY.new({from: accounts[1]});
		const uintW9IG2Iv = BigInt("1873")
		const addressWXHiFMh = accounts[4]
		const addressLPQ2hoF = accounts[4]
		const boolRJd5Pt = await LIBERAPAY1FdnP2.increaseAllowance.call(addressWXHiFMh, uintW9IG2Iv, {from: accounts[2]});
		const uint256ZXxEWDe = await LIBERAPAY1FdnP2.currentBalanceOf.call(addressLPQ2hoF, {from: accounts[4]});
		await LIBERAPAY1FdnP2.onlyNewOwner.call({from: accounts[3]});

		assert.equal(boolRJd5Pt, true)
		assert.equal(uint256ZXxEWDe, BigInt("0"))
		await expect(LIBERAPAY1FdnP2.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const uintwz9scmN = BigInt("156")
		const addressmJp0XUH = accounts[1]
		const addressOWSRj0A = accounts[3]
		const uintMSfme3l = BigInt("776")
		const addressTlrSZUL = "0x0000000000000000000000000000000000000002"
		const boolfa1oH0 = await LIBERAPAYjbdO7n.transferFrom.call(addressOWSRj0A, addressmJp0XUH, uintwz9scmN, {from: accounts[0]});
		const boolruUtPbS = await LIBERAPAYjbdO7n.transfer.call(addressTlrSZUL, uintMSfme3l, {from: accounts[3]});

		await expect(LIBERAPAYjbdO7n.transferFrom.call(addressOWSRj0A, addressmJp0XUH, uintwz9scmN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYyfks3G = await LIBERAPAY.new({from: accounts[4]});
		const uintZuwzIq6 = BigInt("1132")
		const uintG7DqHfL = BigInt("1884")
		const addressQugsPXO = "0x0000000000000000000000000000000000000001"
		const uintsVSquc4 = BigInt("145")
		const addressfVE7uDe = accounts[2]
		const addressIY6RHO = accounts[3]
		const uintMcGJc7 = BigInt("1066")
		const addressrrJ3Cw = accounts[1]
		const addressvHBzGCM = accounts[0]
		const boolx2Vqk9 = await LIBERAPAYyfks3G.lock.call(addressQugsPXO, uintG7DqHfL, uintZuwzIq6, {from: accounts[4]});
		const boolsp96x4p = await LIBERAPAYyfks3G.unlock.call(addressfVE7uDe, uintsVSquc4, {from: accounts[2]});
		const addressKmklJgp = await LIBERAPAYyfks3G.notFrozen.call(addressIY6RHO, {from: accounts[4]});
		const boollhJqxxt = await LIBERAPAYyfks3G.transferFrom.call(addressvHBzGCM, addressrrJ3Cw, uintMcGJc7, {from: accounts[3]});

		await expect(LIBERAPAYyfks3G.lock.call(addressQugsPXO, uintG7DqHfL, uintZuwzIq6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const uintj77WQiH = BigInt("156")
		const addressbJzGos = accounts[1]
		const addressoLjjYKT = accounts[3]
		const addresshUvpg6d = accounts[5]
		const uintoikDHEl = BigInt("1855")
		const addressrxIgW8J = "0x0000000000000000000000000000000000000002"
		const uint256RQ9sMR9 = await LIBERAPAYjbdO7n.getNowTime.call({from: accounts[3]});
		await LIBERAPAYjbdO7n.f.call({from: accounts[4]});
		const boolfa1oH0 = await LIBERAPAYjbdO7n.transferFrom.call(addressoLjjYKT, addressbJzGos, uintj77WQiH, {from: accounts[0]});
		const boolrFp19dI = await LIBERAPAYjbdO7n.freezeAccount.call(addresshUvpg6d, {from: accounts[3]});
		const boolruUtPbS = await LIBERAPAYjbdO7n.transfer.call(addressrxIgW8J, uintoikDHEl, {from: accounts[3]});

		assert.equal(uint256RQ9sMR9, BigInt("1630229652"))
		await expect(LIBERAPAYjbdO7n.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpnFkdXx = await LIBERAPAY.new({from: accounts[3]});
		const uintL3YQ12M = BigInt("742")
		const addressGS6pykm = accounts[3]
		const addressWBw7hgR = accounts[3]
		const uintBGRpvgb = BigInt("1615")
		const addresskBajVht = accounts[1]
		const boolivLQ5h7 = await LIBERAPAYpnFkdXx.approve.call(addressGS6pykm, uintL3YQ12M, {from: accounts[5]});
		const uint256rKzwlaM = await LIBERAPAYpnFkdXx.balanceOf.call(addressWBw7hgR, {from: accounts[0]});
		await LIBERAPAYpnFkdXx.showLockState.call(addresskBajVht, uintBGRpvgb, {from: accounts[0]});

		assert.equal(boolivLQ5h7, true)
		assert.equal(uint256rKzwlaM, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYpnFkdXx.showLockState.call(addresskBajVht, uintBGRpvgb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const addressTRq2lbZ = accounts[2]
		const addresslfOBvyK = "0x0000000000000000000000000000000000000001"
		const uintcaSBAN = BigInt("156")
		const addressdvKZU96 = accounts[1]
		const addressibieFi = accounts[3]
		const uintLZwm8Qm = BigInt("1178")
		const addressh53y62T = "0x0000000000000000000000000000000000000002"
		const uint256kSaaMrU = await LIBERAPAYjbdO7n.allowance.call(addresslfOBvyK, addressTRq2lbZ, {from: accounts[0]});
		const boolfa1oH0 = await LIBERAPAYjbdO7n.transferFrom.call(addressibieFi, addressdvKZU96, uintcaSBAN, {from: accounts[0]});
		const boolruUtPbS = await LIBERAPAYjbdO7n.transfer.call(addressh53y62T, uintLZwm8Qm, {from: accounts[3]});

		assert.equal(uint256kSaaMrU, BigInt("0"))
		await expect(LIBERAPAYjbdO7n.transferFrom.call(addressibieFi, addressdvKZU96, uintcaSBAN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const uintJu8oaRh = BigInt("1053")
		const addressAdPrJee = accounts[0]
		const uintqhPy40c = BigInt("156")
		const addressicE2EXW = accounts[1]
		const addressRaO01k = accounts[3]
		const addressI5oxhq0 = accounts[1]
		const uintDcSnQsz = BigInt("776")
		const addresshxy04sg = "0x0000000000000000000000000000000000000001"
		const boolbeNYeqE = await LIBERAPAYjbdO7n.distribute.call(addressAdPrJee, uintJu8oaRh, {from: accounts[4]});
		const boolfa1oH0 = await LIBERAPAYjbdO7n.transferFrom.call(addressRaO01k, addressicE2EXW, uintqhPy40c, {from: accounts[0]});
		const uint256Sl7Lld6 = await LIBERAPAYjbdO7n.currentBalanceOf.call(addressI5oxhq0, {from: accounts[1]});
		const boolruUtPbS = await LIBERAPAYjbdO7n.transfer.call(addresshxy04sg, uintDcSnQsz, {from: accounts[3]});

		assert.equal(boolbeNYeqE, true)
		await expect(LIBERAPAYjbdO7n.transferFrom.call(addressRaO01k, addressicE2EXW, uintqhPy40c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpnFkdXx = await LIBERAPAY.new({from: accounts[3]});
		const uintgLp5xt6 = BigInt("742")
		const addressPvrqOhq = accounts[3]
		const uintIjN4zgH = BigInt("16")
		const addressOmvg7Dz = accounts[3]
		const addresscA0B5P8 = accounts[3]
		const boolivLQ5h7 = await LIBERAPAYpnFkdXx.approve.call(addressPvrqOhq, uintgLp5xt6, {from: accounts[5]});
		const boolAHTwoS = await LIBERAPAYpnFkdXx.burnFrom.call(addressOmvg7Dz, uintIjN4zgH, {from: accounts[0]});
		const uint256rKzwlaM = await LIBERAPAYpnFkdXx.balanceOf.call(addresscA0B5P8, {from: accounts[0]});

		assert.equal(boolivLQ5h7, true)
		await expect(LIBERAPAYpnFkdXx.burnFrom.call(addressOmvg7Dz, uintIjN4zgH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const uintnlE42iN = BigInt("277")
		const addresslgxk3JI = accounts[4]
		const uintZmApWPr = BigInt("156")
		const addressAqUSItM = accounts[1]
		const addressqxYap9n = accounts[3]
		const boolWeVgJZI = await LIBERAPAYjbdO7n.transfer.call(addresslgxk3JI, uintnlE42iN, {from: accounts[4]});
		const boolfa1oH0 = await LIBERAPAYjbdO7n.transferFrom.call(addressqxYap9n, addressAqUSItM, uintZmApWPr, {from: accounts[0]});

		assert.equal(boolWeVgJZI, true)
		await expect(LIBERAPAYjbdO7n.transferFrom.call(addressqxYap9n, addressAqUSItM, uintZmApWPr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYLytM7ex = await LIBERAPAY.new({from: accounts[0]});
		const uintU6xBqOn = BigInt("858")
		const addressRLzjLX5 = accounts[2]
		const addressE5R90mP = accounts[1]
		const uintrMCJLYU = BigInt("1607")
		const addressXdzCcuD = accounts[4]
		const uint256g2Lyjp = await LIBERAPAYLytM7ex.totalSupply.call({from: accounts[4]});
		const boolBui0TQx = await LIBERAPAYLytM7ex.acceptOwnership.call({from: accounts[4]});
		const boolyGlMHvz = await LIBERAPAYLytM7ex.increaseAllowance.call(addressRLzjLX5, uintU6xBqOn, {from: accounts[2]});
		const uint256y4aaIvi = await LIBERAPAYLytM7ex.currentBalanceOf.call(addressE5R90mP, {from: accounts[1]});
		const booldRiHx4m = await LIBERAPAYLytM7ex.distribute.call(addressXdzCcuD, uintrMCJLYU, {from: accounts[3]});

		assert.equal(uint256g2Lyjp, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYLytM7ex.acceptOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpnFkdXx = await LIBERAPAY.new({from: accounts[3]});
		const addressWxw7XA1 = accounts[4]
		const addressZIhLzw9 = accounts[4]
		const uintLPyw6yD = BigInt("1615")
		const addressqZo3MMb = accounts[1]
		const uint256rKzwlaM = await LIBERAPAYpnFkdXx.balanceOf.call(addressWxw7XA1, {from: accounts[0]});
		const boolJiaMGm0 = await LIBERAPAYpnFkdXx.freezeAccount.call(addressZIhLzw9, {from: accounts[3]});
		await LIBERAPAYpnFkdXx.showLockState.call(addressqZo3MMb, uintLPyw6yD, {from: accounts[0]});

		assert.equal(boolJiaMGm0, true)
		assert.equal(uint256rKzwlaM, BigInt("0"))
		await expect(LIBERAPAYpnFkdXx.showLockState.call(addressqZo3MMb, uintLPyw6yD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpnFkdXx = await LIBERAPAY.new({from: accounts[3]});
		const addressmJTc6CX = accounts[4]
		const addressTKv61I = accounts[4]
		const addressd7njV5l = accounts[1]
		const uint256rKzwlaM = await LIBERAPAYpnFkdXx.balanceOf.call(addressmJTc6CX, {from: accounts[0]});
		const boolULkIT8J = await LIBERAPAYpnFkdXx.unfreezeAccount.call(addressTKv61I, {from: accounts[3]});
		const addressb8mOAb = await LIBERAPAYpnFkdXx.transferOwnership.call(addressd7njV5l, {from: accounts[0]});

		assert.equal(uint256rKzwlaM, BigInt("0"))
		await expect(LIBERAPAYpnFkdXx.unfreezeAccount.call(addressTKv61I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpnFkdXx = await LIBERAPAY.new({from: accounts[3]});
		const addressnMue6d4 = "0x0000000000000000000000000000000000000001"
		const addresshRJFiAd = accounts[4]
		const addressLcOgh7v = accounts[3]
		const addressvnboeAa = await LIBERAPAYpnFkdXx.transferOwnership.call(addressnMue6d4, {from: accounts[3]});
		await LIBERAPAYpnFkdXx.onlyNewOwner.call({from: accounts[3]});
		const uint256rKzwlaM = await LIBERAPAYpnFkdXx.balanceOf.call(addresshRJFiAd, {from: accounts[0]});
		const address7x9fjm = await LIBERAPAYpnFkdXx.notFrozen.call(addressLcOgh7v, {from: accounts[4]});

		await expect(LIBERAPAYpnFkdXx.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSfnxVj = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uint9scXhZ = BigInt("328")
		const addresshiOTzAe = accounts[5]
		const uintukfvIZm = BigInt("708")
		const addressfF0Ib4x = accounts[0]
		const addresstTt6TZ7 = accounts[2]
		const addresscai8Gay = accounts[0]
		const uintWI0tItB = BigInt("1555")
		const addressWbm8GvS = accounts[3]
		const boolsRNcSHd = await LIBERAPAYSfnxVj.unlock.call(addresshiOTzAe, uint9scXhZ, {from: accounts[3]});
		await LIBERAPAYSfnxVj.showLockState.call(addressfF0Ib4x, uintukfvIZm, {from: accounts[4]});
		const addressRnbdDA7 = await LIBERAPAYSfnxVj.notFrozen.call(addresstTt6TZ7, {from: accounts[5]});
		await LIBERAPAYSfnxVj.unpause.call({from: accounts[2]});
		const addressQm20iX = await LIBERAPAYSfnxVj.upgradeTo.call(addresscai8Gay, {from: accounts[4]});
		const booljl6NBWY = await LIBERAPAYSfnxVj.transfer.call(addressWbm8GvS, uintWI0tItB, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const uintpMREYxN = BigInt("156")
		const addressTwRfUi = accounts[1]
		const addressRnvNK9C = accounts[4]
		const uintEqbAulN = BigInt("1360")
		const addresspG3tLKH = "0x0000000000000000000000000000000000000001"
		const uintB5fZGVh = BigInt("255")
		const uintuvZIDAh = BigInt("1223")
		const addressPWSIrjw = accounts[3]
		const boolfa1oH0 = await LIBERAPAYjbdO7n.transferFrom.call(addressRnvNK9C, addressTwRfUi, uintpMREYxN, {from: accounts[0]});
		const boolrYWETai = await LIBERAPAYjbdO7n.decreaseAllowance.call(addresspG3tLKH, uintEqbAulN, {from: accounts[0]});
		const boolrv07XEa = await LIBERAPAYjbdO7n.lock.call(addressPWSIrjw, uintuvZIDAh, uintB5fZGVh, {from: accounts[4]});

		await expect(LIBERAPAYjbdO7n.transferFrom.call(addressRnvNK9C, addressTwRfUi, uintpMREYxN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const uintq0G7RE0 = BigInt("156")
		const addressKnaXxTo = accounts[2]
		const addressJxtW4j = accounts[3]
		await LIBERAPAYjbdO7n.pause.call({from: accounts[4]});
		const boolfa1oH0 = await LIBERAPAYjbdO7n.transferFrom.call(addressJxtW4j, addressKnaXxTo, uintq0G7RE0, {from: accounts[0]});
		const boolkhvtAQ5 = await LIBERAPAYjbdO7n.acceptOwnership.call({from: accounts[3]});

		await expect(LIBERAPAYjbdO7n.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1FdnP2 = await LIBERAPAY.new({from: accounts[1]});
		const addressKhdr22K = accounts[7]
		const uintT2mSAPY = BigInt("1033")
		const uintHJJfjmi = BigInt("1481")
		const addressE1B0yjP = accounts[0]
		const uint256ZXxEWDe = await LIBERAPAY1FdnP2.currentBalanceOf.call(addressKhdr22K, {from: accounts[4]});
		const boolVnvxsFk = await LIBERAPAY1FdnP2.burn.call(uintT2mSAPY, {from: accounts[1]});
		const boolreGOhtL = await LIBERAPAY1FdnP2.increaseAllowance.call(addressE1B0yjP, uintHJJfjmi, {from: accounts[4]});

		assert.equal(boolVnvxsFk, true)
		assert.equal(boolreGOhtL, true)
		assert.equal(uint256ZXxEWDe, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const uintj4XfS02 = BigInt("349")
		const addressMrKMg0 = accounts[2]
		const uintDs8BNnr = BigInt("156")
		const addressB5rQ3QN = accounts[2]
		const addressWzEjvJp = accounts[3]
		const bool36n1Zv = await LIBERAPAYjbdO7n.mint.call(addressMrKMg0, uintj4XfS02, {from: accounts[4]});
		const boolfa1oH0 = await LIBERAPAYjbdO7n.transferFrom.call(addressWzEjvJp, addressB5rQ3QN, uintDs8BNnr, {from: accounts[0]});

		await expect(LIBERAPAYjbdO7n.mint.call(addressMrKMg0, uintj4XfS02, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpnFkdXx = await LIBERAPAY.new({from: accounts[3]});
		const addressH6aR98p = accounts[5]
		const addressA1XIW5 = accounts[4]
		const addressNABwa8i = accounts[1]
		const uint256rKzwlaM = await LIBERAPAYpnFkdXx.balanceOf.call(addressH6aR98p, {from: accounts[0]});
		const uint256D72mRz = await LIBERAPAYpnFkdXx.currentBalanceOf.call(addressA1XIW5, {from: accounts[2]});
		const addressFUQDmJO = await LIBERAPAYpnFkdXx.upgradeTo.call(addressNABwa8i, {from: accounts[3]});

		assert.equal(uint256D72mRz, BigInt("0"))
		assert.equal(uint256rKzwlaM, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpnFkdXx = await LIBERAPAY.new({from: accounts[3]});
		const uintdCykuHx = BigInt("1615")
		const addressZyhB7hP = accounts[1]
		const uintV2awWdP = BigInt("1637")
		const addressldI16Nu = accounts[4]
		await LIBERAPAYpnFkdXx.showLockState.call(addressZyhB7hP, uintdCykuHx, {from: accounts[0]});
		const boolJ6oluvY = await LIBERAPAYpnFkdXx.unlock.call(addressldI16Nu, uintV2awWdP, {from: accounts[3]});

		await expect(LIBERAPAYpnFkdXx.showLockState.call(addressZyhB7hP, uintdCykuHx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})