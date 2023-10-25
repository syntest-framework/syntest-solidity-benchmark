const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20zWVLyGI = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uint256nSMz6PP = await UNIWHALE_ERC20zWVLyGI.viewSale.call({from: accounts[0]});
		await UNIWHALE_ERC20zWVLyGI.clearETH.call({from: accounts[2]});
		const uint256HpBDX5p = await UNIWHALE_ERC20zWVLyGI.viewSale.call({from: accounts[1]});
		const uint256q98GlNy = await UNIWHALE_ERC20zWVLyGI.viewSale.call({from: accounts[2]});
		const uint2566Vo0dy = await UNIWHALE_ERC20zWVLyGI.viewSale.call({from: accounts[1]});

		await expect(UNIWHALE_ERC20zWVLyGI.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20fGyoAqx = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintQn61f9h = BigInt("677")
		const uintxysIH8B = BigInt("643")
		const uintfDLboAE = BigInt("397")
		const uintX11tX4 = BigInt("386")
		const addressvJ8Akdz = accounts[0]
		const uint256rEARRqS = await UNIWHALE_ERC20fGyoAqx.viewAirdrop.call({from: accounts[0]});
		const uint256CGfPzT = await UNIWHALE_ERC20fGyoAqx.viewSale.call({from: accounts[3]});
		const uint256nOOA6wn = await UNIWHALE_ERC20fGyoAqx.startAirdrop.call(uintX11tX4, uintfDLboAE, uintxysIH8B, uintQn61f9h, {from: accounts[5]});
		const boolnIRQ9ds = await UNIWHALE_ERC20fGyoAqx.tokenSale.call(addressvJ8Akdz, {from: accounts[3]});

		await expect(UNIWHALE_ERC20fGyoAqx.startAirdrop.call(uintX11tX4, uintfDLboAE, uintxysIH8B, uintQn61f9h, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20LYrfulH = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uinty6PwlD = BigInt("1184")
		const uintd1Gmqeh = BigInt("1495")
		const uintGD22Czd = BigInt("170")
		const uintyv1dUoF = BigInt("1865")
		const uintNJhchut = BigInt("1616")
		const addressS24GUtV = accounts[4]
		const addressmvdEhnS = accounts[0]
		const uint256Dr0eWQr = await UNIWHALE_ERC20LYrfulH.viewAirdrop.call({from: accounts[4]});
		const uint256wrwF0w = await UNIWHALE_ERC20LYrfulH.startSale.call(uintNJhchut, uintyv1dUoF, uintGD22Czd, uintd1Gmqeh, uinty6PwlD, {from: accounts[3]});
		const boolOd2j3ju = await UNIWHALE_ERC20LYrfulH.tokenSale.call(addressS24GUtV, {from: accounts[2]});
		const uint256aZSEvvV = await UNIWHALE_ERC20LYrfulH.viewSale.call({from: accounts[3]});
		const booluvGaHxs = await UNIWHALE_ERC20LYrfulH.tokenSale.call(addressmvdEhnS, {from: accounts[4]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20QqYyak3 = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressowBhzcc = accounts[0]
		const uintPffnoPB = BigInt("907")
		const uintoewBs8H = BigInt("761")
		const uintRWBnUMN = BigInt("166")
		const uintQhSpKac = BigInt("841")
		const uintqBZ467 = BigInt("454")
		const boolDEyaGKZ = await UNIWHALE_ERC20QqYyak3.tokenSale.call(addressowBhzcc, {from: accounts[1]});
		const uint256qszx0MT = await UNIWHALE_ERC20QqYyak3.startSale.call(uintqBZ467, uintQhSpKac, uintRWBnUMN, uintoewBs8H, uintPffnoPB, {from: accounts[0]});

		await expect(UNIWHALE_ERC20QqYyak3.tokenSale.call(addressowBhzcc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20Xi9WpYQ = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressGQjKm7D = accounts[1]
		const addressy6wBYfJ = accounts[2]
		const boollVQSINo = await UNIWHALE_ERC20Xi9WpYQ.getAirdrop.call(addressGQjKm7D, {from: accounts[1]});
		const boolpYqpf6 = await UNIWHALE_ERC20Xi9WpYQ.tokenSale.call(addressy6wBYfJ, {from: accounts[0]});

		await expect(UNIWHALE_ERC20Xi9WpYQ.getAirdrop.call(addressGQjKm7D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20QqYyak3 = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintSLkiiU = BigInt("907")
		const uintjfrw7Rj = BigInt("761")
		const uintRTV4due = BigInt("166")
		const uintp0AmHd = BigInt("842")
		const uinttt8qLTt = BigInt("454")
		const uint256qszx0MT = await UNIWHALE_ERC20QqYyak3.startSale.call(uinttt8qLTt, uintp0AmHd, uintRTV4due, uintjfrw7Rj, uintSLkiiU, {from: accounts[0]});
		await UNIWHALE_ERC20QqYyak3.clearETH.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20QqYyak3.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20nlkEebH = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintuXw82GW = BigInt("977")
		const uintDkZGmiO = BigInt("340")
		const uintNZPEipP = BigInt("1606")
		const uintWrR2RC = BigInt("1179")
		const uintXLoOCP = BigInt("1993")
		const uintw6vGbw3 = BigInt("285")
		const uinttZRkuOW = BigInt("1745")
		const uintLqdEsvS = BigInt("617")
		const uintb4Sz3nS = BigInt("1654")
		const uintD8ry8Kk = BigInt("1627")
		const uintmtSjfBq = BigInt("739")
		const uintbAhHUkA = BigInt("1540")
		const uint256jgCJc0z = await UNIWHALE_ERC20nlkEebH.startAirdrop.call(uintWrR2RC, uintNZPEipP, uintDkZGmiO, uintuXw82GW, {from: accounts[3]});
		const uint256MMpk7Zo = await UNIWHALE_ERC20nlkEebH.startAirdrop.call(uintLqdEsvS, uinttZRkuOW, uintw6vGbw3, uintXLoOCP, {from: accounts[3]});
		const uint256OPQH7y = await UNIWHALE_ERC20nlkEebH.viewAirdrop.call({from: accounts[0]});
		const uint256hJLDIJN = await UNIWHALE_ERC20nlkEebH.startAirdrop.call(uintbAhHUkA, uintmtSjfBq, uintD8ry8Kk, uintb4Sz3nS, {from: accounts[5]});
		await UNIWHALE_ERC20nlkEebH.clearETH.call({from: accounts[5]});

		await expect(UNIWHALE_ERC20nlkEebH.startAirdrop.call(uintbAhHUkA, uintmtSjfBq, uintD8ry8Kk, uintb4Sz3nS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})