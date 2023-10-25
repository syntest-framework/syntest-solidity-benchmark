const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringu6Nj5zm = "LBqWvk8570UUeSi"
		const addressLBAvQW1 = accounts[1]
		const addressPPWiRW = accounts[1]
		const uintM8zuL6q = BigInt("375")
		const uintsNC5wwV = BigInt("1874")
		const Liquidity_v8lbR9Ljq = await Liquidity_v8.new(stringu6Nj5zm, addressLBAvQW1, addressPPWiRW, uintM8zuL6q, uintsNC5wwV, {from: accounts[4]});
		await Liquidity_v8lbR9Ljq.onlyOwner.call({from: accounts[4]});
		await Liquidity_v8lbR9Ljq.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolxaDdXaM = await Liquidity_v8lbR9Ljq.emergencyWithdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringcezRInE = "K7nUoxtGHXR2BHVXq3QBIcjUXmnG2w0gG8OezdJllwlh1rsLWnj9WIoTc"
		const addresscjaZ6Pf = accounts[1]
		const addressWq5qOJ = accounts[5]
		const uintHy7oIiy = BigInt("315")
		const uintEG9MgGd = BigInt("909")
		const Liquidity_v8lRLIRI = await Liquidity_v8.new(stringcezRInE, addresscjaZ6Pf, addressWq5qOJ, uintHy7oIiy, uintEG9MgGd, {from: accounts[4]});
		const uintCj0qd3m = BigInt("144")
		const uintE6euvFU = BigInt("848")
		const boolNxwMtW8 = await Liquidity_v8lRLIRI.isOwner.call({from: accounts[0]});
		const uint256qp71mCk = await Liquidity_v8lRLIRI.changeLockDuration.call(uintCj0qd3m, {from: accounts[3]});
		const boolQik24j = await Liquidity_v8lRLIRI.withdraw.call({from: accounts[1]});
		const uint256ad4bxPl = await Liquidity_v8lRLIRI.changeLockDuration.call(uintE6euvFU, {from: accounts[1]});
		await Liquidity_v8lRLIRI.onlyOwner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringnFcK3C = "OgeosE8vNE40kxMu11cCy3YUzRA99XrZveW8fZYryff0ZZA6FI97d8lVMiGIv37L2l04vEGbeDIaO9WRU0TMHLoUSEAI7Xr7"
		const addressCKdFVGG = accounts[2]
		const addressed323HE = "0x0000000000000000000000000000000000000001"
		const uintfbfBPEf = BigInt("578")
		const uintFOQXBrn = BigInt("1364")
		const Liquidity_v8st2dEmg = await Liquidity_v8.new(stringnFcK3C, addressCKdFVGG, addressed323HE, uintfbfBPEf, uintFOQXBrn, {from: "0x0000000000000000000000000000000000000001"});
		const uintwYgDl7d = BigInt("2010")
		const uintSnboU3q = BigInt("868")
		const uintoYSCCd8 = BigInt("369")
		await Liquidity_v8st2dEmg.renounceOwnership.call({from: accounts[0]});
		const boolrZk5No2 = await Liquidity_v8st2dEmg.stake.call(uintwYgDl7d, {from: accounts[2]});
		const uint256iLjZqd5 = await Liquidity_v8st2dEmg.changeLockDuration.call(uintSnboU3q, {from: accounts[1]});
		const boolFVb8E9I = await Liquidity_v8st2dEmg.stake.call(uintoYSCCd8, {from: accounts[4]});
		await Liquidity_v8st2dEmg.renounceOwnership.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQrptpII = "OZhnYkJIRKIhJWjKfBiv6MepYgg9QYNGXgqFJW8AD4oQvpdh927O0vq1chgr"
		const addressLwgtXuG = accounts[3]
		const addressfbNJPXh = "0x0000000000000000000000000000000000000001"
		const uintKEouhEz = BigInt("1129")
		const uintmEygYap = BigInt("1870")
		const Liquidity_v8Vic232k = await Liquidity_v8.new(stringQrptpII, addressLwgtXuG, addressfbNJPXh, uintKEouhEz, uintmEygYap, {from: accounts[2]});
		const uintTGIArZV = BigInt("1541")
		const uintDojtjS4 = BigInt("1755")
		const addressQ1ShCjH = accounts[0]
		const boolTYtjGw3 = await Liquidity_v8Vic232k.withdraw.call({from: accounts[1]});
		const boolzdCy7Bz = await Liquidity_v8Vic232k.addReward.call(uintTGIArZV, {from: accounts[1]});
		const uint64XYkihet = await Liquidity_v8Vic232k.setRate.call(uintDojtjS4, {from: accounts[4]});
		await Liquidity_v8Vic232k.onlyOwner.call({from: accounts[4]});
		const 
al8TDpd = await Liquidity_v8Vic232k.userDeposits.call(addressQ1ShCjH, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringx9Qw8JP = "kL9PaqJV3np2Jye4nyUbLHu7qJP2strWbBEsq29yEXftVreen4H7"
		const addressOhWOjwd = accounts[2]
		const addressTUF5plW = accounts[1]
		const uintXbuSBLV = BigInt("1758")
		const uintRB54f9G = BigInt("552")
		const Liquidity_v8qiyJkkQ = await Liquidity_v8.new(stringx9Qw8JP, addressOhWOjwd, addressTUF5plW, uintXbuSBLV, uintRB54f9G, {from: accounts[4]});
		const uintxNZjONB = BigInt("2021")
		const uintE70lZzi = BigInt("623")
		const boolBJkOyaU = await Liquidity_v8qiyJkkQ.stake.call(uintxNZjONB, {from: accounts[4]});
		const uint64WOx27z = await Liquidity_v8qiyJkkQ.setRate.call(uintE70lZzi, {from: accounts[4]});
		await Liquidity_v8qiyJkkQ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const bool7Y8HTY = await Liquidity_v8qiyJkkQ.emergencyWithdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringIyUMGal = "uHzMDsob4ujxfa5kVicBNOBTwrejkNuc"
		const addresss4ciriO = accounts[1]
		const addressezhaM1K = accounts[2]
		const uinttlj8vQ7 = BigInt("1910")
		const uintBrpnA8 = BigInt("433")
		const Liquidity_v8NcJzjl4 = await Liquidity_v8.new(stringIyUMGal, addresss4ciriO, addressezhaM1K, uinttlj8vQ7, uintBrpnA8, {from: accounts[4]});
		const addresseKDnwnq = accounts[2]
		const 
yoPgGQ7 = await Liquidity_v8NcJzjl4.userDeposits.call(addresseKDnwnq, {from: accounts[0]});
		const boolHkjHYA = await Liquidity_v8NcJzjl4.withdraw.call({from: accounts[2]});
		const booljCHntML = await Liquidity_v8NcJzjl4.isOwner.call({from: accounts[2]});
		const addresstJQRHnT = await Liquidity_v8NcJzjl4.owner.call({from: accounts[4]});
		await Liquidity_v8NcJzjl4.onlyOwner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringdDAq43 = "HobzxmJ7gzCNqA9kkmFj12y1xDXKKNMHbOswFh917CtxbIgkmjRb8xOLSWb58CajmDqxr1jZueYfH39e9rgjyE4"
		const addressxo0BqdL = accounts[3]
		const addressGpzDeTV = accounts[1]
		const uintpdp1TSs = BigInt("1812")
		const uintoblIOas = BigInt("754")
		const Liquidity_v8JvErGgj = await Liquidity_v8.new(stringdDAq43, addressxo0BqdL, addressGpzDeTV, uintpdp1TSs, uintoblIOas, {from: accounts[3]});
		const uintX59VSAS = BigInt("752")
		const addressM5lnPok = accounts[2]
		const boolCrvvVWl = await Liquidity_v8JvErGgj.emergencyWithdraw.call({from: accounts[0]});
		const uint64ngEDdpc = await Liquidity_v8JvErGgj.setRate.call(uintX59VSAS, {from: accounts[0]});
		const 
EyZ3GjQ = await Liquidity_v8JvErGgj.userDeposits.call(addressM5lnPok, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQSYxWHZ = "d9uhzQgSrFnni2PdeP4uyhYx7Po7vh2nGNrmFBxj1AmmKsV0kNqTKaPKbhWVvjK"
		const addressXPwtQ0 = accounts[2]
		const addresssaQlPXU = accounts[0]
		const uintUwh7BKs = BigInt("1060")
		const uintsQlSsyo = BigInt("28")
		const Liquidity_v8Xd0JokV = await Liquidity_v8.new(stringQSYxWHZ, addressXPwtQ0, addresssaQlPXU, uintUwh7BKs, uintsQlSsyo, {from: accounts[4]});
		const addressFisVISt = accounts[1]
		const addressHHQ0TDp = accounts[2]
		const addressdj6d7a = accounts[0]
		const addressefy2a7a = await Liquidity_v8Xd0JokV.transferOwnership.call(addressFisVISt, {from: accounts[4]});
		const 
PjR4iHZ = await Liquidity_v8Xd0JokV.userDeposits.call(addressHHQ0TDp, {from: accounts[4]});
		const booldNbgQCI = await Liquidity_v8Xd0JokV.emergencyWithdraw.call({from: accounts[5]});
		const boolBmwwbeG = await Liquidity_v8Xd0JokV.withdraw.call({from: accounts[4]});
		const uint256HvPFCq7 = await Liquidity_v8Xd0JokV.calculate.call(addressdj6d7a, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringGooto6q = "3qlOESp28e"
		const addresswDXQPo0 = accounts[3]
		const addresskpFhOrX = accounts[0]
		const uintdRxWJzm = BigInt("1945")
		const uintykHZZs = BigInt("405")
		const Liquidity_v8BEm2Yvr = await Liquidity_v8.new(stringGooto6q, addresswDXQPo0, addresskpFhOrX, uintdRxWJzm, uintykHZZs, {from: accounts[2]});
		const uinty27abmK = BigInt("707")
		const uinttfsyyQ1 = BigInt("1174")
		const uintl7B9cFf = BigInt("1285")
		const uintnnUDuUN = BigInt("906")
		const uinty2WmiW5 = BigInt("507")
		const booliIOsomb = await Liquidity_v8BEm2Yvr.isOwner.call({from: accounts[1]});
		const uint64WW9zGk0 = await Liquidity_v8BEm2Yvr.setRate.call(uinty27abmK, {from: accounts[2]});
		const uint64t3lb14i = await Liquidity_v8BEm2Yvr.setRate.call(uinttfsyyQ1, {from: accounts[1]});
		const boolVQR6Jgm = await Liquidity_v8BEm2Yvr.withdraw.call({from: accounts[3]});
		const boolUMCFoFt = await Liquidity_v8BEm2Yvr.isOwner.call({from: accounts[3]});
		const uint64z2yJC4S = await Liquidity_v8BEm2Yvr.setRate.call(uintl7B9cFf, {from: accounts[2]});
		const uint64lj0rJ5f = await Liquidity_v8BEm2Yvr.setRate.call(uintnnUDuUN, {from: accounts[2]});
		const uint64U68eSLY = await Liquidity_v8BEm2Yvr.setRate.call(uinty2WmiW5, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringIyUMGal = "uHzMDsob4ujxfa5kVicBNOBTwrejkNuc"
		const addressvh6dzIj = accounts[1]
		const addressWrM8eA = accounts[2]
		const uintC59RZ6g = BigInt("1910")
		const uintBuSJcUu = BigInt("433")
		const Liquidity_v8NcJzjl4 = await Liquidity_v8.new(stringIyUMGal, addressvh6dzIj, addressWrM8eA, uintC59RZ6g, uintBuSJcUu, {from: accounts[4]});
		const addressZpUYtIp = accounts[1]
		const addressiFiZuSd = accounts[2]
		const addresslfq3WoR = accounts[1]
		const 
EQXLp3Y = await Liquidity_v8NcJzjl4.userDeposits.call(addressZpUYtIp, {from: accounts[2]});
		const 
yoPgGQ7 = await Liquidity_v8NcJzjl4.userDeposits.call(addressiFiZuSd, {from: accounts[0]});
		const uint256ozrAJdA = await Liquidity_v8NcJzjl4.calculate.call(addresslfq3WoR, {from: accounts[1]});
		const boolHkjHYA = await Liquidity_v8NcJzjl4.withdraw.call({from: accounts[2]});
		const booljCHntML = await Liquidity_v8NcJzjl4.isOwner.call({from: accounts[2]});
		const addresstJQRHnT = await Liquidity_v8NcJzjl4.owner.call({from: accounts[4]});
		await Liquidity_v8NcJzjl4.onlyOwner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringIyUMGal = "uHzMDsob4ujxfa5kVicBNOBTwrejkNuc"
		const addressN7xCZAr = accounts[1]
		const addressc4I718Q = accounts[2]
		const uinto758Dsv = BigInt("1910")
		const uintQdxQhh = BigInt("433")
		const Liquidity_v8NcJzjl4 = await Liquidity_v8.new(stringIyUMGal, addressN7xCZAr, addressc4I718Q, uinto758Dsv, uintQdxQhh, {from: accounts[4]});
		const booljCHntML = await Liquidity_v8NcJzjl4.isOwner.call({from: accounts[2]});
		const addresstJQRHnT = await Liquidity_v8NcJzjl4.owner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringIyUMGal = "uHzMDsob4ujxfa5kVicBNOBTwrejkNuc"
		const addressvA4Xg30 = accounts[1]
		const addressbVvxef8 = accounts[2]
		const uintrnxiwW3 = BigInt("1910")
		const uintxdyo70s = BigInt("433")
		const Liquidity_v8NcJzjl4 = await Liquidity_v8.new(stringIyUMGal, addressvA4Xg30, addressbVvxef8, uintrnxiwW3, uintxdyo70s, {from: accounts[4]});
		const uintCWRuYbc = BigInt("379")
		const addresselVHlc = accounts[3]
		await Liquidity_v8NcJzjl4.renounceOwnership.call({from: accounts[4]});
		const uint64FYvDCU = await Liquidity_v8NcJzjl4.setRate.call(uintCWRuYbc, {from: accounts[4]});
		const boolHkjHYA = await Liquidity_v8NcJzjl4.withdraw.call({from: accounts[2]});
		await Liquidity_v8NcJzjl4.renounceOwnership.call({from: accounts[1]});
		const 
Sm5fMhr = await Liquidity_v8NcJzjl4.userDeposits.call(addresselVHlc, {from: "0x0000000000000000000000000000000000000001"});
		const addresstJQRHnT = await Liquidity_v8NcJzjl4.owner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgVbJhpM = "tiJkSLAUrwQmkO0JX5zsHGd6i1hgQLZscXbgLQ"
		const addressSWGRMt9 = accounts[5]
		const addressloejFQv = accounts[0]
		const uintGNPCxL7 = BigInt("337")
		const uintN9DPGht = BigInt("1224")
		const Liquidity_v8PNBQjG = await Liquidity_v8.new(stringgVbJhpM, addressSWGRMt9, addressloejFQv, uintGNPCxL7, uintN9DPGht, {from: accounts[4]});
		const uintJ6yzw3c = BigInt("1095")
		const uintsXfqLy = BigInt("1635")
		const uint256lwtlcT = await Liquidity_v8PNBQjG.changeLockDuration.call(uintJ6yzw3c, {from: accounts[4]});
		const boolOhw1XsN = await Liquidity_v8PNBQjG.stake.call(uintsXfqLy, {from: accounts[3]});
		const booluflvM0l = await Liquidity_v8PNBQjG.isOwner.call({from: accounts[0]});
	});
})