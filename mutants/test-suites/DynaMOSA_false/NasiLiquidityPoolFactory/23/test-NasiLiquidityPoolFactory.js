const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringUIGp9fi = "fvc"
		const stringaN8aPdi = "a2aSUVuIVH2uHrUv3Am8sAjiFLlB1I4SzOADDVko"
		const uintDJuOUcb = BigInt("59")
		const NasiLiquidityPoolFactoryxzNO7s1 = await NasiLiquidityPoolFactory.new(stringUIGp9fi, stringaN8aPdi, uintDJuOUcb, {from: "0x0000000000000000000000000000000000000001"});
		const uintht7A8wl = BigInt("821")
		const addresscn2xhVY = accounts[0]
		const uint256a8DS8s8 = await NasiLiquidityPoolFactoryxzNO7s1.leaveStaking.call(uintht7A8wl, {from: accounts[4]});
		await NasiLiquidityPoolFactoryxzNO7s1.onlyPauser.call({from: accounts[4]});
		const addressPweuxxM = await NasiLiquidityPoolFactoryxzNO7s1.delegates.call(addresscn2xhVY, {from: accounts[0]});
		const booli0fqt6G = await NasiLiquidityPoolFactoryxzNO7s1.paused.call({from: accounts[3]});
		const stringen7BxA = await NasiLiquidityPoolFactoryxzNO7s1.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressKu1Jvg = accounts[1]
		const addresslIBxPDy = accounts[3]
		const uintB9TG5v9 = BigInt("32")
		const uintyJTMd8Z = BigInt("860")
		const NasiLiquidityPoolFactoryiRTWwVi = await NasiLiquidityPoolFactory.new(addressKu1Jvg, addresslIBxPDy, uintB9TG5v9, uintyJTMd8Z, {from: accounts[1]});
		const addresswwkhF3q = "0x0000000000000000000000000000000000000001"
		const addressvAmTVpi = accounts[1]
		const boolmxlipf5 = false
		const addressNKFdNX9 = accounts[0]
		const uintY8gUA0a = BigInt("996")
//		const boolr2wvVoI = await NasiLiquidityPoolFactoryiRTWwVi.paused.call({from: accounts[1]});
//		const addressDquWjLG = await NasiLiquidityPoolFactoryiRTWwVi.setMigrator.call(addresswwkhF3q, {from: accounts[0]});
//		const addressU5lC1bs = await NasiLiquidityPoolFactoryiRTWwVi.addPauser.call(addressvAmTVpi, {from: accounts[4]});
//		const boolOCwwMtX = await NasiLiquidityPoolFactoryiRTWwVi.isOwner.call({from: accounts[5]});
//		const uint256KbvGses = await NasiLiquidityPoolFactoryiRTWwVi.addLpToken.call(uintY8gUA0a, addressNKFdNX9, boolmxlipf5, {from: accounts[2]});

		await expect(NasiLiquidityPoolFactoryiRTWwVi.paused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringZSQhAsn = "r37JU4gamWrj"
		const stringC3G2V3i = "qWiPktwAihkT441zdHz8um26l3hWlE4v5KG9L7QA9cRYAWf4cqJQhs4fhOXhhALeK1rtVOmO31RvCA5"
		const uintLGGMfu = BigInt("69")
		const NasiLiquidityPoolFactoryzYCWFeZ = await NasiLiquidityPoolFactory.new(stringZSQhAsn, stringC3G2V3i, uintLGGMfu, {from: accounts[3]});
		const uintZ6JKFJ = BigInt("436")
		const addresswrnkUGi = accounts[1]
		const addresseRX5sz9 = accounts[5]
		const addressRIMqFvq = "0x0000000000000000000000000000000000000001"
		const uintOjlsZL5 = BigInt("1828")
		const boolgbohjoi = await NasiLiquidityPoolFactoryzYCWFeZ.transferFrom.call(addresseRX5sz9, addresswrnkUGi, uintZ6JKFJ, {from: accounts[5]});
		const uint256JNR7kVH = await NasiLiquidityPoolFactoryzYCWFeZ.pendingNasi.call(uintOjlsZL5, addressRIMqFvq, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringYxrohhW = "qowrxjdm1kiACaELIpN"
		const stringJ4nB14 = "94uvdCks"
		const uintwd45hXK = BigInt("152")
		const NasiLiquidityPoolFactoryYGFaxuh = await NasiLiquidityPoolFactory.new(stringYxrohhW, stringJ4nB14, uintwd45hXK, {from: accounts[3]});
		const uintoSmTn1p = BigInt("1876")
		const addressqNHlgPh = accounts[3]
		const addressPl5TBkn = accounts[4]
		const addressHrfOAsa = accounts[0]
		const uintB9BrGKM = BigInt("212")
		const boolpVSM64x = await NasiLiquidityPoolFactoryYGFaxuh.transferFrom.call(addressPl5TBkn, addressqNHlgPh, uintoSmTn1p, {from: accounts[2]});
		const addressOJakLCJ = await NasiLiquidityPoolFactoryYGFaxuh.transferOwnership.call(addressHrfOAsa, {from: accounts[2]});
		const uint256FneaHaJ = await NasiLiquidityPoolFactoryYGFaxuh.enterStaking.call(uintB9BrGKM, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringKzRqjOh = "GhSQ5hCwpuojAC7tE7E43l69zfFimqT"
		const stringQ42rSNC = "v0rthBK8yDzQ65WRYi5KyETKlbmKKjduhRllhjr7sOS0Nr"
		const uintzJMnstX = BigInt("7")
		const NasiLiquidityPoolFactorySPObEaa = await NasiLiquidityPoolFactory.new(stringKzRqjOh, stringQ42rSNC, uintzJMnstX, {from: accounts[0]});
		const uintNkSvI4p = BigInt("892")
		const addressyszFVbT = accounts[1]
		const addressn7tHOS3 = accounts[2]
		const addressSLOikHG = accounts[2]
		const uintz2qUlja = BigInt("570")
		const addressiHyawhD = accounts[1]
		const uintvIv4Ofb = BigInt("190")
		const addressXHLbml = accounts[4]
		const boolJyWXGMt = await NasiLiquidityPoolFactorySPObEaa.mint.call(addressyszFVbT, uintNkSvI4p, {from: accounts[1]});
		const boolyIFr3w0 = await NasiLiquidityPoolFactorySPObEaa.isMinter.call(addressn7tHOS3, {from: accounts[2]});
		const address1RAZwM = await NasiLiquidityPoolFactorySPObEaa.dev.call(addressSLOikHG, {from: accounts[3]});
		await NasiLiquidityPoolFactorySPObEaa.pause.call({from: accounts[2]});
		const boolr8A4bc5 = await NasiLiquidityPoolFactorySPObEaa.transfer.call(addressiHyawhD, uintz2qUlja, {from: accounts[0]});
		const boolQz9WNGh = await NasiLiquidityPoolFactorySPObEaa.transfer.call(addressXHLbml, uintvIv4Ofb, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringEcHcSQP = "ofRHCteDJuBhScApeZ4Jn6muzRD6uwJgDSCMOJTBCRDQU5hcee43WCVmMpB1xSLjyjiuMiJvKnklGBCmSXqG99kCgXxpHepA"
		const stringTzvNjyu = "FsXexwI5qvr7mImTuofsDtOfOnw8j"
		const uintsYgX7NC = BigInt("113")
		const NasiLiquidityPoolFactoryDTK1Ed1 = await NasiLiquidityPoolFactory.new(stringEcHcSQP, stringTzvNjyu, uintsYgX7NC, {from: accounts[2]});
		const uintC3BwHlB = BigInt("21")
		const addressFAotGfh = accounts[4]
		const uintXC56VY = BigInt("909")
		const addressDVkGXq = accounts[2]
		const boolE1saMRu = await NasiLiquidityPoolFactoryDTK1Ed1.approve.call(addressFAotGfh, uintC3BwHlB, {from: accounts[4]});
		const boolmK55Qb4 = await NasiLiquidityPoolFactoryDTK1Ed1.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256AaXnMp = await NasiLiquidityPoolFactoryDTK1Ed1.totalSupply.call({from: accounts[0]});
		const uint256P5LCor4 = await NasiLiquidityPoolFactoryDTK1Ed1.getPriorVotes.call(addressDVkGXq, uintXC56VY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSnWPLuZ = "v4tqH3fWCbC2jQ1uZPIaWJH1ByaXqJjNkZCxxyvU7EF"
		const stringZ3oxgU = "zTxmDJsXRQbtpbB6U5g2f2Qu7mhtnpnIRelxhz5Tt9BFocuBd3JRFoKeCvpGPCi74hTnoMU4Jiv8Bl"
		const uintFkmfcty = BigInt("29")
		const NasiLiquidityPoolFactorylgaPv0k = await NasiLiquidityPoolFactory.new(stringSnWPLuZ, stringZ3oxgU, uintFkmfcty, {from: accounts[2]});
		const uintIPRFGS9 = BigInt("851")
		const addresslM4JsbM = accounts[4]
		const addresssSUKsxq = accounts[4]
		const uintIhwIHK1 = BigInt("1530")
		const uintlV3mYwx = BigInt("1748")
		const addressR10uJSa = accounts[5]
		const bool3kXgdV = await NasiLiquidityPoolFactorylgaPv0k.mint.call(addresslM4JsbM, uintIPRFGS9, {from: accounts[3]});
		const uint256DisYh3w = await NasiLiquidityPoolFactorylgaPv0k.pendingNasi.call(uintIhwIHK1, addresssSUKsxq, {from: accounts[2]});
		const boolTz5Rtk = await NasiLiquidityPoolFactorylgaPv0k.increaseAllowance.call(addressR10uJSa, uintlV3mYwx, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringHxmb8z = "ehDupTZG8KCmn0QjgIeRjwRxQMwpKVortF"
		const stringfTZMOj5 = "VILG1D5ay9vP43r5grkxvLlUmW13FYmgJ3EnUNzaTqtcnoa5gTDke4zq7nCQH5zGSDjXSUIT5BEpEi64KSpx"
		const uint7fUilI = BigInt("153")
		const NasiLiquidityPoolFactoryX0CtT1j = await NasiLiquidityPoolFactory.new(stringHxmb8z, stringfTZMOj5, uint7fUilI, {from: accounts[2]});
		const uintGm6Ehli = BigInt("1412")
		const addressFfS9pxo = "0x0000000000000000000000000000000000000001"
		const uintL4y3xFP = BigInt("502")
		const addressNUwaMJY = accounts[3]
		const uintARDetmf = BigInt("1761")
		const boolcw9vUuZ = false
		const addressPKZ6wNb = accounts[1]
		const uintOlDD2EU = BigInt("608")
		const uint256PCuFYgR = await NasiLiquidityPoolFactoryX0CtT1j.getPriorVotes.call(addressFfS9pxo, uintGm6Ehli, {from: accounts[1]});
		const uint256WTjNcUM = await NasiLiquidityPoolFactoryX0CtT1j.totalSupply.call({from: accounts[4]});
		const uint256qVgmwtN = await NasiLiquidityPoolFactoryX0CtT1j.emergencyWithdraw.call(uintL4y3xFP, {from: accounts[3]});
		const uint256ibvIJPm = await NasiLiquidityPoolFactoryX0CtT1j.pendingNasi.call(uintARDetmf, addressNUwaMJY, {from: accounts[0]});
		await NasiLiquidityPoolFactoryX0CtT1j.renouncePauser.call({from: accounts[1]});
		const uint256mS016fb = await NasiLiquidityPoolFactoryX0CtT1j.addLpToken.call(uintOlDD2EU, addressPKZ6wNb, boolcw9vUuZ, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringxDQnQLP = "ZqKCAofGN"
		const string8odFVb = "l5KojvXd0kFVtb73xOMOEDAquC5liqIjqnA3HSgUxChodhAs5QQ78NYTOItobiQDUhrX7sMLc1L56ErOr7lqleY7"
		const uintsmGCADg = BigInt("230")
		const NasiLiquidityPoolFactoryf8KrBEC = await NasiLiquidityPoolFactory.new(stringxDQnQLP, string8odFVb, uintsmGCADg, {from: accounts[0]});
		const uintj3RJfn0 = BigInt("240")
		const addressT8DsVjJ = accounts[0]
		const addressbawrdm = accounts[3]
		const uintjzo7E3N = BigInt("1548")
		const addresszDD7crY = accounts[5]
		const uintOgZZCzS = BigInt("290")
		const addressKV550nz = "0x0000000000000000000000000000000000000001"
		const addressZL43g4R = accounts[4]
		const uintIO4c054 = BigInt("1224")
		const boolSDHMNC9 = true
		const uintQwJdgOx = BigInt("323")
		const uintPA9MDyd = BigInt("282")
		const booll2cKGJd = await NasiLiquidityPoolFactoryf8KrBEC.approve.call(addressT8DsVjJ, uintj3RJfn0, {from: accounts[1]});
		const uint256AhR2HOG = await NasiLiquidityPoolFactoryf8KrBEC.balanceOf.call(addressbawrdm, {from: accounts[3]});
		const boolQvBDTLY = await NasiLiquidityPoolFactoryf8KrBEC.approve.call(addresszDD7crY, uintjzo7E3N, {from: accounts[5]});
		const addressmy4TOFW = await NasiLiquidityPoolFactoryf8KrBEC.burnFrom.call(addressKV550nz, uintOgZZCzS, {from: accounts[3]});
		const uint256234i0V = await NasiLiquidityPoolFactoryf8KrBEC.pendingNasi.call(uintIO4c054, addressZL43g4R, {from: accounts[3]});
		const uint256cGOzc7D = await NasiLiquidityPoolFactoryf8KrBEC.setAllocationPoint.call(uintPA9MDyd, uintQwJdgOx, boolSDHMNC9, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringH0ftKBp = "4QbmnaMa597kwZWiJs1KNjwPNOnqiMaan6N2zh31tbK5tRBx82uAoJPE7j6HwIIy9vKiV3YIfwL9mOr"
		const stringTdBdSy4 = "bEOFC2bHVpP3J9TD2YBKiJr3eOOEoyYnHvVoJUQGJny4H3DtyChF9FCwXBcvOpUrE8C3NgNES9DnFGZbYVpO4DrzKwAMfiid"
		const uintUsz7SuC = BigInt("63")
		const NasiLiquidityPoolFactoryQHX78br = await NasiLiquidityPoolFactory.new(stringH0ftKBp, stringTdBdSy4, uintUsz7SuC, {from: accounts[2]});
		const uintDDeuImZ = BigInt("1132")
		const uintCdF3SdA = BigInt("1256")
		const addressIIiab2 = "0x0000000000000000000000000000000000000001"
		const uint256gQWXnZ = await NasiLiquidityPoolFactoryQHX78br.burn.call(uintDDeuImZ, {from: accounts[0]});
		await NasiLiquidityPoolFactoryQHX78br.onlyMinter.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryQHX78br.whenNotPaused.call({from: accounts[0]});
		const uint256koU8yCq = await NasiLiquidityPoolFactoryQHX78br.burn.call(uintCdF3SdA, {from: accounts[5]});
		const uint256YKb6gD = await NasiLiquidityPoolFactoryQHX78br.getCurrentVotes.call(addressIIiab2, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringHYBbtCi = "qd0Xqit3eUrmMpEOIQFFEx75KkW9VTMCzcerpMLTOtfNXqqN8LH2pbd"
		const stringHOmUnx7 = "oU5Sh2c4Bw5sFKIpfur45dhK7exIADKgCojuHAbHRNet9Naphi1uhEuJ9hH5Z73NX1vX7lvMEcFshC9iqCMKLkr2f5YARFP"
		const uintnwxpV0H = BigInt("123")
		const NasiLiquidityPoolFactoryLGdBuLQ = await NasiLiquidityPoolFactory.new(stringHYBbtCi, stringHOmUnx7, uintnwxpV0H, {from: accounts[3]});
		const uintSXGm36Q = BigInt("355")
		const addressHjmXU67 = accounts[2]
		const addressgx4uAZH = accounts[2]
		const addressLXsr6T0 = accounts[5]
		const uintmNBsw2l = BigInt("1967")
		const addressr0ncxhk = accounts[0]
		const uinty1gg3cm = BigInt("1997")
		await NasiLiquidityPoolFactoryLGdBuLQ.renouncePauser.call({from: accounts[3]});
		const boolrvYe08Z = await NasiLiquidityPoolFactoryLGdBuLQ.mint.call(addressHjmXU67, uintSXGm36Q, {from: accounts[0]});
		const addressmxxTiH = await NasiLiquidityPoolFactoryLGdBuLQ._delegate.call(addressLXsr6T0, addressgx4uAZH, {from: accounts[2]});
		const boolyMMY4YX = await NasiLiquidityPoolFactoryLGdBuLQ.decreaseAllowance.call(addressr0ncxhk, uintmNBsw2l, {from: "0x0000000000000000000000000000000000000001"});
		const uint256SZvHBoc = await NasiLiquidityPoolFactoryLGdBuLQ.enterStaking.call(uinty1gg3cm, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringiZCj4Dy = "2zpBz2trnxPTM7VK5x6xp3vyUd3XSMAqUJqrR1j2afDXw1gNcBKfNxogCnqbfOyWznfgVpnAPx9KM"
		const stringZywaBQZ = "DeRQUN1WhXu6NPjULIOoJBSdA2DUv8QP1bobkSACkoSsF3rG4vv5uZjbY8MusdgnR4f6VxQX3Mif5"
		const uintso7y88J = BigInt("27")
		const NasiLiquidityPoolFactoryrG9S5XP = await NasiLiquidityPoolFactory.new(stringiZCj4Dy, stringZywaBQZ, uintso7y88J, {from: accounts[1]});
		const addresspNRqIGi = accounts[1]
		const uintkf9OezX = BigInt("1077")
		const addressYYsK8WB = accounts[1]
		const uinte0hRC7V = BigInt("1876")
		const addressXwOnjiX = "0x0000000000000000000000000000000000000001"
		const addressUnjn36T = accounts[5]
		const stringx5ejphs = await NasiLiquidityPoolFactoryrG9S5XP.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolxDzQD6S = await NasiLiquidityPoolFactoryrG9S5XP.isMinter.call(addresspNRqIGi, {from: accounts[1]});
		const boolm0o35aj = await NasiLiquidityPoolFactoryrG9S5XP.decreaseAllowance.call(addressYYsK8WB, uintkf9OezX, {from: accounts[1]});
		const uint256rusk5i = await NasiLiquidityPoolFactoryrG9S5XP.getPriorVotes.call(addressXwOnjiX, uinte0hRC7V, {from: accounts[2]});
		const boolzlvURQT = await NasiLiquidityPoolFactoryrG9S5XP.isOwner.call({from: accounts[2]});
		const boolb51THE6 = await NasiLiquidityPoolFactoryrG9S5XP.isPauser.call(addressUnjn36T, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressGKCVUGR = accounts[1]
		const addresscmNEpdU = accounts[3]
		const uintRPlGyWM = BigInt("32")
		const uintFA5YfNN = BigInt("860")
		const NasiLiquidityPoolFactoryiRTWwVi = await NasiLiquidityPoolFactory.new(addressGKCVUGR, addresscmNEpdU, uintRPlGyWM, uintFA5YfNN, {from: accounts[1]});
		const uintvcYSykq = BigInt("1417")
		const uintEuZWqAW = BigInt("1845")
		const addressngM3WW6 = "0x0000000000000000000000000000000000000001"
		const addressWTAVNC = accounts[1]
		const boolmxlipf5 = false
		const addressNCo1Jw0 = accounts[0]
		const uintfyKHRT = BigInt("996")
//		const uint256Ff2DZG = await NasiLiquidityPoolFactoryiRTWwVi.getBonusMultiplier.call(uintEuZWqAW, uintvcYSykq, {from: accounts[1]});
//		const boolr2wvVoI = await NasiLiquidityPoolFactoryiRTWwVi.paused.call({from: accounts[1]});
//		const addresskHXComo = await NasiLiquidityPoolFactoryiRTWwVi.owner.call({from: accounts[5]});
//		const addressDquWjLG = await NasiLiquidityPoolFactoryiRTWwVi.setMigrator.call(addressngM3WW6, {from: accounts[0]});
//		const addressU5lC1bs = await NasiLiquidityPoolFactoryiRTWwVi.addPauser.call(addressWTAVNC, {from: accounts[4]});
//		const boolOCwwMtX = await NasiLiquidityPoolFactoryiRTWwVi.isOwner.call({from: accounts[5]});
//		const uint256KbvGses = await NasiLiquidityPoolFactoryiRTWwVi.addLpToken.call(uintfyKHRT, addressNCo1Jw0, boolmxlipf5, {from: accounts[2]});

		await expect(NasiLiquidityPoolFactoryiRTWwVi.getBonusMultiplier.call(uintEuZWqAW, uintvcYSykq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressjXut9a = accounts[1]
		const addressUR42y9 = accounts[3]
		const uintBIAOVAK = BigInt("32")
		const uintgTTvLYJ = BigInt("860")
		const NasiLiquidityPoolFactoryiRTWwVi = await NasiLiquidityPoolFactory.new(addressjXut9a, addressUR42y9, uintBIAOVAK, uintgTTvLYJ, {from: accounts[1]});
		const boolkm2Qwo0 = true
		const addressvprTGPH = accounts[3]
		const uintkLbA6GN = BigInt("263")
		const addressQrObZ0c = accounts[4]
		const addressRWgbZ9k = "0x0000000000000000000000000000000000000001"
		const addresspE0Rb7m = accounts[1]
//		const uint256BFwhn5h = await NasiLiquidityPoolFactoryiRTWwVi.addLpToken.call(uintkLbA6GN, addressvprTGPH, boolkm2Qwo0, {from: "0x0000000000000000000000000000000000000001"});
//		const boolr2wvVoI = await NasiLiquidityPoolFactoryiRTWwVi.paused.call({from: accounts[1]});
//		const uint256j3KjDcv = await NasiLiquidityPoolFactoryiRTWwVi.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresskHXComo = await NasiLiquidityPoolFactoryiRTWwVi.owner.call({from: accounts[5]});
//		const addressnhEIgXp = await NasiLiquidityPoolFactoryiRTWwVi.transferOwnership.call(addressQrObZ0c, {from: accounts[4]});
//		const addressDquWjLG = await NasiLiquidityPoolFactoryiRTWwVi.setMigrator.call(addressRWgbZ9k, {from: accounts[0]});
//		const addressU5lC1bs = await NasiLiquidityPoolFactoryiRTWwVi.addPauser.call(addresspE0Rb7m, {from: accounts[4]});
//		const boolOCwwMtX = await NasiLiquidityPoolFactoryiRTWwVi.isOwner.call({from: accounts[5]});

		await expect(NasiLiquidityPoolFactoryiRTWwVi.addLpToken.call(uintkLbA6GN, addressvprTGPH, boolkm2Qwo0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressbQRyBhQ = accounts[5]
		const addressPdjmuV = accounts[2]
		const uintbVO92qB = BigInt("269")
		const uintP1wWpzx = BigInt("595")
		const NasiLiquidityPoolFactorysnMrCMZ = await NasiLiquidityPoolFactory.new(addressbQRyBhQ, addressPdjmuV, uintbVO92qB, uintP1wWpzx, {from: accounts[3]});
		const uintf2gAHCV = BigInt("326")
		const uintZTV6HW5 = BigInt("529")
		const uintyy9rMHi = BigInt("887")
		const addressGRKRnCV = accounts[2]
//		const uint256L57z40P = await NasiLiquidityPoolFactorysnMrCMZ.withdraw.call(uintZTV6HW5, uintf2gAHCV, {from: accounts[4]});
//		const booluxbGfJW = await NasiLiquidityPoolFactorysnMrCMZ.mint.call(addressGRKRnCV, uintyy9rMHi, {from: accounts[3]});

		await expect(NasiLiquidityPoolFactorysnMrCMZ.withdraw.call(uintZTV6HW5, uintf2gAHCV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringaBBZozw = "EbuX"
		const stringbdz2prI = "cglHruL8gbYSY9Z51BXDgaHvpyCdCVog8tL7YTWNAcbpFX4C7jUFn8PrdOdB9KcvJhoI"
		const uintI1CLCUR = BigInt("142")
		const NasiLiquidityPoolFactoryiYgS7bs = await NasiLiquidityPoolFactory.new(stringaBBZozw, stringbdz2prI, uintI1CLCUR, {from: accounts[4]});
		const addressV8Fdve = accounts[0]
		const uintswDnETw = BigInt("426")
		const uintEHMr5Kk = BigInt("883")
		const addressZuyuIQO = accounts[2]
		const addresso2ih671 = accounts[1]
		const uintNR8SODU = BigInt("9")
		const addressKSE52Nc = accounts[4]
		const addressI3WzGVd = await NasiLiquidityPoolFactoryiYgS7bs.setMigrator.call(addressV8Fdve, {from: accounts[3]});
		const uint256V8MFnm = await NasiLiquidityPoolFactoryiYgS7bs.enterStaking.call(uintswDnETw, {from: accounts[3]});
		await NasiLiquidityPoolFactoryiYgS7bs.massUpdatePools.call({from: accounts[5]});
		const uint256Pvzn2o4 = await NasiLiquidityPoolFactoryiYgS7bs.migrate.call(uintEHMr5Kk, {from: accounts[1]});
		const uint256UGFcmoE = await NasiLiquidityPoolFactoryiYgS7bs.allowance.call(addresso2ih671, addressZuyuIQO, {from: "0x0000000000000000000000000000000000000001"});
		const boolxkiDKgd = await NasiLiquidityPoolFactoryiYgS7bs.decreaseAllowance.call(addressKSE52Nc, uintNR8SODU, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressANRIVi5 = accounts[4]
		const addressX2QvqfA = accounts[0]
		const uint3oCJpc = BigInt("1583")
		const uintZAPlqap = BigInt("695")
		const NasiLiquidityPoolFactoryfqToNaU = await NasiLiquidityPoolFactory.new(addressANRIVi5, addressX2QvqfA, uint3oCJpc, uintZAPlqap, {from: "0x0000000000000000000000000000000000000001"});
		const uintKcuOULd = BigInt("709")
		const uintZjmIv4o = BigInt("475")
		const uintGakZr7M = BigInt("936")
		const addressjy9AKvy = accounts[3]
		const uint256kNE0ibC = await NasiLiquidityPoolFactoryfqToNaU.withdraw.call(uintZjmIv4o, uintKcuOULd, {from: accounts[0]});
		const boolTKYy6S = await NasiLiquidityPoolFactoryfqToNaU.paused.call({from: accounts[3]});
		const boolJL4HnxI = await NasiLiquidityPoolFactoryfqToNaU.approve.call(addressjy9AKvy, uintGakZr7M, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringFPDA1VO = "RzAF6IOPrjzPOeUE0MW6vkaCSQ1BQf5yHkEmVdb46hElGgd6dsOyUSDKuWkGfiKWEV5Tdo"
		const stringOnIM2B = "EjQq8WOWtxCXarl8D77QsSQ64dzCWSCOEImWXiUro44454uuZLwNlSkkuLxUvrCoAQpAlsMb9roo3eEoEhlvqhPZVymtXp"
		const uintzWGwIB = BigInt("129")
		const NasiLiquidityPoolFactoryr9OJQKu = await NasiLiquidityPoolFactory.new(stringFPDA1VO, stringOnIM2B, uintzWGwIB, {from: accounts[4]});
		const uintXPgrL6P = BigInt("665")
		const uintJXRMkeG = BigInt("1408")
		const uintWdtRGfM = BigInt("45")
		const uint256a9FhMtU = await NasiLiquidityPoolFactoryr9OJQKu.updatePool.call(uintXPgrL6P, {from: accounts[0]});
		await NasiLiquidityPoolFactoryr9OJQKu.whenPaused.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryr9OJQKu.renounceMinter.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2560BCgwf = await NasiLiquidityPoolFactoryr9OJQKu.deposit.call(uintWdtRGfM, uintJXRMkeG, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringohumX7P = "TWHZmggwg0i8kKQQLc6sMCjjqJdKd7OA65LWl4LDVm4R5"
		const stringbwHgzbs = "WrlNWlSA5lNDr7wfZbINHCVYLCaeUoK7potOiNATP436RmneMtAHimFlOMxI74Lk5iIKsMR46jcclTLoJfmraQi"
		const uintxU73OcB = BigInt("138")
		const NasiLiquidityPoolFactoryAKsHzkl = await NasiLiquidityPoolFactory.new(stringohumX7P, stringbwHgzbs, uintxU73OcB, {from: accounts[1]});
		const addressBG8WbFi = accounts[3]
		const boolFMP0Xcg = true
		const uintKZfg9zD = BigInt("934")
		const uintPZp2YGi = BigInt("1038")
		const addressZRrvRo = accounts[0]
		const addressB4AFLzD = accounts[0]
		const addressEv5NFzE = await NasiLiquidityPoolFactoryAKsHzkl.addMinter.call(addressBG8WbFi, {from: accounts[1]});
		const uint8gnvN66I = await NasiLiquidityPoolFactoryAKsHzkl.decimals.call({from: accounts[3]});
		const uint256EOkl9d = await NasiLiquidityPoolFactoryAKsHzkl.setAllocationPoint.call(uintPZp2YGi, uintKZfg9zD, boolFMP0Xcg, {from: accounts[3]});
		await NasiLiquidityPoolFactoryAKsHzkl.whenNotPaused.call({from: accounts[5]});
		const uint2568i2gh9 = await NasiLiquidityPoolFactoryAKsHzkl.allowance.call(addressB4AFLzD, addressZRrvRo, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressZQ0PuRd = accounts[5]
		const addresszyLv1RG = accounts[2]
		const uints1Ru5Ie = BigInt("269")
		const uintr2dF7vK = BigInt("595")
		const NasiLiquidityPoolFactorysnMrCMZ = await NasiLiquidityPoolFactory.new(addressZQ0PuRd, addresszyLv1RG, uints1Ru5Ie, uintr2dF7vK, {from: accounts[3]});
		const uintOXDawBi = BigInt("998")
		const uintlqE3Ri0 = BigInt("887")
		const addressHUwRhXe = accounts[1]
//		const uint256NXv4jI3 = await NasiLiquidityPoolFactorysnMrCMZ.enterStaking.call(uintOXDawBi, {from: accounts[1]});
//		const booluxbGfJW = await NasiLiquidityPoolFactorysnMrCMZ.mint.call(addressHUwRhXe, uintlqE3Ri0, {from: accounts[3]});

		await expect(NasiLiquidityPoolFactorysnMrCMZ.enterStaking.call(uintOXDawBi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringOQ6dcsm = "FnT"
		const stringc7ARzGl = "TVFDbz929iM9OnoBTszwRFUMBIm086QtX9Aj2mGIIJCwuXADCWCRvNU9dvscjHfecx5iFfL8O2c3YuDJ4h8PKDpJjHcFrkDw"
		const uintRC4tHM = BigInt("157")
		const NasiLiquidityPoolFactorytmSa8i6 = await NasiLiquidityPoolFactory.new(stringOQ6dcsm, stringc7ARzGl, uintRC4tHM, {from: accounts[0]});
		const address5peNWQ = accounts[3]
		const uintlu6aBII = BigInt("97")
		await NasiLiquidityPoolFactorytmSa8i6.onlyOwner.call({from: accounts[2]});
		const uint256094uNj = await NasiLiquidityPoolFactorytmSa8i6.pendingNasi.call(uintlu6aBII, address5peNWQ, {from: accounts[2]});
		await NasiLiquidityPoolFactorytmSa8i6.whenPaused.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressPlq9N6M = accounts[1]
		const addressm2o3bx = accounts[3]
		const uintPdEfypq = BigInt("32")
		const uintes9pPju = BigInt("860")
		const NasiLiquidityPoolFactoryiRTWwVi = await NasiLiquidityPoolFactory.new(addressPlq9N6M, addressm2o3bx, uintPdEfypq, uintes9pPju, {from: accounts[1]});
		const uinttDPx97 = BigInt("513")
		const addressM6RYQoH = accounts[4]
		const uintLWjgpAF = BigInt("1114")
		const addressVOlTyi = accounts[2]
		const boolzovA2Ra = true
		const uintHBeMDh6 = BigInt("535")
		const uint2xD9DK = BigInt("1507")
		const addressGKHD87F = "0x0000000000000000000000000000000000000001"
//		await NasiLiquidityPoolFactoryiRTWwVi.massUpdatePools.call({from: accounts[5]});
//		const addresskHXComo = await NasiLiquidityPoolFactoryiRTWwVi.owner.call({from: accounts[5]});
//		const addressQ7jiEud = await NasiLiquidityPoolFactoryiRTWwVi.burnFrom.call(addressM6RYQoH, uinttDPx97, {from: accounts[1]});
//		const boolrZXEs5 = await NasiLiquidityPoolFactoryiRTWwVi.approve.call(addressVOlTyi, uintLWjgpAF, {from: accounts[0]});
//		const uint256XXItztO = await NasiLiquidityPoolFactoryiRTWwVi.setAllocationPoint.call(uint2xD9DK, uintHBeMDh6, boolzovA2Ra, {from: accounts[0]});
//		const addressuHJS3Nd = await NasiLiquidityPoolFactoryiRTWwVi.transferOwnership.call(addressGKHD87F, {from: accounts[3]});
//		const boolOCwwMtX = await NasiLiquidityPoolFactoryiRTWwVi.isOwner.call({from: accounts[5]});
//		await NasiLiquidityPoolFactoryiRTWwVi.onlyMinter.call({from: accounts[1]});

		await expect(NasiLiquidityPoolFactoryiRTWwVi.massUpdatePools.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})