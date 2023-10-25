const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringUIGp9fi = "fvc"
		const addressACK346e = accounts[1]
		const addressvrBerb5 = accounts[3]
		const uintVDkWIck = BigInt("652")
		const uintIqvVlAs = BigInt("120")
		const Liquidity_v8sjzknn5 = await Liquidity_v8.new(stringUIGp9fi, addressACK346e, addressvrBerb5, uintVDkWIck, uintIqvVlAs, {from: accounts[1]});
		const uintMrZJpdF = BigInt("1339")
		const boolDmn2xhV = await Liquidity_v8sjzknn5.stake.call(uintMrZJpdF, {from: accounts[1]});
		const addressembr1PV = await Liquidity_v8sjzknn5.owner.call({from: accounts[1]});
		const boolOVcvfp = await Liquidity_v8sjzknn5.emergencyWithdraw.call({from: accounts[0]});
		await Liquidity_v8sjzknn5.renounceOwnership.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlGsP8Cv = "35WHIW0XMBoAY3iYHXR"
		const addresspNlfV2l = "0x0000000000000000000000000000000000000001"
		const addresstsyrAe = accounts[2]
		const uintIPe32WE = BigInt("357")
		const uintk1Jvgqv = BigInt("294")
		const Liquidity_v8xPDyL9 = await Liquidity_v8.new(stringlGsP8Cv, addresspNlfV2l, addresstsyrAe, uintIPe32WE, uintk1Jvgqv, {from: accounts[1]});
		const booldNX9wx = await Liquidity_v8xPDyL9.isOwner.call({from: accounts[3]});
		const booldaqwyi8 = await Liquidity_v8xPDyL9.emergencyWithdraw.call({from: accounts[2]});
		await Liquidity_v8xPDyL9.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQKV7bS = "qzmOarMjhV1BklFyuUB3RrIT2IBatxWM4VMAx5TGdGKnzb69ZMJh5RElRRMLlE8gBkgh601C6HjAvDNcIa5AFYNppnw77r37JU"
		const addressIQhAsnx = accounts[2]
		const addresswS0Udgl = accounts[2]
		const uintIRU4EEB = BigInt("1179")
		const uintDrjHeWB = BigInt("212")
		const Liquidity_v8KCQ6VpE = await Liquidity_v8.new(stringQKV7bS, addressIQhAsnx, addresswS0Udgl, uintIRU4EEB, uintDrjHeWB, {from: accounts[2]});
		const uintC4wiB2Y = BigInt("1170")
		const addresssV3iHLG = accounts[0]
		const addressxRRkwOu = accounts[4]
		const uint256bsZL53D = await Liquidity_v8KCQ6VpE.changeLockDuration.call(uintC4wiB2Y, {from: accounts[2]});
		const uint256MfuQ9Y = await Liquidity_v8KCQ6VpE.calculate.call(addresssV3iHLG, {from: "0x0000000000000000000000000000000000000001"});
		const addressbd5yWy = await Liquidity_v8KCQ6VpE.transferOwnership.call(addressxRRkwOu, {from: "0x0000000000000000000000000000000000000001"});
		const boolC29l6PD = await Liquidity_v8KCQ6VpE.isOwner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringUHWRdXY = "3fWCbC2jQ1uZPIaWJH1ByaXqJjNkZCxxyvU7EFsDmgcKpMzTxmDJsXRQbtpbB6U5g2f2Q"
		const addressi1OVhRj = accounts[1]
		const addressudJlpYL = "0x0000000000000000000000000000000000000001"
		const uintUlNCt1p = BigInt("797")
		const uintlNmfZqz = BigInt("1276")
		const Liquidity_v8HHEQ4XY = await Liquidity_v8.new(stringUHWRdXY, addressi1OVhRj, addressudJlpYL, uintUlNCt1p, uintlNmfZqz, {from: accounts[4]});
		const uintQPv0kcZ = BigInt("1926")
		const boolL3mYwx0 = await Liquidity_v8HHEQ4XY.withdraw.call({from: accounts[0]});
		const bools3k7NM = await Liquidity_v8HHEQ4XY.addReward.call(uintQPv0kcZ, {from: accounts[5]});
		const boolP3oxgUP = await Liquidity_v8HHEQ4XY.isOwner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringERneZ39 = "NGeyIoxTMrsQZqzB3AULdU9Ircifh56iZp2TAnwtlCajUy7TxbSbUdyKPblhNt67wNRergl"
		const addressumWWA1 = accounts[3]
		const addressGsO1Sg2 = accounts[1]
		const uintX0wgYv5 = BigInt("798")
		const uintRcqHHxm = BigInt("914")
		const Liquidity_v8yz05svq = await Liquidity_v8.new(stringERneZ39, addressumWWA1, addressGsO1Sg2, uintX0wgYv5, uintRcqHHxm, {from: "0x0000000000000000000000000000000000000001"});
		const addressQ3nUND = accounts[0]
		const uintZK4adMW = BigInt("789")
		const addressGtDoX4x = accounts[1]
		const 
ZaHXm0r = await Liquidity_v8yz05svq._hasAllowance.call(addressGtDoX4x, uintZK4adMW, addressQ3nUND, {from: accounts[0]});
		await Liquidity_v8yz05svq.onlyOwner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlGsP8Cv = "35WHIW0XMBoAY3iYHXR"
		const addressltBqQdq = "0x0000000000000000000000000000000000000001"
		const addressCgedsJG = accounts[2]
		const uintKNN3tPn = BigInt("357")
		const uintMW0FJ8h = BigInt("294")
		const Liquidity_v8xPDyL9 = await Liquidity_v8.new(stringlGsP8Cv, addressltBqQdq, addressCgedsJG, uintKNN3tPn, uintMW0FJ8h, {from: accounts[1]});
		const booldNX9wx = await Liquidity_v8xPDyL9.isOwner.call({from: accounts[3]});
		await Liquidity_v8xPDyL9.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQKV7bS = "qzmOarMjhV1BklFyuUB3RrIT2IBatxWM4VMAx5TGdGKnzb69ZMJh5RElRRMLlE8gBkgh601C6HjAvDNcIa5AFYNppnw77r37JU"
		const addressPCpLoWW = accounts[2]
		const addressX5SQ31u = accounts[2]
		const uintHmApR8r = BigInt("1179")
		const uintenZdmdq = BigInt("212")
		const Liquidity_v8KCQ6VpE = await Liquidity_v8.new(stringQKV7bS, addressPCpLoWW, addressX5SQ31u, uintHmApR8r, uintenZdmdq, {from: accounts[2]});
		const addressxrU5ySg = accounts[0]
		const addresssXbHVhj = accounts[1]
		const uintKt7PPYt = BigInt("1170")
		const addresszkmQCg1 = accounts[3]
		const addressEHCJbfP = accounts[4]
		const address6MsT8b = accounts[1]
		const uintIgtsqTZ = BigInt("783")
		const addresslRZ6TsJ = accounts[0]
		const addressStye81 = await Liquidity_v8KCQ6VpE.owner.call({from: accounts[5]});
		const uint256hZFjn46 = await Liquidity_v8KCQ6VpE.calculate.call(addressxrU5ySg, {from: accounts[4]});
		const uint256CrLe3Pe = await Liquidity_v8KCQ6VpE.calculate.call(addresssXbHVhj, {from: accounts[4]});
		const uint256bsZL53D = await Liquidity_v8KCQ6VpE.changeLockDuration.call(uintKt7PPYt, {from: accounts[2]});
		const uint256MfuQ9Y = await Liquidity_v8KCQ6VpE.calculate.call(addresszkmQCg1, {from: "0x0000000000000000000000000000000000000001"});
		const addressbd5yWy = await Liquidity_v8KCQ6VpE.transferOwnership.call(addressEHCJbfP, {from: "0x0000000000000000000000000000000000000001"});
		const boolW81o235 = await Liquidity_v8KCQ6VpE.isOwner.call({from: accounts[5]});
		const boolC29l6PD = await Liquidity_v8KCQ6VpE.isOwner.call({from: accounts[0]});
		const 
FwDMXEc = await Liquidity_v8KCQ6VpE._hasAllowance.call(addresslRZ6TsJ, uintIgtsqTZ, address6MsT8b, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQKV7bS = "qzmOarMjhV1BklFyuUB3RrIT2IBatxWM4VMAx5TGdGKnzb69ZMJh5RElRRMLlE8gBkgh601C6HjAvDNcIa5AFYNppnw77r37JU"
		const addresshoqmDDP = accounts[2]
		const addressyq4JPkU = accounts[2]
		const uintLzb0CTC = BigInt("1179")
		const uintlXARCK = BigInt("212")
		const Liquidity_v8KCQ6VpE = await Liquidity_v8.new(stringQKV7bS, addresshoqmDDP, addressyq4JPkU, uintLzb0CTC, uintlXARCK, {from: accounts[2]});
		const uintn7rey1 = BigInt("1170")
		const addressHKMZOI = accounts[4]
		const addressahZU6GT = accounts[0]
		const addresstqFyGMv = accounts[3]
		const uint256bsZL53D = await Liquidity_v8KCQ6VpE.changeLockDuration.call(uintn7rey1, {from: accounts[2]});
		const 
NalSUOV = await Liquidity_v8KCQ6VpE.userDeposits.call(addressHKMZOI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MfuQ9Y = await Liquidity_v8KCQ6VpE.calculate.call(addressahZU6GT, {from: "0x0000000000000000000000000000000000000001"});
		const addressbd5yWy = await Liquidity_v8KCQ6VpE.transferOwnership.call(addresstqFyGMv, {from: "0x0000000000000000000000000000000000000001"});
		const boolC29l6PD = await Liquidity_v8KCQ6VpE.isOwner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringvKLNfaY = "Hnrkc2tr76oHrreIeckWnuWwumga4fDA7n4lfpaqjS14z"
		const addressQpbVBpf = accounts[1]
		const addressykAu8Y0 = accounts[4]
		const uint3tSeIS = BigInt("357")
		const uintACYLpIu = BigInt("1910")
		const Liquidity_v8eZh6Uba = await Liquidity_v8.new(stringvKLNfaY, addressQpbVBpf, addressykAu8Y0, uint3tSeIS, uintACYLpIu, {from: accounts[0]});
		const addressH4DT6kT = accounts[2]
		await Liquidity_v8eZh6Uba.onlyOwner.call({from: accounts[2]});
		const 
zxohd3 = await Liquidity_v8eZh6Uba.userDeposits.call(addressH4DT6kT, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQKV7bS = "qzmOarMjhV1BklFyuUB3RrIT2IBatxWM4VMAx5TGdGKnzb69ZMJh5RElRRMLlE8gBkgh601C6HjAvDNcIa5AFYNppnw77r37JU"
		const addressuvh4it4 = accounts[2]
		const addressdzydXhQ = accounts[2]
		const uintVpNjhnW = BigInt("1179")
		const uintSEesTPi = BigInt("212")
		const Liquidity_v8KCQ6VpE = await Liquidity_v8.new(stringQKV7bS, addressuvh4it4, addressdzydXhQ, uintVpNjhnW, uintSEesTPi, {from: accounts[2]});
		const uintkyNdU9L = BigInt("1170")
		const uintQMiEkJy = BigInt("546")
		const addressgu2ilRB = accounts[2]
		const uint256bsZL53D = await Liquidity_v8KCQ6VpE.changeLockDuration.call(uintkyNdU9L, {from: accounts[2]});
		const uint64U34zN5A = await Liquidity_v8KCQ6VpE.setRate.call(uintQMiEkJy, {from: accounts[2]});
		const 
NalSUOV = await Liquidity_v8KCQ6VpE.userDeposits.call(addressgu2ilRB, {from: "0x0000000000000000000000000000000000000001"});
		const boolC29l6PD = await Liquidity_v8KCQ6VpE.isOwner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQKV7bS = "qzmOarMjhV1BklFyuUB3RrIT2IBatxWM4VMAx5TGdGKnzb69ZMJh5RElRRMLlE8gBkgh601C6HjAvDNcIa5AFYNppnw77r37JU"
		const addressdIFiDFZ = accounts[2]
		const addressnoqANlF = accounts[2]
		const uintoMLkFos = BigInt("1179")
		const uintjJozo4Y = BigInt("212")
		const Liquidity_v8KCQ6VpE = await Liquidity_v8.new(stringQKV7bS, addressdIFiDFZ, addressnoqANlF, uintoMLkFos, uintjJozo4Y, {from: accounts[2]});
		const addressgRzRflR = "0x0000000000000000000000000000000000000001"
		const uintkf336b = BigInt("1178")
		const uint6bWT7S = BigInt("1915")
		const addressPKLI5Vj = accounts[5]
		const addressnJV94b = accounts[2]
		const addresszyFpdNa = await Liquidity_v8KCQ6VpE.transferOwnership.call(addressgRzRflR, {from: accounts[2]});
		const uint256bsZL53D = await Liquidity_v8KCQ6VpE.changeLockDuration.call(uintkf336b, {from: accounts[2]});
		const uint64HJ9GMKs = await Liquidity_v8KCQ6VpE.setRate.call(uint6bWT7S, {from: accounts[2]});
		const uint256vXcV7qr = await Liquidity_v8KCQ6VpE.calculate.call(addressPKLI5Vj, {from: "0x0000000000000000000000000000000000000001"});
		const 
NalSUOV = await Liquidity_v8KCQ6VpE.userDeposits.call(addressnJV94b, {from: "0x0000000000000000000000000000000000000001"});
	});
})