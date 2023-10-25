const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20y3sJ5Pk = await UNIWHALE_ERC20.new({from: accounts[5]});
		const addressXm8HUjJ = accounts[0]
		const addressRFyDj3Q = accounts[4]
		const uint256Pu20HJt = await UNIWHALE_ERC20y3sJ5Pk.viewSale.call({from: accounts[3]});
		const uint256hnEEkX2 = await UNIWHALE_ERC20y3sJ5Pk.viewAirdrop.call({from: accounts[3]});
		const boolp0w8Vqa = await UNIWHALE_ERC20y3sJ5Pk.tokenSale.call(addressXm8HUjJ, {from: accounts[0]});
		const bool727Ccb = await UNIWHALE_ERC20y3sJ5Pk.tokenSale.call(addressRFyDj3Q, {from: accounts[2]});

		await expect(UNIWHALE_ERC20y3sJ5Pk.tokenSale.call(addressXm8HUjJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20gGBWAho = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uintY8TOlkx = BigInt("1020")
		const uintLO1YAmR = BigInt("964")
		const uintXHiI4DC = BigInt("816")
		const uintUDUOk9z = BigInt("159")
		const uintsvJilPy = BigInt("1927")
		const uintsCAJnpa = BigInt("284")
		const uintsa4fu78 = BigInt("1220")
		const uintAzsKPem = BigInt("1926")
		const uintNqrJW7l = BigInt("416")
		const uintIHjQXN = BigInt("2043")
		const uintneyg8f = BigInt("689")
		const uintsnRpCCF = BigInt("1631")
		const uintFzJ0310 = BigInt("354")
		const uint256U6YmZeR = await UNIWHALE_ERC20gGBWAho.startAirdrop.call(uintUDUOk9z, uintXHiI4DC, uintLO1YAmR, uintY8TOlkx, {from: accounts[5]});
		const uint256yGrkQcR = await UNIWHALE_ERC20gGBWAho.startSale.call(uintNqrJW7l, uintAzsKPem, uintsa4fu78, uintsCAJnpa, uintsvJilPy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UPa6ppe = await UNIWHALE_ERC20gGBWAho.viewAirdrop.call({from: accounts[4]});
		await UNIWHALE_ERC20gGBWAho.clearETH.call({from: accounts[1]});
		const uint256oztkzBb = await UNIWHALE_ERC20gGBWAho.viewAirdrop.call({from: accounts[3]});
		const uint256f46qLFy = await UNIWHALE_ERC20gGBWAho.startAirdrop.call(uintFzJ0310, uintsnRpCCF, uintneyg8f, uintIHjQXN, {from: accounts[4]});

		await expect(UNIWHALE_ERC20gGBWAho.startSale.call(uintNqrJW7l, uintAzsKPem, uintsa4fu78, uintsCAJnpa, uintsvJilPy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20y3sJ5Pk = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uintMcgMAMk = BigInt("1646")
		const uintLIUZKxO = BigInt("846")
		const uintb5LbvM = BigInt("1699")
		const uintHzAJIjE = BigInt("517")
		const uintIeI5F1c = BigInt("1129")
		const addressxBBCi4r = accounts[0]
		const addresszQlboA0 = accounts[4]
		const uintWPy6Izq = BigInt("1445")
		const uintI0llvGb = BigInt("721")
		const uintuumTfsC = BigInt("1362")
		const uintT3KsSs = BigInt("340")
		const uintgwqa1sh = BigInt("252")
		const uint256slfTlEu = await UNIWHALE_ERC20y3sJ5Pk.startSale.call(uintIeI5F1c, uintHzAJIjE, uintb5LbvM, uintLIUZKxO, uintMcgMAMk, {from: accounts[5]});
		const uint256d8P8PGv = await UNIWHALE_ERC20y3sJ5Pk.viewSale.call({from: accounts[1]});
		const uint256Pu20HJt = await UNIWHALE_ERC20y3sJ5Pk.viewSale.call({from: accounts[3]});
		const uint256hnEEkX2 = await UNIWHALE_ERC20y3sJ5Pk.viewAirdrop.call({from: accounts[3]});
		const boolp0w8Vqa = await UNIWHALE_ERC20y3sJ5Pk.tokenSale.call(addressxBBCi4r, {from: accounts[0]});
		const bool727Ccb = await UNIWHALE_ERC20y3sJ5Pk.tokenSale.call(addresszQlboA0, {from: accounts[2]});
		const uint256O4FNSVE = await UNIWHALE_ERC20y3sJ5Pk.startSale.call(uintgwqa1sh, uintT3KsSs, uintuumTfsC, uintI0llvGb, uintWPy6Izq, {from: accounts[0]});

		await expect(UNIWHALE_ERC20y3sJ5Pk.tokenSale.call(addressxBBCi4r, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20F7U34CE = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressEEWNb8C = accounts[0]
		const address4CoHjo = "0x0000000000000000000000000000000000000001"
		const uintGJoFWh = BigInt("1873")
		const uintQcC7Nqw = BigInt("1500")
		const uintrUabind = BigInt("889")
		const uintBcA9ESx = BigInt("1556")
		const boolVtUtQ6k = await UNIWHALE_ERC20F7U34CE.getAirdrop.call(addressEEWNb8C, {from: accounts[1]});
		const boolzEQhl9B = await UNIWHALE_ERC20F7U34CE.tokenSale.call(address4CoHjo, {from: accounts[3]});
		const uint256bji2nE9 = await UNIWHALE_ERC20F7U34CE.startAirdrop.call(uintBcA9ESx, uintrUabind, uintQcC7Nqw, uintGJoFWh, {from: accounts[3]});

		await expect(UNIWHALE_ERC20F7U34CE.getAirdrop.call(addressEEWNb8C, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20B5R4zDb = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintI6j71QT = BigInt("1435")
		const uintOowtGQ = BigInt("316")
		const uintlH751Op = BigInt("598")
		const uintxxFHpnd = BigInt("1796")
		const uintRA7IrgG = BigInt("1594")
		const uintXHGIhxH = BigInt("1649")
		const uintVjDj4iO = BigInt("1347")
		const uintNLsYa7R = BigInt("1047")
		await UNIWHALE_ERC20B5R4zDb.clearETH.call({from: accounts[2]});
		const uint256EONMhAj = await UNIWHALE_ERC20B5R4zDb.startAirdrop.call(uintxxFHpnd, uintlH751Op, uintOowtGQ, uintI6j71QT, {from: accounts[3]});
		const uint256QtI00J0 = await UNIWHALE_ERC20B5R4zDb.startAirdrop.call(uintNLsYa7R, uintVjDj4iO, uintXHGIhxH, uintRA7IrgG, {from: accounts[4]});
		const uint256tkEwBI9 = await UNIWHALE_ERC20B5R4zDb.viewAirdrop.call({from: accounts[3]});
		const uint256K5S0V3y = await UNIWHALE_ERC20B5R4zDb.viewSale.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20B5R4zDb.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20qtwWZww = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqfOMok3 = BigInt("1666")
		const uintL8JgJw = BigInt("1543")
		const uintQlBUlDg = BigInt("43")
		const uinttQsLiKp = BigInt("1140")
		const addresskrNcwP = accounts[4]
		const addressUNhEUwx = accounts[4]
		const uint256Y8zhJp = await UNIWHALE_ERC20qtwWZww.viewAirdrop.call({from: accounts[3]});
		const uint256WLiehdl = await UNIWHALE_ERC20qtwWZww.startAirdrop.call(uinttQsLiKp, uintQlBUlDg, uintL8JgJw, uintqfOMok3, {from: accounts[1]});
		const boolIcKLRFY = await UNIWHALE_ERC20qtwWZww.getAirdrop.call(addresskrNcwP, {from: accounts[4]});
		const boolUXkZb5B = await UNIWHALE_ERC20qtwWZww.tokenSale.call(addressUNhEUwx, {from: accounts[2]});
	});
})