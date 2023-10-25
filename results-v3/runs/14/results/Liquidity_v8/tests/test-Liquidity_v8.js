const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringORNsUR1 = "2"
		const addressmLpcnSP = accounts[1]
		const addressTT3D0Wt = accounts[1]
		const uintf89hF6c = BigInt("1586")
		const uintE8wmDOr = BigInt("1403")
		const Liquidity_v8qCkTLir = await Liquidity_v8.new(stringORNsUR1, addressmLpcnSP, addressTT3D0Wt, uintf89hF6c, uintE8wmDOr, {from: accounts[0]});
		const addressZPrjxDC = accounts[1]
		await Liquidity_v8qCkTLir.onlyOwner.call({from: accounts[4]});
		const addressxuthlpa = await Liquidity_v8qCkTLir.transferOwnership.call(addressZPrjxDC, {from: accounts[3]});
		const addressZBiGA5D = await Liquidity_v8qCkTLir.owner.call({from: accounts[4]});
		const boolNIgwMzm = await Liquidity_v8qCkTLir.withdraw.call({from: accounts[3]});
		await Liquidity_v8qCkTLir.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolw56IU9U = await Liquidity_v8qCkTLir.emergencyWithdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWZwlShw = "gs8fAQVEUCzA8"
		const addresspJ0IzH1 = "0x0000000000000000000000000000000000000001"
		const addressyLiayaK = "0x0000000000000000000000000000000000000001"
		const uintii7pw73 = BigInt("1276")
		const uintP3oOBrq = BigInt("1903")
		const Liquidity_v8gyEVrB3 = await Liquidity_v8.new(stringWZwlShw, addresspJ0IzH1, addressyLiayaK, uintii7pw73, uintP3oOBrq, {from: accounts[5]});
		const uintqL0kYno = BigInt("466")
		const addressplKCbwq = accounts[5]
		const uintM17Xux1 = BigInt("1282")
		const uint256JIAl5Z = await Liquidity_v8gyEVrB3.changeLockDuration.call(uintqL0kYno, {from: accounts[4]});
		const addressGxsiyTF = await Liquidity_v8gyEVrB3.transferOwnership.call(addressplKCbwq, {from: accounts[1]});
		const uint64j45101p = await Liquidity_v8gyEVrB3.setRate.call(uintM17Xux1, {from: accounts[1]});
		const boolAMXX8Ll = await Liquidity_v8gyEVrB3.isOwner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWPpY5nZ = "Vj2Kb07Yr9iM8m3Hn0lLoX2gNmGghVdCJ3aesQMSPHwiRV4KzWK5NdqhDCnWpoUM3YXTMFGtdBpJJvqII"
		const addressM3XD3q1 = accounts[0]
		const addressq5RUvoL = accounts[2]
		const uinttlmrgWi = BigInt("1553")
		const uintT1cZl9K = BigInt("208")
		const Liquidity_v8QF48k1S = await Liquidity_v8.new(stringWPpY5nZ, addressM3XD3q1, addressq5RUvoL, uinttlmrgWi, uintT1cZl9K, {from: "0x0000000000000000000000000000000000000001"});
		const addressTLnqpRa = accounts[4]
		const addressDMi0mw5 = accounts[4]
		const uintxxFomt = BigInt("1164")
		const addressHVENdvD = accounts[5]
		const address5XEvom = accounts[3]
		const uintomZIx88 = BigInt("1484")
		const addressFqJpLc7 = accounts[3]
		const addresscRqYnZM = accounts[3]
		const addressshgTnrG = accounts[4]
		const uintjmnVeHw = BigInt("169")
		const addressJblg0jv = accounts[0]
		const 
vohB97b = await Liquidity_v8QF48k1S.userDeposits.call(addressTLnqpRa, {from: accounts[4]});
		const 
TPDRLIs = await Liquidity_v8QF48k1S._hasAllowance.call(addressHVENdvD, uintxxFomt, addressDMi0mw5, {from: "0x0000000000000000000000000000000000000001"});
		const 
NtYOpiJ = await Liquidity_v8QF48k1S._hasAllowance.call(addressFqJpLc7, uintomZIx88, address5XEvom, {from: accounts[2]});
		const uint256u4byrXD = await Liquidity_v8QF48k1S.calculate.call(addresscRqYnZM, {from: accounts[1]});
		const 
kWEBcc = await Liquidity_v8QF48k1S._hasAllowance.call(addressJblg0jv, uintjmnVeHw, addressshgTnrG, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringENmXzg = "77MNs5NnMT3OEzrMQzGH"
		const addressLx5tOz = accounts[0]
		const addressAMmk5JY = accounts[2]
		const uintzfXCD3o = BigInt("172")
		const uintsi2N6Qy = BigInt("1754")
		const Liquidity_v8KS7CEX = await Liquidity_v8.new(stringENmXzg, addressLx5tOz, addressAMmk5JY, uintzfXCD3o, uintsi2N6Qy, {from: accounts[3]});
		const addressL2myGJ = accounts[5]
		const addressTQckz3N = accounts[0]
		const uinttvNCTGi = BigInt("157")
		const 
XSemid8 = await Liquidity_v8KS7CEX.userDeposits.call(addressL2myGJ, {from: accounts[4]});
		const uint256dzS23yr = await Liquidity_v8KS7CEX.calculate.call(addressTQckz3N, {from: accounts[5]});
		await Liquidity_v8KS7CEX.onlyOwner.call({from: accounts[1]});
		const uint64vuLgBTB = await Liquidity_v8KS7CEX.setRate.call(uinttvNCTGi, {from: accounts[0]});
		const boollNwY7us = await Liquidity_v8KS7CEX.isOwner.call({from: accounts[0]});
		const boolSzpZw1w = await Liquidity_v8KS7CEX.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const strings2243eQ = "sM85XJEqlTv6891"
		const addresstZr0983 = accounts[3]
		const addresssjUPAMB = accounts[5]
		const uintCNQd4D = BigInt("584")
		const uintDw0dvd = BigInt("903")
		const Liquidity_v8RV0stID = await Liquidity_v8.new(strings2243eQ, addresstZr0983, addresssjUPAMB, uintCNQd4D, uintDw0dvd, {from: accounts[3]});
		const addressqzjJbIG = "0x0000000000000000000000000000000000000001"
		const 
RZQDO90 = await Liquidity_v8RV0stID.userDeposits.call(addressqzjJbIG, {from: accounts[2]});
		const boolOVeaz2Q = await Liquidity_v8RV0stID.emergencyWithdraw.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringUD0Q3JS = "xwryZoXYWBi"
		const addressjXeIrpa = accounts[1]
		const addresswxO9KaJ = "0x0000000000000000000000000000000000000001"
		const uinto3u2qWz = BigInt("289")
		const uintt4gz3zE = BigInt("1785")
		const Liquidity_v89PzdTA = await Liquidity_v8.new(stringUD0Q3JS, addressjXeIrpa, addresswxO9KaJ, uinto3u2qWz, uintt4gz3zE, {from: accounts[2]});
		const addressuiVxrTj = accounts[3]
		const uintH7pbITE = BigInt("1695")
		const uint256LxIutPR = await Liquidity_v89PzdTA.calculate.call(addressuiVxrTj, {from: accounts[0]});
		const boolPbFSGtk = await Liquidity_v89PzdTA.withdraw.call({from: accounts[1]});
		const uint64exwqVF = await Liquidity_v89PzdTA.setRate.call(uintH7pbITE, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const strings2243eQ = "sM85XJEqlTv6891"
		const addresscEmuaIk = accounts[3]
		const addressir2xYeM = accounts[5]
		const uintptpLb4 = BigInt("584")
		const uinthcDxMKm = BigInt("903")
		const Liquidity_v8RV0stID = await Liquidity_v8.new(strings2243eQ, addresscEmuaIk, addressir2xYeM, uintptpLb4, uinthcDxMKm, {from: accounts[3]});
		const addressezhta1s = accounts[3]
		const uintyWAbiVg = BigInt("546")
		const 
RZQDO90 = await Liquidity_v8RV0stID.userDeposits.call(addressezhta1s, {from: accounts[2]});
		const boolrbP2Z0B = await Liquidity_v8RV0stID.stake.call(uintyWAbiVg, {from: accounts[4]});
		const boolOVeaz2Q = await Liquidity_v8RV0stID.emergencyWithdraw.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringDFWXHM = "sBf4Zi5GSiBzkzw3TIfEROf"
		const addressPtKpUI7 = accounts[3]
		const addressO5noiKt = accounts[0]
		const uintaghuCJC = BigInt("81")
		const uintzUz7Uq7 = BigInt("528")
		const Liquidity_v8SmzHqZV = await Liquidity_v8.new(stringDFWXHM, addressPtKpUI7, addressO5noiKt, uintaghuCJC, uintzUz7Uq7, {from: accounts[4]});
		const uintl4oSLiw = BigInt("1838")
		const uintOBQvcOP = BigInt("121")
		const addressgiYz4O6 = await Liquidity_v8SmzHqZV.owner.call({from: accounts[2]});
		const uint64ADDQ7wL = await Liquidity_v8SmzHqZV.setRate.call(uintl4oSLiw, {from: accounts[3]});
		const uint256xNTV2el = await Liquidity_v8SmzHqZV.changeLockDuration.call(uintOBQvcOP, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const strings2243eQ = "sM85XJEqlTv6891"
		const addressgWvqq6Y = accounts[3]
		const addresszHZ9KUX = accounts[5]
		const uintAn67vnP = BigInt("584")
		const uintJQRkgJx = BigInt("903")
		const Liquidity_v8RV0stID = await Liquidity_v8.new(strings2243eQ, addressgWvqq6Y, addresszHZ9KUX, uintAn67vnP, uintJQRkgJx, {from: accounts[3]});
		const uintSc0B4Mc = BigInt("1326")
		const addressont2eDV = accounts[4]
		const uint256NNhqfRl = await Liquidity_v8RV0stID.changeLockDuration.call(uintSc0B4Mc, {from: accounts[3]});
		const 
RZQDO90 = await Liquidity_v8RV0stID.userDeposits.call(addressont2eDV, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringe1hVRdu = "FtqzOgUDUOdPYHn5F5Oc8DpXxyKH0ywCwyxjqCX1HQzraHx4F3ViLtxSBgWlsTSJXHB4TU2HX4gn8RMEz"
		const addressF7JAgJ9 = "0x0000000000000000000000000000000000000001"
		const addressMwMZaJf = accounts[3]
		const uintNu8UswI = BigInt("1695")
		const uintNdvBlKs = BigInt("1909")
		const Liquidity_v8CLbYGnt = await Liquidity_v8.new(stringe1hVRdu, addressF7JAgJ9, addressMwMZaJf, uintNu8UswI, uintNdvBlKs, {from: accounts[3]});
		const uintquSfpsz = BigInt("2004")
		const uintpqsnRD5 = BigInt("607")
		const uint256VOHuUCT = await Liquidity_v8CLbYGnt.changeLockDuration.call(uintquSfpsz, {from: accounts[3]});
		const uint64xGxkTra = await Liquidity_v8CLbYGnt.setRate.call(uintpqsnRD5, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const strings2243eQ = "sM85XJEqlTv6891"
		const addressH3cQevj = accounts[3]
		const addressaA6rRQ7 = accounts[5]
		const uintMFVx4q3 = BigInt("584")
		const uintvXnQZiT = BigInt("903")
		const Liquidity_v8RV0stID = await Liquidity_v8.new(strings2243eQ, addressH3cQevj, addressaA6rRQ7, uintMFVx4q3, uintvXnQZiT, {from: accounts[3]});
		const addressBIPu4Do = accounts[4]
		const 
RZQDO90 = await Liquidity_v8RV0stID.userDeposits.call(addressBIPu4Do, {from: accounts[2]});
		await Liquidity_v8RV0stID.renounceOwnership.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const strings2243eQ = "sM85XJEqlTv6891"
		const addressucdPBOJ = accounts[3]
		const addressZZv0vaF = accounts[5]
		const uintn4iUSAX = BigInt("584")
		const uintdGJd4wU = BigInt("903")
		const Liquidity_v8RV0stID = await Liquidity_v8.new(strings2243eQ, addressucdPBOJ, addressZZv0vaF, uintn4iUSAX, uintdGJd4wU, {from: accounts[3]});
		const addressqh3C7mI = accounts[1]
		const addressFEJM2a5 = "0x0000000000000000000000000000000000000000"
		const addressv7Unzw = await Liquidity_v8RV0stID.transferOwnership.call(addressqh3C7mI, {from: accounts[3]});
		const 
RZQDO90 = await Liquidity_v8RV0stID.userDeposits.call(addressFEJM2a5, {from: accounts[2]});
	});
})