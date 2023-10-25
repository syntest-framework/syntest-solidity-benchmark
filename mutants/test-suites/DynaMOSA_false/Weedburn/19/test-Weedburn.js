const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringrwr2vAI = "g58a4dyUMAn8NizFIy3b3KxvbbOox4sVvGx"
		const stringpqZdS4v = "sIbZz7p0YPgoSMB5j9ezmEr6OE8VtTOdSDw"
		const uintcxhVwqs = BigInt("212")
		const WeedburnXkkIqCj = await Weedburn.new(stringrwr2vAI, stringpqZdS4v, uintcxhVwqs, {from: "0x0000000000000000000000000000000000000001"});
		const uintVe99zWi = BigInt("1265")
		const addressp5VVnzR = accounts[2]
		const uintOcm5rST = BigInt("716")
		const addressKIdeb96 = "0x0000000000000000000000000000000000000001"
		const addresstg1sGEb = accounts[2]
		const addressd8Ln3M5 = accounts[5]
		const boolPEQ86eY = await WeedburnXkkIqCj.approve.call(addressp5VVnzR, uintVe99zWi, {from: accounts[4]});
		const uint8EM1zY6j = await WeedburnXkkIqCj.decimals.call({from: accounts[5]});
		await WeedburnXkkIqCj.enableDevMode.call({from: accounts[4]});
		const boolw1lQcwm = await WeedburnXkkIqCj.transferFrom.call(addresstg1sGEb, addressKIdeb96, uintOcm5rST, {from: accounts[3]});
		const uint256RvihrCf = await WeedburnXkkIqCj.balanceOf.call(addressd8Ln3M5, {from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const WeedburnhvhWRxU = await Weedburn.new({from: accounts[1]});
		const uintNIt6Iv3 = BigInt("1380")
		const addressnwkqr3q = accounts[5]
		const uintvrYUr7C = BigInt("1812")
		const addressDWGQFtb = accounts[0]
		const stringDK14jZp = await WeedburnhvhWRxU.name.call({from: accounts[3]});
//		const boolyUPolCq = await WeedburnhvhWRxU.decreaseAllowance.call(addressnwkqr3q, uintNIt6Iv3, {from: accounts[4]});
//		const boolD0kPABh = await WeedburnhvhWRxU.approve.call(addressDWGQFtb, uintvrYUr7C, {from: accounts[2]});
//		const stringHsxGvV = await WeedburnhvhWRxU.symbol.call({from: accounts[5]});

		assert.equal(stringDK14jZp, "t.me/burnweed1")
		await expect(WeedburnhvhWRxU.decreaseAllowance.call(addressnwkqr3q, uintNIt6Iv3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburntSx5ysr = await Weedburn.new({from: accounts[0]});
		const addressCPi4pzW = accounts[4]
		const uintupXkihn = BigInt("1019")
//		await WeedburntSx5ysr.disableLimitMode.call({from: accounts[2]});
//		const uint256KzvETmA = await WeedburntSx5ysr.balanceOf.call(addressCPi4pzW, {from: accounts[3]});
//		const uint8Hx39KUR = await WeedburntSx5ysr.decimals.call({from: accounts[3]});
//		const uint256ikv02L7 = await WeedburntSx5ysr.burn.call(uintupXkihn, {from: accounts[0]});
//		const stringAq8GWUh = await WeedburntSx5ysr.name.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburntSx5ysr.disableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnX46GwVU = await Weedburn.new({from: accounts[1]});
		const uintHL3UqMF = BigInt("744")
		const addressSUqjs4u = accounts[2]
		const boolWCLQHXO = await WeedburnX46GwVU.increaseAllowance.call(addressSUqjs4u, uintHL3UqMF, {from: accounts[0]});
//		await WeedburnX46GwVU.disableDevMode.call({from: accounts[3]});
//		const uint256ZERtBvI = await WeedburnX46GwVU.totalSupply.call({from: accounts[5]});

		assert.equal(boolWCLQHXO, true)
		await expect(WeedburnX46GwVU.disableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnhvhWRxU = await Weedburn.new({from: accounts[1]});
		const uintrkCXKSZ = BigInt("1161")
		const addresskIGu22Z = accounts[5]
		const addressMsbttVH = accounts[1]
		const uintoQ18Jfx = BigInt("1380")
		const addressvkkasbl = accounts[5]
		const uintMJT2Dfy = BigInt("1812")
		const addressyURlLq = accounts[0]
		const addressnLgVruS = accounts[3]
		const addresslBGYcJu = accounts[2]
		const stringDK14jZp = await WeedburnhvhWRxU.name.call({from: accounts[3]});
//		const boolFOMClCW = await WeedburnhvhWRxU.transferFrom.call(addressMsbttVH, addresskIGu22Z, uintrkCXKSZ, {from: accounts[1]});
//		const boolyUPolCq = await WeedburnhvhWRxU.decreaseAllowance.call(addressvkkasbl, uintoQ18Jfx, {from: accounts[4]});
//		const boolD0kPABh = await WeedburnhvhWRxU.approve.call(addressyURlLq, uintMJT2Dfy, {from: accounts[2]});
//		const stringHsxGvV = await WeedburnhvhWRxU.symbol.call({from: accounts[5]});
//		const uint256kYXZDfm = await WeedburnhvhWRxU.allowance.call(addresslBGYcJu, addressnLgVruS, {from: accounts[3]});

		assert.equal(stringDK14jZp, "t.me/burnweed1")
		await expect(WeedburnhvhWRxU.transferFrom.call(addressMsbttVH, addresskIGu22Z, uintrkCXKSZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZxPsivq = await Weedburn.new({from: accounts[3]});
		const uintiInAnoX = BigInt("1558")
		const addresszAnl4xu = accounts[0]
		const uintPKlkHk = BigInt("432")
		const addressOl8c8fp = accounts[1]
		const addressvValPU4 = accounts[1]
		const uintuJ1Rc60 = BigInt("1790")
//		const addressMv0pDt = await WeedburnZxPsivq.burnFrom.call(addresszAnl4xu, uintiInAnoX, {from: accounts[2]});
//		await WeedburnZxPsivq.enableLimitMode.call({from: accounts[2]});
//		const uint256txcjHVf = await WeedburnZxPsivq.totalSupply.call({from: accounts[4]});
//		const boolCuRioh = await WeedburnZxPsivq.transferFrom.call(addressvValPU4, addressOl8c8fp, uintPKlkHk, {from: accounts[3]});
//		const uint256luE6fOY = await WeedburnZxPsivq.totalSupply.call({from: accounts[2]});
//		const uint256v4M8dCM = await WeedburnZxPsivq.burn.call(uintuJ1Rc60, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnZxPsivq.burnFrom.call(addresszAnl4xu, uintiInAnoX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnX46GwVU = await Weedburn.new({from: accounts[1]});
		const uintZpdxVjp = BigInt("744")
		const addresswUSaTry = accounts[2]
		const boolWCLQHXO = await WeedburnX46GwVU.increaseAllowance.call(addresswUSaTry, uintZpdxVjp, {from: accounts[0]});
//		await WeedburnX46GwVU.enableLimitMode.call({from: accounts[5]});
//		await WeedburnX46GwVU.disableDevMode.call({from: accounts[3]});
//		const uint256ZERtBvI = await WeedburnX46GwVU.totalSupply.call({from: accounts[5]});

		assert.equal(boolWCLQHXO, true)
		await expect(WeedburnX46GwVU.enableLimitMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnX46GwVU = await Weedburn.new({from: accounts[1]});
		const uintDDZzpis = BigInt("744")
		const addressLkiHJyD = accounts[2]
		const uintNaB2UkC = BigInt("1985")
		const addressfKBfFK = accounts[5]
		const addressHQketYT = accounts[4]
		const uintOY62Z6V = BigInt("234")
		const addressCCLw7eS = accounts[4]
		const boolWCLQHXO = await WeedburnX46GwVU.increaseAllowance.call(addressLkiHJyD, uintDDZzpis, {from: accounts[0]});
//		await WeedburnX46GwVU.enableDevMode.call({from: accounts[4]});
//		const boolqKNtSP = await WeedburnX46GwVU.transferFrom.call(addressHQketYT, addressfKBfFK, uintNaB2UkC, {from: accounts[2]});
//		const boolTzaGl0 = await WeedburnX46GwVU.approve.call(addressCCLw7eS, uintOY62Z6V, {from: accounts[5]});
//		await WeedburnX46GwVU.disableDevMode.call({from: accounts[3]});
//		const uint256ZERtBvI = await WeedburnX46GwVU.totalSupply.call({from: accounts[5]});
//		const uint8ejvcygw = await WeedburnX46GwVU.decimals.call({from: accounts[3]});

		assert.equal(boolWCLQHXO, true)
		await expect(WeedburnX46GwVU.enableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnhvhWRxU = await Weedburn.new({from: accounts[1]});
		const uintv0RZ2U9 = BigInt("1812")
		const addressXG4KtEk = accounts[0]
		const addressHV17NXz = accounts[3]
		const addressJ6ot65K = accounts[2]
		const stringDK14jZp = await WeedburnhvhWRxU.name.call({from: accounts[3]});
		const boolD0kPABh = await WeedburnhvhWRxU.approve.call(addressXG4KtEk, uintv0RZ2U9, {from: accounts[2]});
		const stringHsxGvV = await WeedburnhvhWRxU.symbol.call({from: accounts[5]});
		const uint256kYXZDfm = await WeedburnhvhWRxU.allowance.call(addressJ6ot65K, addressHV17NXz, {from: accounts[3]});

		assert.equal(boolD0kPABh, true)
		assert.equal(stringDK14jZp, "t.me/burnweed1")
		assert.equal(stringHsxGvV, "Weedburn")
		assert.equal(uint256kYXZDfm, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const WeedburnhvhWRxU = await Weedburn.new({from: accounts[1]});
		const uinthEfJX5x = BigInt("526")
		const addressrF1NH2 = accounts[4]
		const uintbsdP6qp = BigInt("1161")
		const addressSRpwv2F = accounts[5]
		const address63kczJ = accounts[1]
		const uintlca6FN = BigInt("1829")
		const addressqKobshL = accounts[0]
		const addressT397yOv = accounts[3]
		const addressWox9jKo = accounts[2]
		const uint256tXWGboB = await WeedburnhvhWRxU.totalSupply.call({from: accounts[2]});
		const stringDK14jZp = await WeedburnhvhWRxU.name.call({from: accounts[3]});
		const booluVRYeJo = await WeedburnhvhWRxU.approve.call(addressrF1NH2, uinthEfJX5x, {from: "0x0000000000000000000000000000000000000001"});
//		const boolFOMClCW = await WeedburnhvhWRxU.transferFrom.call(address63kczJ, addressSRpwv2F, uintbsdP6qp, {from: accounts[1]});
//		const boolD0kPABh = await WeedburnhvhWRxU.approve.call(addressqKobshL, uintlca6FN, {from: accounts[2]});
//		await WeedburnhvhWRxU.enableLimitMode.call({from: accounts[2]});
//		const stringuds3MQh = await WeedburnhvhWRxU.name.call({from: accounts[5]});
//		const uint256kYXZDfm = await WeedburnhvhWRxU.allowance.call(addressWox9jKo, addressT397yOv, {from: accounts[3]});

		assert.equal(booluVRYeJo, true)
		assert.equal(stringDK14jZp, "t.me/burnweed1")
		assert.equal(uint256tXWGboB, BigInt("100000000000000000000000"))
		await expect(WeedburnhvhWRxU.transferFrom.call(address63kczJ, addressSRpwv2F, uintbsdP6qp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnfhqiULf = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintv38mQNv = BigInt("1436")
		const addressFZ5swE = accounts[0]
		const uintVi4u2Fc = BigInt("1797")
		const addresstSrWicW = accounts[2]
		const uint8xYD54xk = await WeedburnfhqiULf.decimals.call({from: accounts[2]});
		const boolbk6LyaY = await WeedburnfhqiULf.approve.call(addressFZ5swE, uintv38mQNv, {from: accounts[4]});
		const addressELXVj50 = await WeedburnfhqiULf.burnFrom.call(addresstSrWicW, uintVi4u2Fc, {from: accounts[1]});
		const uint256HpBUEME = await WeedburnfhqiULf.totalSupply.call({from: accounts[4]});
		const uint256U7JPNi6 = await WeedburnfhqiULf.totalSupply.call({from: accounts[1]});
		const uint8Om5k8dM = await WeedburnfhqiULf.decimals.call({from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const WeedburnhvhWRxU = await Weedburn.new({from: accounts[1]});
		const uinttyTpV19 = BigInt("1620")
		const addressQpNk0nv = accounts[0]
		const uintx0A2qOF = BigInt("1637")
		const addressMATFzrt = accounts[5]
		const addressquCvuRS = accounts[1]
		const uintIfIuUjL = BigInt("1380")
		const addresstdhu3b1 = accounts[5]
		const addressWvXCTC8 = accounts[1]
		const address0ylf3V = accounts[2]
		const addressR6fMUFc = "0x0000000000000000000000000000000000000001"
//		const boolnJpaBQT = await WeedburnhvhWRxU.transfer.call(addressQpNk0nv, uinttyTpV19, {from: accounts[2]});
//		const boolFOMClCW = await WeedburnhvhWRxU.transferFrom.call(addressquCvuRS, addressMATFzrt, uintx0A2qOF, {from: accounts[1]});
//		const boolyUPolCq = await WeedburnhvhWRxU.decreaseAllowance.call(addresstdhu3b1, uintIfIuUjL, {from: accounts[4]});
//		const uint256hc9ZuUo = await WeedburnhvhWRxU.allowance.call(address0ylf3V, addressWvXCTC8, {from: accounts[1]});
//		await WeedburnhvhWRxU.enableDevMode.call({from: accounts[4]});
//		const uint256GDXWtWg = await WeedburnhvhWRxU.balanceOf.call(addressR6fMUFc, {from: accounts[0]});
//		const stringHsxGvV = await WeedburnhvhWRxU.symbol.call({from: accounts[5]});

		await expect(WeedburnhvhWRxU.transfer.call(addressQpNk0nv, uinttyTpV19, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnhvhWRxU = await Weedburn.new({from: accounts[1]});
		const uintVzI1fim = BigInt("1009")
		const addressBnhg1Do = accounts[1]
		const uintlWQ1WZs = BigInt("1603")
		const addresskE8GvT = accounts[5]
		const uintOkqatJ6 = BigInt("398")
		const addressLeGhjHV = accounts[2]
		const uintq2aLzCe = BigInt("1637")
		const addressukiujKy = accounts[5]
		const addressznD4hyv = accounts[2]
		const uint8EjVyJc = await WeedburnhvhWRxU.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolwm3fhai = await WeedburnhvhWRxU.transfer.call(addressBnhg1Do, uintVzI1fim, {from: "0x0000000000000000000000000000000000000001"});
//		const bool7DTBWM = await WeedburnhvhWRxU.approve.call(addresskE8GvT, uintlWQ1WZs, {from: accounts[1]});
//		const booldKmRDtr = await WeedburnhvhWRxU.transfer.call(addressLeGhjHV, uintOkqatJ6, {from: accounts[4]});
//		const boolFOMClCW = await WeedburnhvhWRxU.transferFrom.call(addressznD4hyv, addressukiujKy, uintq2aLzCe, {from: accounts[1]});

		assert.equal(uint8EjVyJc, BigInt("18"))
		await expect(WeedburnhvhWRxU.transfer.call(addressBnhg1Do, uintVzI1fim, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnhvhWRxU = await Weedburn.new({from: accounts[1]});
		const addressO6dZjCK = accounts[0]
		const uintMhewhqV = BigInt("1448")
		const addressdhGmGKu = accounts[4]
		const uint6C7eBX = BigInt("1617")
		const addresskpbhmz1 = accounts[2]
		const uintDbVIXLR = BigInt("1829")
		const addressJcBpAJh = accounts[0]
		const addressDk7TVzr = accounts[4]
		const uintFN4Qz0S = BigInt("226")
		const addressUjdBaZI = accounts[3]
		const addressuS8ZIlJ = accounts[2]
		const stringDK14jZp = await WeedburnhvhWRxU.name.call({from: accounts[3]});
		const uint256oMNbxke = await WeedburnhvhWRxU.balanceOf.call(addressO6dZjCK, {from: accounts[4]});
		const boolzm3z7e = await WeedburnhvhWRxU.increaseAllowance.call(addressdhGmGKu, uintMhewhqV, {from: accounts[5]});
//		await WeedburnhvhWRxU.enableDevMode.call({from: accounts[1]});
//		await WeedburnhvhWRxU.disableLimitMode.call({from: accounts[0]});
//		const boolsMnKMXY = await WeedburnhvhWRxU.approve.call(addresskpbhmz1, uint6C7eBX, {from: accounts[0]});
//		const boolD0kPABh = await WeedburnhvhWRxU.approve.call(addressJcBpAJh, uintDbVIXLR, {from: accounts[2]});
//		const uint256Czsa1s = await WeedburnhvhWRxU.balanceOf.call(addressDk7TVzr, {from: accounts[1]});
//		const uint256D3DWP2H = await WeedburnhvhWRxU.burn.call(uintFN4Qz0S, {from: accounts[4]});
//		await WeedburnhvhWRxU.enableLimitMode.call({from: accounts[2]});
//		const stringuds3MQh = await WeedburnhvhWRxU.name.call({from: accounts[5]});
//		const uint256kYXZDfm = await WeedburnhvhWRxU.allowance.call(addressuS8ZIlJ, addressUjdBaZI, {from: accounts[3]});

		assert.equal(boolzm3z7e, true)
		assert.equal(stringDK14jZp, "t.me/burnweed1")
		assert.equal(uint256oMNbxke, BigInt("0"))
		await expect(WeedburnhvhWRxU.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburngAHZ1Q8 = await Weedburn.new({from: accounts[0]});
		const uinteYsXPdA = BigInt("32")
		const uint256tZWHPZB = await WeedburngAHZ1Q8.burn.call(uinteYsXPdA, {from: accounts[0]});
		const stringHIis26b = await WeedburngAHZ1Q8.name.call({from: accounts[1]});
		const uint25652tQQv = await WeedburngAHZ1Q8.totalSupply.call({from: accounts[4]});
		const uint8kITIXDg = await WeedburngAHZ1Q8.decimals.call({from: accounts[0]});
		const uint256F9O8suh = await WeedburngAHZ1Q8.totalSupply.call({from: accounts[2]});

		assert.equal(stringHIis26b, "t.me/burnweed1")
		assert.equal(uint25652tQQv, BigInt("100000000000000000000000"))
		assert.equal(uint256F9O8suh, BigInt("100000000000000000000000"))
		assert.equal(uint8kITIXDg, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const WeedburnhvhWRxU = await Weedburn.new({from: accounts[1]});
		const addressAO95hpr = accounts[0]
		const uintT56nXOn = BigInt("967")
		const addressS3kRhk6 = accounts[1]
		const uinte9t1kQ6 = BigInt("1009")
		const addresssfIFUtH = accounts[2]
		const uint256j0mHTgV = await WeedburnhvhWRxU.balanceOf.call(addressAO95hpr, {from: accounts[2]});
		const boolBV8bUK7 = await WeedburnhvhWRxU.transfer.call(addressS3kRhk6, uintT56nXOn, {from: accounts[1]});
//		const boolwm3fhai = await WeedburnhvhWRxU.transfer.call(addresssfIFUtH, uinte9t1kQ6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBV8bUK7, true)
		assert.equal(uint256j0mHTgV, BigInt("0"))
		await expect(WeedburnhvhWRxU.transfer.call(addresssfIFUtH, uinte9t1kQ6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})