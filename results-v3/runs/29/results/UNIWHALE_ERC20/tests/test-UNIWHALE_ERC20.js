const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20gdQeTb1 = await UNIWHALE_ERC20.new({from: accounts[3]});
		const addressdNJWGmc = accounts[1]
		const addressZM3uvWB = accounts[5]
		const uintYOXbQXm = BigInt("1276")
		const uintUeWgcoP = BigInt("1858")
		const uintr7tU8px = BigInt("1353")
		const uintzGjrLp = BigInt("90")
		const boolrL4meBi = await UNIWHALE_ERC20gdQeTb1.tokenSale.call(addressdNJWGmc, {from: accounts[0]});
		const uint256CYcnhB = await UNIWHALE_ERC20gdQeTb1.viewAirdrop.call({from: accounts[3]});
		const boolCuquOQ = await UNIWHALE_ERC20gdQeTb1.getAirdrop.call(addressZM3uvWB, {from: accounts[3]});
		const uint256dz3xiGJ = await UNIWHALE_ERC20gdQeTb1.startAirdrop.call(uintzGjrLp, uintr7tU8px, uintUeWgcoP, uintYOXbQXm, {from: accounts[3]});

		await expect(UNIWHALE_ERC20gdQeTb1.tokenSale.call(addressdNJWGmc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20lsHPef = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintMLyn1xa = BigInt("1188")
		const uintKZSjCwd = BigInt("1566")
		const uintIYR5VhL = BigInt("1637")
		const uintpV2Vbut = BigInt("1435")
		const addressclygIQU = accounts[3]
		const uint256lKj0bmr = await UNIWHALE_ERC20lsHPef.viewAirdrop.call({from: accounts[3]});
		const uint256TauC26l = await UNIWHALE_ERC20lsHPef.startAirdrop.call(uintpV2Vbut, uintIYR5VhL, uintKZSjCwd, uintMLyn1xa, {from: accounts[5]});
		const boolNWaVuJA = await UNIWHALE_ERC20lsHPef.tokenSale.call(addressclygIQU, {from: accounts[0]});
		const uint256JKkh4Gn = await UNIWHALE_ERC20lsHPef.viewSale.call({from: accounts[5]});

		await expect(UNIWHALE_ERC20lsHPef.startAirdrop.call(uintpV2Vbut, uintIYR5VhL, uintKZSjCwd, uintMLyn1xa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20EcViHB3 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintGRDdZ3L = BigInt("1487")
		const uintQaCBAtq = BigInt("48")
		const uintj4pvCQ1 = BigInt("119")
		const uintXjt6jv = BigInt("552")
		const addressjx2SESe = accounts[4]
		const addressdlRXeP = accounts[1]
		const uintEJXaqJn = BigInt("2005")
		const uintpegcTKJ = BigInt("261")
		const uintnqNKw8D = BigInt("1649")
		const uintgShh2Tr = BigInt("1344")
		const uintyn7CE56 = BigInt("303")
		const uint256k9trkb = await UNIWHALE_ERC20EcViHB3.viewSale.call({from: accounts[0]});
		const uint256dvnFTJm = await UNIWHALE_ERC20EcViHB3.startAirdrop.call(uintXjt6jv, uintj4pvCQ1, uintQaCBAtq, uintGRDdZ3L, {from: "0x0000000000000000000000000000000000000001"});
		const boolNWv2Vpu = await UNIWHALE_ERC20EcViHB3.getAirdrop.call(addressjx2SESe, {from: accounts[3]});
		const boolX8qS23D = await UNIWHALE_ERC20EcViHB3.getAirdrop.call(addressdlRXeP, {from: accounts[1]});
		const uint256nQ42oy1 = await UNIWHALE_ERC20EcViHB3.startSale.call(uintyn7CE56, uintgShh2Tr, uintnqNKw8D, uintpegcTKJ, uintEJXaqJn, {from: accounts[2]});

		await expect(UNIWHALE_ERC20EcViHB3.startAirdrop.call(uintXjt6jv, uintj4pvCQ1, uintQaCBAtq, uintGRDdZ3L, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20EQP024J = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintdspbAvC = BigInt("638")
		const uintGW7jwd6 = BigInt("147")
		const uintiBMrMP = BigInt("472")
		const uinthacLxlY = BigInt("1556")
		const uintCkKH0Cu = BigInt("1")
		const uintDANXlSu = BigInt("1869")
		const uintcQMWbdW = BigInt("376")
		const uintrqJlaON = BigInt("1906")
		const addressO4IzBlu = accounts[2]
		const uint256hwj4jkv = await UNIWHALE_ERC20EQP024J.startAirdrop.call(uinthacLxlY, uintiBMrMP, uintGW7jwd6, uintdspbAvC, {from: accounts[3]});
		const uint256ahEQ7g1 = await UNIWHALE_ERC20EQP024J.startAirdrop.call(uintrqJlaON, uintcQMWbdW, uintDANXlSu, uintCkKH0Cu, {from: accounts[0]});
		const boolbGn8tJy = await UNIWHALE_ERC20EQP024J.tokenSale.call(addressO4IzBlu, {from: accounts[2]});

		await expect(UNIWHALE_ERC20EQP024J.startAirdrop.call(uintrqJlaON, uintcQMWbdW, uintDANXlSu, uintCkKH0Cu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20EQP024J = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintSkBHBDW = BigInt("1421")
		const uintEgvHDjU = BigInt("1193")
		const uintum6gU35 = BigInt("262")
		const uintpeoHNQ6 = BigInt("569")
		const uintR1CDYlv = BigInt("540")
		const uintTl5w3B1 = BigInt("1")
		const uintvG4PG4 = BigInt("1869")
		const uintfZTgFRc = BigInt("376")
		const uintfEynyVX = BigInt("1906")
		const uint2567eBQAY = await UNIWHALE_ERC20EQP024J.viewSale.call({from: accounts[3]});
		const uint256gaEvSa = await UNIWHALE_ERC20EQP024J.startSale.call(uintR1CDYlv, uintpeoHNQ6, uintum6gU35, uintEgvHDjU, uintSkBHBDW, {from: accounts[3]});
		const uint256ahEQ7g1 = await UNIWHALE_ERC20EQP024J.startAirdrop.call(uintfEynyVX, uintfZTgFRc, uintvG4PG4, uintTl5w3B1, {from: accounts[0]});

		await expect(UNIWHALE_ERC20EQP024J.startAirdrop.call(uintfEynyVX, uintfZTgFRc, uintvG4PG4, uintTl5w3B1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20EQP024J = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uint256AkOkzh0 = await UNIWHALE_ERC20EQP024J.viewAirdrop.call({from: accounts[2]});
		const uint256ImNQrj = await UNIWHALE_ERC20EQP024J.viewSale.call({from: accounts[3]});
		await UNIWHALE_ERC20EQP024J.clearETH.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20EQP024J.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20EQP024J = await UNIWHALE_ERC20.new({from: accounts[3]});
		const addressbq4j3Wp = accounts[3]
		const uint256AkOkzh0 = await UNIWHALE_ERC20EQP024J.viewAirdrop.call({from: accounts[2]});
		const booljT8jfE2 = await UNIWHALE_ERC20EQP024J.getAirdrop.call(addressbq4j3Wp, {from: accounts[1]});

		await expect(UNIWHALE_ERC20EQP024J.getAirdrop.call(addressbq4j3Wp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20KDnlhu1 = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYxr8rFZ = BigInt("720")
		const uintcsNyc8J = BigInt("692")
		const uintO5oukLO = BigInt("282")
		const uintC9eXt54 = BigInt("1267")
		const uintv3roFe5 = BigInt("1739")
		const addressmdG4xeo = accounts[3]
		const uintiTKhLeV = BigInt("1631")
		const uintfCWAlaH = BigInt("361")
		const uintIQHc1M = BigInt("485")
		const uintuzJUs9m = BigInt("296")
		const uint256UnAsFgh = await UNIWHALE_ERC20KDnlhu1.startSale.call(uintv3roFe5, uintC9eXt54, uintO5oukLO, uintcsNyc8J, uintYxr8rFZ, {from: accounts[0]});
		const booljHqC9Gm = await UNIWHALE_ERC20KDnlhu1.getAirdrop.call(addressmdG4xeo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256IArGmDY = await UNIWHALE_ERC20KDnlhu1.startAirdrop.call(uintuzJUs9m, uintIQHc1M, uintfCWAlaH, uintiTKhLeV, {from: accounts[2]});
	});
})