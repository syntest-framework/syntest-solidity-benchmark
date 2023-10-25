const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletXZLPa47 = await Wallet.new({from: accounts[0]});
		const uintMkBJ5i6 = BigInt("879")
		const uinthNnipL2 = BigInt("280")
//		const uintiqlltUb = await WalletXZLPa47.withdraw.call(uintMkBJ5i6, {from: accounts[0]});
//		const uintfTsOXui = await WalletXZLPa47.deposit.call(uinthNnipL2, {from: accounts[0]});

		await expect(WalletXZLPa47.withdraw.call(uintMkBJ5i6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletZA7HSTp = await Wallet.new({from: accounts[0]});
		const uintaiv4byz = BigInt("1042")
		const uintXEZrQP3 = BigInt("41")
		const uintyz99XYO = BigInt("127")
//		const uintQderUc = await WalletZA7HSTp.deposit.call(uintaiv4byz, {from: accounts[4]});
//		const uintkChalKF = await WalletZA7HSTp.deposit.call(uintXEZrQP3, {from: accounts[5]});
//		const uinthqUAeIC = await WalletZA7HSTp.deposit.call(uintyz99XYO, {from: accounts[1]});

		await expect(WalletZA7HSTp.deposit.call(uintaiv4byz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletGx2ssoK = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdfED3Ec = BigInt("209")
		const uintk5jKqLD = BigInt("1342")
		const uintCiCxucG = BigInt("297")
		const uintqG9yyke = await WalletGx2ssoK.deposit.call(uintdfED3Ec, {from: accounts[2]});
		const uintcNmMY2K = await WalletGx2ssoK.withdraw.call(uintk5jKqLD, {from: accounts[5]});
		const uintaknwfe0 = await WalletGx2ssoK.withdraw.call(uintCiCxucG, {from: accounts[1]});
	});

	it('test for Wallet', async () => {
		const WalletnFAK3pM = await Wallet.new({from: accounts[4]});
		const uintMHEQWcL = BigInt("0")
		const uintg5PnI9 = BigInt("1062")
		const uintL6TTef2 = BigInt("162")
		const uintGRbjyaM = BigInt("1260")
		const uintnhwWAFx = BigInt("137")
		const uintaZeqtFp = BigInt("1376")
		const uintXUX7QI3 = await WalletnFAK3pM.withdraw.call(uintMHEQWcL, {from: accounts[4]});
//		const uintKQxprJH = await WalletnFAK3pM.deposit.call(uintg5PnI9, {from: accounts[0]});
//		const uintEkj9sLG = await WalletnFAK3pM.withdraw.call(uintL6TTef2, {from: accounts[0]});
//		const uintNYj0G54 = await WalletnFAK3pM.withdraw.call(uintGRbjyaM, {from: accounts[2]});
//		const uintm3MGbu6 = await WalletnFAK3pM.deposit.call(uintnhwWAFx, {from: accounts[0]});
//		const uintGIpuIvK = await WalletnFAK3pM.deposit.call(uintaZeqtFp, {from: accounts[4]});

		await expect(WalletnFAK3pM.deposit.call(uintg5PnI9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})