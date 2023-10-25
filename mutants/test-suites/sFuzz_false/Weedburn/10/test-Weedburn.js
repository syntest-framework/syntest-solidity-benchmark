const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringojqyCOQ = "YaiNPITLYl3jJ5QJxdzkKBphd70gOez"
		const stringQWLwONf = "oi9Qe3CONpj0koHOLVCVwPogdFsnboDlxEzy6y5HQyuDIKE4pFun9Phuw7GKEN2OlGlCCoRcOP19VocDPtUYnWRjjw6m4N5"
		const uintVyzSkFa = BigInt("180")
		const WeedburnVNHDsDd = await Weedburn.new(stringojqyCOQ, stringQWLwONf, uintVyzSkFa, {from: accounts[3]});
		const uintefhDEAi = BigInt("180")
		const addressL7mk9T2 = accounts[2]
		const uinttgrfT44 = BigInt("721")
		const addressiGH2uD = accounts[1]
		await WeedburnVNHDsDd.enableDevMode.call({from: accounts[4]});
		const booljAcLc00 = await WeedburnVNHDsDd.decreaseAllowance.call(addressL7mk9T2, uintefhDEAi, {from: accounts[4]});
		await WeedburnVNHDsDd.enableLimitMode.call({from: accounts[4]});
		const boolG3aZfi5 = await WeedburnVNHDsDd.approve.call(addressiGH2uD, uinttgrfT44, {from: accounts[2]});
	});

	it('test for Weedburn', async () => {
		const WeedburnKbzR14P = await Weedburn.new({from: accounts[5]});
		const uintVjQHDAf = BigInt("1284")
		const uintzryzJBk = BigInt("941")
		const addresssqErD0L = accounts[2]
		const uintzwj4Wlp = BigInt("1071")
		const addressSCurlTK = accounts[2]
		const addressmBwFaq9 = accounts[1]
		const addressvn3Q8Yl = accounts[1]
//		const uint256KpeqqzD = await WeedburnKbzR14P.burn.call(uintVjQHDAf, {from: accounts[3]});
//		const addressrF5cIl = await WeedburnKbzR14P.burnFrom.call(addresssqErD0L, uintzryzJBk, {from: accounts[0]});
//		const addressHH5yaWT = await WeedburnKbzR14P.burnFrom.call(addressSCurlTK, uintzwj4Wlp, {from: accounts[2]});
//		const uint256bESiCbQ = await WeedburnKbzR14P.allowance.call(addressvn3Q8Yl, addressmBwFaq9, {from: accounts[5]});
//		const uint256tIqziLR = await WeedburnKbzR14P.totalSupply.call({from: accounts[1]});

		await expect(WeedburnKbzR14P.burn.call(uintVjQHDAf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwFHM47b = await Weedburn.new({from: accounts[2]});
		const uintrS1BcXZ = BigInt("1013")
		const addressJ962FkN = "0x0000000000000000000000000000000000000001"
		const addressnoWD8xq = accounts[0]
		const uintxN3VdbI = BigInt("906")
		const addressTq0dVNZ = accounts[0]
		const addressJPU7S52 = accounts[1]
		const uintLVEcOfk = BigInt("1072")
		const address53UbAU = accounts[3]
		const stringWEi0jVv = await WeedburnwFHM47b.symbol.call({from: accounts[1]});
//		const boolT3p85M = await WeedburnwFHM47b.transferFrom.call(addressnoWD8xq, addressJ962FkN, uintrS1BcXZ, {from: accounts[1]});
//		const boolwJytu7X = await WeedburnwFHM47b.transferFrom.call(addressJPU7S52, addressTq0dVNZ, uintxN3VdbI, {from: accounts[0]});
//		const booljMhzlwW = await WeedburnwFHM47b.transfer.call(address53UbAU, uintLVEcOfk, {from: accounts[3]});
//		await WeedburnwFHM47b.enableDevMode.call({from: accounts[1]});

		assert.equal(stringWEi0jVv, "Weedburn")
		await expect(WeedburnwFHM47b.transferFrom.call(addressnoWD8xq, addressJ962FkN, uintrS1BcXZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnm4OFp6K = await Weedburn.new({from: accounts[0]});
		const uintrlF22da = BigInt("1769")
		const addressuVpcrQv = accounts[5]
		const uintX9VbHfA = BigInt("512")
		const addresskjNsCz3 = accounts[5]
//		await Weedburnm4OFp6K.disableLimitMode.call({from: accounts[5]});
//		const boolHMpp3cE = await Weedburnm4OFp6K.approve.call(addressuVpcrQv, uintrlF22da, {from: accounts[3]});
//		await Weedburnm4OFp6K.enableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolMobLLR = await Weedburnm4OFp6K.decreaseAllowance.call(addresskjNsCz3, uintX9VbHfA, {from: accounts[3]});

		await expect(Weedburnm4OFp6K.disableLimitMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnqdnum4m = await Weedburn.new({from: accounts[4]});
		const addressDFggMZ9 = accounts[4]
		const addressp4VzbzL = accounts[2]
		const uint256ZMlVyjd = await Weedburnqdnum4m.allowance.call(addressp4VzbzL, addressDFggMZ9, {from: accounts[5]});
		const uint8wluu2gq = await Weedburnqdnum4m.decimals.call({from: accounts[4]});
		const stringxDDL7X5 = await Weedburnqdnum4m.symbol.call({from: accounts[4]});
		const uint256mz4uGNr = await Weedburnqdnum4m.totalSupply.call({from: accounts[1]});
		const uint256UElh5C3 = await Weedburnqdnum4m.totalSupply.call({from: accounts[0]});

		assert.equal(stringxDDL7X5, "Weedburn")
		assert.equal(uint256UElh5C3, BigInt("100000000000000000000000"))
		assert.equal(uint256ZMlVyjd, BigInt("0"))
		assert.equal(uint256mz4uGNr, BigInt("100000000000000000000000"))
		assert.equal(uint8wluu2gq, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const Weedburnx1jxB23 = await Weedburn.new({from: accounts[3]});
		const uinten0aaus = BigInt("2003")
		const addressUNdUmWz = accounts[3]
//		const addressJJjSJMJ = await Weedburnx1jxB23.burnFrom.call(addressUNdUmWz, uinten0aaus, {from: accounts[4]});
//		const uint8FPpq5Dr = await Weedburnx1jxB23.decimals.call({from: accounts[4]});

		await expect(Weedburnx1jxB23.burnFrom.call(addressUNdUmWz, uinten0aaus, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnx1jxB23 = await Weedburn.new({from: accounts[3]});
		const uintBCzgpF1 = BigInt("1284")
		const uintGyUOhc = BigInt("2003")
		const addressPJuMaTZ = accounts[3]
//		await Weedburnx1jxB23.enableLimitMode.call({from: accounts[0]});
//		const uint256F1mLmlT = await Weedburnx1jxB23.burn.call(uintBCzgpF1, {from: accounts[0]});
//		const addressJJjSJMJ = await Weedburnx1jxB23.burnFrom.call(addressPJuMaTZ, uintGyUOhc, {from: accounts[4]});
//		const uint8FPpq5Dr = await Weedburnx1jxB23.decimals.call({from: accounts[4]});

		await expect(Weedburnx1jxB23.enableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnx1jxB23 = await Weedburn.new({from: accounts[3]});
		const uintkhctgRf = BigInt("2003")
		const addressQRdh3ZN = accounts[3]
//		await Weedburnx1jxB23.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressJJjSJMJ = await Weedburnx1jxB23.burnFrom.call(addressQRdh3ZN, uintkhctgRf, {from: accounts[4]});
//		const uint8FPpq5Dr = await Weedburnx1jxB23.decimals.call({from: accounts[4]});

		await expect(Weedburnx1jxB23.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnx1jxB23 = await Weedburn.new({from: accounts[3]});
		const uintjf21Xw6 = BigInt("1377")
		const addresssXd8J6o = accounts[3]
		const uintJYKMvv = BigInt("2003")
		const addressd0qzsKj = accounts[4]
//		const boolnvPg28Q = await Weedburnx1jxB23.decreaseAllowance.call(addresssXd8J6o, uintjf21Xw6, {from: accounts[4]});
//		const addressJJjSJMJ = await Weedburnx1jxB23.burnFrom.call(addressd0qzsKj, uintJYKMvv, {from: accounts[4]});
//		const uint8FPpq5Dr = await Weedburnx1jxB23.decimals.call({from: accounts[4]});

		await expect(Weedburnx1jxB23.decreaseAllowance.call(addresssXd8J6o, uintjf21Xw6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnx1jxB23 = await Weedburn.new({from: accounts[3]});
		const uintZxFKPA = BigInt("1932")
		const addressjYLG0PD = accounts[3]
		const uintQAPfkTf = BigInt("2003")
		const addressa9prKng = accounts[3]
		const boolFdByU2A = await Weedburnx1jxB23.approve.call(addressjYLG0PD, uintZxFKPA, {from: "0x0000000000000000000000000000000000000001"});
//		const addressJJjSJMJ = await Weedburnx1jxB23.burnFrom.call(addressa9prKng, uintQAPfkTf, {from: accounts[4]});
//		const uint256ZWXnSmw = await Weedburnx1jxB23.totalSupply.call({from: accounts[3]});
//		const uint8FPpq5Dr = await Weedburnx1jxB23.decimals.call({from: accounts[4]});

		assert.equal(boolFdByU2A, true)
		await expect(Weedburnx1jxB23.burnFrom.call(addressa9prKng, uintQAPfkTf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnx1jxB23 = await Weedburn.new({from: accounts[3]});
		const uinte9Q8XT3 = BigInt("80")
		const addressTITu3Vc = accounts[3]
		const uintHuoagRm = BigInt("2003")
		const addressVrXs9QV = accounts[3]
		const boolAyimXQ = await Weedburnx1jxB23.increaseAllowance.call(addressTITu3Vc, uinte9Q8XT3, {from: accounts[0]});
//		const addressJJjSJMJ = await Weedburnx1jxB23.burnFrom.call(addressVrXs9QV, uintHuoagRm, {from: accounts[4]});

		assert.equal(boolAyimXQ, true)
		await expect(Weedburnx1jxB23.burnFrom.call(addressVrXs9QV, uintHuoagRm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnx1jxB23 = await Weedburn.new({from: accounts[3]});
		const addressoM1EWuq = accounts[3]
		const uintf8jP2fq = BigInt("970")
		const addressUmUDX5q = accounts[1]
		const uinttAftIX = BigInt("2003")
		const addressNGxJWP = accounts[3]
		const uint256VXwFuR = await Weedburnx1jxB23.balanceOf.call(addressoM1EWuq, {from: accounts[5]});
		const stringMQgQ3z1 = await Weedburnx1jxB23.symbol.call({from: accounts[5]});
		const boolndRMkqA = await Weedburnx1jxB23.transfer.call(addressUmUDX5q, uintf8jP2fq, {from: accounts[3]});
//		const addressJJjSJMJ = await Weedburnx1jxB23.burnFrom.call(addressNGxJWP, uinttAftIX, {from: accounts[4]});

		assert.equal(boolndRMkqA, true)
		assert.equal(stringMQgQ3z1, "Weedburn")
		assert.equal(uint256VXwFuR, BigInt("100000000000000000000000"))
		await expect(Weedburnx1jxB23.burnFrom.call(addressNGxJWP, uinttAftIX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnx1jxB23 = await Weedburn.new({from: accounts[3]});
		const uinthxuXoaN = BigInt("935")
		const addresszvy8ia = accounts[3]
		const uinttq0x712 = BigInt("2003")
		const addressI8XqF85 = accounts[3]
		const boolFQjlE8R = await Weedburnx1jxB23.increaseAllowance.call(addresszvy8ia, uinthxuXoaN, {from: accounts[0]});
//		await Weedburnx1jxB23.disableDevMode.call({from: accounts[4]});
//		const addressJJjSJMJ = await Weedburnx1jxB23.burnFrom.call(addressI8XqF85, uinttq0x712, {from: accounts[4]});

		assert.equal(boolFQjlE8R, true)
		await expect(Weedburnx1jxB23.disableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnERZTPPo = await Weedburn.new({from: accounts[0]});
		const addressYEbXe1P = accounts[3]
		const uintfPa3C6U = BigInt("968")
		const addressVZ0fPmp = accounts[3]
		const stringvuzUrcp = await WeedburnERZTPPo.name.call({from: accounts[2]});
		const uint256pZ32d3s = await WeedburnERZTPPo.balanceOf.call(addressYEbXe1P, {from: accounts[2]});
//		const booljgi0DvV = await WeedburnERZTPPo.decreaseAllowance.call(addressVZ0fPmp, uintfPa3C6U, {from: accounts[0]});

		assert.equal(stringvuzUrcp, "t.me/burnweed1")
		assert.equal(uint256pZ32d3s, BigInt("0"))
		await expect(WeedburnERZTPPo.decreaseAllowance.call(addressVZ0fPmp, uintfPa3C6U, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnEEPHtwg = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCkDoTVL = BigInt("310")
		const addressQxjIvzd = accounts[3]
		const addressiwScu2S = accounts[4]
		const uintpuWJyD = BigInt("1741")
		const addressx6Wftmh = accounts[2]
		const addressVorLRf7 = accounts[4]
		const uintYD7YZXL = BigInt("1518")
		const uint256jZvTVj = await WeedburnEEPHtwg.burn.call(uintCkDoTVL, {from: accounts[3]});
		const uint256jXwOebs = await WeedburnEEPHtwg.allowance.call(addressiwScu2S, addressQxjIvzd, {from: accounts[1]});
		const boolVY9Htxd = await WeedburnEEPHtwg.transferFrom.call(addressVorLRf7, addressx6Wftmh, uintpuWJyD, {from: accounts[3]});
		const uint256ANlgCV = await WeedburnEEPHtwg.burn.call(uintYD7YZXL, {from: "0x0000000000000000000000000000000000000001"});
	});
})