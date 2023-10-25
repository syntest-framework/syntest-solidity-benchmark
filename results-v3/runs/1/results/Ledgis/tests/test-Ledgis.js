const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisEayJPkZ = await Ledgis.new({from: accounts[2]});
		const uintePkXYTt = BigInt("2001")
		const addressDoSmbQj = accounts[5]
		const addressiGe6cfS = accounts[3]
		const uintgg6ki1d = BigInt("291")
		const addressbuAJEeO = accounts[4]
		const uintU1tryyA = BigInt("103")
		const uintXkTRozM = BigInt("286")
		const addressjDrcmsV = "0x0000000000000000000000000000000000000001"
		const uintYz6toF4 = BigInt("54")
		const addressgWlK5OV = accounts[1]
		const boolvf2e7AK = await LedgisEayJPkZ.transferFrom.call(addressiGe6cfS, addressDoSmbQj, uintePkXYTt, {from: accounts[3]});
		await LedgisEayJPkZ.whenNotFrozen.call({from: accounts[4]});
		await LedgisEayJPkZ.lockState.call(addressbuAJEeO, uintgg6ki1d, {from: accounts[1]});
		const addressvIHi2Ib = await LedgisEayJPkZ.lock.call(addressjDrcmsV, uintXkTRozM, uintU1tryyA, {from: accounts[2]});
		const boolByihbuL = await LedgisEayJPkZ.transfer.call(addressgWlK5OV, uintYz6toF4, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const uintoOgAvsS = BigInt("465")
		const uintiduV9u7 = BigInt("554")
		const addressopEBZCk = accounts[3]
		const uintmL3NNUM = BigInt("793")
		const addressji9icrY = accounts[2]
		const boolzK4knJ9 = await LedgislBg9H7o.transferWithLock.call(addressopEBZCk, uintiduV9u7, uintoOgAvsS, {from: accounts[3]});
		const boolXw5U3Hg = await LedgislBg9H7o.mint.call(addressji9icrY, uintmL3NNUM, {from: accounts[3]});
		const uint256a1VcBnu = await LedgislBg9H7o.totalSupply.call({from: accounts[0]});
	});

	it('test for Ledgis', async () => {
		const LedgisVivvFix = await Ledgis.new({from: accounts[3]});
		const addressLtIcgSc = accounts[2]
		const uintyyjnBE = BigInt("170")
		const addressbktQqJR = accounts[4]
		const uintckNTSLB = BigInt("1375")
		const uintxd8vc4Y = BigInt("2003")
		const addressR7PQtj9 = accounts[5]
		const uintY0Svmbb = BigInt("407")
		const addressIQVIJYN = accounts[0]
		const addresscEMZbBp = accounts[0]
		const boolqooEaXi = await LedgisVivvFix.isFrozen.call(addressLtIcgSc, {from: accounts[2]});
		const boolms9M6uI = await LedgisVivvFix.mint.call(addressbktQqJR, uintyyjnBE, {from: accounts[0]});
		await LedgisVivvFix.whenNotPaused.call({from: accounts[5]});
		const boolmspkYmB = await LedgisVivvFix.transferWithLockAfter.call(addressR7PQtj9, uintxd8vc4Y, uintckNTSLB, {from: accounts[2]});
		await LedgisVivvFix.whenNotPaused.call({from: accounts[2]});
		const boolPy3r4HQ = await LedgisVivvFix.transferFrom.call(addresscEMZbBp, addressIQVIJYN, uintY0Svmbb, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgisBBZICwL = await Ledgis.new({from: accounts[2]});
		const uintMLyuCP2 = BigInt("2041")
		const addressHbnUyGU = accounts[0]
		const addressd2agYPt = accounts[4]
		const addressR4aL5AX = accounts[2]
		const address6a5I1l = accounts[0]
		const boolZqpELZR = await LedgisBBZICwL.decreaseAllowance.call(addressHbnUyGU, uintMLyuCP2, {from: accounts[0]});
		const uint256mrpMen9 = await LedgisBBZICwL.allowance.call(addressR4aL5AX, addressd2agYPt, {from: accounts[0]});
		const addresssBiQgG = await LedgisBBZICwL.freeze.call(address6a5I1l, {from: accounts[1]});
	});

	it('test for Ledgis', async () => {
		const LedgisfYtGPgF = await Ledgis.new({from: accounts[5]});
		const uints0Ybyp = BigInt("646")
		const addressIddW9jB = accounts[2]
		const uintbkTCFO1 = BigInt("678")
		const uintemhLIpg = BigInt("1286")
		const addressK9H214w = accounts[4]
		const uintQxT23w = BigInt("212")
		const uintxEp7vNk = BigInt("413")
		const addresspzJwaoW = accounts[4]
		await LedgisfYtGPgF.lockState.call(addressIddW9jB, uints0Ybyp, {from: accounts[3]});
		await LedgisfYtGPgF.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await LedgisfYtGPgF.unpause.call({from: accounts[3]});
		const address0W4vtL = await LedgisfYtGPgF.lockAfter.call(addressK9H214w, uintemhLIpg, uintbkTCFO1, {from: "0x0000000000000000000000000000000000000001"});
		const booldLKNR9k = await LedgisfYtGPgF.transferWithLock.call(addresspzJwaoW, uintxEp7vNk, uintQxT23w, {from: accounts[1]});
	});

	it('test for Ledgis', async () => {
		const LedgisILgWhKP = await Ledgis.new({from: accounts[4]});
		const addressKSTRYY = accounts[2]
		const uintgt6TyxJ = BigInt("1015")
		const addressIlkLKRK = accounts[0]
		const addressFxXiXN = accounts[2]
		const addressYQOTA4p = accounts[1]
		const addressU1gAP3L = accounts[1]
		const uint256MeDmpu = await LedgisILgWhKP.balanceOf.call(addressKSTRYY, {from: "0x0000000000000000000000000000000000000001"});
		const boolZTM46s = await LedgisILgWhKP.transferFrom.call(addressFxXiXN, addressIlkLKRK, uintgt6TyxJ, {from: accounts[1]});
		await LedgisILgWhKP.unpause.call({from: accounts[2]});
		const uint256zRE5Kz = await LedgisILgWhKP.allowance.call(addressU1gAP3L, addressYQOTA4p, {from: accounts[5]});
	});

	it('test for Ledgis', async () => {
		const LedgiseBK2nS4 = await Ledgis.new({from: accounts[0]});
		const uintB2CYkOz = BigInt("1209")
		const addressUovh354 = accounts[3]
		const addressB7GAcMt = accounts[2]
		const addressQyDl9X = accounts[4]
		const boolUKhqiZ9 = await LedgiseBK2nS4.transfer.call(addressUovh354, uintB2CYkOz, {from: accounts[5]});
		await LedgiseBK2nS4.unpause.call({from: accounts[1]});
		const uint256tgZxUu = await LedgiseBK2nS4.balanceOf.call(addressB7GAcMt, {from: accounts[1]});
		await LedgiseBK2nS4.whenNotFrozen.call({from: accounts[3]});
		const uint256LyTtbDL = await LedgiseBK2nS4.lockCount.call(addressQyDl9X, {from: accounts[4]});
	});

	it('test for Ledgis', async () => {
		const Ledgisl7rzQlY = await Ledgis.new({from: accounts[5]});
		const addressK6TgEyg = "0x0000000000000000000000000000000000000001"
		const addressG7j0uO4 = accounts[3]
		const addressomkydFU = accounts[3]
		const addressNazYj2 = accounts[5]
		const uint256jRuDxRd = await Ledgisl7rzQlY.balanceOf.call(addressK6TgEyg, {from: accounts[4]});
		const uint256B47XDXa = await Ledgisl7rzQlY.allowance.call(addressomkydFU, addressG7j0uO4, {from: accounts[3]});
		const addressGasIpEK = await Ledgisl7rzQlY.freeze.call(addressNazYj2, {from: accounts[4]});
	});

	it('test for Ledgis', async () => {
		const Ledgisob0NArW = await Ledgis.new({from: accounts[3]});
		const uintD1WQAhe = BigInt("791")
		const uintx7Iii4H = BigInt("1384")
		const addressqpIFyk = "0x0000000000000000000000000000000000000001"
		const uintZxbxfl6 = BigInt("902")
		const uintQfbk1B = BigInt("1542")
		const addressJzpsfSN = accounts[4]
		const uintP2NlGQk = BigInt("1888")
		const addressFCILNeB = accounts[5]
		const addressJWTjIW1 = accounts[1]
		const uintySCsiYs = BigInt("1044")
		const uintG6p2FzN = BigInt("271")
		const addresslkXYk3p = accounts[2]
		const boolMguuGK4 = await Ledgisob0NArW.transferWithLock.call(addressqpIFyk, uintx7Iii4H, uintD1WQAhe, {from: accounts[3]});
		const addressph8akkc = await Ledgisob0NArW.lock.call(addressJzpsfSN, uintQfbk1B, uintZxbxfl6, {from: accounts[4]});
		const boolOWFFUza = await Ledgisob0NArW.transferFrom.call(addressJWTjIW1, addressFCILNeB, uintP2NlGQk, {from: accounts[4]});
		const uint256FyuIUwr = await Ledgisob0NArW.afterTime.call(uintySCsiYs, {from: accounts[3]});
		const boolZk30Pv2 = await Ledgisob0NArW.approve.call(addresslkXYk3p, uintG6p2FzN, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgisPX3kEFU = await Ledgis.new({from: accounts[2]});
		const addressP81Wnj = accounts[3]
		const uintPaPddUF = BigInt("580")
		const addressCuHYv8y = "0x0000000000000000000000000000000000000001"
		await LedgisPX3kEFU.whenPaused.call({from: accounts[2]});
		const uint256j6phGMZ = await LedgisPX3kEFU.balanceOf.call(addressP81Wnj, {from: accounts[4]});
		const boolhFCS5pn = await LedgisPX3kEFU.increaseAllowance.call(addressCuHYv8y, uintPaPddUF, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Ledgis', async () => {
		const Ledgisl7rzQlY = await Ledgis.new({from: accounts[5]});
		const uintNL7yGcw = BigInt("1890")
		const addressYn2iLTb = accounts[2]
		const addressaspeVba = "0x0000000000000000000000000000000000000002"
		const addressCm8CNBF = accounts[3]
		const addresszikVyIx = accounts[4]
		const boolTLtxFjq = await Ledgisl7rzQlY.approve.call(addressYn2iLTb, uintNL7yGcw, {from: accounts[5]});
		const uint256jRuDxRd = await Ledgisl7rzQlY.balanceOf.call(addressaspeVba, {from: accounts[4]});
		const uint256B47XDXa = await Ledgisl7rzQlY.allowance.call(addresszikVyIx, addressCm8CNBF, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const uinthjLThi1 = BigInt("35")
		const addresszARpG7 = accounts[3]
		const uintwe0YBci = BigInt("1142")
		const addressBrHVTkd = accounts[3]
		const uintke6zZZ8 = BigInt("1339")
		const addressBobyjWZ = accounts[3]
		const addressrHuDnnZ = accounts[2]
		const uint256lXYAo0I = await LedgislBg9H7o.totalSupply.call({from: accounts[4]});
		const booljiqQbF = await LedgislBg9H7o.transfer.call(addresszARpG7, uinthjLThi1, {from: accounts[5]});
		const boolXw5U3Hg = await LedgislBg9H7o.mint.call(addressBrHVTkd, uintwe0YBci, {from: accounts[3]});
		const boolSeouvJx = await LedgislBg9H7o.transferFrom.call(addressrHuDnnZ, addressBobyjWZ, uintke6zZZ8, {from: accounts[4]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const addresswPob1oL = "0x0000000000000000000000000000000000000001"
		const uintckS09Oh = BigInt("641")
		const addressIIwVtrQ = accounts[3]
		const uint256DBoShI6 = await LedgislBg9H7o.lockCount.call(addresswPob1oL, {from: accounts[5]});
		await LedgislBg9H7o.onlyOwner.call({from: accounts[1]});
		const booljiqQbF = await LedgislBg9H7o.transfer.call(addressIIwVtrQ, uintckS09Oh, {from: accounts[5]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const uintMrouUqu = BigInt("545")
		const uintO9nvTIS = BigInt("1952")
		const addressSYgog0 = accounts[0]
		const uintaB3Wqe = BigInt("655")
		const uintZthZSUC = BigInt("222")
		const addresskcZMD0l = accounts[1]
		const uintfIXpidT = BigInt("39")
		const addressLNRrSEQ = accounts[3]
		const addressNLF8qv4 = await LedgislBg9H7o.lockAfter.call(addressSYgog0, uintO9nvTIS, uintMrouUqu, {from: accounts[0]});
		const addressybh0t5c = await LedgislBg9H7o.lock.call(addresskcZMD0l, uintZthZSUC, uintaB3Wqe, {from: accounts[3]});
		const booljiqQbF = await LedgislBg9H7o.transfer.call(addressLNRrSEQ, uintfIXpidT, {from: accounts[5]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const addressrIGKIEo = accounts[0]
		const uinttTxy9o6 = BigInt("1809")
		const addresstT2aub = accounts[1]
		const uintseEZCPI = BigInt("446")
		const uintOsv7hUA = BigInt("554")
		const addressT7KyF2F = accounts[3]
		const uintOGAC7F = BigInt("735")
		const addressb0mL9AU = accounts[5]
		const addressh9RBto0 = await LedgislBg9H7o.transferOwnership.call(addressrIGKIEo, {from: accounts[0]});
		const boolnANYMSB = await LedgislBg9H7o.approve.call(addresstT2aub, uinttTxy9o6, {from: accounts[3]});
		const boolzK4knJ9 = await LedgislBg9H7o.transferWithLock.call(addressT7KyF2F, uintOsv7hUA, uintseEZCPI, {from: accounts[3]});
		const boolSpfpIg = await LedgislBg9H7o.mint.call(addressb0mL9AU, uintOGAC7F, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const addressi0bofjU = accounts[1]
		const uintAWh2oYK = BigInt("63")
		const addressCL9BOCN = accounts[3]
		const uint256iYH2E5V = await LedgislBg9H7o.balanceOf.call(addressi0bofjU, {from: accounts[3]});
		const uint256yjOGEAH = await LedgislBg9H7o.currentTime.call({from: accounts[3]});
		const booljiqQbF = await LedgislBg9H7o.transfer.call(addressCL9BOCN, uintAWh2oYK, {from: accounts[5]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const uintLauvsPu = BigInt("734")
		const addressKwRp8pg = accounts[5]
		const uinta14EqiB = BigInt("446")
		const uintT8ME052 = BigInt("554")
		const addresspTFGOwN = accounts[3]
		const boolnP7xMA4 = await LedgislBg9H7o.increaseAllowance.call(addressKwRp8pg, uintLauvsPu, {from: accounts[4]});
		const boolzK4knJ9 = await LedgislBg9H7o.transferWithLock.call(addresspTFGOwN, uintT8ME052, uinta14EqiB, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgisopARyyO = await Ledgis.new({from: accounts[1]});
		const uintHsK9BEu = BigInt("1415")
		const uintfW1yAWA = BigInt("1974")
		const addressIpKLBHt = accounts[4]
		const addressKMIe77 = accounts[0]
		const uint256mhYE6G = await LedgisopARyyO.afterTime.call(uintHsK9BEu, {from: accounts[5]});
		const boolzEq5XJ1 = await LedgisopARyyO.transferFrom.call(addressKMIe77, addressIpKLBHt, uintfW1yAWA, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgisqKb3emx = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUYvcYAo = BigInt("1060")
		const uintn7244JK = BigInt("634")
		const addressumSYnKR = accounts[4]
		const addressV23K68O = accounts[1]
		const addressOPViGt5 = accounts[5]
		const addressMW8QBUo = await LedgisqKb3emx.lock.call(addressumSYnKR, uintn7244JK, uintUYvcYAo, {from: accounts[1]});
		const booleqrJrqi = await LedgisqKb3emx.isFrozen.call(addressV23K68O, {from: accounts[2]});
		await LedgisqKb3emx.renounceOwnership.call({from: accounts[4]});
		const uint256ZbCuV6r = await LedgisqKb3emx.balanceOf.call(addressOPViGt5, {from: accounts[3]});
		await LedgisqKb3emx.whenPaused.call({from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const Ledgis8YwWD4 = await Ledgis.new({from: accounts[1]});
		const addressmeIXeUb = accounts[3]
		const addressZdORZHd = accounts[0]
		await Ledgis8YwWD4.pause.call({from: accounts[1]});
		const uint256ydcNHaA = await Ledgis8YwWD4.balanceOf.call(addressmeIXeUb, {from: accounts[1]});
		const addressROSAh6K = await Ledgis8YwWD4.transferOwnership.call(addressZdORZHd, {from: accounts[0]});
		await Ledgis8YwWD4.whenNotFrozen.call({from: accounts[2]});
	});

	it('test for Ledgis', async () => {
		const LedgissD374zB = await Ledgis.new({from: accounts[0]});
		const uintH9sphjW = BigInt("530")
		const address31briq = accounts[5]
		const addressmlxVAyA = accounts[0]
		const uint68Iwjv = BigInt("1136")
		const addressIma1e8U = accounts[5]
		const uintcixeRBN = BigInt("1919")
		const addressXFA52zW = accounts[3]
		const addressgopnlTz = accounts[4]
		await LedgissD374zB.unpause.call({from: accounts[0]});
		await LedgissD374zB.whenNotPaused.call({from: accounts[3]});
		const boolNFOrH0Z = await LedgissD374zB.transferFrom.call(addressmlxVAyA, address31briq, uintH9sphjW, {from: "0x0000000000000000000000000000000000000001"});
		const boolTWkca9Y = await LedgissD374zB.approve.call(addressIma1e8U, uint68Iwjv, {from: "0x0000000000000000000000000000000000000001"});
		const booltrsKcQI = await LedgissD374zB.transferFrom.call(addressgopnlTz, addressXFA52zW, uintcixeRBN, {from: accounts[4]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const uintHFZ9F8s = BigInt("910")
		const uintfBZn5lu = BigInt("1079")
		const addressJnDqXHH = accounts[3]
		const uintFnaKBlC = BigInt("446")
		const uintUZe36eQ = BigInt("554")
		const addressBsLroN1 = accounts[3]
		const addressizJ6ma = accounts[1]
		const boolBkJM4x = await LedgislBg9H7o.transferWithLockAfter.call(addressJnDqXHH, uintfBZn5lu, uintHFZ9F8s, {from: accounts[0]});
		const boolzK4knJ9 = await LedgislBg9H7o.transferWithLock.call(addressBsLroN1, uintUZe36eQ, uintFnaKBlC, {from: accounts[3]});
		const address4xqBrn = await LedgislBg9H7o.unfreeze.call(addressizJ6ma, {from: accounts[0]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const uintpC4zDW = BigInt("1838")
		const uinthdwpql = BigInt("639")
		const addresscLD2mlP = accounts[2]
		const uintSdy9cr7 = BigInt("35")
		const addressC7Wx3SR = accounts[4]
		const address9qPTRm = await LedgislBg9H7o.lock.call(addresscLD2mlP, uinthdwpql, uintpC4zDW, {from: accounts[0]});
		const booljiqQbF = await LedgislBg9H7o.transfer.call(addressC7Wx3SR, uintSdy9cr7, {from: accounts[5]});
	});

	it('test for Ledgis', async () => {
		const Ledgisl7rzQlY = await Ledgis.new({from: accounts[5]});
		const addressZzwcCGI = "0x0000000000000000000000000000000000000002"
		const uintNVInna = BigInt("843")
		const addressFK5jP8H = accounts[3]
		const uint256jRuDxRd = await Ledgisl7rzQlY.balanceOf.call(addressZzwcCGI, {from: accounts[4]});
		const uint256bnWgdx7 = await Ledgisl7rzQlY.totalSupply.call({from: accounts[2]});
		const addresss6noNF6 = await Ledgisl7rzQlY.burn.call(addressFK5jP8H, uintNVInna, {from: accounts[5]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const addressSr5pQvF = accounts[5]
		const uintt6mPDZN = BigInt("35")
		const addressHS91oK9 = accounts[4]
		const addresssLik4C = await LedgislBg9H7o.freeze.call(addressSr5pQvF, {from: accounts[0]});
		const booljiqQbF = await LedgislBg9H7o.transfer.call(addressHS91oK9, uintt6mPDZN, {from: accounts[5]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const uinthZcZJVE = BigInt("446")
		const uintigiZcVq = BigInt("547")
		const addresseGibd1k = accounts[3]
		await LedgislBg9H7o.renounceOwnership.call({from: accounts[0]});
		const boolzK4knJ9 = await LedgislBg9H7o.transferWithLock.call(addresseGibd1k, uintigiZcVq, uinthZcZJVE, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgisbmhuJNM = await Ledgis.new({from: accounts[5]});
		const uinth4L76bg = BigInt("1132")
		const addresseJ5n66 = accounts[0]
		const addressJjm9FoY = accounts[3]
		const addresscZUf1ZN = accounts[3]
		const bool3UTWhH = await LedgisbmhuJNM.approve.call(addresseJ5n66, uinth4L76bg, {from: accounts[2]});
		const addresspg4ndAJ = await LedgisbmhuJNM.unfreeze.call(addressJjm9FoY, {from: accounts[5]});
		await LedgisbmhuJNM.whenPaused.call({from: accounts[2]});
		const addressW5LAUHo = await LedgisbmhuJNM.transferOwnership.call(addresscZUf1ZN, {from: accounts[1]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const uintzYd0vu = BigInt("1808")
		const addressH4Uqu1y = "0x0000000000000000000000000000000000000001"
		const uintmPFJkl = BigInt("1716")
		const addressRIHH4YD = "0x0000000000000000000000000000000000000001"
		const addressrAhP5V6 = accounts[5]
		const uintIxdgJm = BigInt("446")
		const uintPGaLLwd = BigInt("554")
		const addressmAWrjrI = accounts[4]
		const addressyRvEKwL = await LedgislBg9H7o.unlock.call(addressH4Uqu1y, uintzYd0vu, {from: accounts[0]});
		const booloFvbs4 = await LedgislBg9H7o.increaseAllowance.call(addressRIHH4YD, uintmPFJkl, {from: accounts[3]});
		const addresscMeYogN = await LedgislBg9H7o.transferOwnership.call(addressrAhP5V6, {from: accounts[4]});
		const boolzK4knJ9 = await LedgislBg9H7o.transferWithLock.call(addressmAWrjrI, uintPGaLLwd, uintIxdgJm, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const Ledgisl7rzQlY = await Ledgis.new({from: accounts[5]});
		const addressJfQNcw2 = "0x00000000000000000000000000000000000000-1"
		const addressJdt5XT = accounts[4]
		const uintG6zDpee = BigInt("569")
		const addressVv1BSjP = "0x0000000000000000000000000000000000000001"
		const addresspHVVTX4 = "0x0000000000000000000000000000000000000001"
		const uint256jRuDxRd = await Ledgisl7rzQlY.balanceOf.call(addressJfQNcw2, {from: accounts[4]});
		const addressyQUmmwb = await Ledgisl7rzQlY.freeze.call(addressJdt5XT, {from: accounts[2]});
		const booldtyweDU = await Ledgisl7rzQlY.transferFrom.call(addresspHVVTX4, addressVv1BSjP, uintG6zDpee, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgislBg9H7o = await Ledgis.new({from: accounts[0]});
		const uintBIXx8zu = BigInt("1421")
		const addressu3Aa25g = accounts[1]
		const uintjYhapx = BigInt("1344")
		const addresspKzwIeg = accounts[3]
		const addressWnIlN8L = accounts[4]
		const uintOkSuSae = BigInt("1185")
		const addressmSt6mDw = accounts[2]
		const uintx44IpwB = BigInt("32")
		const addressXzVShHh = accounts[3]
		const boolaFe31M = await LedgislBg9H7o.mint.call(addressu3Aa25g, uintBIXx8zu, {from: accounts[0]});
		const boolfXlMxdx = await LedgislBg9H7o.transferFrom.call(addressWnIlN8L, addresspKzwIeg, uintjYhapx, {from: accounts[3]});
		const boolhQrJK3K = await LedgislBg9H7o.transfer.call(addressmSt6mDw, uintOkSuSae, {from: accounts[2]});
		const booljiqQbF = await LedgislBg9H7o.transfer.call(addressXzVShHh, uintx44IpwB, {from: accounts[5]});
	});
})