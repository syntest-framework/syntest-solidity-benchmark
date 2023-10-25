const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressIJncXAI = accounts[4]
		const addressHQhlSKD = accounts[5]
		const uintoGehL8X = BigInt("140")
		const uintn7DX4OV = BigInt("513")
		const NasiLiquidityPoolFactoryBqs6weS = await NasiLiquidityPoolFactory.new(addressIJncXAI, addressHQhlSKD, uintoGehL8X, uintn7DX4OV, {from: accounts[2]});
		const uintgLiKPuw = BigInt("9")
		const addresscPHXbwM = accounts[2]
		const uintbijR4pH = BigInt("1884")
		const boolBGORysQ = await NasiLiquidityPoolFactoryBqs6weS.transfer.call(addresscPHXbwM, uintgLiKPuw, {from: accounts[4]});
		const uint256K4rEhsB = await NasiLiquidityPoolFactoryBqs6weS.burn.call(uintbijR4pH, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryBqs6weS.massUpdatePools.call({from: accounts[2]});
		const uint8C9onbvZ = await NasiLiquidityPoolFactoryBqs6weS.decimals.call({from: accounts[3]});
		const uint8GL3Wzj3 = await NasiLiquidityPoolFactoryBqs6weS.decimals.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringLgglRD1 = "Lep6IArB3BSUp9GFomulYARIIpC9BCLyGuP010Kh9vH7pgvc"
		const stringsgwtETY = "LY0AeVOE7"
		const uinty7w7uZ = BigInt("27")
		const NasiLiquidityPoolFactoryGtEvz4S = await NasiLiquidityPoolFactory.new(stringLgglRD1, stringsgwtETY, uinty7w7uZ, {from: accounts[3]});
		const uintIhFOtz = BigInt("1807")
		const addressS0YpOpC = accounts[2]
		const boolVxfsCV = await NasiLiquidityPoolFactoryGtEvz4S.transfer.call(addressS0YpOpC, uintIhFOtz, {from: accounts[3]});
		await NasiLiquidityPoolFactoryGtEvz4S.onlyMinter.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringkYqhfz2 = "MAqSRa6rakccJBcu7z72tIrnVOzzVbXpe9MyDPgdp1afqGTeWL6st9kcBd9WOjBMvLDER6bvdUkU8l3lFeVVsThfPbVKRbYU"
		const strings7mwtxJ = "oHoAx5j4P4xt7rsU7ONlDqXScKjEEtJEF"
		const uintVtMNgrb = BigInt("148")
		const NasiLiquidityPoolFactoryQJnLCIX = await NasiLiquidityPoolFactory.new(stringkYqhfz2, strings7mwtxJ, uintVtMNgrb, {from: accounts[0]});
		const uinta6hDHrE = BigInt("379")
		const uint256vgBLQnM = await NasiLiquidityPoolFactoryQJnLCIX.updatePool.call(uinta6hDHrE, {from: accounts[5]});
		await NasiLiquidityPoolFactoryQJnLCIX.renounceMinter.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringHzTxxGd = "Rj6bGRuGyw4SQajlfrTKMEwqkBMVaSDFxNWdlwipTTysMj1ENh9qHpaebbI7"
		const stringU5SSxzc = "XIH0YdtVGtVHn14gXQHJuNBrdBGbJ1jnvBBGQzPLkrIzfAwT8QJJseNhQKnOBA"
		const uintGHzS7T5 = BigInt("104")
		const NasiLiquidityPoolFactoryilUhmld = await NasiLiquidityPoolFactory.new(stringHzTxxGd, stringU5SSxzc, uintGHzS7T5, {from: accounts[5]});
		const addressKr9Kwe6 = accounts[0]
		const uintuqCOHkG = BigInt("644")
		const addresskyjJzDt = accounts[2]
		const uintaSsimZ = BigInt("1923")
		const uintLLbRc3p = BigInt("1187")
		const addressWNrJTKG = "0x0000000000000000000000000000000000000001"
		const addressQbDC0MU = await NasiLiquidityPoolFactoryilUhmld.setMigrator.call(addressKr9Kwe6, {from: accounts[1]});
		const booleXGv63D = await NasiLiquidityPoolFactoryilUhmld.mint.call(addresskyjJzDt, uintuqCOHkG, {from: accounts[0]});
		const uint256usPeqDJ = await NasiLiquidityPoolFactoryilUhmld.updatePool.call(uintaSsimZ, {from: accounts[2]});
		const boolXe9HFmb = await NasiLiquidityPoolFactoryilUhmld.decreaseAllowance.call(addressWNrJTKG, uintLLbRc3p, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringnsDFtT2 = "AaSd8VmCHB"
		const stringlIYcHb5 = "OlNJL2to8wLgpRR1"
		const uintuRIrdLl = BigInt("158")
		const NasiLiquidityPoolFactoryNrdX5IA = await NasiLiquidityPoolFactory.new(stringnsDFtT2, stringlIYcHb5, uintuRIrdLl, {from: accounts[3]});
		const addressSi8fsm = accounts[3]
		const addressmEvsRGZ = accounts[2]
		const uint256HvmlKd2 = await NasiLiquidityPoolFactoryNrdX5IA.totalSupply.call({from: accounts[3]});
		const addressZbrinxJ = await NasiLiquidityPoolFactoryNrdX5IA.owner.call({from: accounts[3]});
		const uint256SfOuG2d = await NasiLiquidityPoolFactoryNrdX5IA.allowance.call(addressmEvsRGZ, addressSi8fsm, {from: accounts[2]});
		await NasiLiquidityPoolFactoryNrdX5IA.renounceOwnership.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringViJPW4O = "QSqsIqqJygqS0gQxefwGkhrGLLr5O3aLYjMakK0nuruSwoJwOOVG2Wp9Xivke"
		const stringQhxxZV = "Zxswj4O"
		const uintxOEBcb = BigInt("158")
		const NasiLiquidityPoolFactoryS06m9r4 = await NasiLiquidityPoolFactory.new(stringViJPW4O, stringQhxxZV, uintxOEBcb, {from: accounts[5]});
		const uintKqdLIw8 = BigInt("1421")
		await NasiLiquidityPoolFactoryS06m9r4.pause.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryS06m9r4.pause.call({from: accounts[2]});
		const uint256jvn4tax = await NasiLiquidityPoolFactoryS06m9r4.enterStaking.call(uintKqdLIw8, {from: accounts[0]});
		await NasiLiquidityPoolFactoryS06m9r4.onlyPauser.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressrnKdwFd = accounts[5]
		const addresslBlS5Dw = accounts[2]
		const uintdiXk3hS = BigInt("1490")
		const uintcWYVOUj = BigInt("755")
		const NasiLiquidityPoolFactorymcy5Hq7 = await NasiLiquidityPoolFactory.new(addressrnKdwFd, addresslBlS5Dw, uintdiXk3hS, uintcWYVOUj, {from: accounts[1]});
		const uintMn38pOe = BigInt("770")
		const boolMGIIFE = true
		const addressrUvFHA4 = accounts[3]
		const uintWM8pK4S = BigInt("171")
		const uintwHBuI8 = BigInt("239")
		const addressywobFje = accounts[2]
		const uints3zGxMx = BigInt("566")
		const addressDvET8es = accounts[2]
		const addressqsHMvxf = accounts[4]
		const uintVDr16l0 = BigInt("1986")
		const uintRV0qCXF = BigInt("965")
		const uint256NiwLkKc = await NasiLiquidityPoolFactorymcy5Hq7.emergencyWithdraw.call(uintMn38pOe, {from: accounts[0]});
		const uint256jIaabBm = await NasiLiquidityPoolFactorymcy5Hq7.addLpToken.call(uintWM8pK4S, addressrUvFHA4, boolMGIIFE, {from: "0x0000000000000000000000000000000000000001"});
		const boolDbC0rs = await NasiLiquidityPoolFactorymcy5Hq7.increaseAllowance.call(addressywobFje, uintwHBuI8, {from: accounts[5]});
		const booljrlmUp = await NasiLiquidityPoolFactorymcy5Hq7.transferFrom.call(addressqsHMvxf, addressDvET8es, uints3zGxMx, {from: accounts[2]});
		const uint256UiQvKqA = await NasiLiquidityPoolFactorymcy5Hq7.leaveStaking.call(uintVDr16l0, {from: accounts[1]});
		const uint256PoTS5FL = await NasiLiquidityPoolFactorymcy5Hq7.emergencyWithdraw.call(uintRV0qCXF, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringubvcwas = "BjsxxBPNvwxmNdDSoJC2zXVBPiWzar83S1ZLEDmXdmsnJMBLGSwxgzjzlwjfWsdWXewIMn6R1pATbuDo48H4cdT92xNjY"
		const stringyNpPP9u = "aXqy67minFgRPzhfT6BDlKoTVUFAAS3HtD9ar2pFW8ouaw6MXR"
		const uintIGJMpZS = BigInt("81")
		const NasiLiquidityPoolFactoryTuVe43N = await NasiLiquidityPoolFactory.new(stringubvcwas, stringyNpPP9u, uintIGJMpZS, {from: accounts[2]});
		const addressmIra9TI = accounts[4]
		const addresshYv455R = accounts[4]
		const uintWxDwlJX = BigInt("1072")
		const addressKMTkAm3 = "0x0000000000000000000000000000000000000001"
		const addressyYTn87K = accounts[2]
		const addressdRg4MW = await NasiLiquidityPoolFactoryTuVe43N._delegate.call(addresshYv455R, addressmIra9TI, {from: accounts[0]});
		const boolP9uXkk9 = await NasiLiquidityPoolFactoryTuVe43N.decreaseAllowance.call(addressKMTkAm3, uintWxDwlJX, {from: accounts[3]});
		const uint256tweZE5g = await NasiLiquidityPoolFactoryTuVe43N.balanceOf.call(addressyYTn87K, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringqOXxIl1 = "QEwXieMxfY8GkxiKPH9HzJojDzCjsoBVAtb5q3y7O29uxrmBIUFU0g"
		const stringLwj60Pd = "PVS4oxGbsOXScIYBkUrYx0mlaofx"
		const uintzm7cbs = BigInt("200")
		const NasiLiquidityPoolFactoryHFbqIcv = await NasiLiquidityPoolFactory.new(stringqOXxIl1, stringLwj60Pd, uintzm7cbs, {from: accounts[1]});
		const uintqZobLN = BigInt("802")
		const addressJwHbwRw = accounts[4]
		const addressxGGJP6p = accounts[2]
		const uintWN4qKXM = BigInt("849")
		const uintLf5EyJ = BigInt("640")
		const boolmn30FJf = await NasiLiquidityPoolFactoryHFbqIcv.transfer.call(addressJwHbwRw, uintqZobLN, {from: accounts[4]});
		const addressH2ksrRI = await NasiLiquidityPoolFactoryHFbqIcv.delegate.call(addressxGGJP6p, {from: accounts[2]});
		const uint256X32Q3DV = await NasiLiquidityPoolFactoryHFbqIcv.totalSupply.call({from: accounts[0]});
		const uint256wOVbJ9M = await NasiLiquidityPoolFactoryHFbqIcv.deposit.call(uintLf5EyJ, uintWN4qKXM, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringPsBzULU = "zoAY5e4RDuFFd6Si48Ew4I2sqvDojqEqfCygsPH"
		const stringijy14Bw = "RHbYipyJ46htvLREuiFUm8vERRVTLw3MMdeo5TBWlYPHpCnmqt4CqdlqVaGMNzM3WlfQyvVNaGgFt6GYfeLIVE1dMV"
		const uintmC0jFQc = BigInt("207")
		const NasiLiquidityPoolFactoryzJHqYC8 = await NasiLiquidityPoolFactory.new(stringPsBzULU, stringijy14Bw, uintmC0jFQc, {from: accounts[3]});
		const uintzLu3FtS = BigInt("1440")
		const addressGQTTYRO = accounts[0]
		const address4XsHN0 = accounts[0]
		const boolggUqaI9 = await NasiLiquidityPoolFactoryzJHqYC8.approve.call(addressGQTTYRO, uintzLu3FtS, {from: accounts[0]});
		await NasiLiquidityPoolFactoryzJHqYC8.renounceOwnership.call({from: accounts[1]});
		const addresstCwa1va = await NasiLiquidityPoolFactoryzJHqYC8.owner.call({from: accounts[0]});
		const addressrsuenlX = await NasiLiquidityPoolFactoryzJHqYC8.delegates.call(address4XsHN0, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const string6rIQvt = "9ZqEKQHWJY9DvNU7bWbQW3VVcatDJkkAaQG21q9CbDHd9L1jSAbZWmzpavIc8"
		const stringEziLO2U = "sJaexTtX"
		const uintQMm8D9v = BigInt("156")
		const NasiLiquidityPoolFactoryJY5vcJS = await NasiLiquidityPoolFactory.new(string6rIQvt, stringEziLO2U, uintQMm8D9v, {from: accounts[3]});
		const uintGibJ21P = BigInt("1014")
		const addressQcnnjTw = accounts[0]
		const uint256rTuyyQ2 = await NasiLiquidityPoolFactoryJY5vcJS.getPriorVotes.call(addressQcnnjTw, uintGibJ21P, {from: accounts[4]});
		const uint256z6G6ABr = await NasiLiquidityPoolFactoryJY5vcJS.totalSupply.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvGwRUG = "9Dt7ooVmCmZ9hBOj6bP"
		const stringtIS50T5 = "mQc143cttajIYAC35blMyqPOYjDBqYyBshwqOvaIoERuYwq8OGettib3P9inTYxrnlzV9kFK4Ll6Ne17bSyFR"
		const uintZXVsna = BigInt("104")
		const NasiLiquidityPoolFactorycoDvkX = await NasiLiquidityPoolFactory.new(stringvGwRUG, stringtIS50T5, uintZXVsna, {from: accounts[2]});
		const uintATTmO9z = BigInt("1412")
		const uintVgBRGdV = BigInt("297")
		const uintYMzEUvk = BigInt("1429")
		const uintrdb1ENB = BigInt("1219")
		const uintcE7eFsS = BigInt("965")
		const addressGLiFdnv = accounts[4]
		const uint256jXLLayR = await NasiLiquidityPoolFactorycoDvkX.deposit.call(uintVgBRGdV, uintATTmO9z, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RymTNYI = await NasiLiquidityPoolFactorycoDvkX.withdraw.call(uintrdb1ENB, uintYMzEUvk, {from: accounts[3]});
		const boolzldFiNZ = await NasiLiquidityPoolFactorycoDvkX.approve.call(addressGLiFdnv, uintcE7eFsS, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressxR08fDG = accounts[5]
		const addresshvrifyi = accounts[2]
		const uintVSSa7iu = BigInt("1490")
		const uintgEqnhxb = BigInt("755")
		const NasiLiquidityPoolFactorymcy5Hq7 = await NasiLiquidityPoolFactory.new(addressxR08fDG, addresshvrifyi, uintVSSa7iu, uintgEqnhxb, {from: accounts[1]});
		const addressikZF5B6 = accounts[4]
		const uintknkB2d = BigInt("770")
		const addressFx2cCRT = accounts[1]
		const uintsLQc6QS = BigInt("959")
		const addressGUIVKMP = await NasiLiquidityPoolFactorymcy5Hq7.dev.call(addressikZF5B6, {from: accounts[3]});
		const uint256NiwLkKc = await NasiLiquidityPoolFactorymcy5Hq7.emergencyWithdraw.call(uintknkB2d, {from: accounts[0]});
		await NasiLiquidityPoolFactorymcy5Hq7.onlyOwner.call({from: accounts[1]});
		const uint256ux9j0o = await NasiLiquidityPoolFactorymcy5Hq7.pendingNasi.call(uintsLQc6QS, addressFx2cCRT, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvZuckPh = "JDxKbYF5ueMrW4PQkLgyxXi5H6wUtIivkX6LYLCVDuemU0b4fMyS09Iu1iNd9W1oWcJvoIGvm9Pa9htSE4f"
		const stringLhn91tI = "OUEvI2qeFV9OQIXJelVFiwERXreQLnBKelpIra"
		const uintTTL0vHp = BigInt("93")
		const NasiLiquidityPoolFactoryMyTly38 = await NasiLiquidityPoolFactory.new(stringvZuckPh, stringLhn91tI, uintTTL0vHp, {from: accounts[3]});
		const addressFamiqB9 = "0x0000000000000000000000000000000000000001"
		await NasiLiquidityPoolFactoryMyTly38.renounceOwnership.call({from: accounts[0]});
		const stringaf1Pk1 = await NasiLiquidityPoolFactoryMyTly38.symbol.call({from: accounts[0]});
		const uint256THTEzz7 = await NasiLiquidityPoolFactoryMyTly38.totalSupply.call({from: accounts[5]});
		const addressWvmebQE = await NasiLiquidityPoolFactoryMyTly38.dev.call(addressFamiqB9, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressksUehg = accounts[5]
		const addressfakNphi = accounts[2]
		const uintCtg0cJL = BigInt("1490")
		const uintiX50rmt = BigInt("755")
		const NasiLiquidityPoolFactorymcy5Hq7 = await NasiLiquidityPoolFactory.new(addressksUehg, addressfakNphi, uintCtg0cJL, uintiX50rmt, {from: accounts[1]});
		const addresssQdFhNb = accounts[1]
		const uintUju7Mx0 = BigInt("633")
		const uintfIk8YDk = BigInt("770")
		const uint256VxL4hVA = await NasiLiquidityPoolFactorymcy5Hq7.pendingNasi.call(uintUju7Mx0, addresssQdFhNb, {from: accounts[3]});
		const uint256NiwLkKc = await NasiLiquidityPoolFactorymcy5Hq7.emergencyWithdraw.call(uintfIk8YDk, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringPEzNz56 = "EwAo8Hi6dlIgav5TKoxVIwCMw5MQ2rena6le"
		const stringXDv92c = "IG44UGOD4BxbiUl3tMPMhpMdMyQ"
		const uintl4T6hHM = BigInt("233")
		const NasiLiquidityPoolFactoryZjUXk0Q = await NasiLiquidityPoolFactory.new(stringPEzNz56, stringXDv92c, uintl4T6hHM, {from: accounts[2]});
		const uintBE8qtdU = BigInt("1795")
		const uintsnQ6jBi = BigInt("1771")
		const addressUaassOW = accounts[1]
		const uint256TqfLZp = await NasiLiquidityPoolFactoryZjUXk0Q.burn.call(uintBE8qtdU, {from: accounts[0]});
		await NasiLiquidityPoolFactoryZjUXk0Q.whenPaused.call({from: accounts[0]});
		const boolCrgaXQy = await NasiLiquidityPoolFactoryZjUXk0Q.transfer.call(addressUaassOW, uintsnQ6jBi, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringXQ63a6W = "MJA9yjSNnenBcTYeIIo5ljVSlV95ASTRzldnop6WGcQ8LF4MoO3YsiGjgrKYDUpN1NXCuRrTFVzhXGagzDb8u7kWbTqQ"
		const stringM0joCJU = "0oTV59KB1XxD2azUCPreXJghrSte7Eo5Z3qSGHKhUl8wAQKHdxeS9G6zlt4jlPR9L9mUPWvoxT1kmd2FWBqPzxnu5bSljbvIc"
		const uintQcj45qK = BigInt("154")
		const NasiLiquidityPoolFactoryRdHxw2R = await NasiLiquidityPoolFactory.new(stringXQ63a6W, stringM0joCJU, uintQcj45qK, {from: accounts[1]});
		const boolflD1hOp = false
		const uintjQMplS = BigInt("218")
		const uintLRy20F0 = BigInt("890")
		await NasiLiquidityPoolFactoryRdHxw2R.onlyOwner.call({from: accounts[3]});
		const address7Yg5bL = await NasiLiquidityPoolFactoryRdHxw2R.owner.call({from: accounts[5]});
		const uint256pNGHQI = await NasiLiquidityPoolFactoryRdHxw2R.setAllocationPoint.call(uintLRy20F0, uintjQMplS, boolflD1hOp, {from: accounts[4]});
		const uint8nqVi4rn = await NasiLiquidityPoolFactoryRdHxw2R.decimals.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringRl70sWN = "YnfhLt7IntYgG7NnBHlzL6YULpbG4X9WgcVeXgTtTefKmpaLQOcPL6WDaN27us5TDEWGqQVgRhnDVvQkQZSomAhykiPwNim"
		const stringNepS17b = "NKiU2Uosz7h4zCHTfEXBZGdDAl59wpSpf67vVKpCJJySS7GwSjZo5ybOFnhC8lYtRuWYMKIKbgoXX8yotBC7ZsMqcIVt"
		const uintDX22y7L = BigInt("50")
		const NasiLiquidityPoolFactorys5pswiR = await NasiLiquidityPoolFactory.new(stringRl70sWN, stringNepS17b, uintDX22y7L, {from: accounts[5]});
		const byteDh0ctw = "0x1d041a1914100917051f121c1404040701110c050c1e0a20110b07120a030211"
		const byteEemj9Z = "0x1c01110417191d080b07090e141c1b19070c06130006041e080f0f171b101712"
		const uintfUzAPtz = BigInt("37")
		const uintQXzBzii = BigInt("1240")
		const uintS8YM7DU = BigInt("464")
		const addressq0AdA4d = accounts[1]
		const uinteqEqxjI = BigInt("285")
		const addressQL5mibx = accounts[2]
		const uint8fmgSZE7 = await NasiLiquidityPoolFactorys5pswiR.decimals.call({from: accounts[1]});
		await NasiLiquidityPoolFactorys5pswiR.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
		const 
FV5lgh0 = await NasiLiquidityPoolFactorys5pswiR.delegateBySig.call(addressq0AdA4d, uintS8YM7DU, uintQXzBzii, uintfUzAPtz, byteEemj9Z, byteDh0ctw, {from: accounts[2]});
		await NasiLiquidityPoolFactorys5pswiR.renounceMinter.call({from: accounts[3]});
		const boolecwTdRn = await NasiLiquidityPoolFactorys5pswiR.mint.call(addressQL5mibx, uinteqEqxjI, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressSEq80OC = accounts[5]
		const addressJrHAF83 = accounts[2]
		const uint3tUObO = BigInt("1490")
		const uintzMW8ruw = BigInt("755")
		const NasiLiquidityPoolFactorymcy5Hq7 = await NasiLiquidityPoolFactory.new(addressSEq80OC, addressJrHAF83, uint3tUObO, uintzMW8ruw, {from: accounts[1]});
		const uintWkwcTDv = BigInt("744")
		const uintIy925b = BigInt("1692")
		const addressYMX0c6R = accounts[4]
		const addressUolTt2 = accounts[2]
		await NasiLiquidityPoolFactorymcy5Hq7.massUpdatePools.call({from: accounts[5]});
		const uint256NiwLkKc = await NasiLiquidityPoolFactorymcy5Hq7.emergencyWithdraw.call(uintWkwcTDv, {from: accounts[0]});
		await NasiLiquidityPoolFactorymcy5Hq7.renounceMinter.call({from: accounts[1]});
		const booleSLqGFo = await NasiLiquidityPoolFactorymcy5Hq7.transferFrom.call(addressUolTt2, addressYMX0c6R, uintIy925b, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressZkN8uh = accounts[5]
		const addressOuwfI4 = accounts[2]
		const uintT5YhKcN = BigInt("1490")
		const uintZgnOFT = BigInt("755")
		const NasiLiquidityPoolFactorymcy5Hq7 = await NasiLiquidityPoolFactory.new(addressZkN8uh, addressOuwfI4, uintT5YhKcN, uintZgnOFT, {from: accounts[1]});
		const uintezZ7kwP = BigInt("1139")
		const addressBwTTgZL = accounts[1]
		const uinttCgbcY = BigInt("633")
		const uintExXOiNI = BigInt("770")
		const uintMfA99qr = BigInt("1648")
		const addresssYeqPQg = "0x0000000000000000000000000000000000000001"
		const uint256FXpvg79 = await NasiLiquidityPoolFactorymcy5Hq7.migrate.call(uintezZ7kwP, {from: accounts[2]});
		const uint256VxL4hVA = await NasiLiquidityPoolFactorymcy5Hq7.pendingNasi.call(uinttCgbcY, addressBwTTgZL, {from: accounts[3]});
		const uint256NiwLkKc = await NasiLiquidityPoolFactorymcy5Hq7.emergencyWithdraw.call(uintExXOiNI, {from: accounts[0]});
		const booleTNeF5Z = await NasiLiquidityPoolFactorymcy5Hq7.increaseAllowance.call(addresssYeqPQg, uintMfA99qr, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressxuKb9j8 = accounts[5]
		const addressqPHraG = accounts[2]
		const uintLmqgo3y = BigInt("1490")
		const uintQz2rZva = BigInt("755")
		const NasiLiquidityPoolFactorymcy5Hq7 = await NasiLiquidityPoolFactory.new(addressxuKb9j8, addressqPHraG, uintLmqgo3y, uintQz2rZva, {from: accounts[1]});
		const uintpdB8HDo = BigInt("770")
		const uintieZsGZY = BigInt("576")
		const addressrTHdyGv = accounts[3]
		const addressiua1wQV = accounts[4]
		const addressBZhcC3n = await NasiLiquidityPoolFactorymcy5Hq7.owner.call({from: accounts[5]});
		await NasiLiquidityPoolFactorymcy5Hq7.whenNotPaused.call({from: accounts[1]});
		const uint256NiwLkKc = await NasiLiquidityPoolFactorymcy5Hq7.emergencyWithdraw.call(uintpdB8HDo, {from: accounts[0]});
		const booljrlmUp = await NasiLiquidityPoolFactorymcy5Hq7.transferFrom.call(addressiua1wQV, addressrTHdyGv, uintieZsGZY, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressNWEIiUf = accounts[5]
		const addressrjI97Z = accounts[2]
		const uintKRLEMCu = BigInt("1490")
		const uintJ2jhbmh = BigInt("755")
		const NasiLiquidityPoolFactorymcy5Hq7 = await NasiLiquidityPoolFactory.new(addressNWEIiUf, addressrjI97Z, uintKRLEMCu, uintJ2jhbmh, {from: accounts[1]});
		const addresscqzj5m = accounts[2]
		const uinttwjjyoT = BigInt("633")
		await NasiLiquidityPoolFactorymcy5Hq7.renounceOwnership.call({from: accounts[0]});
		const uint256VxL4hVA = await NasiLiquidityPoolFactorymcy5Hq7.pendingNasi.call(uinttwjjyoT, addresscqzj5m, {from: accounts[3]});
	});
})