const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveWTNMpTh = await Revive.new({from: accounts[1]});
		const uintCNQHTtq = BigInt("687")
		const uintt85Hehk = BigInt("57")
		const addressKqVxc1P = accounts[0]
		const uint256V3lio7f = await ReviveWTNMpTh.recoverERC20.call(uintCNQHTtq, {from: "0x0000000000000000000000000000000000000001"});
		const boolBmMqaAF = await ReviveWTNMpTh.approve.call(addressKqVxc1P, uintt85Hehk, {from: accounts[2]});
		const uint256sRpx8U7 = await ReviveWTNMpTh.totalSupply.call({from: accounts[2]});
		const boolcVba6OE = await ReviveWTNMpTh.isOwner.call({from: accounts[3]});

		await expect(ReviveWTNMpTh.recoverERC20.call(uintCNQHTtq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive45kNlq = await Revive.new({from: accounts[4]});
		const uintBaTwoOn = BigInt("197")
		const bytebMqXoYj = "0x181a05050207120608030d1b0d121805091d080c02041f021e1f071e1b161b19"
		const uintUMviCdq = BigInt("517")
		const addresszIdDU8o = accounts[3]
		const addressn3XLpwN = accounts[1]
		const uint256MKUcrBx = await Revive45kNlq.totalSupply.call({from: accounts[2]});
		const boolQOQNECj = await Revive45kNlq.increaseLockAmount.call(bytebMqXoYj, uintBaTwoOn, {from: accounts[5]});
		const addressHqzvLYP = await Revive45kNlq.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolcAm1efB = await Revive45kNlq.decreaseAllowance.call(addresszIdDU8o, uintUMviCdq, {from: accounts[0]});
		const uint256vVPf0W1 = await Revive45kNlq.totalBalanceOf.call(addressn3XLpwN, {from: accounts[1]});

		assert.equal(uint256MKUcrBx, BigInt("3000000000000000000000000000"))
		await expect(Revive45kNlq.increaseLockAmount.call(bytebMqXoYj, uintBaTwoOn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveXFHzyHc = await Revive.new({from: accounts[3]});
		const uintKCEGfA3 = BigInt("1362")
		const addressuIf77wF = accounts[0]
		const uintHCKIXUv = BigInt("1910")
		const byteWqyhQgO = "0x02190a0906110a0a1f0f0e1b0b15001b0e0e061e12160c0d100c03181a1e201c"
		const addressH8BVKVh = accounts[3]
		await ReviveXFHzyHc.onlyOwner.call({from: accounts[0]});
		const boolFDeBAi3 = await ReviveXFHzyHc.transfer.call(addressuIf77wF, uintKCEGfA3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PzcHuaX = await ReviveXFHzyHc.tokensLockedAtTime.call(addressH8BVKVh, byteWqyhQgO, uintHCKIXUv, {from: accounts[2]});

		await expect(ReviveXFHzyHc.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFlEbkC = await Revive.new({from: accounts[3]});
		const byteBKxkEZw = "0x0405060007111515101d110a020317050a0812010415030c1314121a1214120f"
		const addressYs2z49L = accounts[1]
		const uinteDpaJEK = BigInt("61")
		const addressyCpPeiT = accounts[1]
		const uintObXkMlI = BigInt("1404")
		const addresss8gk6AR = accounts[1]
		const uint256kTH3Aiv = await ReviveFlEbkC.tokensLocked.call(addressYs2z49L, byteBKxkEZw, {from: accounts[2]});
		await ReviveFlEbkC.renounceOwnership.call({from: accounts[3]});
		const addressIP5BlNo = await ReviveFlEbkC.recoverERC20.call(addressyCpPeiT, uinteDpaJEK, {from: accounts[3]});
		const addressD6zqvr8 = await ReviveFlEbkC.recoverERC20.call(addresss8gk6AR, uintObXkMlI, {from: accounts[4]});

		assert.equal(uint256kTH3Aiv, BigInt("0"))
		await expect(ReviveFlEbkC.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLoKhO7D = await Revive.new({from: accounts[2]});
		const byteuYznwt = "0x20170905070d01060b1b15070f080d1b1a0d100c15011a120809200c0917151e"
		const addressasiAY6w = "0x0000000000000000000000000000000000000001"
		const uintZMvkXcT = BigInt("158")
		const addresslCjo12u = accounts[0]
		const addressxAcJZyi = accounts[4]
		const uintgrlfiQ = BigInt("1835")
		const bytegKn6sbI = "0x120d011a1318071d181d041f0715161c07160d12180f081d07161011080b071b"
		const addresslsxI5Ro = accounts[1]
		const uintLi3O9Vs = BigInt("129")
		const byteIkBGohR = "0x0d0b1a120d19191401201b101c110c0e15021c0e0e06051a181a0f1a0a161c13"
		const addressxNKxxeA = accounts[0]
		const uintgEGKQJ7 = BigInt("980")
		const addressxh4YZ04 = accounts[3]
		const uintLMkXfOu = BigInt("1724")
		const byteuVco9Fy = "0x101e1a1b1b111614000817061a0f081d120f1a02170d0e0f1d1c1111000c1e1e"
		const addresskly00fI = accounts[2]
		const uint256KqMOKtU = await ReviveLoKhO7D.tokensUnlockable.call(addressasiAY6w, byteuYznwt, {from: accounts[4]});
		const boolPiGsPIF = await ReviveLoKhO7D.transferFrom.call(addressxAcJZyi, addresslCjo12u, uintZMvkXcT, {from: accounts[0]});
		const uint256Tn12Dxo = await ReviveLoKhO7D.tokensLockedAtTime.call(addresslsxI5Ro, bytegKn6sbI, uintgrlfiQ, {from: accounts[3]});
		const uint256vLz4gSE = await ReviveLoKhO7D.tokensLockedAtTime.call(addressxNKxxeA, byteIkBGohR, uintLi3O9Vs, {from: accounts[4]});
		const boolkAnQw5U = await ReviveLoKhO7D.decreaseAllowance.call(addressxh4YZ04, uintgEGKQJ7, {from: accounts[5]});
		const uint256tjWTjoU = await ReviveLoKhO7D.tokensLockedAtTime.call(addresskly00fI, byteuVco9Fy, uintLMkXfOu, {from: accounts[4]});

		assert.equal(uint256KqMOKtU, BigInt("0"))
		await expect(ReviveLoKhO7D.transferFrom.call(addressxAcJZyi, addresslCjo12u, uintZMvkXcT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekdWwJUZ = await Revive.new({from: accounts[1]});
		const uintf2500PS = BigInt("1002")
		const uintGdoc0Lh = BigInt("1105")
		const addressR4huETV = accounts[0]
		const uint256EjBmXUc = await RevivekdWwJUZ.recoverERC20.call(uintf2500PS, {from: accounts[2]});
		await RevivekdWwJUZ.renounceOwnership.call({from: accounts[2]});
		const addressI5E9ci6 = await RevivekdWwJUZ.recoverERC20.call(addressR4huETV, uintGdoc0Lh, {from: accounts[2]});
		const boolh4HiO8X = await RevivekdWwJUZ.isOwner.call({from: accounts[3]});

		await expect(RevivekdWwJUZ.recoverERC20.call(uintf2500PS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveXyYUDc2 = await Revive.new({from: accounts[5]});
		const addressylWu8E = accounts[1]
		const addressF6X2WcT = accounts[1]
		const uintKkGDuVm = BigInt("672")
		const addresszxzkYvK = accounts[1]
		const byteOx0KXov = "0x0300071c131c1d110f1f011b161e0d151b1220061e071406060f020905070e0b"
		const addressKEXhWk3 = accounts[2]
		const addresssiQb4NP = accounts[3]
		const addressTGxQke = accounts[3]
		const uint256RuaQntT = await ReviveXyYUDc2.balanceOf.call(addressylWu8E, {from: accounts[3]});
		const uint256tPmM56u = await ReviveXyYUDc2.balanceOf.call(addressF6X2WcT, {from: "0x0000000000000000000000000000000000000001"});
		const boolAV8ptHq = await ReviveXyYUDc2.increaseAllowance.call(addresszxzkYvK, uintKkGDuVm, {from: accounts[2]});
		const uint256eFt3lt = await ReviveXyYUDc2.tokensLocked.call(addressKEXhWk3, byteOx0KXov, {from: "0x0000000000000000000000000000000000000001"});
		const uint256M1dGIsF = await ReviveXyYUDc2.balanceOf.call(addresssiQb4NP, {from: accounts[0]});
		const uint256ttHaIOw = await ReviveXyYUDc2.unlock.call(addressTGxQke, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAV8ptHq, true)
		assert.equal(uint256M1dGIsF, BigInt("0"))
		assert.equal(uint256RuaQntT, BigInt("0"))
		assert.equal(uint256eFt3lt, BigInt("0"))
		assert.equal(uint256tPmM56u, BigInt("0"))
		assert.equal(uint256ttHaIOw, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveFowgIdU = await Revive.new({from: accounts[2]});
		const uintsYE6byA = BigInt("792")
		const byteLwEgh4E = "0x011a160c1202170906090d0f0506151f180213001904031e1208090d130a1e03"
		const uintFoL2ybF = BigInt("328")
		const uintKMUc8Ad = BigInt("1858")
		const byteN5jHe3g = "0x1a1a1c0c0e1d0e06101718040e071f180b0a050e080009011a1f1f151a140f17"
		const addressl1kViAl = accounts[2]
		const uintPmFtpr = BigInt("57")
		const byteRBssZRI = "0x011a14161e100d05080c1a0e1a1e1e160f0f03041417121d010c07171201101f"
		const addressQgpmTvr = accounts[0]
		const uintE82lpMY = BigInt("632")
		const byteuOE4t2I = "0x181e13060d0c19120b0a141d01060c161c131e0b080510131a0307190d15160d"
		const uintpwqHQ8Y = BigInt("668")
		const addressZbo1Hcf = accounts[3]
		const boolodPL2a6 = await ReviveFowgIdU.extendLock.call(byteLwEgh4E, uintsYE6byA, {from: accounts[0]});
		const boolauOkJLx = await ReviveFowgIdU.transferWithLock.call(addressl1kViAl, byteN5jHe3g, uintKMUc8Ad, uintFoL2ybF, {from: accounts[2]});
		const uint256YpL7vu7 = await ReviveFowgIdU.tokensLockedAtTime.call(addressQgpmTvr, byteRBssZRI, uintPmFtpr, {from: accounts[5]});
		const boolcBkvyvp = await ReviveFowgIdU.increaseLockAmount.call(byteuOE4t2I, uintE82lpMY, {from: accounts[4]});
		const boolgnq4D46 = await ReviveFowgIdU.decreaseAllowance.call(addressZbo1Hcf, uintpwqHQ8Y, {from: "0x0000000000000000000000000000000000000001"});
		const addresst7PXN4e = await ReviveFowgIdU.owner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveFowgIdU.extendLock.call(byteLwEgh4E, uintsYE6byA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivegt4vpwV = await Revive.new({from: accounts[1]});
		const addresseLy5oTi = accounts[3]
		const addressbErhmXY = accounts[4]
		const uintaCJRt45 = BigInt("292")
		const byteeTOWElz = "0x06120b01060b1d1d0f0911090e0b1a0410171f191a1905140c03110508190904"
		const addressKVD5wbF = accounts[2]
		const uint256MiXixVx = await Revivegt4vpwV.totalBalanceOf.call(addresseLy5oTi, {from: accounts[4]});
		const uint256qEi2q3 = await Revivegt4vpwV.unlock.call(addressbErhmXY, {from: accounts[2]});
		const addressNXfOGx = await Revivegt4vpwV.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolh5N8UjC = await Revivegt4vpwV.extendLock.call(byteeTOWElz, uintaCJRt45, {from: "0x0000000000000000000000000000000000000001"});
		const addresspqdZnjy = await Revivegt4vpwV.transferOwnership.call(addressKVD5wbF, {from: accounts[5]});

		assert.equal(addressNXfOGx, 0x7f73d2Aa4F000cA2B54929D323b1b6c578E5e9E5)
		assert.equal(uint256MiXixVx, BigInt("0"))
		assert.equal(uint256qEi2q3, BigInt("0"))
		await expect(Revivegt4vpwV.extendLock.call(byteeTOWElz, uintaCJRt45, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive45kNlq = await Revive.new({from: accounts[4]});
		const uintTaCIZua = BigInt("931")
		const addressooRqPYV = accounts[1]
		const uintAytC5zX = BigInt("197")
		const byteQ3zkRdh = "0x181a05050207120608030d1b0d121805091d080c02041f021e1f071e1b161b19"
		const uintZjClHPy = BigInt("517")
		const addressNXSGQ5f = accounts[3]
		const addressrBHMSdf = accounts[1]
		const boolJCfYWcD = await Revive45kNlq.transfer.call(addressooRqPYV, uintTaCIZua, {from: accounts[3]});
		const uint256MKUcrBx = await Revive45kNlq.totalSupply.call({from: accounts[2]});
		const boolQOQNECj = await Revive45kNlq.increaseLockAmount.call(byteQ3zkRdh, uintAytC5zX, {from: accounts[5]});
		const addressHqzvLYP = await Revive45kNlq.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolcAm1efB = await Revive45kNlq.decreaseAllowance.call(addressNXSGQ5f, uintZjClHPy, {from: accounts[0]});
		const uint256vVPf0W1 = await Revive45kNlq.totalBalanceOf.call(addressrBHMSdf, {from: accounts[1]});

		await expect(Revive45kNlq.transfer.call(addressooRqPYV, uintTaCIZua, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivegt4vpwV = await Revive.new({from: accounts[1]});
		const addresszXdEt0i = accounts[3]
		const uint8C9Ry6 = BigInt("855")
		const uinta706AL = BigInt("36")
		const bytetAoPlYc = "0x161f1d090b0a1b0208060e1003190819091c0c0f040414190519151b1e160f18"
		const addressX5ZkDAh = accounts[3]
		const addresse8AbWZj = accounts[4]
		const uinteVlLdYY = BigInt("292")
		const byteT2fTqVT = "0x06120b01060b1d1d0f0911090e0b1a0410171f191a1905140c03110508190904"
		const addressjaPRKM = accounts[2]
		const uint256MiXixVx = await Revivegt4vpwV.totalBalanceOf.call(addresszXdEt0i, {from: accounts[4]});
		const boolLq8jYk6 = await Revivegt4vpwV.transferWithLock.call(addressX5ZkDAh, bytetAoPlYc, uinta706AL, uint8C9Ry6, {from: accounts[4]});
		const uint256qEi2q3 = await Revivegt4vpwV.unlock.call(addresse8AbWZj, {from: accounts[2]});
		const addressNXfOGx = await Revivegt4vpwV.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await Revivegt4vpwV.renounceOwnership.call({from: accounts[1]});
		const boolh5N8UjC = await Revivegt4vpwV.extendLock.call(byteT2fTqVT, uinteVlLdYY, {from: "0x0000000000000000000000000000000000000001"});
		const addresspqdZnjy = await Revivegt4vpwV.transferOwnership.call(addressjaPRKM, {from: accounts[5]});

		assert.equal(uint256MiXixVx, BigInt("0"))
		await expect(Revivegt4vpwV.transferWithLock.call(addressX5ZkDAh, bytetAoPlYc, uinta706AL, uint8C9Ry6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveXyYUDc2 = await Revive.new({from: accounts[5]});
		const addressKfbKhIW = accounts[1]
		const addressrhMTM9L = accounts[1]
		const byteHm7TL4 = "0x0300071c131c1d110f1f011b161e0d151b1220061e071406060f020905070e0b"
		const addressoolZQbm = accounts[2]
		const addressxGTjgRV = accounts[3]
		const addressjCV0iG = accounts[2]
		const addressWGP1Fzf = accounts[1]
		const addressfyQRUAT = accounts[3]
		const uint256RuaQntT = await ReviveXyYUDc2.balanceOf.call(addressKfbKhIW, {from: accounts[3]});
		const uint256tPmM56u = await ReviveXyYUDc2.balanceOf.call(addressrhMTM9L, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eFt3lt = await ReviveXyYUDc2.tokensLocked.call(addressoolZQbm, byteHm7TL4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256M1dGIsF = await ReviveXyYUDc2.balanceOf.call(addressxGTjgRV, {from: accounts[0]});
		const uint256UO3V4iP = await ReviveXyYUDc2.allowance.call(addressWGP1Fzf, addressjCV0iG, {from: accounts[0]});
		const uint256ttHaIOw = await ReviveXyYUDc2.unlock.call(addressfyQRUAT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256M1dGIsF, BigInt("0"))
		assert.equal(uint256RuaQntT, BigInt("0"))
		assert.equal(uint256UO3V4iP, BigInt("0"))
		assert.equal(uint256eFt3lt, BigInt("0"))
		assert.equal(uint256tPmM56u, BigInt("0"))
		assert.equal(uint256ttHaIOw, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivevrpLmbt = await Revive.new({from: accounts[5]});
		const byteXwUalGj = "0x0e10041e1a1d010f001308030303140c0c1416200f0512080e1c05010e1a030f"
		const addressLmshYxO = accounts[0]
		const uintw5Eww2B = BigInt("868")
		const addressmvNCV5E = accounts[0]
		const addressL0GRjAw = accounts[4]
		const addressQ4C9pl = "0x0000000000000000000000000000000000000001"
		const byteZ7jZBVB = "0x1d1908101714120b1c1000131d1c1908040b0a140300011c070515071c120016"
		const addressRLFZkqV = accounts[0]
		const uint256v5VbR4Z = await RevivevrpLmbt.tokensUnlockable.call(addressLmshYxO, byteXwUalGj, {from: accounts[0]});
		const boolpBrNWB = await RevivevrpLmbt.approve.call(addressmvNCV5E, uintw5Eww2B, {from: accounts[1]});
		const uint256pd3tsNo = await RevivevrpLmbt.unlock.call(addressL0GRjAw, {from: accounts[0]});
		const addressEFfnIQ = await RevivevrpLmbt.transferOwnership.call(addressQ4C9pl, {from: accounts[3]});
		const uint256W2jER7B = await RevivevrpLmbt.tokensUnlockable.call(addressRLFZkqV, byteZ7jZBVB, {from: accounts[5]});

		assert.equal(boolpBrNWB, true)
		assert.equal(uint256pd3tsNo, BigInt("0"))
		assert.equal(uint256v5VbR4Z, BigInt("0"))
		await expect(RevivevrpLmbt.transferOwnership.call(addressQ4C9pl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivegt4vpwV = await Revive.new({from: accounts[1]});
		const addressnmc3dn7 = accounts[3]
		const addressJbCWaRy = accounts[5]
		const uintcpuECbF = BigInt("349")
		const byteeNO25uk = "0x17040d1b0f041f101203161d0e1f030e090e1e141d03171e011306051e131901"
		const addressFYbZcLS = accounts[1]
		const uintXvbaYx7 = BigInt("630")
		const byteGUNiBq = "0x010e1b160a0d041c190d160b080711080602011e02140c20201316001e191e1a"
		const uintN2nEo3z = BigInt("292")
		const byter84Cvwp = "0x06120b01060b1d1d0f0911090e0b1a0410171f191a1905140c03110508190904"
		const uintqkYV95e = BigInt("181")
		const byteYSoouFf = "0x0e03161d1d000a130b1d0d131607081a141c1a12161f071f151604111102061d"
		const addressVqFNEdo = accounts[2]
		const uint256MiXixVx = await Revivegt4vpwV.totalBalanceOf.call(addressnmc3dn7, {from: accounts[4]});
		const uint256qEi2q3 = await Revivegt4vpwV.unlock.call(addressJbCWaRy, {from: accounts[2]});
		const addressNXfOGx = await Revivegt4vpwV.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256WWHGujR = await Revivegt4vpwV.tokensLockedAtTime.call(addressFYbZcLS, byteeNO25uk, uintcpuECbF, {from: accounts[0]});
		const boola9o9xc9 = await Revivegt4vpwV.extendLock.call(byteGUNiBq, uintXvbaYx7, {from: accounts[1]});
		const boolh5N8UjC = await Revivegt4vpwV.extendLock.call(byter84Cvwp, uintN2nEo3z, {from: "0x0000000000000000000000000000000000000001"});
		const boolVfoTZ5T = await Revivegt4vpwV.increaseLockAmount.call(byteYSoouFf, uintqkYV95e, {from: accounts[2]});
		const addresspqdZnjy = await Revivegt4vpwV.transferOwnership.call(addressVqFNEdo, {from: accounts[5]});

		assert.equal(addressNXfOGx, 0x7f73d2Aa4F000cA2B54929D323b1b6c578E5e9E5)
		assert.equal(uint256MiXixVx, BigInt("0"))
		assert.equal(uint256WWHGujR, BigInt("0"))
		assert.equal(uint256qEi2q3, BigInt("0"))
		await expect(Revivegt4vpwV.extendLock.call(byteGUNiBq, uintXvbaYx7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveXFHzyHc = await Revive.new({from: accounts[3]});
		const uintrgn3vAs = BigInt("1910")
		const byteXW3i6ny = "0x02190a0906110a0a1f0f0e1b0b15fffffffd1b0e0e061e12160c0d100c03181a1e201c"
		const addressBreQM4 = accounts[3]
		const uint256PzcHuaX = await ReviveXFHzyHc.tokensLockedAtTime.call(addressBreQM4, byteXW3i6ny, uintrgn3vAs, {from: accounts[2]});
		await ReviveXFHzyHc.renounceOwnership.call({from: accounts[2]});

		await expect(ReviveXFHzyHc.tokensLockedAtTime.call(addressBreQM4, byteXW3i6ny, uintrgn3vAs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJHoIj3n = await Revive.new({from: accounts[0]});
		const uintUaylqQ5 = BigInt("740")
		const uintm0mLFFN = BigInt("1133")
		const byteffeIl8h = "0x0a200d040c160e05190716130e020f14150d0d030a0f03100f180b0910010d19"
		const addressgghLHJB = accounts[5]
		const byteAmEbxby = "0x0b1e0e1a150613110409090c0f111a141e171c01041f060f0d0e0a1d01021514"
		const addressJqIbk5 = accounts[5]
		const uintzYNuw6V = BigInt("1288")
		const addressRB7AHqF = accounts[4]
		const addressPt5oQb = "0x0000000000000000000000000000000000000001"
		const boolh0m60ry = await ReviveJHoIj3n.lock.call(byteffeIl8h, uintm0mLFFN, uintUaylqQ5, {from: accounts[5]});
		const uint256M2WNlU = await ReviveJHoIj3n.unlock.call(addressgghLHJB, {from: accounts[0]});
		const uint256uxhSrU2 = await ReviveJHoIj3n.tokensLocked.call(addressJqIbk5, byteAmEbxby, {from: accounts[3]});
		const addressW1FbGtH = await ReviveJHoIj3n.recoverERC20.call(addressRB7AHqF, uintzYNuw6V, {from: accounts[1]});
		const uint256vU6OnFZ = await ReviveJHoIj3n.balanceOf.call(addressPt5oQb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveJHoIj3n.lock.call(byteffeIl8h, uintm0mLFFN, uintUaylqQ5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivegt4vpwV = await Revive.new({from: accounts[1]});
		const addressDyaVCsd = accounts[3]
		const addressmVRbJRh = accounts[5]
		const addressrAjtJt = accounts[4]
		const uintjrPaggp = BigInt("66")
		const addressQfg6Dt = accounts[3]
		const uintbHmvpJ4 = BigInt("490")
		const byteHaxQbFL = "0x20181a131b060c04141f0501030b16030b09120d181815060f040d1a04101205"
		const uintwOxWs0y = BigInt("292")
		const byteCw7y5X3 = "0x06120b01060b1d1d0f0911090e0b1a0410171f191a1905140c03110508190904"
		const addressTONVPTk = accounts[2]
		const uintcU9dgr = BigInt("267")
		const addressANQt3or = accounts[0]
		const uint256MiXixVx = await Revivegt4vpwV.totalBalanceOf.call(addressDyaVCsd, {from: accounts[4]});
		const uint256qEi2q3 = await Revivegt4vpwV.unlock.call(addressmVRbJRh, {from: accounts[2]});
		const addressNXfOGx = await Revivegt4vpwV.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2567hfEWl = await Revivegt4vpwV.getUnlockableTokens.call(addressrAjtJt, {from: accounts[2]});
		const boolCb3Clnc = await Revivegt4vpwV.increaseAllowance.call(addressQfg6Dt, uintjrPaggp, {from: accounts[3]});
		await Revivegt4vpwV.renounceOwnership.call({from: accounts[1]});
		const boolJCpvKLz = await Revivegt4vpwV.extendLock.call(byteHaxQbFL, uintbHmvpJ4, {from: accounts[4]});
		const boolh5N8UjC = await Revivegt4vpwV.extendLock.call(byteCw7y5X3, uintwOxWs0y, {from: "0x0000000000000000000000000000000000000001"});
		const addresspqdZnjy = await Revivegt4vpwV.transferOwnership.call(addressTONVPTk, {from: accounts[5]});
		const boolJ6mPvHg = await Revivegt4vpwV.increaseAllowance.call(addressANQt3or, uintcU9dgr, {from: accounts[2]});

		assert.equal(addressNXfOGx, 0x7f73d2Aa4F000cA2B54929D323b1b6c578E5e9E5)
		assert.equal(boolCb3Clnc, true)
		assert.equal(uint2567hfEWl, BigInt("0"))
		assert.equal(uint256MiXixVx, BigInt("0"))
		assert.equal(uint256qEi2q3, BigInt("0"))
		await expect(Revivegt4vpwV.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivegt4vpwV = await Revive.new({from: accounts[1]});
		const addressE9MPH7I = accounts[4]
		const addressUBWD8w = accounts[4]
		const uintkGxjjrx = BigInt("699")
		const addressKGMExAM = accounts[2]
		const uint256MiXixVx = await Revivegt4vpwV.totalBalanceOf.call(addressE9MPH7I, {from: accounts[4]});
		const uint256qEi2q3 = await Revivegt4vpwV.unlock.call(addressUBWD8w, {from: accounts[2]});
		const addressNXfOGx = await Revivegt4vpwV.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ewB00Tj = await Revivegt4vpwV.recoverERC20.call(uintkGxjjrx, {from: accounts[4]});
		const addresspqdZnjy = await Revivegt4vpwV.transferOwnership.call(addressKGMExAM, {from: accounts[5]});

		assert.equal(addressNXfOGx, 0x7f73d2Aa4F000cA2B54929D323b1b6c578E5e9E5)
		assert.equal(uint256MiXixVx, BigInt("0"))
		assert.equal(uint256qEi2q3, BigInt("0"))
		await expect(Revivegt4vpwV.recoverERC20.call(uintkGxjjrx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivepWFIXrn = await Revive.new({from: accounts[1]});
		const addressOEbkBH = accounts[0]
		const uintxADBd14 = BigInt("1774")
		const uintLgIfNv0 = BigInt("591")
		const byteXZW8EXr = "0x05071e1d031c19090e0d0c160a1e181b10181709171e030b060113131203201d"
		const byteAibFMym = "0x080c01031d03050a0b1215190f14061a041b140a1f11131819161d0a10010417"
		const addressJM2XNSa = accounts[4]
		const uinty5FpJ17 = BigInt("1266")
		const addressTSQiT9 = accounts[1]
		const uintgl6rLnN = BigInt("1725")
		const uintDfDjSJ7 = BigInt("753")
		const byteMXLKssW = "0x100a07081f1a04141919091e0a0a131000060507180318171f01141b13050f0b"
		const addressc54zhc0 = accounts[4]
		const uint256A8QTinZ = await RevivepWFIXrn.balanceOf.call(addressOEbkBH, {from: accounts[2]});
		const boolyyHC2ma = await RevivepWFIXrn.lock.call(byteXZW8EXr, uintLgIfNv0, uintxADBd14, {from: accounts[1]});
		const uint256SjxHqcY = await RevivepWFIXrn.tokensUnlockable.call(addressJM2XNSa, byteAibFMym, {from: accounts[3]});
		const boolxlqwTir = await RevivepWFIXrn.decreaseAllowance.call(addressTSQiT9, uinty5FpJ17, {from: accounts[4]});
		const boolUTuZRsS = await RevivepWFIXrn.lock.call(byteMXLKssW, uintDfDjSJ7, uintgl6rLnN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Q2dQ4Dz = await RevivepWFIXrn.getUnlockableTokens.call(addressc54zhc0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolyyHC2ma, true)
		assert.equal(uint256A8QTinZ, BigInt("0"))
		assert.equal(uint256SjxHqcY, BigInt("0"))
		await expect(RevivepWFIXrn.decreaseAllowance.call(addressTSQiT9, uinty5FpJ17, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJAXX4c5 = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVqfCwyQ = BigInt("1341")
		const addressGLRhL7 = accounts[1]
		const uintOd7NSG9 = BigInt("1477")
		const addressWcCXkPp = accounts[2]
		const addressZG8CbYb = accounts[5]
		const addressSWcIwV8 = "0x0000000000000000000000000000000000000001"
		const uintcJfbnhX = BigInt("191")
		const byteIXH4WHB = "0x101f0f0f0b140717021a0a1f1a1b08170b1913031e0f1f191a06061f16070c04"
		const uintxPeTJA5 = BigInt("405")
		const byteSaapOBS = "0x010a12031d0220140d1f08100b150c0c1b0a1f180a150f001d08030c190d0d1a"
		const addresss8UVFGY = await ReviveJAXX4c5.recoverERC20.call(addressGLRhL7, uintVqfCwyQ, {from: accounts[1]});
		const booljk3RZQw = await ReviveJAXX4c5.increaseAllowance.call(addressWcCXkPp, uintOd7NSG9, {from: accounts[0]});
		const uint256L6INimY = await ReviveJAXX4c5.allowance.call(addressSWcIwV8, addressZG8CbYb, {from: accounts[3]});
		const boolON29kKh = await ReviveJAXX4c5.increaseLockAmount.call(byteIXH4WHB, uintcJfbnhX, {from: accounts[3]});
		const boolbzhQSvr = await ReviveJAXX4c5.increaseLockAmount.call(byteSaapOBS, uintxPeTJA5, {from: accounts[3]});
	});

	it('test for Revive', async () => {
		const Revivegt4vpwV = await Revive.new({from: accounts[1]});
		const uintqNTm18S = BigInt("79")
		const uintJI0lX61 = BigInt("1786")
		const uintdmg4Sj4 = BigInt("1703")
		const byteisFyFGZ = "0x05171f030e19200611100f1b14071f07181f0401151c191a0f190c0515171813"
		const addressIPO6sJO = accounts[2]
		const uint256WcPhaUr = await Revivegt4vpwV.recoverERC20.call(uintqNTm18S, {from: accounts[2]});
		const boolpaQrjGF = await Revivegt4vpwV.lock.call(byteisFyFGZ, uintdmg4Sj4, uintJI0lX61, {from: accounts[2]});
		const addresspqdZnjy = await Revivegt4vpwV.transferOwnership.call(addressIPO6sJO, {from: accounts[5]});

		await expect(Revivegt4vpwV.recoverERC20.call(uintqNTm18S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMr5lTj6 = await Revive.new({from: accounts[2]});
		const byteJB9SG6j = "0x0f0b0b12180310161201021a1c10020c140b12040115141e12100110030d0d0b"
		const addressIuVbrp = accounts[1]
		const byteEOaeKv = "0x11180c15180e1a02151b0a1b1d20101916051f100a050f060610121805030d0f"
		const addressPzgvRT = accounts[0]
		const uintG8bIrnw = BigInt("1727")
		const uint256CBoBbV3 = await ReviveMr5lTj6.tokensLocked.call(addressIuVbrp, byteJB9SG6j, {from: accounts[5]});
		const uint256wKyqf19 = await ReviveMr5lTj6.tokensUnlockable.call(addressPzgvRT, byteEOaeKv, {from: accounts[2]});
		const uint256adRVHN9 = await ReviveMr5lTj6.recoverERC20.call(uintG8bIrnw, {from: accounts[0]});

		assert.equal(uint256CBoBbV3, BigInt("0"))
		assert.equal(uint256wKyqf19, BigInt("0"))
		await expect(ReviveMr5lTj6.recoverERC20.call(uintG8bIrnw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivegt4vpwV = await Revive.new({from: accounts[1]});
		const addressG1zZHO2 = accounts[3]
		const uintix8amHP = BigInt("1742")
		const uintW3bg76X = BigInt("2042")
		const byteG4RCQgT = "0x0f09171e06030f1111071e0d03200f0d0a110509060b00091017180d1a1a1518"
		const addressKmvhQrR = accounts[2]
		const uintkh5wBwL = BigInt("1154")
		const uintmE18rZ = BigInt("16")
		const byteX3CYJGD = "0x120d111c1f0b1d0f0b1009140d190403090a12101f160b1c1c190a0f0b0a1d16"
		const addressDJCPF49 = "0x0000000000000000000000000000000000000001"
		const uintQWpKhnf = BigInt("109")
		const byteCiocvlF = "0x1d0d11200114060c1f0218060910180e200d020800181f1e0d1b1b201114051e"
		const addressbauObz6 = accounts[5]
		const addressAYLsPfK = accounts[3]
		const addressRqQxQlc = accounts[1]
		const addressLyir8x = accounts[2]
		const byteIadrdfW = "0x03151109170a1e07081b0610181a011c04090b1d050707121206060e0a0d1d0d"
		const addressIH0nZ3q = accounts[4]
		const uintasslkbV = BigInt("936")
		const uintp4zir9M = BigInt("1703")
		const bytelbFmy2 = "0x05171f030e19200611100f1b14071f07181f0401151c191a0f190c0515171813"
		const bytesGYQM3o = "0x1c0a0b09130d0e0e05000a0019030b031e0d1f0c1018060c0f0219101202131b"
		const addressLW08djR = accounts[1]
		const addressaAUQS7 = await Revivegt4vpwV.transferOwnership.call(addressG1zZHO2, {from: accounts[1]});
		const boolKx9qtMe = await Revivegt4vpwV.transferWithLock.call(addressKmvhQrR, byteG4RCQgT, uintW3bg76X, uintix8amHP, {from: accounts[1]});
		const boolxPWXsS = await Revivegt4vpwV.transferWithLock.call(addressDJCPF49, byteX3CYJGD, uintmE18rZ, uintkh5wBwL, {from: accounts[0]});
		const uint256bmC030v = await Revivegt4vpwV.tokensLockedAtTime.call(addressbauObz6, byteCiocvlF, uintQWpKhnf, {from: accounts[3]});
		const uint256MiXixVx = await Revivegt4vpwV.totalBalanceOf.call(addressAYLsPfK, {from: accounts[4]});
		const uint256vTZZr38 = await Revivegt4vpwV.allowance.call(addressLyir8x, addressRqQxQlc, {from: accounts[5]});
		const uint256MEFWUDG = await Revivegt4vpwV.tokensUnlockable.call(addressIH0nZ3q, byteIadrdfW, {from: "0x0000000000000000000000000000000000000001"});
		const boolpaQrjGF = await Revivegt4vpwV.lock.call(bytelbFmy2, uintp4zir9M, uintasslkbV, {from: accounts[2]});
		const uint256hjhM8Nv = await Revivegt4vpwV.tokensLocked.call(addressLW08djR, bytesGYQM3o, {from: accounts[5]});

		assert.equal(boolKx9qtMe, true)
		await expect(Revivegt4vpwV.transferWithLock.call(addressDJCPF49, byteX3CYJGD, uintmE18rZ, uintkh5wBwL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverczfkA = await Revive.new({from: accounts[1]});
		const byteJqd4RTy = "0x1d080b130a05140509001d091e071a19091d120714071e190c0e1e1d01091c09"
		const addressX5YCUNm = "0x0000000000000000000000000000000000000001"
		const uintTTkcnaq = BigInt("429")
		const addressSyh9vgN = accounts[4]
		const addressYmZuPFn = accounts[4]
		const address94OCyz = accounts[4]
		const uintMvjDQQU = BigInt("1566")
		const byteFzRsnZq = "0x140f0c00051308191c1016131a020d0b0a111d14070c0b15200d091b1f03040f"
		const addressTNQOxww = accounts[3]
		const uint256ZIckxOd = await ReviverczfkA.tokensUnlockable.call(addressX5YCUNm, byteJqd4RTy, {from: accounts[1]});
		const boollQHRra = await ReviverczfkA.transfer.call(addressSyh9vgN, uintTTkcnaq, {from: accounts[1]});
		const uint256nl9Rfv = await ReviverczfkA.allowance.call(address94OCyz, addressYmZuPFn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JYFQ04d = await ReviverczfkA.recoverERC20.call(uintMvjDQQU, {from: accounts[2]});
		const boolbjL8tc8 = await ReviverczfkA.isOwner.call({from: accounts[0]});
		const uint256UkjgUHj = await ReviverczfkA.tokensUnlockable.call(addressTNQOxww, byteFzRsnZq, {from: accounts[3]});

		assert.equal(boollQHRra, true)
		assert.equal(uint256ZIckxOd, BigInt("0"))
		assert.equal(uint256nl9Rfv, BigInt("0"))
		await expect(ReviverczfkA.recoverERC20.call(uintMvjDQQU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivegt4vpwV = await Revive.new({from: accounts[1]});
		const uintsd3mC0f = BigInt("1978")
		const uinteFRld5V = BigInt("1146")
		const addressrIgu1V = "0x0000000000000000000000000000000000000001"
		const uintexB5Os = BigInt("1742")
		const uintBHAXd2G = BigInt("2042")
		const byteeM1cLd6 = "0x0b101d0e071c16011607191a060515041210120b0b03131c1d14110005020c0d"
		const addressLd4MY2Z = accounts[2]
		const uintvN8BEW = BigInt("109")
		const bytevkDmRyM = "0x1d0d11200114060c1f0218060910180e200d020800181f1e0d1b1b201114051e"
		const addresspf2wDXJ = accounts[5]
		const addressWbfNGf0 = accounts[4]
		const addressWmrR2gm = accounts[1]
		const addressGcTians = accounts[2]
		const bytefgrrPpV = "0x1c0a0b09130d0e0e05000a0019030b031e0d1f0c1018060c0f0219101202131b"
		const addressSom8fUA = accounts[1]
		const uint256DrBR6Id = await Revivegt4vpwV.recoverERC20.call(uintsd3mC0f, {from: accounts[0]});
		await Revivegt4vpwV.renounceOwnership.call({from: accounts[3]});
		const boolhSJmQvr = await Revivegt4vpwV.increaseAllowance.call(addressrIgu1V, uinteFRld5V, {from: accounts[0]});
		const boolKx9qtMe = await Revivegt4vpwV.transferWithLock.call(addressLd4MY2Z, byteeM1cLd6, uintBHAXd2G, uintexB5Os, {from: accounts[1]});
		const uint256bmC030v = await Revivegt4vpwV.tokensLockedAtTime.call(addresspf2wDXJ, bytevkDmRyM, uintvN8BEW, {from: accounts[3]});
		const uint256MiXixVx = await Revivegt4vpwV.totalBalanceOf.call(addressWbfNGf0, {from: accounts[4]});
		const uint256vTZZr38 = await Revivegt4vpwV.allowance.call(addressGcTians, addressWmrR2gm, {from: accounts[5]});
		const uint256hjhM8Nv = await Revivegt4vpwV.tokensLocked.call(addressSom8fUA, bytefgrrPpV, {from: accounts[5]});

		await expect(Revivegt4vpwV.recoverERC20.call(uintsd3mC0f, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivegt4vpwV = await Revive.new({from: accounts[1]});
		const uintm14WJVF = BigInt("1742")
		const uintKGfxboK = BigInt("2042")
		const byteAOQLxM = "0x04120b0f0c19171b191c0411001d0a1012000a011e0102040f151a18071e1012"
		const addressWkGxpAy = accounts[2]
		const uintdpvbgiD = BigInt("49")
		const byteQsXbdbz = "0x1d0d11200114060c1f0218060910180e200d020800181f1e0d1b19201114051e"
		const addressuOPwI14 = accounts[6]
		const addresswqxO8Zi = accounts[3]
		const addresshnkbQUy = accounts[1]
		const addressc978m8 = accounts[2]
		const uint9taG4h = BigInt("464")
		const uintntxoSQB = BigInt("379")
		const bytejcRELhZ = "0x0218061a1a070f15150d170e14121c19140c16100d1415061b011d0e0004121f"
		const addressya3TXfh = accounts[2]
		const uinthVL4HPI = BigInt("936")
		const uintUtAfnCe = BigInt("1703")
		const byteYcjiXal = "0x05171f030e19200611100f1b14071f07181f0401151c191a0f190c0515171813"
		const boolKx9qtMe = await Revivegt4vpwV.transferWithLock.call(addressWkGxpAy, byteAOQLxM, uintKGfxboK, uintm14WJVF, {from: accounts[1]});
		const uint256bmC030v = await Revivegt4vpwV.tokensLockedAtTime.call(addressuOPwI14, byteQsXbdbz, uintdpvbgiD, {from: accounts[3]});
		const uint256MiXixVx = await Revivegt4vpwV.totalBalanceOf.call(addresswqxO8Zi, {from: accounts[4]});
		const uint256vTZZr38 = await Revivegt4vpwV.allowance.call(addressc978m8, addresshnkbQUy, {from: accounts[5]});
		const uint256zbiw9X4 = await Revivegt4vpwV.recoverERC20.call(uint9taG4h, {from: accounts[3]});
		await Revivegt4vpwV.renounceOwnership.call({from: accounts[3]});
		const bool3W67D0 = await Revivegt4vpwV.increaseLockAmount.call(bytejcRELhZ, uintntxoSQB, {from: accounts[2]});
		const uint256fNtxVj5 = await Revivegt4vpwV.balanceOf.call(addressya3TXfh, {from: accounts[4]});
		const boolpaQrjGF = await Revivegt4vpwV.lock.call(byteYcjiXal, uintUtAfnCe, uinthVL4HPI, {from: accounts[2]});

		assert.equal(boolKx9qtMe, true)
		assert.equal(uint256MiXixVx, BigInt("0"))
		assert.equal(uint256bmC030v, BigInt("0"))
		assert.equal(uint256vTZZr38, BigInt("0"))
		await expect(Revivegt4vpwV.recoverERC20.call(uint9taG4h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNwRPSv8 = await Revive.new({from: accounts[0]});
		const uintzlmNGi3 = BigInt("1833")
		const byteHO1iF0G = "0x1f1406190815020214061b12081c0c021514050c13130b1e1e080b1a101c0908"
		const addressTyY19HJ = accounts[0]
		const uintC2PnrNV = BigInt("1499")
		const addressWAZXMap = accounts[3]
		const uint256jzOFD9l = await ReviveNwRPSv8.recoverERC20.call(uintzlmNGi3, {from: accounts[2]});
		const uint256ZPCt2yY = await ReviveNwRPSv8.tokensLocked.call(addressTyY19HJ, byteHO1iF0G, {from: accounts[0]});
		const boolABFiEuk = await ReviveNwRPSv8.decreaseAllowance.call(addressWAZXMap, uintC2PnrNV, {from: accounts[2]});

		await expect(ReviveNwRPSv8.recoverERC20.call(uintzlmNGi3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivev0thuiY = await Revive.new({from: accounts[1]});
		const uintS5WgmD5 = BigInt("1172")
		const addresshW3To3b = accounts[5]
		const uintu3fJL5l = BigInt("10")
		const uintUBrZQFP = BigInt("1252")
		const byteZUw3ADl = "0x120e081705081c1e0d18070d1d1a06060e141a0a16070a0b0f1d01041d0b1f03"
		const addressn7liiDf = "0x0000000000000000000000000000000000000001"
		const boolLFZN9VW = await Revivev0thuiY.increaseAllowance.call(addresshW3To3b, uintS5WgmD5, {from: accounts[2]});
		const uint256nJRMNDj = await Revivev0thuiY.recoverERC20.call(uintu3fJL5l, {from: accounts[3]});
		const addresssfUAQxz = await Revivev0thuiY.owner.call({from: accounts[3]});
		const uint256rNZLbKq = await Revivev0thuiY.tokensLockedAtTime.call(addressn7liiDf, byteZUw3ADl, uintUBrZQFP, {from: accounts[4]});

		assert.equal(boolLFZN9VW, true)
		await expect(Revivev0thuiY.recoverERC20.call(uintu3fJL5l, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivegt4vpwV = await Revive.new({from: accounts[1]});
		const uintbMEPpD = BigInt("1742")
		const uintKYiCFbl = BigInt("2042")
		const byteOuUvbYG = "0x04130b0f0c19171d191c0411001d0a1012000a011e0102040f151a18071e1012"
		const addressfeMpnl1 = accounts[2]
		const uintL8C2Zz = BigInt("49")
		const byteG8grb8I = "0x1d0d11200114060c1f0218060910180e200dfffffffc0800181f1e0d1b19201114051e"
		const addressGwQhrZt = accounts[5]
		const uintSBdz8MW = BigInt("1039")
		const byteqt1FXLS = "0x141b1c1f140a050a12111a19011906131008200f09150d0c0119170e1e14091e"
		const addresspLAxFXi = accounts[2]
		const addressv6hTl9 = accounts[4]
		const addressc0XyTFo = accounts[3]
		const addressUcbdmLW = accounts[1]
		const addressHIOgbxf = accounts[2]
		const addressu9SLCg1 = accounts[2]
		const uintTLbt0wa = BigInt("936")
		const uintoSavOrg = BigInt("1703")
		const bytejIC1xEl = "0x05171f030e19200611100f1b14071f07181f0401151c191a0f190c0515171813"
		const byteDX0KerH = "0x1c0a0b09130d0e0e05000a0019030b031e0d1f0c1018060c0f0219101202131b"
		const addressceLxvWV = accounts[1]
		const boolKx9qtMe = await Revivegt4vpwV.transferWithLock.call(addressfeMpnl1, byteOuUvbYG, uintKYiCFbl, uintbMEPpD, {from: accounts[1]});
		const uint256bmC030v = await Revivegt4vpwV.tokensLockedAtTime.call(addressGwQhrZt, byteG8grb8I, uintL8C2Zz, {from: accounts[3]});
		const uint256b2KVfx9 = await Revivegt4vpwV.tokensLockedAtTime.call(addresspLAxFXi, byteqt1FXLS, uintSBdz8MW, {from: accounts[2]});
		const uint256Nii0fim = await Revivegt4vpwV.unlock.call(addressv6hTl9, {from: accounts[3]});
		const uint256MiXixVx = await Revivegt4vpwV.totalBalanceOf.call(addressc0XyTFo, {from: accounts[4]});
		const uint256vTZZr38 = await Revivegt4vpwV.allowance.call(addressHIOgbxf, addressUcbdmLW, {from: accounts[5]});
		const uint256fNtxVj5 = await Revivegt4vpwV.balanceOf.call(addressu9SLCg1, {from: accounts[4]});
		const boolpaQrjGF = await Revivegt4vpwV.lock.call(bytejIC1xEl, uintoSavOrg, uintTLbt0wa, {from: accounts[2]});
		const uint256hjhM8Nv = await Revivegt4vpwV.tokensLocked.call(addressceLxvWV, byteDX0KerH, {from: accounts[5]});

		assert.equal(boolKx9qtMe, true)
		await expect(Revivegt4vpwV.tokensLockedAtTime.call(addressGwQhrZt, byteG8grb8I, uintL8C2Zz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJHoIj3n = await Revive.new({from: accounts[0]});
		const addresslOs60I1 = accounts[3]
		const uintfJrMy8R = BigInt("1165")
		const uint256FrcTh9l = await ReviveJHoIj3n.getUnlockableTokens.call(addresslOs60I1, {from: accounts[2]});
		const uint256fvqmsNn = await ReviveJHoIj3n.recoverERC20.call(uintfJrMy8R, {from: accounts[0]});

		assert.equal(uint256FrcTh9l, BigInt("0"))
		await expect(ReviveJHoIj3n.recoverERC20.call(uintfJrMy8R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivegt4vpwV = await Revive.new({from: accounts[1]});
		const uintqdFxIBM = BigInt("1742")
		const uintEqX3yQM = BigInt("2042")
		const byteYkD0OVW = "0x04130b0f0c19171b191c0411001d0a1012000a011e0102040f151a18071e1012"
		const addressZri0JA0 = accounts[2]
		const uintBWzAcg9 = BigInt("27")
		const bytetkPNb9k = "0x1d0d11200114060c1f0218060910180e200d020800181f1e0d1b19201114051e"
		const addressHaLLus7 = accounts[6]
		const uintDcawHK = BigInt("996")
		const uintgvchVnc = BigInt("986")
		const uintVxgoZCt = BigInt("971")
		const bytenIbzFoa = "0x03020b0b0b170503001b0312200d15171e0a1716080d0818101515100e140504"
		const addresseHSkHB3 = accounts[3]
		const uintzSPXnPb = BigInt("936")
		const uintlKza1u = BigInt("1703")
		const byteZXqB2pe = "0x05171f030e19200611100f1b14071f07181f0401151c191a0f190c0515171813"
		const boolKx9qtMe = await Revivegt4vpwV.transferWithLock.call(addressZri0JA0, byteYkD0OVW, uintEqX3yQM, uintqdFxIBM, {from: accounts[1]});
		const uint256bmC030v = await Revivegt4vpwV.tokensLockedAtTime.call(addressHaLLus7, bytetkPNb9k, uintBWzAcg9, {from: accounts[3]});
		const uint256ZRdNpnq = await Revivegt4vpwV.recoverERC20.call(uintDcawHK, {from: accounts[1]});
		const booleM86qjw = await Revivegt4vpwV.lock.call(bytenIbzFoa, uintVxgoZCt, uintgvchVnc, {from: accounts[0]});
		const uint256fNtxVj5 = await Revivegt4vpwV.balanceOf.call(addresseHSkHB3, {from: accounts[4]});
		const boolpaQrjGF = await Revivegt4vpwV.lock.call(byteZXqB2pe, uintlKza1u, uintzSPXnPb, {from: accounts[2]});

		assert.equal(boolKx9qtMe, true)
		assert.equal(uint256bmC030v, BigInt("0"))
		await expect(Revivegt4vpwV.recoverERC20.call(uintDcawHK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJHoIj3n = await Revive.new({from: accounts[0]});
		const addressSj3DvYp = accounts[3]
		const uintEqQJfJ = BigInt("1381")
		const uint256FrcTh9l = await ReviveJHoIj3n.getUnlockableTokens.call(addressSj3DvYp, {from: accounts[2]});
		const uint256lnr1uAl = await ReviveJHoIj3n.recoverERC20.call(uintEqQJfJ, {from: accounts[1]});

		assert.equal(uint256FrcTh9l, BigInt("0"))
		await expect(ReviveJHoIj3n.recoverERC20.call(uintEqQJfJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqHCmZdJ = await Revive.new({from: accounts[0]});
		const addressazNfl2v = accounts[5]
		const addressCvWQBg1 = accounts[0]
		const uintujOQpoC = BigInt("632")
		const addressnEdBVyu = accounts[4]
		const uintkv31q6S = BigInt("1537")
		const addressWjdXFE4 = accounts[0]
		const uint256icAtOKW = await ReviveqHCmZdJ.unlock.call(addressazNfl2v, {from: accounts[0]});
		const uint256uEt3MBV = await ReviveqHCmZdJ.getUnlockableTokens.call(addressCvWQBg1, {from: accounts[3]});
		const uint256HSVWPsR = await ReviveqHCmZdJ.recoverERC20.call(uintujOQpoC, {from: accounts[3]});
		const uint256ezTQq6 = await ReviveqHCmZdJ.unlock.call(addressnEdBVyu, {from: accounts[2]});
		const boolR5YlT7w = await ReviveqHCmZdJ.decreaseAllowance.call(addressWjdXFE4, uintkv31q6S, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256icAtOKW, BigInt("0"))
		assert.equal(uint256uEt3MBV, BigInt("0"))
		await expect(ReviveqHCmZdJ.recoverERC20.call(uintujOQpoC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})