const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringNKCvBmX = "1X1H5N5RSoEWHJ5N9eelf0Y1SxLN"
		const addressMx02iTx = accounts[3]
		const addressCE0QJui = accounts[0]
		const uintaIMlUa = BigInt("250")
		const uintPyIPWQN = BigInt("1623")
		const Liquidity_v8Fi7emyv = await Liquidity_v8.new(stringNKCvBmX, addressMx02iTx, addressCE0QJui, uintaIMlUa, uintPyIPWQN, {from: accounts[2]});
		const addresseMtpQYk = accounts[2]
		const uintsOv24lH = BigInt("1161")
		await Liquidity_v8Fi7emyv.onlyOwner.call({from: accounts[2]});
		const 
lR1VAcT = await Liquidity_v8Fi7emyv.userDeposits.call(addresseMtpQYk, {from: accounts[2]});
		const boolM04kjew = await Liquidity_v8Fi7emyv.withdraw.call({from: accounts[3]});
		const boolRQ8treD = await Liquidity_v8Fi7emyv.emergencyWithdraw.call({from: accounts[4]});
		const uint256ssjSXT0 = await Liquidity_v8Fi7emyv.changeLockDuration.call(uintsOv24lH, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringFDB20f0 = "rjRAanPpp8OdEBt4e6LeBectmiqfTvWWVc"
		const addressXWKEuiY = accounts[5]
		const addresszTNf2ao = accounts[5]
		const uintAgUe9k = BigInt("1991")
		const uintbcjBxz3 = BigInt("1859")
		const Liquidity_v8J3hE8ux = await Liquidity_v8.new(stringFDB20f0, addressXWKEuiY, addresszTNf2ao, uintAgUe9k, uintbcjBxz3, {from: "0x0000000000000000000000000000000000000001"});
		const uintvD3Idcf = BigInt("386")
		const uintNKAtm8 = BigInt("1590")
		const uint3CbMUY = BigInt("1283")
		const uintSbdqUH7 = BigInt("301")
		const uint256vtqRW1 = await Liquidity_v8J3hE8ux.changeLockDuration.call(uintvD3Idcf, {from: accounts[0]});
		const uint256O0FHwZm = await Liquidity_v8J3hE8ux.changeLockDuration.call(uintNKAtm8, {from: accounts[1]});
		const uint256it0HtA = await Liquidity_v8J3hE8ux.changeLockDuration.call(uint3CbMUY, {from: accounts[5]});
		const boolmkyNS9B = await Liquidity_v8J3hE8ux.addReward.call(uintSbdqUH7, {from: accounts[1]});
		const addressNDyYtKj = await Liquidity_v8J3hE8ux.owner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringn45eaSZ = "C"
		const addressBmAXgLx = accounts[4]
		const addressskoN76U = accounts[0]
		const uintauedKB0 = BigInt("803")
		const uintenpPBMM = BigInt("336")
		const Liquidity_v8ToaFPXK = await Liquidity_v8.new(stringn45eaSZ, addressBmAXgLx, addressskoN76U, uintauedKB0, uintenpPBMM, {from: accounts[3]});
		const addressVbICuVN = accounts[2]
		const uintlSB28ju = BigInt("721")
		const addressR3AF2aC = accounts[4]
		const 
LNeete = await Liquidity_v8ToaFPXK.userDeposits.call(addressVbICuVN, {from: accounts[0]});
		const uint64ZUwenW8 = await Liquidity_v8ToaFPXK.setRate.call(uintlSB28ju, {from: "0x0000000000000000000000000000000000000001"});
		const boolfO3NaK = await Liquidity_v8ToaFPXK.withdraw.call({from: accounts[4]});
		const 
rbu80Ow = await Liquidity_v8ToaFPXK.userDeposits.call(addressR3AF2aC, {from: accounts[1]});
		const boolsaF9zHR = await Liquidity_v8ToaFPXK.withdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringrTLbFOf = "wNctcxklhKrYXjuQJUGbcNVkPbi2x6UI5MbKTykYEDabUG6Sl7dNODLXUEagQHARj9QdPJRg"
		const addressJbDhQOJ = accounts[3]
		const addressE76C2bZ = accounts[3]
		const uintFt0bW6J = BigInt("113")
		const uintsjK2cvx = BigInt("102")
		const Liquidity_v8MdZxhRp = await Liquidity_v8.new(stringrTLbFOf, addressJbDhQOJ, addressE76C2bZ, uintFt0bW6J, uintsjK2cvx, {from: accounts[1]});
		const addressVOtx251 = accounts[1]
		const addressAa6LWok = accounts[4]
		const uintaVNlvMn = BigInt("1174")
		const uint256Q6Ikv3G = await Liquidity_v8MdZxhRp.calculate.call(addressVOtx251, {from: accounts[4]});
		await Liquidity_v8MdZxhRp.onlyOwner.call({from: accounts[2]});
		const boolZgygLPk = await Liquidity_v8MdZxhRp.emergencyWithdraw.call({from: accounts[4]});
		const 
P9sWkpQ = await Liquidity_v8MdZxhRp.userDeposits.call(addressAa6LWok, {from: accounts[4]});
		const uint64OGRtnhN = await Liquidity_v8MdZxhRp.setRate.call(uintaVNlvMn, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringJW8NyX = "QR7qEboAUpKSGZ7Cy1RYsBdXyW7GBUBV6JWs4Tt5mCvh2WDCmAPiTRQCii"
		const addressYJdEAUw = accounts[0]
		const addressMDfqzJI = accounts[5]
		const uintjfoszW0 = BigInt("1387")
		const uint2OhTgO = BigInt("1128")
		const Liquidity_v8skZK9SK = await Liquidity_v8.new(stringJW8NyX, addressYJdEAUw, addressMDfqzJI, uintjfoszW0, uint2OhTgO, {from: accounts[1]});
		const uintH5rc3Lz = BigInt("833")
		const addresshBQWeTM = accounts[5]
		const boolp7mSnbO = await Liquidity_v8skZK9SK.stake.call(uintH5rc3Lz, {from: accounts[5]});
		const addressXCybBF4 = await Liquidity_v8skZK9SK.transferOwnership.call(addresshBQWeTM, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringAdc8YS = "motcQu5qgSl7oVwHYg9szystInmoWKijwDMcQF6wDKuF83p54j2PHAM3zsNu1dkI9OqjGTwGNgRzgk8cql5L"
		const addressyQLb1Qe = accounts[4]
		const addressk6eWqlo = accounts[2]
		const uintE7AKn3 = BigInt("211")
		const uintvySFIDh = BigInt("1379")
		const Liquidity_v8RHD8gfb = await Liquidity_v8.new(stringAdc8YS, addressyQLb1Qe, addressk6eWqlo, uintE7AKn3, uintvySFIDh, {from: accounts[3]});
		const uintNs2Sprv = BigInt("633")
		const boolcA0SVjw = await Liquidity_v8RHD8gfb.withdraw.call({from: accounts[3]});
		await Liquidity_v8RHD8gfb.onlyOwner.call({from: accounts[1]});
		const uint256DZO0ai7 = await Liquidity_v8RHD8gfb.changeLockDuration.call(uintNs2Sprv, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringjTH0Ud1 = "SbcYCNLf9R2NeyszxakPkLC7GL3SVIY0bSoC5Fe9LtBeh2laPQ"
		const addressvZTsvh = accounts[0]
		const addressbRjhduA = accounts[3]
		const uintSipi9Mi = BigInt("1822")
		const uintjxZC0kc = BigInt("1514")
		const Liquidity_v8APkMIMU = await Liquidity_v8.new(stringjTH0Ud1, addressvZTsvh, addressbRjhduA, uintSipi9Mi, uintjxZC0kc, {from: accounts[1]});
		const boolLerJRwJ = await Liquidity_v8APkMIMU.emergencyWithdraw.call({from: accounts[4]});
		await Liquidity_v8APkMIMU.onlyOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringAdc8YS = "motcQu5qgSl7oVwHYg9szystInmoWKijwDMcQF6wDKuF83p54j2PHAM3zsNu1dkI9OqjGTwGNgRzgk8cql5L"
		const addressrH3UxZ = accounts[4]
		const addressGyDVbDT = accounts[2]
		const uinthXMc07X = BigInt("211")
		const uintRmsfbb4 = BigInt("1379")
		const Liquidity_v8RHD8gfb = await Liquidity_v8.new(stringAdc8YS, addressrH3UxZ, addressGyDVbDT, uinthXMc07X, uintRmsfbb4, {from: accounts[3]});
		const uintZlzT9nS = BigInt("633")
		const uint256DZO0ai7 = await Liquidity_v8RHD8gfb.changeLockDuration.call(uintZlzT9nS, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringjTH0Ud1 = "SbcYCNLf9R2NeyszxakPkLC7GL3SVIY0bSoC5Fe9LtBeh2laPQ"
		const addresstyrhfnh = accounts[0]
		const addressmHHac0F = accounts[3]
		const uintvVQu91M = BigInt("1822")
		const uintQD1rKwY = BigInt("1514")
		const Liquidity_v8APkMIMU = await Liquidity_v8.new(stringjTH0Ud1, addresstyrhfnh, addressmHHac0F, uintvVQu91M, uintQD1rKwY, {from: accounts[1]});
		await Liquidity_v8APkMIMU.renounceOwnership.call({from: accounts[1]});
		const boolLerJRwJ = await Liquidity_v8APkMIMU.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringdTIVX3V = "c1LG7oHRGjycN2ZKG6PDFsT1lXr6"
		const addressBg1bLaO = accounts[1]
		const addressSeiGe2g = accounts[2]
		const uintgKZNDt = BigInt("49")
		const uintY0VUokP = BigInt("874")
		const Liquidity_v8znBKYlq = await Liquidity_v8.new(stringdTIVX3V, addressBg1bLaO, addressSeiGe2g, uintgKZNDt, uintY0VUokP, {from: accounts[3]});
		const uintM5Kok9O = BigInt("439")
		const addressl9edjiZ = accounts[0]
		const uintqbeG3PU = BigInt("1136")
		const addressDV0qC1c = accounts[4]
		const uintUgoaiZn = BigInt("424")
		const boolYKRzUjj = await Liquidity_v8znBKYlq.isOwner.call({from: accounts[2]});
		const uint64htPGd5d = await Liquidity_v8znBKYlq.setRate.call(uintM5Kok9O, {from: accounts[3]});
		const 
dyavML = await Liquidity_v8znBKYlq.userDeposits.call(addressl9edjiZ, {from: accounts[4]});
		const uint64rXXAcyE = await Liquidity_v8znBKYlq.setRate.call(uintqbeG3PU, {from: accounts[3]});
		const uint256EUx8EqW = await Liquidity_v8znBKYlq.calculate.call(addressDV0qC1c, {from: accounts[2]});
		const bool2AttnS = await Liquidity_v8znBKYlq.withdraw.call({from: accounts[0]});
		await Liquidity_v8znBKYlq.renounceOwnership.call({from: accounts[1]});
		const uint64XFQeMcj = await Liquidity_v8znBKYlq.setRate.call(uintUgoaiZn, {from: accounts[4]});
		const boolNEh36uB = await Liquidity_v8znBKYlq.emergencyWithdraw.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringdTIVX3V = "c1LG7oHRGjycN2ZKG6PDFsT1lXr6"
		const addressIg3ujl = accounts[1]
		const addresslXeYEbg = accounts[2]
		const uintC0JO9xa = BigInt("49")
		const uinttmpX5Oj = BigInt("874")
		const Liquidity_v8znBKYlq = await Liquidity_v8.new(stringdTIVX3V, addressIg3ujl, addresslXeYEbg, uintC0JO9xa, uinttmpX5Oj, {from: accounts[3]});
		const addressgt5gyVE = "0x0000000000000000000000000000000000000001"
		const addressZao4D9R = accounts[5]
		const uinteYySEyA = BigInt("356")
		const addressEc6VeJK = accounts[3]
		const addresspNGw4xU = accounts[1]
		const addressb5onUB = await Liquidity_v8znBKYlq.transferOwnership.call(addressgt5gyVE, {from: accounts[3]});
		const 
kj5N8C = await Liquidity_v8znBKYlq._hasAllowance.call(addressEc6VeJK, uinteYySEyA, addressZao4D9R, {from: accounts[2]});
		const 
dyavML = await Liquidity_v8znBKYlq.userDeposits.call(addresspNGw4xU, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringrTLbFOf = "wNctcxklhKrYXjuQJUGbcNVkPbi2x6UI5MbKTykYEDabUG6Sl7dNODLXUEagQHARj9QdPJRg"
		const addressPAV0ay4 = accounts[3]
		const addressbfg8Lbf = accounts[3]
		const uintGbPRERu = BigInt("113")
		const uintxjAAjAe = BigInt("102")
		const Liquidity_v8MdZxhRp = await Liquidity_v8.new(stringrTLbFOf, addressPAV0ay4, addressbfg8Lbf, uintGbPRERu, uintxjAAjAe, {from: accounts[1]});
		const addressNDbOamV = accounts[3]
		const uintvCK7z0d = BigInt("2044")
		const uint256Q6Ikv3G = await Liquidity_v8MdZxhRp.calculate.call(addressNDbOamV, {from: accounts[4]});
		const addressGBjddIn = await Liquidity_v8MdZxhRp.owner.call({from: accounts[2]});
		const boolSjbs3Em = await Liquidity_v8MdZxhRp.stake.call(uintvCK7z0d, {from: "0x0000000000000000000000000000000000000001"});
	});
})