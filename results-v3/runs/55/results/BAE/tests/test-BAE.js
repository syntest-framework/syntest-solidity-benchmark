const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressaqDiK5b = accounts[0]
		const BAEYLe5R2R = await BAE.new(addressaqDiK5b, {from: accounts[2]});
		const uintj2iAg57 = BigInt("1120")
		const uintfnXeeCP = BigInt("587")
		const uintyxsdYtL = BigInt("106")
		const uinteHD2oqV = BigInt("464")
		const uintdSKQaVr = BigInt("1018")
		const uintYuQD5fv = BigInt("990")
		const uintjpowwn = BigInt("1627")
		const uintEM3Oaxw = BigInt("36")
		const uint256bexOK4x = await BAEYLe5R2R.createAuction.call(uinteHD2oqV, uintyxsdYtL, uintfnXeeCP, uintj2iAg57, {from: accounts[0]});
		const uint256lIarcyW = await BAEYLe5R2R.bid.call(uintdSKQaVr, {from: accounts[0]});
		const uint256SEe3oqv = await BAEYLe5R2R.setAuctionFee.call(uintYuQD5fv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LgWvzUP = await BAEYLe5R2R.changePrintFee.call(uintjpowwn, {from: accounts[0]});
		const uint256BMM4i46 = await BAEYLe5R2R.concludeAuction.call(uintEM3Oaxw, {from: accounts[1]});

		await expect(BAEYLe5R2R.createAuction.call(uinteHD2oqV, uintyxsdYtL, uintfnXeeCP, uintj2iAg57, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressKkXupAn = accounts[0]
		const BAEBWe6fFb = await BAE.new(addressKkXupAn, {from: accounts[0]});
		const uinthxI7q9z = BigInt("586")
		const uintRIloV9S = BigInt("1219")
		const uintRq0yKC = BigInt("1893")
		const uintDUzxig = BigInt("631")
		const uintKwLhO9A = BigInt("1174")
		const uintQlZKMbZ = BigInt("1893")
		const uintVW9wFQ = BigInt("1660")
		const uintWpnwGOO = BigInt("62")
		const uint256nR7udrn = await BAEBWe6fFb.changePrintFee.call(uinthxI7q9z, {from: accounts[4]});
		const uint256AUS9gwu = await BAEBWe6fFb.buy.call(uintRIloV9S, {from: accounts[2]});
		const uint256Z7qZ7D = await BAEBWe6fFb.setAuctionFee.call(uintRq0yKC, {from: accounts[1]});
		const uint256qvRzzEt = await BAEBWe6fFb.resetAuction.call(uintQlZKMbZ, uintKwLhO9A, uintDUzxig, {from: accounts[0]});
		const uint256JjlNvSu = await BAEBWe6fFb.buy.call(uintVW9wFQ, {from: accounts[3]});
		const uint256kCtJlmy = await BAEBWe6fFb.buy.call(uintWpnwGOO, {from: accounts[2]});

		await expect(BAEBWe6fFb.changePrintFee.call(uinthxI7q9z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressNuJzZdH = accounts[0]
		const BAEKrpc3IF = await BAE.new(addressNuJzZdH, {from: accounts[1]});
		const uintOI3W8wI = BigInt("1348")
		const uintKgARdQJ = BigInt("1462")
		const uintNStNwBU = BigInt("1791")
		const uintf87Ahrc = BigInt("1257")
		const uintVe5elcc = BigInt("201")
		const uint256IQnFwcq = await BAEKrpc3IF.buy.call(uintOI3W8wI, {from: accounts[3]});
		const uint256vdUUh1A = await BAEKrpc3IF.bid.call(uintKgARdQJ, {from: accounts[4]});
		const uint256DIH8YVn = await BAEKrpc3IF.buy.call(uintNStNwBU, {from: accounts[2]});
		const uint256wM8mHEh = await BAEKrpc3IF.setAuctionFee.call(uintf87Ahrc, {from: accounts[3]});
		const uint2560DsoXh = await BAEKrpc3IF.buy.call(uintVe5elcc, {from: accounts[4]});

		await expect(BAEKrpc3IF.buy.call(uintOI3W8wI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressBere5g0 = accounts[1]
		const BAEZo6TmP3 = await BAE.new(addressBere5g0, {from: accounts[0]});
		const uints3aX6BR = BigInt("78")
		const uintDpld0Wj = BigInt("746")
		const uintfb90B3A = BigInt("661")
		const uintKsadQq = BigInt("732")
		const uint256Bti4VRG = await BAEZo6TmP3.bid.call(uints3aX6BR, {from: accounts[2]});
		const uint256FTIBg5R = await BAEZo6TmP3.resetAuction.call(uintKsadQq, uintfb90B3A, uintDpld0Wj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEZo6TmP3.bid.call(uints3aX6BR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressuwxpGe = accounts[0]
		const BAEZwl6Av9 = await BAE.new(addressuwxpGe, {from: accounts[1]});
		const uintmF1bkzU = BigInt("1780")
		const uintpEsSnQZ = BigInt("242")
		const uintuS9ynGC = BigInt("1126")
		const uintKTc6vVp = BigInt("96")
		const uinthOoXMiP = BigInt("1332")
		const uintsq5AqI = BigInt("1346")
		const uintLYvROKp = BigInt("1498")
		const uint256OIav0v7 = await BAEZwl6Av9.resetAuction.call(uintuS9ynGC, uintpEsSnQZ, uintmF1bkzU, {from: accounts[1]});
		const uint256F30JJLG = await BAEZwl6Av9.bid.call(uintKTc6vVp, {from: accounts[2]});
		const uint256hIQsuz1 = await BAEZwl6Av9.buy.call(uinthOoXMiP, {from: accounts[1]});
		const uint256ts21mLw = await BAEZwl6Av9.concludeAuction.call(uintsq5AqI, {from: accounts[2]});
		const uint256YzawnSD = await BAEZwl6Av9.concludeAuction.call(uintLYvROKp, {from: accounts[2]});

		await expect(BAEZwl6Av9.resetAuction.call(uintuS9ynGC, uintpEsSnQZ, uintmF1bkzU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresslqv0GKi = accounts[1]
		const BAEZo6TmP3 = await BAE.new(addresslqv0GKi, {from: accounts[0]});
		const uintntTgM2 = BigInt("210")
		const uintsIZLvDc = BigInt("78")
		const uinteVAnux = BigInt("746")
		const uintzOx3OM = BigInt("661")
		const uintoXbbmo = BigInt("732")
		const uint256TWLxfgF = await BAEZo6TmP3.concludeAuction.call(uintntTgM2, {from: accounts[0]});
		const uint256Bti4VRG = await BAEZo6TmP3.bid.call(uintsIZLvDc, {from: accounts[2]});
		const uint256FTIBg5R = await BAEZo6TmP3.resetAuction.call(uintoXbbmo, uintzOx3OM, uinteVAnux, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEZo6TmP3.concludeAuction.call(uintntTgM2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressouN60UI = "0x0000000000000000000000000000000000000001"
		const BAEGv7KEU1 = await BAE.new(addressouN60UI, {from: "0x0000000000000000000000000000000000000001"});
		const uintc67S6xu = BigInt("419")
		const uintT5xIq8n = BigInt("1431")
		const uint17Z82i = BigInt("768")
		const uintT1tTUn = BigInt("172")
		const uinth4wJc99 = BigInt("1501")
		const uintWviKGzg = BigInt("269")
		const uinttReILWW = BigInt("1176")
		const uintX9y7ZnX = BigInt("773")
		const uintjlDL7Fi = BigInt("1028")
		const uintRsOz9jj = BigInt("812")
		const uintJuuPbhi = BigInt("1505")
		const uintb9hpo24 = BigInt("364")
		const uint9xzLrD = BigInt("154")
		const uintwD9jOW = BigInt("1856")
		const uint256mQdZzL7 = await BAEGv7KEU1.buy.call(uintc67S6xu, {from: accounts[4]});
		const uint256MXTVwb = await BAEGv7KEU1.changePrintFee.call(uintT5xIq8n, {from: accounts[4]});
		const uint256FJ5vP8 = await BAEGv7KEU1.changePrintFee.call(uint17Z82i, {from: accounts[2]});
		const uint256WJryWs9 = await BAEGv7KEU1.createAuction.call(uinttReILWW, uintWviKGzg, uinth4wJc99, uintT1tTUn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VIHPh6Y = await BAEGv7KEU1.createAuction.call(uintJuuPbhi, uintRsOz9jj, uintjlDL7Fi, uintX9y7ZnX, {from: accounts[2]});
		const uint256frBIF3c = await BAEGv7KEU1.resetAuction.call(uintwD9jOW, uint9xzLrD, uintb9hpo24, {from: accounts[0]});
	});
})